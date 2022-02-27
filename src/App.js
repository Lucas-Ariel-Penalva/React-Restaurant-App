import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./views/Register";
import Login from "./views/Login";
import Menu from "./views/Menu";
import Profile from "./views/Profile";
import About from "./views/About";
import useLocalStorage from "./hooks/useLocalStorage";


function App() {

  // The keys of the Users array are the emails, and each key contains an object with the password, the token received on account creation and all the orders.

  const [users, setUsers] = useLocalStorage("users", {});

  // If there is an active user, allow access to protected routes.

  const [activeUser, setActiveUser] = useLocalStorage("activeUser", [
    false,
    "",
  ]);

  return (
    <Routes>
      {!activeUser[0] && (
        <>
          <Route
            path="/register"
            element={
              <Register
                users={users}
                setUsers={setUsers}
                setActiveUser={setActiveUser}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={<Login users={users} setActiveUser={setActiveUser} />}
          ></Route>
        </>
      )}

      {activeUser[0] && (
        <>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/about" element={<About />}></Route>
        </>
      )}

      <Route
        path="*"
        element={<Navigate to={activeUser[0] ? "/menu" : "/register"} />}
      />
    </Routes>
  );
}

export default App;
