import { useState } from "react";
import TableList from "./components/TableList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPost] = useState([
    { id: 1, name: "Spring", month: 4 },
    { id: 2, name: "Summer", month: 4 },
    { id: 3, name: "Fall", month: 4 },
    { id: 4, name: "Winter", month: 4 },
  ]);
  return (
    <>
      {/* <div className="container">
      <h1>Lesson 3</h1>
        <Notification />
        <hr />
        <ToggleBtn />
        <hr />
        <div className="w-50 mx-auto p-3 shadow rounded">
          <Form />
        </div>
      </div> */}
      <div className=" container mt-5 shadow rounded p-3">
        <h5 className="text-center">My Favourite Seasons</h5>
        <table className="table table-striped table-hover table-bordered text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Season</th>
              <th>Months</th>
              <th>Actions</th>
            </tr>
          </thead>
          <TableList posts={posts} />
        </table>
      <hr />
      <MyInput type="number" placeholder="Enter number..."/>
      <MyButton className="btn btn-primary mt-3">
        Add data
      </MyButton>
      </div>
    </>
  );
}

export default App;
