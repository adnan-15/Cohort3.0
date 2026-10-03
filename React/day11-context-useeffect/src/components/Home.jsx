import React, { useContext, useEffect, useState } from 'react'
import { MyStore } from '../context/MyContext';
import About from './About';
import Contact from './Contact';

const Home = () => {
  
    // let {count,setCount} = useContext(MyStore);
    
    let [toggle, settoggle] = useState(true);

    useEffect(()=>{  
        console.log("Home rendering ");
    },[toggle])
  return (
    <div>Home-
        <button onClick={()=>settoggle((prev)=>!prev)}>in</button>
        {
            toggle?<About/>:<Contact/>
        }
    </div>

  )
}

export default Home