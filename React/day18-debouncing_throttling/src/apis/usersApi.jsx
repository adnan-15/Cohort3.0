import axios from "axios";


export let getUsers = async()=>{
    console.log("api wala func chala");
    
    let res  = await axios.get("https://fakestoreapi.com/users")
    console.log(res.data);
  }