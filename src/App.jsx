import { useEffect } from 'react';
import {
  getPinBalls1,
  getPinBalls2,
  get20Machines,
  getRandomActivity,
  getActivityFor1,
  getCocktails,
  getJokes,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    getJokes();
  });

  return <h1>Hello World</h1>;
}
