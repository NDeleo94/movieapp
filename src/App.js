import React, { useState } from "react";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import { LogginContext } from "./context/LogginContext";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const state = { isLogged, setIsLogged };

  return (
    <LogginContext.Provider value={state}>
      <AppRouter />;
    </LogginContext.Provider>
  );
}

export default App;
