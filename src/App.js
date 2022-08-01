import React, { useState } from "react";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import { LogginContext } from "./context/LogginContext";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const state = { isLogged, setIsLogged };

  return (
    <LogginContext.Provider value={state}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </LogginContext.Provider>
  );
}

export default App;
