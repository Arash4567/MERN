import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { error, success } from "./Notification";

function PostForm({ createFriend }) {
  const [newFriend, setNewFriend] = useState({ name: "", age: 0, hobby: "" });

  const addFriendFunc = (e) => {
    e.preventDefault();
    if (newFriend.name === "") {
      error("ism");
    } else if (newFriend.age === 0) {
      error("yosh");
    } else if (newFriend.hobby === "") {
      error("hobby");
    } else {
      const postFriend = {
        ...newFriend,
        id: Date.now(),
      };
      createFriend(postFriend);
      success();
      setNewFriend({ name: "", age: 0, hobby: "" });
    }
  };
  return (
    <form className="shadow rounded p-3 mx-auto">
      <MyInput
        type="text"
        placeholder="Enter name..."
        value={newFriend.name}
        onChange={(e) => setNewFriend({ ...newFriend, name: e.target.value })}
      />
      <MyInput
        type="number"
        placeholder="Enter age..."
        min="0"
        value={newFriend.age}
        onChange={(e) => setNewFriend({ ...newFriend, age: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Enter hobby..."
        value={newFriend.hobby}
        onChange={(e) => setNewFriend({ ...newFriend, hobby: e.target.value })}
      />
      <MyButton
        className="btn btn-primary mt-3 form-control"
        onClick={addFriendFunc}
      >
        Add friend
      </MyButton>
    </form>
  );
}

export default PostForm;
