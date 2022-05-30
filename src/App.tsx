import Counter from "./components/Counter";
import Board from "./components/Board"

import "./style.css";

const App = () => {
  return (
    <div className="wrapper">
      <Counter />
      <Board />
    </div>
  );
};

export default App;
