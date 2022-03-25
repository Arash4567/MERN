import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { error, success } from "./Notification";

function PostForm({ createPost }) {
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const addPostFunc = (e) => {
    e.preventDefault();
    if (newPost.title === "") {
      error("title");
    } else if (newPost.body === "") {
      error("content");
    } else {
      const postPost = {
        ...newPost,
        id: Date.now(),
      };
      createPost(postPost);
      success();
      setNewPost({ title: "", body: "" });
    }
  };
  return (
    <form className="shadow rounded p-3 mx-auto">
      <MyInput
        type="text"
        placeholder="Enter title..."
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Enter content..."
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <MyButton
        className="btn btn-primary mt-3 form-control"
        onClick={addPostFunc}
      >
        Add post
      </MyButton>
    </form>
  );
}

export default PostForm;
