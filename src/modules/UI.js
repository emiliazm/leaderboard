import {
  getScores, addScore,
} from './scores.js';

const uiDisplayScore = async (ulElement, score) => {
  const insideUl = `<li>${score.user} : ${score.score}</li>`;
  ulElement.innerHTML += insideUl;
};

const uiDisplayScores = async () => {
  const ulElement = document.querySelector('.score-list');
  ulElement.innerHTML = '';
  const list = await getScores();
  list.sort((a, b) => b.score - a.score);
  list.forEach((score) => uiDisplayScore(ulElement, score));
};

const uiAddScore = async (e) => {
  e.preventDefault();
  let user = document.querySelector('#user-name').value;
  user = user.charAt().toUpperCase() + user.slice(1).toLowerCase();
  const score = document.querySelector('#user-score').value;
  const form = document.querySelector('#score-form');
  const focus = document.querySelector('#user-name');

  if (user !== null && score !== null && user.trim() !== '' && score.trim() !== '') {
    addScore(user, parseInt(score, 10)).then(() => {
      uiDisplayScores();
    });
    form.reset();
  }
  focus.focus();
};

const setupRefreshBtn = async () => {
  document.querySelector('.refresh-btn').addEventListener('click', uiDisplayScores);
};

const setupSubmitBtn = async () => {
  document.querySelector('.submit-btn').addEventListener('click', uiAddScore);
};

export default function setup() {
  uiDisplayScores();
  setupRefreshBtn();
  setupSubmitBtn();
}
