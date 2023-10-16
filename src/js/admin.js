class App {
  _crud = {
    user: '',
    password: '',
  };
  inputUser = document.querySelector('#input__admin-user');
  inputPassword = document.querySelector('#input__admin-password');
  btn = document.querySelector('.input__btn');
  form = document.querySelector('.input__form');
  loader = document.querySelector('.loader');

  errorDiv = document.querySelector('.error__message');

  constructor() {
    this._addEventListeners();
  }

  _getCrudData() {
    this._crud = {
      user: this.inputUser.value,
      password: this.inputPassword.value,
    };

    const isComplete = Object.values(this._crud).every((input) =>
      input ? true : false
    );
    if (!isComplete) return console.log('We have a problem!');
  }

  async _login() {
    try {
      const response = await axios({
        url: `http://127.0.0.1:3000/api/v1/users/login`,
        method: 'POST',
        data: {
          email: this._crud.user,
          password: this._crud.password,
        },
        withCredentials: true,
      });
      this._toggleLoader();
      this._renderAdminView();
    } catch (err) {
      console.log(err.response.data.message);
      this._toggleLoader();
      this._renderErrorMessage(err.response.data.message);
    }
  }

  async _renderAdminView() {
    try {
      const response = await axios({
        url: `http://127.0.0.1:3000/api/v1/users/adminView`,
        method: 'GET',
        withCredentials: true,
      });
      document.querySelector('body').innerHTML = '';
      document
        .querySelector('body')
        .insertAdjacentHTML('beforeend', response.data.data.html);
    } catch (err) {}
  }

  _clearInputs() {
    this.inputUser.value = '';
    this.inputPassword.value = '';
    this.inputUser.focus();
  }

  _renderErrorMessage(message) {
    this.errorDiv.classList.remove('hidden');
    this.errorDiv.textContent = message;
    setTimeout(() => this.errorDiv.classList.add('hidden'), 3000);
  }

  _toggleLoader() {
    this.form.classList.toggle('hidden');
    this.loader.classList.toggle('hidden');
  }

  _addEventListeners() {
    this.btn.addEventListener('click', async (event) => {
      event.preventDefault();
      this._getCrudData();
      this._toggleLoader();
      await this._login();
      this._clearInputs();
    });
  }
}
const app = new App();
