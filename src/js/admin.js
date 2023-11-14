import AdminDashboard from './adminDashboard.js';

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

  notAuthHTML = `<main
  class="min-h-screen w-screen bg-gray-100 flex flex-col justify-center items-center"
>
  <div
    class="flex flex-row justify-evenly items-center h-[60vh] bg-brancoAzulado w-[50vw] rounded-lg shadow-lg bg-logo bg-no-repeat bg-center bg-50"
  >
    <img
      src="./assets/sad-adventurer.png"
      alt=""
      class="border-2 border-solid border-orange-400 rounded-lg shadow-lg drop-shadow bg-azulClaro p-4 w-[20%]"
    />
    <div class="flex flex-col justify-center items-center gap-4">
      <h2 class="font-amatic text-6xl text-gray-700">Aaaah... Que pena!</h2>
      <h1 class="font-jakarta text-lg text-gray-700 tracking-wider">
        Infelizmente, você não pode aventurar por esse caminho!
      </h1>
      <h2 class="error__message font-jakarta text-gray-700 tracking-wider">
        %ERROR_MESSAGE%
      </h2>
      <a
        href="index.html"
        class="font-amatic bg-azulEscuro text-gray-50 p-3 text-4xl rounded shadow-lg hover:underline drop-shadow hover:bg-orange-400"
      >
        Voltar!
      </a>
    </div>
  </div>
</main>`;

  currentUser = {};

  AdminDashboard;

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
      const currentUser = await axios({
        url: `https://rich-pink-cow-toga.cyclic.app/api/v1/users/login`,
        method: 'POST',
        data: {
          email: this._crud.user,
          password: this._crud.password,
        },
        withCredentials: true,
      });
      this.currentUser = currentUser.data.data.user;
      console.log(this.currentUser);
      this._toggleLoader();
      this._renderAdminView();
    } catch (err) {
      console.log(err.response.data.message);
      this._toggleLoader();
      this._renderErrorMessage(err.response.data.message);
    }
  }

  async _renderAdminView(isActive = false) {
    try {
      const response = await axios({
        url: `https://rich-pink-cow-toga.cyclic.app/api/v1/users/adminView/adminView`,
        method: 'GET',
        withCredentials: true,
      });

      this._clearAndInsertHTML(response.data.data.html);
      if (isActive) return this.AdminDashboard.init(this.currentUser);
      this.AdminDashboard = new AdminDashboard(this.currentUser);
    } catch (err) {
      const notAuth = this.notAuthHTML.replace(
        '%ERROR_MESSAGE%',
        err.response.data.message
      );
      console.log(err.response.data.message);
      this._clearAndInsertHTML(notAuth);
    }
  }

  _clearAndInsertHTML(html) {
    const body = document.querySelector('body');
    body.innerHTML = '';
    body.insertAdjacentHTML('beforeend', html);
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

export default app;
