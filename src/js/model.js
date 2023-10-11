import { USER } from './config.js';

export const state = {
  currentUser: {},
  currentHash: '',
  stopperTimer: '',
};

export const approveLogin = async function (inputEmail, inputPassword) {
  try {
    const responseData = await axios({
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      method: 'POST',
      data: {
        email: inputEmail,
        password: inputPassword,
      },
      withCredentials: true,
    });
    console.log(responseData);

    if (!responseData.statusText === 'OK')
      throw new Error(responseData.message);
    state.currentUser = responseData.data.data.user;
    console.log(state.currentUser);

    return state;
  } catch (err) {
    throw err;
  }
};

export const changeHash = function (hash = 'adventure-map') {
  location.hash = `#${hash}`;
  state.currentHash = hash;
  return state;
};

export const getResults = async function (data) {
  const updatedUser = await axios({
    url: `http://127.0.0.1:3000/api/v1/users/${state.currentUser._id}`,
    method: 'PATCH',
    data: {
      puzzleID: data.id,
      data: {
        focusTime: Number(data.data.focusTime.toFixed(2)),
        wrongMoves: data.data.wrongMoves,
        completeTime: data.data.completeTime,
        hints: data.data.hints,
      },
    },
    withCredentials: true,
  });
  console.log(updatedUser);

  state.currentUser = updatedUser.data.data.user;
};

export const changeStateEndGame = function () {
  return (state.currentUser.alreadyEnded = true);
};

export const changeStateBegin = async function () {
  await axios({
    url: `http://127.0.0.1:3000/api/v1/users/${state.currentUser._id}`,
    method: 'PATCH',
    data: {
      alreadyBegin: true,
    },
    withCredentials: true,
  });
};

export const changeReviewStatus = function (event) {
  state.currentUser.feedbacks.hasFeedback = true;
  state.currentUser.feedbacks.feedbacks.push(event.detail);
  console.log(state);
};
