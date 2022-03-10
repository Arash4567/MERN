import React, { useState } from "react";

function PasswordValidator() {
  const [password, setPassword] = useState("");
  const [kichikHarf, setKichikHarf] = useState(false);
  const [kattaHarf, setKattaHarf] = useState(false);
  const [son, setSon] = useState(false);
  const [maxsusBelgi, setMaxsusbelgi] = useState(false);
  const [uzunlik, setUzunlik] = useState(false);
  function validatePassword(password) {
    //   console.log(password);
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
    if (password.match(/[$&+,:;=?@#|'<>.^*()%!-]/g)) {
      setMaxsusbelgi(true);
    } else {
      setMaxsusbelgi(false);
    }
    if (password.length >= 6) {
      setUzunlik(true);
    } else {
      setUzunlik(false);
    }
  }
  return (
    <>
      <label htmlFor="pass">Enter password:</label>
      <input
        id="pass"
        className="form-control"
        type="password"
        onChange={(e) => {
          validatePassword(e.target.value);
          setPassword(e.target.value);
        }}
      />
      <p className="lead mt-3">
        Password value: <strong>{password}</strong>
      </p>
      <p>Sizning parolingizda:</p>
      <ul className="h6">
        {kattaHarf ? (
          <li className="text-success">Kamida 1 ta bosh harf</li>
        ) : (
          <li className="text-danger">Kamida 1 ta bosh harf</li>
        )}
        {kichikHarf ? (
          <li className="text-success">Kamida 1 ta kichik harf</li>
        ) : (
          <li className="text-danger">Kamida 1 ta kichik harf</li>
        )}
        {son ? (
          <li className="text-success">Kamida 1 ta son</li>
        ) : (
          <li className="text-danger">Kamida 1 ta son</li>
        )}
        {maxsusBelgi ? (
          <li className="text-success">Kamida 1 ta maxsus belgi</li>
        ) : (
          <li className="text-danger">Kamida 1 ta maxsus belgi</li>
        )}
        {uzunlik ? (
          <li className="text-success">Minimal 6ta belgi</li>
        ) : (
          <li className="text-danger">Minimal 6ta belgi</li>
        )}
      </ul>
    </>
  );
}

export default PasswordValidator;
