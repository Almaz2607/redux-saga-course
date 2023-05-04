import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  asyncDecrementAC,
  asyncIncrementAC,
  //   decrementAC,
  //   incrementAC,
} from "./store/countReducer";
import { fetchUsersAC } from "./store/userReducer";

function App() {
  const count = useSelector((state) => state.count.count);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="container">
        <div className="count">{count}</div>
        <div className="buttons">
          <button onClick={() => dispatch(asyncIncrementAC())}>
            INCREMENT ++
          </button>
          <button onClick={() => dispatch(asyncDecrementAC())}>
            DECREMENT --
          </button>
          <button onClick={() => dispatch(fetchUsersAC())}>SET USER</button>
        </div>
        <div className="user">
          {users.length > 0 ? (
            users.map((user) => (
              <p key={user.id} className="user-item">
                {user.name}
              </p>
            ))
          ) : (
            <p className="user-item">Not users!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
