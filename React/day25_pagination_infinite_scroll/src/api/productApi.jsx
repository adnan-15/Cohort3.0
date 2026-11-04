import axios from "axios";

export const getAllProducts = async (limit, pageParam = 1) => {
  try {
    console.log("page params ->",pageParam);
    
    let res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`,
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
