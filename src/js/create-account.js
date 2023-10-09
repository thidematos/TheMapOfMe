class CreateAccount {
  emailInput = document.querySelector('#input__email');
  passwordInput = document.querySelector('#input__password');
  passwordConfirmInput = document.querySelector('#input__password-confirm');
  pretendsInput = document.querySelector('#input__pretends');
  ageInput = document.querySelector('#input__age');
  nameInput = document.querySelector('#input__name');
  btnSubmit = document.querySelector('#input__submit');
  spinner = document.querySelector('.loader');

  upperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  lowercase = this.upperCase.map((char) => char.toLowerCase());
  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  accountData = {
    email: '',
    password: '',
    passwordConfirm: '',
    initialComment: '',
    age: '',
    name: '',
  };

  constructor() {
    this.btnSubmit.addEventListener('click', this.submitAction.bind(this));

    this.passwordInput.addEventListener(
      'input',
      this.handlePasswordInput.bind(this)
    );

    this.passwordConfirmInput.addEventListener(
      'input',
      this.handlePasswordConfirm.bind(this)
    );
  }

  handlePasswordInput(event) {
    const passwordUppercase = document.querySelector('.password-uppercase');
    const passwordNumber = document.querySelector('.password-number');
    const passwordCase = document.querySelector('.password-case');
    const passwordMin = document.querySelector('.password-min');

    const insert = event.data;

    const currentValue = this.passwordInput.value;
    if (!insert && event.inputType !== 'deleteContentBackward') return;

    if (this.verifyUppercase(currentValue)) {
      this.changeStatusColor(passwordUppercase, true);
    } else this.changeStatusColor(passwordUppercase, false);

    if (this.verifyNumber(currentValue))
      this.changeStatusColor(passwordNumber, true);
    else this.changeStatusColor(passwordNumber, false);

    if (this.verifyCase(currentValue))
      this.changeStatusColor(passwordCase, true);
    else this.changeStatusColor(passwordCase, false);

    if (validator.isLength(currentValue, { min: 8 }))
      this.changeStatusColor(passwordMin, true);
    else this.changeStatusColor(passwordMin, false);
  }

  handlePasswordConfirm(event) {
    const insert = event.data;
    const passwordConfirm = document.querySelector('.password-equal');

    const firstPW = this.passwordInput.value;
    const secondPW = this.passwordConfirmInput.value;
    if (!insert && event.inputType !== 'deleteContentBackward') return;

    if (validator.equals(firstPW, secondPW))
      this.changeStatusColor(passwordConfirm, true);
    else this.changeStatusColor(passwordConfirm, false);
  }

  changeStatusColor(element, status) {
    if (status) element.style.color = 'rgb(34,197,94)';
    if (!status) element.style.color = 'rgb(239,68,68)';
  }

  verifyUppercase(string) {
    let contains = false;
    this.upperCase.forEach((char) => {
      if (validator.contains(string, char)) return (contains = true);
    });
    return contains;
  }

  verifyNumber(string) {
    let contains = false;
    this.numbers.forEach((number) => {
      if (validator.contains(string, number)) return (contains = true);
    });

    return contains;
  }

  verifyCase(string) {
    let contains = false;
    const lowerCase = this.upperCase.map((char) => char.toLowerCase());

    lowerCase.forEach((char) => {
      if (validator.contains(string, char)) return (contains = true);
    });

    return contains;
  }

  escapeHTML(input) {
    return validator.escape(input);
  }

  renderError(string) {
    const itemsContainer = document.querySelector('.itens__container');
    const html = `<div class="list-none error bg-orange-400 p-4 font-jakarta text-lg text-gray-50 opacity-80">${string}!</div>`;

    itemsContainer.insertAdjacentHTML('beforeend', html);

    setTimeout(() => document.querySelector('.error').remove(), 3000);
  }

  async submitAction(event) {
    event.preventDefault();

    let email = this.emailInput.value;
    let password = this.passwordInput.value;
    let passwordConfirm = this.passwordConfirmInput.value;
    let comment = this.pretendsInput.value;
    let name = this.nameInput.value;
    let age = this.ageInput.value;

    if (!email || !password || !passwordConfirm || !comment || !name || !age) {
      return this.renderError('Preencha todos os campos');
    }

    name = validator.escape(name);

    email = validator.escape(email);
    if (!validator.isEmail(email)) {
      this.emailInput.value = '';
      return this.renderError('Email inválido!');
    }

    password = validator.escape(password);
    passwordConfirm = validator.escape(passwordConfirm);
    if (
      !validator.isAlphanumeric(password) ||
      !validator.isAlphanumeric(passwordConfirm)
    ) {
      this.passwordConfirmInput.value = '';
      this.passwordInput.value = '';
      this.renderError('A senha não pode conter caracteres especiais');
    }

    comment = validator.escape(comment);

    this.accountData.email = email;
    this.accountData.password = password;
    this.accountData.passwordConfirm = passwordConfirm;
    this.accountData.initialComment = comment;
    this.accountData.name = name;
    this.accountData.age = age;

    this.spinner.classList.remove('hidden');
    try {
      await this.postSignUp();
      this.spinner.classList.add('hidden');
      this.renderError('Conta criada com sucesso!');
      setTimeout(() => (window.location.href = '/src/index.html'), 2000);
    } catch {}
  }

  async postSignUp() {
    try {
      const response = await fetch(
        'https://map-of-me-api.onrender.com/api/v1/users/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.accountData),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      console.log(data);
    } catch (err) {
      this.spinner.classList.add('hidden');

      this.renderError(err.message);

      throw err;
    }
  }
}

const createAccount = new CreateAccount();
