
// Função para atualizar a visibilidade dos botões da navbar
function updateNavbar() {
  auth.onAuthStateChanged(user => {
    const loginButton = document.getElementById('signupBtn');
    const registerButton = document.getElementById('loginBtn');
    const logoutButton = document.getElementById('logoutBtn');
    const profileBtn = document.getElementById('profileBtn');
    const editProfileBtnn = document.getElementById('editProfileBtn');

    if (user) {
      if (profileBtn) loginButton.style.display = 'flex';
      if (loginButton) loginButton.style.display = 'none';
      if (registerButton) registerButton.style.display = 'none';
    } else {
      if (editProfileBtnn) editProfileBtnn.style.display = 'none';
      if (profileBtn) profileBtn.style.display = 'none';
      if (logoutButton) logoutButton.style.display = 'none';
    }
  });
}
window.onload = updateNavbar;