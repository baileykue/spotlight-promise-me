import { useEffect } from 'react';
import {
  getPinBalls1,
  getPinBalls2,
  get20Machines,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    get20Machines();
  });

  return <h1>Hello World</h1>;
}
