import {  useNavigate } from "react-router"
import {useForm} from "react-hook-form"
import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";

export const useAuth = () =>{
    let navigate = useNavigate();
    let dispatch  = useDispatch();
    let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log("egister",data);
    
  };
  const loginForm = async(data) => {
    // api call
   try {
     let response = await loginUserApi(data)
     dispatch(addUser(response))
     toast.success("user login successfully")
   } catch (error) {
    console.log(error);
    
   }

    
  };

    return {
        navigate,
        register,
        handleSubmit,
        errors,
        registerForm,loginForm
    }   
}