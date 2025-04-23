// Obter o ID do usuário a partir da URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('user');

function loadMissionaryProfile(userId) {
  const userRef = firestore.collection('users').doc(userId);

  userRef.get().then((doc) => {
    if (doc.exists) {
      const userData = doc.data();

      document.getElementById('missionaryName').innerText = userData.fullName || 'Nome não disponível';
      document.getElementById('missionField').innerText = userData.missionField || 'Campo missionário não disponível';
      document.getElementById('testimony').innerText = userData.testimony || 'Testemunho não disponível';
      document.getElementById('pixKey').innerText =  userData.pixKey || 'Chave Pix não encontrada';


      const instagramLink = document.getElementById('instagramLink');
      if (userData.instagram) {
        const instagramUrl = userData.instagram.startsWith('http') ? userData.instagram : `https://www.instagram.com/${userData.instagram}`;
        instagramLink.href = instagramUrl;
        instagramLink.innerText = `${userData.instagram}`;
      } else {
        instagramLink.href = '#';
        instagramLink.innerText = 'Instagram não disponível';
      }
      

      const profilePictureBackground = document.getElementById('profilePictureBackground');
      if (profilePictureBackground && userData.profilePictureURL) {
        profilePictureBackground.style.backgroundImage = `url(${userData.profilePictureURL})`;
      } else if (profilePicture) {
        profilePicture.src = 'path/to/default-profile-image.jpg';
      }



      // Exibir a foto em missões
      const missionPhotoBackground = document.getElementById('missionPhotoBackground');
      if (missionPhotoBackground && userData.missionPhotoURL) {
        missionPhotoBackground.style.backgroundImage = `url(${userData.missionPhotoURL})`;
      } else if (missionPhotoBackground) {
        missionPhotoBackground.style.backgroundImage = 'url(path/to/default-image.jpg)'; 
      }
    } else {
      console.log('Nenhum documento encontrado para esse usuário');
    }
  }).catch((error) => {
    console.error('Erro ao carregar o perfil do missionário:', error);
  });
}

if (userId) {
  loadMissionaryProfile(userId);
} else {
  console.log('Nenhum ID de usuário fornecido');
}
