const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

export const sendNewGame = async (body) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => json.result)
  .catch((error) => { throw error; });

export const sendScoreApi = async (gameId, body) => fetch(`${url + gameId}/scores/`, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => json.result)
  .catch((error) => { throw error; });

export const getScoresApi = async (gameId) => fetch(`${url + gameId}/scores/`)
  .then((response) => response.json())
  .then((json) => json.result)
  .catch((error) => { throw error; });
