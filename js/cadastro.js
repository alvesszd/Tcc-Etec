document.getElementById('loginButton').addEventListener('click', () => {
  const email = document.getElementById('email-login').value;
  const password = document.getElementById('password-login').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Login bem-sucedido!');
      window.location.href = "editar-perfil.html"; 
    })
    .catch((error) => {
      const errorCode = error.code;
      let errorMessage;

      switch (errorCode) {
        case 'auth/invalid-email':
          errorMessage = 'E-mail inválido. Por favor, verifique o formato do seu e-mail.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Este usuário foi desativado.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'Usuário não encontrado. Verifique seu e-mail e tente novamente.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Senha incorreta. Tente novamente.';
          break;
        default:
          errorMessage = 'Erro ao fazer login: ' + error.message;
          break;
      }

      alert(errorMessage);
    });
});

document.getElementById('registerButton').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      firestore.collection('users').doc(user.uid).set({ 
        email: email,
        fullName: '', 
        testimony: '', 
        missionField: '', 
        instagram: '', 
        pixKey: '' 
      }).then(() => {
        alert('Usuário cadastrado com sucesso!');
        window.location.href = 'editar-perfil.html'; 
      }).catch((error) => {
        alert('Erro ao salvar dados no Firestore: ' + error.message);
      });

    })
    .catch((error) => {
      const errorCode = error.code;
      let errorMessage;

      switch (errorCode) {
        case 'auth/email-already-in-use':
          errorMessage = 'Este e-mail já está em uso. Tente outro e-mail.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Formato de e-mail inválido. Verifique e tente novamente.';
          break;
        case 'auth/weak-password':
          errorMessage = 'A senha precisa ter pelo menos 6 caracteres.';
          break;
        default:
          errorMessage = 'Erro ao registrar: ' + error.message;
          break;
      }

      alert(errorMessage);
    });
});
