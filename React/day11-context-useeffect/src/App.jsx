import React, { useCallback, useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { ContextProvider, MyStore } from "./context/MyContext";
import axios from "axios";

const App = () => {
  console.log("App rendering...");

  const [apiData, setapiData] = useState(null);

  let getData = async () => {
    let res = await axios.get("https://dummyjson.com/quotes/random");
    // console.log(res.data);
    console.log(res);
    setapiData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Count</h1>
      <button>Inreament</button>
      <ContextProvider>
        <Home />
      </ContextProvider>
    </div>
  );
};

export default App;
