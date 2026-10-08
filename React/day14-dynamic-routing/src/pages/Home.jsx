import React, { useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { MyStore } from "../context/MyContext";
import axios from "axios";

const Home = () => {
  let { productsData, setProductsData } = useContext(MyStore);

  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (e) {
      console.log("error in api is", e);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="p-2  grid grid-cols-4 gap-4 ">
      {productsData.map((val) => {
        return <ProductCard product={val} key={val.id} />;
      })}
    </div>
  );
};

export default Home;
