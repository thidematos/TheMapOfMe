import * as model from './model.js';

import { HASHS } from './config.js';

import { VIEWS } from './config.js';

import { instanceView } from './Views/view.js';

import loginView from './Views/loginView.js';

const controlLogin = async function () {
  const [email, password] = loginView.getInputValues();

  try {
    await model.approveLogin(email, password);
    model.changeHash();
  } catch (err) {
    throw err;
  }

  console.log(model.state);
};

const controlHashChange = async function () {
  const currentHash = model.state.currentHash;
  console.log(`It works! Hash: ${model.state.currentHash}`);
  const index = HASHS.findIndex((hash) => hash === currentHash);
  const currentView = VIEWS[index];
  await currentView.renderHTML(
    [currentView.generateHTML(model.state)],
    model.state
  );
  currentView.addGetHash(model.changeHash);
};

const init = function () {
  // model.changeHash('login');
  instanceView.addHandlerChangeHash(controlHashChange);
  loginView.addHandlerLogin(controlLogin);
  window.addEventListener('victory', async (event) => {
    await model.getResults(event.detail);
  });

  window.addEventListener('ended', (event) => {
    model.changeStateEndGame();
  });

  window.addEventListener('begin', (event) => {
    model.changeStateBegin();
  });

  window.addEventListener('newReview', model.changeReviewStatus);
};
init();
