import { getPinBalls1, getPinBalls2 } from './services/promise-me';

export default function App() {
  console.log(getPinBalls1());
  console.log(getPinBalls2());

  return <h1>Hello World</h1>;
}
