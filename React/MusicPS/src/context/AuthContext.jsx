import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const Auth = createContext();

const AuthContext = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null,
  );
  

  const registerUser = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    let userExist = users.find(
      (n) => n.email.toLowerCase().trim() === data.email.toLowerCase().trim(),
    );
    if (userExist) return {success:false};
    if(data.role.length===0) data.role="listener"
    const updateUser = [...users, data];
    localStorage.setItem("users", JSON.stringify(updateUser));
    return {success:true};
  };

  const loginUser = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    let userExist = users.find(
      (n) =>
        n.email.toLowerCase().trim() === data.email.toLowerCase().trim() &&
        n.password === data.password,
    );
    if (!userExist) {
      toast.error("User not exist");
      return {success:false}
    }
    setCurrentUser(userExist);
    localStorage.setItem("currentUser", JSON.stringify(userExist));
    toast.success("User Logged in successfully");
    
    return {success:true,role:userExist.role};

  };

  const logoutUser = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };
  return (
    <Auth.Provider value={{ registerUser, loginUser, currentUser, logoutUser ,}}>
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
