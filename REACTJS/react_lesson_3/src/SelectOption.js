import { useState } from "react";

function SelectOption() {
  const [selectData, setSelectData] = useState("");
  return (
    <>
      <label htmlFor="job">Choose your job:</label>
      <select
        id="job"
        className="form-select"
        onChange={(e) => setSelectData(e.target.value)}
      >
        <option value="" defaultValue>
          Select...
        </option>
        <option value="doctor">Doctor</option>
        <option value="driver">Driver</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>
      <p className="lead">
        Select data: <strong>{selectData}</strong>
      </p>
      {selectData === "doctor" ? (
        <img
          src={require("./images/doctor.jpg")}
          alt="Doctor"
          className="w-100"
        />
      ) : null
      }
      {selectData === "driver" ? (
        <img
          src={require("./images/driver.jpeg")}
          alt="Driver"
          className="w-100"
        />
      ) : null
      }
      {selectData === "teacher" ? (
        <img
          src={require("./images/teacher.jpg")}
          alt="Driver"
          className="w-100"
        />
      ) : null
      }
      {selectData === "student" ? (
        <img
          src={require("./images/student.jpg")}
          alt="Driver"
          className="w-100"
        />
      ) : null
      }
      <div className="my-3"></div>
    </>
  );
}

export default SelectOption;
