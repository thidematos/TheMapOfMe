import View from './view.js';

class LoginPage extends View {
  _parentElement = document.querySelector('.form');
  _inputEmail = document.querySelector('#input__text');
  _inputPassword = document.querySelector('#input__password');

  generateHTML(data) {
    return `
    <nav
    class="h-[10vh] flex flex-row justify-center items-center bg-azulEscuro shadow-lg"
    >
    <ul
      class="flex flex-row w-screen justify-evenly items-center h-full font-jakarta text-xl text-gray-50"
    >
      <li class="list__item">Início</li>
      <li class="list__item">Jornada</li>
      <li class="list__item">Exploradores</li>
      <li class="font-amatic text-3xl list__item">
          <a href="createAccount.html">Junte-se!</a>
      </li>
      <li class="font-amatic text-3xl list__item list__item-active">
        Jogar!
      </li>
    </ul>
    </nav>
    
    <main
    class="bg-gray0 w-screen h-[85vh] flex flex-col justify-center items-center"
    >
    <form
      action=""
      class="form w-2/6 min-h-[50vh] bg-brancoAzulado rounded-xl shadow-lg bg-no-repeat bg-contain bg-center flex flex-col justify-center items-center gap-6 p-8"
    >
      <div class="flex flex-row justify-evenly items-center">
        <img src="assets/logo300.png" alt="" class="w-[40%]" />
        <div class="flex flex-col justify-center items-center">
          <h2 class="font-jakarta text-xl text-gray-700">
            Vamos começar a nossa
          </h2>
          <h3 class="font-amatic text-6xl font-bold text-azulEscuro">
            Aventura!
          </h3>
        </div>
      </div>
      <div class="flex flex-col justify-center items-start w-[50%]">
        <label for="input__text" class="font-jakarta text-laranja text-xl"
          >Usuário:</label
        >
        <input
          type="text"
          name=""
          id="input__text"
          class="w-full border-[2px] border-solid border-gray-600 text-center p-1 shadow-md placeholder:p-3 placeholder:text-center"
          placeholder="map@exemplo.com"
          maxlength="20"
        />
      </div>
      <div class="flex flex-col justify-center items-start w-[50%]">
        <label for="input__password" class="font-jakarta text-laranja text-xl"
          >Senha:</label
        >
        <input
          type="password"
          name=""
          id="input__password"
          class="w-full border-[2px] border-solid border-gray-600 text-center p-1 shadow-md placeholder:p-3 placeholder:text-center"
          placeholder="Digite sua senha!"
          maxlength="20"
        />
      </div>
    
      <button
        type="submit"
        data-hash="adventure-map"
        class="form__btn btn__hash rounded-xl bg-laranja px-4 py-2 shadow-lg font-amatic font-bold text-gray-700 text-4xl hover:text-azulEscuro hover:bg-gray-100 duration-100"
      >
        Entrar!
      </button>
    </form>
    </main>
    <footer
    class="w-screen bg-brancoAzulado h-[5vh] flex flex-row justify-center items-center font-amatic text-gray-800 text-3xl"
    >
    The Map of Me
    </footer>
    `;
  }

  getInputValues() {
    let email = this._inputEmail.value;
    let password = this._inputPassword.value;

    //SANITIZAÇÃO
    email = validator.escape(email);
    email = validator.isEmail(email) ? email : '';
    password = validator.escape(password);

    password = validator.isAlphanumeric(password) ? password : '';

    return [email, password];
  }

  _clearInputs() {
    [this._inputEmail, this._inputPassword].forEach(
      (element) => (element.value = '')
    );
    this._inputEmail.focus();
  }

  renderError() {
    const btn = this._parentElement.querySelector('.form__btn');
    const errorHTML = this.generateErrorHTML();
    btn.insertAdjacentHTML('beforebegin', errorHTML);
    this._clearInputs();
    setTimeout(() => {
      btn.previousElementSibling.remove();
    }, 5000);
  }

  generateErrorHTML() {
    return `
    <div
    class="font-jakarta text-red-400 flex flex-col justify-center items-center"
  >
    <p>Usuário ou senha incorretos!</p>
    <p>Tente novamente.</p>
  </div>
    `;
  }

  addHandlerLogin(handler) {
    this._parentElement.addEventListener('click', (event) => {
      event.preventDefault();
      if (!event.target.classList.contains('form__btn')) return;
      handler();
    });
  }
}

export default new LoginPage();
