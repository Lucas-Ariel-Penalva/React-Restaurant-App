import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Login from "./views/Login";
import Menu from "./views/Menu";
import Profile from "./views/Profile";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {

  //The keys are the emails, each key contains an object with the password, the token received on account creation and all the orders.
  const [users, setUsers] = useLocalStorage("users", {});

  //Tuple, first item is false if not logged. if logged, first item matches an email and second item has to match the token.
  const [activeUser, setActiveUser] = useLocalStorage("activeUser", [false, ""]);

  //on Sign in, check users object for the email and and user.password. for the password match.
  //If results are valid, set the auth tuple to [username, token];

  return (
    <Routes>
      {!activeUser[0] && (
        <Route
          path="/login"
          element={
            <Login users={users} setUsers={setUsers} setActiveUser={setActiveUser} />
          }
        ></Route>
      )}

      {activeUser[0] && (
        <>
          <Route path="/menu" element={<Menu />}></Route>
          <Route
            path="/profile"
            element={<Profile logOut={() => setActiveUser([false,""])} />}
          ></Route>
        </>
      )}

      <Route
        path="*"
        element={<Navigate to={activeUser[0] ? "/profile" : "/login"} />}
      />
    </Routes>
  );
}

export default App;
