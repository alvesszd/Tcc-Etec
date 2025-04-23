document.getElementById('editProfileForm').addEventListener('submit', (e) => {
  e.preventDefault(); // Evita o envio padrão do formulário

  // Exibe a tela de loading
  document.getElementById('loadingScreen').style.display = 'flex';

  const fullName = document.getElementById('fullName').value;
  const testimony = document.getElementById('testimony').value;
  const missionField = document.getElementById('missionField').value;
  const instagram = document.getElementById('instagram').value;
  const pixKey = document.getElementById('pixKey').value;

  const profilePictureFile = document.getElementById('profilePicture').files[0];
  const missionPhotoFile = document.getElementById('missionPhoto').files[0];

  const user = auth.currentUser;

  if (user) {
    const userRef = firestore.collection('users').doc(user.uid);

    userRef.get().then((doc) => {
      if (!doc.exists) {
        alert('Perfil não encontrado. Verifique o login.');
        document.getElementById('loadingScreen').style.display = 'none';
        return;
      }

      
      userRef.set({
        fullName: fullName,
        testimony: testimony,
        missionField: missionField,
        instagram: instagram,
        pixKey: pixKey
      }, { merge: true }).then(() => {
        if (profilePictureFile || missionPhotoFile) {
          const uploadPromises = [];

          if (profilePictureFile) {
            const profilePictureRef = storage.ref().child(`profile_pictures/${user.uid}`);
            uploadPromises.push(profilePictureRef.put(profilePictureFile).then(() => {
              return profilePictureRef.getDownloadURL().then((url) => {
                return userRef.update({ profilePictureURL: url });
              });
            }));
          }

          if (missionPhotoFile) {
            const missionPhotoRef = storage.ref().child(`mission_photos/${user.uid}`);
            uploadPromises.push(missionPhotoRef.put(missionPhotoFile).then(() => {
              return missionPhotoRef.getDownloadURL().then((url) => {
                return userRef.update({ missionPhotoURL: url });
              });
            }));
          }

          Promise.all(uploadPromises).then(() => {
            alert('Dados e fotos atualizadas com sucesso!');
            document.getElementById('loadingScreen').style.display = 'none';
            window.location.href = "missionarios.html"; 
          }).catch((error) => {
            alert('Erro ao atualizar fotos: ' + error.message);
            document.getElementById('loadingScreen').style.display = 'none';
          });
        } else {
          alert('Dados atualizados com sucesso!');
          document.getElementById('loadingScreen').style.display = 'none'; 
          window.location.href = "missionarios.html"; 
        }
      }).catch((error) => {
        alert('Erro ao atualizar dados: ' + error.message);
        document.getElementById('loadingScreen').style.display = 'none';
      });
    }).catch((error) => {
      alert('Erro ao verificar perfil: ' + error.message);
      document.getElementById('loadingScreen').style.display = 'none'; 
    });
  } else {
    alert('Usuário não autenticado!');
    document.getElementById('loadingScreen').style.display = 'none';
  }
});
