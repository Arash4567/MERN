import { useState } from "react";
import PostForm from "./components/PostForm";
import FilterAndSearch from "./components/FindAndSearch";
import TableList from "./components/TableList";
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";
import { useFriends } from "./components/hooks/useCreatePost";

function App() {
  const [friends, setFriend] = useState([
    { id: 1, name: "Mark", age: "24", hobby: "Play chess" },
    { id: 2, name: "Jack", age: "25", hobby: "Play game" },
    { id: 3, name: "Khan", age: "12", hobby: "Play football" },
  ]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [visible, setVisible] = useState(false);
  const sortedAndSearchedFriends = useFriends(friends, filter.sort, filter.search);

  const createFriend = (postFriend) => {
    setFriend([...friends, postFriend]);
    setVisible(false);
  };

  const removeFriend = (friend) => {
    setFriend(friends.filter((selectFriend) => selectFriend.id !== friend.id));
  };

  return (
    <>
      <MyModal showModal={visible} setModal={setVisible}>
        <PostForm createFriend={createFriend} />
      </MyModal>
      <div className="container mt-5 shadow rounded p-3">
        <MyButton className="btn btn-primary" onClick={() => setVisible(true)}>
          Add Friend
        </MyButton>
        <FilterAndSearch filter={filter} setFilter={setFilter} />
        <TableList
          remove={removeFriend}
          friends={sortedAndSearchedFriends}
          caption="My Close Friends"
        />
      </div>
    </>
  );
}

export default App;
