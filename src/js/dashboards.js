class DashboardView {
  body = document.querySelector('body');
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
        ERROR MESSAGE
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
  constructor(hash) {
    this.hash = hash;
    this._renderSpinner();
    this.auth();
  }

  _clearBody() {
    this.body.innerHTML = '';
  }

  _renderSpinner() {
    this._clearBody();
    this.body.insertAdjacentHTML('beforeend', '<div class="loader"></div');
  }

  async auth() {
    try {
      const response = await axios({
        url: `http://127.0.0.1:3000/api/v1/users/adminView/${this.hash}`,
        method: 'GET',
        withCredentials: true,
      });
      this._renderPage(response.data.data.html);
    } catch (err) {
      this._renderPage(this.notAuthHTML);
    }
  }

  _renderPage(html) {
    this._clearBody();
    this.body.insertAdjacentHTML('beforeend', html);
  }
}

export class Statistics extends DashboardView {
  constructor(hash) {
    super(hash);
    console.log('Statistics');
  }
}

export class Feedbacks extends DashboardView {
  constructor(hash) {
    super(hash);
    console.log('Feedbacks');
  }
}

export class Stories extends DashboardView {
  constructor(hash) {
    super(hash);
    console.log('Stories');
    this._getAllStories();
  }

  async _getAllStories() {
    const response = await axios({
      url: `http://127.0.0.1:3000/api/v1/users?fields=true`,
      method: 'GET',
      withCredentials: true,
    });
    console.log(response.data.data.users);
  }
}
