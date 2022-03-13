import { useState } from "react";
import PostForm from "./components/PostForm";
import TableList from "./components/TableList";
import MySelect from "./UI/select/MySelect";

function App() {
  const [friends, setFriend] = useState([
    { id: 1, name: "Mark", age: "24", hobby: "Play chess" },
    { id: 2, name: "Jack", age: "25", hobby: "Play game" },
    { id: 3, name: "Khan", age: "12", hobby: "Play football" },
  ]);
  const [select, setSelect] = useState("");
  const createFriend = (postFriend) => {
    setFriend([...friends, postFriend]);
  };

  const removeFriend = (friend) => {
    setFriend(friends.filter((selectFriend) => selectFriend.id !== friend.id));
  };

  const sortFriendByName = (sort) => {
    setSelect(sort);
    setFriend([...friends].sort((a, b) => a[sort].localeCompare(b[sort])));
  };
  return (
    <>
      <div className=" container mt-5 shadow rounded p-3">
        <PostForm createFriend={createFriend} />
        <hr />
        <div className="d-flex justify-content-end">
          <MySelect
            value={select}
            onChange={sortFriendByName}
            defaultValue={"Sorted By..."}
            options={[
              { value: "name", name: "By Name A-Z" },
              { value: "hobby", name: "By hobby" },
              { value: "age", name: "By Age" },
            ]}
          />
        </div>
        <TableList
          remove={removeFriend}
          friends={friends}
          caption="My Close Friends"
        />
      </div>
    </>
  );
}

export default App;
