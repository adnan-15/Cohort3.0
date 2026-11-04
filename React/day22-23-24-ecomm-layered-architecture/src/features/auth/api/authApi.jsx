import { api } from "../../../config/api";

export const loginUserApi = async (credentials) => {
  try {
    let res = await api.post("/auth/login", credentials);
    console.log("response from login api ", res);
    localStorage.setItem("accessToken",res.data.accessToken)
    return res.data;
  } catch (err) {
    console.log("eror in login api",err);
  }
};

export const hydrateUser = async () => {
    let token  = localStorage.getItem("accessToken")
  try {
    let res = await api.get("/auth/me",{
        headers:{
            Authorization:`Bearer ${token}`, //pass JWT via authorization header
    }
    });
    
    console.log("response from hydration api ", res);
    return res.data;
  } catch (err) {
    console.log("errror in hydratoin ",err);
  }
};