import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import FilterAndSearch from "./components/FindAndSearch";
import TableList from "./components/TableList";

function App() {
  const [friends, setFriend] = useState([
    { id: 1, name: "Mark", age: "24", hobby: "Play chess" },
    { id: 2, name: "Jack", age: "25", hobby: "Play game" },
    { id: 3, name: "Khan", age: "12", hobby: "Play football" },
  ]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const createFriend = (postFriend) => {
    setFriend([...friends, postFriend]);
  };

  const sortedFriends = useMemo(() => {
    if (filter.select) {
      return [...friends].sort((a, b) =>
        a[filter.select].localeCompare(b[filter.select])
      );
    } else return friends;
  }, [filter.select, friends]);

  const sortedAndSearchedFriends = useMemo(() => {
    return sortedFriends.filter((friend) =>
      friend.name.includes(filter.search)
    );
  }, [filter.search, sortedFriends]);

  const removeFriend = (friend) => {
    setFriend(friends.filter((selectFriend) => selectFriend.id !== friend.id));
  };

  return (
    <>
      <div className=" container mt-5 shadow rounded p-3">
        <PostForm createFriend={createFriend} />
        <hr />
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
