import React, { useContext } from "react";
import { AuthContext } from "../context";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

export default function Login(props) {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div className="container mt-5">
      <form onSubmit={login} className="shadow rounded p-3 mx-auto w-50">
        <label htmlFor="login">
          Login: <span className="text-danger">*</span>
        </label>
        <MyInput
          type="text"
          placeholder="Enter login..."
          id="login"
          required
          // value={newPost.title}
          // onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <label htmlFor="pass">
          Parol: <span className="text-danger">*</span>
        </label>
        <MyInput
          type="password"
          placeholder="Enter password..."
          id="pass"
          required
          // value={newPost.body}
          // onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <MyButton
          className="btn btn-primary mt-3 form-control"
          // onClick={addPostFunc}
        >
          Login <i className="fa fa-chevron-right ms-2"></i>
        </MyButton>
      </form>
    </div>
  );
}
