// Função de logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    auth.signOut()
      .then(() => {
        alert('Logout bem-sucedido!');
        window.location.href = 'cadastro.html';
      })
      .catch((error) => {
        alert('Erro ao fazer logout: ' + error.message);
      });
  });