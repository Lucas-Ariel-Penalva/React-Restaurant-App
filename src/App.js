import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import Login from "./views/Login";
import Menu from "./views/Menu";
import Profile from "./views/Profile";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  //const apiKey = "d8093bd4f8084658b7b0ba0c844ce6a3";
  //ejemplo https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.

  const [auth, setAuth] = useLocalStorage("auth", false);

  //If token is present, sign in automatically by touching the button = set auth to true
  

  const [tokenObtained, setTokenObtained] = useLocalStorage("tokenObtained", false);

  
  // Array filled with objects {}, the objects are sorted by date
  const [orders, setOrders] = useLocalStorage("orders", []);


  const authenticate = async (e) => {
    e.preventDefault();
/*
    const URL = "http://challenge-react.alkemy.org/";

    const DATA = { email: "challenge@alkemy.org", password: "react" };

    //THIS WORKS AND ABSOLUTELY GETS US A TOKEN

    axios({
      method: "POST",
      url: URL,
      data: DATA,
    }).then((res) => console.log(JSON.stringify(res)));

    console.log(JSON.stringify());

    //Use try/catch.
    //if success, send user to menu page.
    */
   setAuth(true);
  };






  const LogOut = () => {
    //Set local storage logged state to false.
  };

  return (

    <Routes>
    
      {!auth && (
        <Route
          path="/login"
          element={<Login authenticate={authenticate}/>}
        ></Route>
      )}

      {auth && (
        <>
          <Route path="/menu" element={<Menu />}></Route>
          <Route
            path="/profile"
            element={<Profile logOut={() => setAuth(false)} />}
          ></Route>
        </>
      )}

      <Route path="*" element={<Navigate to={auth ? "/profile" : "/login" } />} />
    </Routes>
  );
}

export default App;
