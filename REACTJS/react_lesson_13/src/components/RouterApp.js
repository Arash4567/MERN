import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes, privateRoutes } from "../router/Router";

export default function RouterApp(props) {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map((item) => (
            <Route
              path={item.path}
              element={item.element}
              exact={item.exact}
              key={item.path}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((item) => (
            <Route
              path={item.path}
              element={item.element}
              exact={item.exact}
              key={item.path}
            />
          ))}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </>
  );
}
