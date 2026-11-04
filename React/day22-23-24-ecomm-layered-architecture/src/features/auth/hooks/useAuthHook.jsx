import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUserAction } from "../state/authAction";

export const useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log("egister", data);
  };
  const loginForm = async (data) => {
    // api call
    try {
      console.log("thunk action triggered...");
      dispatch(loginUserAction(data));
      toast.success("user login successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    registerForm,
    loginForm,
  };
};
