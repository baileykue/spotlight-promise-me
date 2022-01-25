/**
 * TODO:
 * i will be writiting two function, one with async/await and one with a .then()
 * https://ponball.herokuapp.com/api/v1/machines
 */

export async function getPinBalls1() {
  const response = await fetch('https://ponball.herokuapp.com/api/v1/machines');

  const data = await response.json();

  return data;
}

export function getPinBalls2() {
  const response = fetch('https://ponball.herokuapp.com/api/v1/machines').then(
    (data) => data.json()
  );

  return response;
}

export function get20Machines() {
  const response = fetch(
    'https://ponball.herokuapp.com/api/v1/machines?limit=20&offset=20'
  ).then((data) => data.json());

  return response;
}

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
