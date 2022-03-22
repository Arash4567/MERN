import { useState } from "react";
import TableList from "./components/TableList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function App() {
  const [friends, setFriend] = useState([
    { id: 1, name: "Mark", age: 24, hobby: "Play chess" },
  ]);
  /*   const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState(""); */

  /*   const addFriendFunc = (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(age);
    // console.log(hobby);
    const newFriend = {
      id: Date.now(),
      name: name,
      age: age,
      hobby: hobby
    }
    setFriend([...friends, newFriend])
    setName('')
    setAge(0)
    setHobby('')
  }; */
  const [newFriend, setNewFriend] = useState({ name: "", age: 0, hobby: "" });
  const addFriendFunc = (e) => {
    e.preventDefault();
    function error(value) {
      iziToast.error({
        title: "Iltimos,",
        message: `${value}ni kiriting!`,
        position: "topRight",
      });
    }
    if (newFriend.name === "") {
      error("ism");
    } else if (newFriend.age === 0) {
      error("yosh");
    } else if (newFriend.hobby === "") {
      error("hobby");
    } else {
      setFriend([...friends, { id: Date.now(), ...newFriend }]);
      iziToast.success({
        title: "Friend,",
        message: "muvafaqiyatli qo`shildi!",
        position: "topRight",
      });
      setNewFriend({ name: "", age: 0, hobby: "" });
    }
  };
  return (
    <>
      <div className=" container mt-5 shadow rounded p-3">
        {/* <form className="w-50 shadow rounded p-3 mx-auto">
          <MyInput
            type="text"
            placeholder="Enter name..."
            value={newFriend.name}
            onChange={(e) => setName(e.target.value)}
          />
          <MyInput
            type="number"
            placeholder="Enter age..."
            min="0"
            value={newFriend.age}
            onChange={(e) => setAge(e.target.value)}
          />
          <MyInput
            type="text"
            placeholder="Enter hobby..."
            value={newFriend.hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
          <MyButton
            className="btn btn-primary mt-3 form-control"
            onClick={addFriendFunc}
          >
            Add friend
          </MyButton>
        </form> */}

        <form className="w-50 shadow rounded p-3 mx-auto">
          <MyInput
            type="text"
            placeholder="Enter name..."
            value={newFriend.name}
            onChange={(e) =>
              setNewFriend({ ...newFriend, name: e.target.value })
            }
          />
          <MyInput
            type="number"
            placeholder="Enter age..."
            min="0"
            value={newFriend.age}
            onChange={(e) =>
              setNewFriend({ ...newFriend, age: e.target.value })
            }
          />
          <MyInput
            type="text"
            placeholder="Enter hobby..."
            value={newFriend.hobby}
            onChange={(e) =>
              setNewFriend({ ...newFriend, hobby: e.target.value })
            }
          />
          <MyButton
            className="btn btn-primary mt-3 form-control"
            onClick={addFriendFunc}
          >
            Add friend
          </MyButton>
        </form>
        <hr />
        <h4 className="text-center">My Close Friends</h4>
        <table className="table table-hover table-bordered text-center">
          <thead className="bg-primary text-white">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Hobby</th>
              <th>Actions</th>
            </tr>
          </thead>
          <TableList friends={friends} />
        </table>
      </div>
    </>
  );
}

export default App;
