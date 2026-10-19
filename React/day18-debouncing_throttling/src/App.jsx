import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [searchData, setsearchData] = useState(null)
  const [productsData, setproductsData] = useState([])
  const [scrollY, setscrollY] = useState(null)
  let throttle = false

  let getProducts = async()=>{
    let res = await axios.get("https://fakestoreapi.com/products")
    setproductsData(res.data);
  }

  let filterData = ()=>{
    console.log("filter running....");
    let result = productsData.filter((val)=>val.title.toLowerCase().includes(searchData.toLowerCase()))
    setproductsData(result)
  }

  // debouncing
  useEffect(()=>{
    if(!searchData) return;
    
    let timeout = setTimeout(() => {
      filterData();
    }, 700);

    return ()=>clearTimeout(timeout) //clean up function ye tb chlega jb new ayega or purana jaega 
  },[searchData])

  // throtting
  useEffect(()=>{
    let handleScroll = ()=>{
      if(throttle) return;
      throttle=true
      console.log("scroll triggered...");
      setscrollY(window.scrollY)
      setTimeout(() => {
        throttle=false
      }, 5000);
    }
    window.addEventListener("scroll",handleScroll)

    return ()=>window.removeEventListener("scroll",handleScroll)
  },[])

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div>
      <h1>Debouncing...</h1>

    <input style={{padding:"10px 30px"}} type="text" placeholder='Search Products...' onChange={(e)=>setsearchData(e.target.value)}/>
      {productsData.map((val)=>{
        return <h1 key={val.id}>{val.title}</h1>
      })}
    </div>
  )
}

export default App