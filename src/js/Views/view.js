class View {
  _data;
  _body = document.querySelector('body');

  _clearParentElement() {
    this._body.innerHTML = '';
  }

  addGetHash(handler) {
    const btn = document.querySelectorAll('.btn__hash');
    let hash;
    btn.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const target = event.target.closest('.btn__hash');
        hash = target.dataset.hash;
      });
      btn.addEventListener('click', (event) => {
        const target = event.target.closest('.btn__hash');
        hash = target.dataset.hash;
        console.log(hash);
        [this.app?.stopperFocusTimerID, this.app?.stopperTimerID].forEach(
          (stopper) => clearInterval(stopper)
        );
        handler(hash);
      });
    });

    return hash;
  }

  renderHTML(component, data) {
    this._clearParentElement();
    this._data = data;

    this._body.insertAdjacentHTML('beforeend', component);
  }

  addHandlerChangeHash(handler) {
    window.addEventListener('hashchange', (event) => {
      handler();
    });
  }

  async verifyJWT() {
    const response = await axios({
      method: 'POST',
      url: 'https://rich-pink-cow-toga.cyclic.app/api/v1/users/verifyAuth',
      withCredentials: true,
    });
    if (!response.data.verified) return false;
    return true;
  }
}

export default View;

export const instanceView = new View();
