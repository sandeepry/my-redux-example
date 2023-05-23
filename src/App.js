import React from "react";
import Account from "./Components/Account";
import Bonus from "./Components/Bonus";
import Rewads from "./Components/Rewads";

import "./style/App.scss";
import "./style/Account.scss";
import { useSelector } from "react-redux";

function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {amount}</h3>
      <h3>Total Bonus : {points}</h3>

      <Account />
      <Bonus />
      <Rewads />
    </div>
  );
}

export default App;
