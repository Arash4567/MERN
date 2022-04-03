import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./state/index";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney} = bindActionCreators(actions, dispatch);

  return (
    <div className="App">
      <h1> {account} </h1>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <br />
      <br />
      <button onClick={() => withdrawMoney(50)}>Withdraw</button>
    </div>
  );
}

export default App;
