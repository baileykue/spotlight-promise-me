/**
 * TODO:
 * i will be writiting two function, one with async/await and one with a .then()
 * https://ponball.herokuapp.com/api/v1/machines
 */

export const getPinBalls = async () => {
  const response = await fetch('https://ponball.herokuapp.com/api/v1/machines');

  const data = await response.json();

  return data;
};

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
