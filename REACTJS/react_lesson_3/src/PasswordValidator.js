import { useState } from "react";

function PasswordValidator() {
  const [pass, setPass] = useState("");
  const [kichikHarf, setKichikHarf] = useState(false);
  const [kattaHarf, setKattaHarf] = useState(false);
  const [son, setSon] = useState(false);
  const [belgi, setBelgi] = useState(false);
  const [uzunlik, setUzunlik] = useState(false);
  function validator(password) {
    if (password.match(/[a-z]/g)) {
      setKichikHarf(true);
    } else {
      setKichikHarf(false);
    }
    if (password.match(/[A-Z]/g)) {
      setKattaHarf(true);
    } else {
      setKattaHarf(false);
    }
    if (password.match(/[0-9]/g)) {
      setSon(true);
    } else {
      setSon(false);
    }
    if (password.match(/[!@#$%^&*()_+";',.?><:`~]/g)) {
      setBelgi(true);
    } else {
      setBelgi(false);
    }
    if (password.length >= 6) {
      setUzunlik(true);
    } else {
      setUzunlik(false);
    }
  }
  return (
    <>
      <input
        type="password"
        className="form-control"
        onChange={(e) => {
          setPass(e.target.value);
          validator(e.target.value);
        }}
      />
      <ul className="mt-3">
        {son ? (
          <li className="text-success">Kamida 1 ta son</li>
        ) : (
          <li className="text-danger">Kamida 1 ta son</li>
        )}
        {belgi ? (
          <li className="text-success">Kamida 1 ta belgi</li>
        ) : (
          <li className="text-danger">Kamida 1 ta belgi</li>
        )}
        {kichikHarf ? (
          <li className="text-success">Kamida 1 ta kichik harf</li>
        ) : (
          <li className="text-danger">Kamida 1 ta kichik harf</li>
        )}
        {kattaHarf ? (
          <li className="text-success">Kamida 1 ta katta harf</li>
        ) : (
          <li className="text-danger">Kamida 1 ta katta harf</li>
        )}
        {uzunlik ? (
          <li className="text-success">Minimal 6 ta belgi</li>
        ) : (
          <li className="text-danger">Minimal 6 ta belgi</li>
        )}
      </ul>
      {son && belgi && kichikHarf && kattaHarf && uzunlik ? (
        <button className="btn btn-primary">Submit</button>
      ) : null}
    </>
  );
}

export default PasswordValidator;
