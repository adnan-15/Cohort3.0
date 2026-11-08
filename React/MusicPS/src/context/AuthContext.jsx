import React, { createContext } from "react";

export const AuthContextData = createContext();

const AuthContext = ({ children }) => {
  const registerUser = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users") )|| [];

    const alreadyExist = users.find((user) => {
      return user.email === newUser.email;
    });

    if (alreadyExist)
      return {
        success: false,
        message: "User already exist",
      };

    const UpdateUser = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(UpdateUser));
    return {
      success: true,
      message: "user created successfully",
    };
  };
  return (
    <AuthContextData.Provider value={registerUser}>{children}</AuthContextData.Provider>
  );
};

export default AuthContext;
