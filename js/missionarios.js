function loadMissionaryProfiles() {
  const missionaryCardsContainer = document.getElementById('missionaryCards');

  firestore.collection('users').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      createMissionaryCard(userData, doc.id);
    });
  }).catch((error) => {
    console.error('Erro ao carregar perfis de missionários:', error);
  });
}

function createMissionaryCard(userData, userId) {
  const missionaryCardsContainer = document.getElementById('missionaryCards');

  const cardHTML = `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div class="containerCard">
      <div class="card cardss">
        <img src="${userData.profilePictureURL || 'path/to/default-image.jpg'}" class="card-img-top" alt="Foto de Perfil">
        <div class="card-body">
          <h5 class="card-title">${userData.fullName || 'Nome não disponível'}</h5>
          <p class="card-text">Campo: ${userData.missionField || 'Campo missionário não disponível'}</p>
          <a href="perfil-publico.html?user=${userId}" class="btn btn-primary"><button class="btn btn-primary">Ver Perfil</button></a>
        </div>
        </div>
      </div>
    </div>
  `;

  missionaryCardsContainer.innerHTML += cardHTML;
}

document.addEventListener('DOMContentLoaded', function() {
  loadMissionaryProfiles();
});