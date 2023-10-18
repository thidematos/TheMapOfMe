import * as dashboards from './dashboards.js';

class AdminDashboard {
  hash = '';

  constructor(currentUser) {
    this.currentUser = currentUser;
    this.createHashChangeListener();
    this.replaceGuideName();
    this.addListenerButtons();
  }

  replaceGuideName() {
    const guideName = document.querySelector('.guideName');
    guideName.textContent = guideName.textContent.replace(
      '%GUIA_NAME%',
      this.currentUser.name
    );
  }

  addListenerButtons() {
    const buttonsContainer = document.querySelector(
      '.dashboard__button-container'
    );
    buttonsContainer.addEventListener('click', (event) => {
      const button = event.target.closest('.dashboard__button');
      if (!button) return;

      this.hash = button.dataset.hash;

      window.location.hash = this.hash;
    });
  }

  createHashChangeListener() {
    window.addEventListener('hashchange', () => {
      const hashID = window.location.hash.replace('#', '');
      if (!hashID) return;
      const currentDashboard = new dashboards[hashID](hashID);
    });
  }
}

export default AdminDashboard;
