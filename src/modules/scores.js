import {
  sendNewGame, sendScore, getScoresApi,
} from './api.js';

const gameKey = 'gameKey';
let gameId = null;
const gameName = 'Emilia\'s game';

const scores = async () => {
  gameId = localStorage.getItem(gameKey);
  if (gameId == null) {
    const response = await sendNewGame({ name: gameName });
    gameId = response.slice(14, 35).trim();
    localStorage.setItem(gameKey, gameId);
  }
};

export const addScore = async (user, score) => {
  const newScore = { user, score };
  const response = await sendScore(gameId, newScore);
  return response === 'Leaderboard score created correctly.';
};

export const getScores = async () => {
  if (gameId !== null) {
    return getScoresApi(gameId);
  }

  return Promise.resolve([]);
};

scores();
