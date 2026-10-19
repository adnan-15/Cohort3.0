import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { axiosInstance } from '../config/axiosInstance';

const ProductPage = () => {

  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  let getProductsData = async()=>{
    try{
      let res = await axiosInstance.get('/products')
      console.log(res);
      setProductsData(res.data)
      setIsLoading(false)
    }
    catch(e){
      console.log("error in products api",e);
    }
  }

  useEffect(()=>{ 
    getProductsData();
  },[])

  if(isLoading) return <h1>Loading products</h1>

  return (
    <div className='grid grid-cols-4 gap-4'>
      {
        productsData.map((val)=>{
          return <ProductCard key={val.id} product={val}/>
        })
      }
    </div>
  )
}

export default ProductPage