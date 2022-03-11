import Notification from "./Notification";
import Form from "./Form";
import ToggleBtn from "./ToggleBtn";

function App() {
  return (
    <>
      <div className="container">
      <h1>Lesson 3</h1>
        <Notification />
        <hr />
        <ToggleBtn />
        <hr />
        <div className="w-50 mx-auto p-3 shadow rounded">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
