import * as dashboards from './dashboards.js';

class AdminDashboard {
  hash = '';
  dashes = {
    Feedbacks: new dashboards.Feedbacks(),
    Stories: new dashboards.Stories(),
    Statistics: new dashboards.Statistics(),
  };

  constructor(currentUser) {
    this.createHashChangeListener();
    this.init(currentUser);
  }

  init(currentUser) {
    this.currentUser = currentUser;
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
    window.addEventListener('hashchange', this.handleHashChange.bind(this));
  }

  handleHashChange() {
    const hashID = window.location.hash.replace('#', '');
    if (!hashID) return;
    this.dashes[hashID].init(hashID);
  }
}

export default AdminDashboard;
