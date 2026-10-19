import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const useAuth = () => {
  const { registeredUsers, setregisteredUsers, setloggedInUser } =
    useContext(Auth);
  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let loginFormSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("user not found or invalid credentials");
      reset();
      return;
    }

    setloggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("user logged in successfully");
    navigate("/main");
    reset();
  };

  let registerFormSubmit = (data) => {
    let ar = [...registeredUsers, data];
    setregisteredUsers(ar);
    toast.success("user registered successfully");
    setloggedInUser(data);
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    localStorage.setItem("registeredUsers", JSON.stringify(ar));
    navigate("/main");
    reset();
  };
  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
  };
};
