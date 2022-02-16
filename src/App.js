import { useEffect, useState } from "react";
import Login from "./views/Login";

function App() {
  //const apiKey = "d8093bd4f8084658b7b0ba0c844ce6a3";
  //ejemplo https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.

  return (
    <main className="App">
      <h1>This is the main app component, anything below is currently a view</h1>
      <Login />
    </main>
  );
}

export default App;
