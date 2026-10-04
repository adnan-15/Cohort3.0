import { createContext, useState } from "react";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [formData, setformData] = useState([]);

  console.log(formData);

  return (
    <RecipeContext.Provider value={{ formData, setformData }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
