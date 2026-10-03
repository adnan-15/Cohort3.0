import { createContext, useState } from "react";

// setup out  blank store---
const MyStore = createContext();

// make a provider of our store who handle data and serves to the customer
export const ContextProvider = ({ children }) => {

    const [centralValue,setCentralValue] = useState("Me ")
  return <MyStore.Provider>{children}</MyStore.Provider>;
};
