import "./index.css";
import { gsap } from "gsap";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const App = () => {
  const useReff = useRef(null);

  // TWEEN - A **tween** is a single animation instance - it changes one or more properties of a target over time.
  // useGSAP(() => {
  //   gsap.to(".box", {
  //     x: 300, //move 300px right
  //     rotation: 180, //spin
  //     duration: 2,
  //     ease: "power2.out",
  //   });
  // });



  // useGSAP(() => {
  //   gsap.to(["#id1","#id2"], {
  //     x: 300, //move 300px right
  //     rotation: 180, //spin
  //     duration: 2,
  //     ease: "power2.out",
  //   });
  // });



  
//   useGSAP(()=>{
//   const tl = gsap.timeline({defaults:{delay:0.5}})
//     tl.to(".box1",{
//     duration:1,
//     rotate:180,
//     x:1000,
//   }).to(".box2",{
//     duration:1,
//     rotate:180,
//     x:1000,
//   },"-=0.2").addLabel("labelhai").to(".box3",{
//     duration:1,
//     rotate:180,
//     x:1000,
//   }).to(".box4",{
//     duration:1,
//     rotate:180,
//     x:1000,
//   },"labelhai")
// })


  // useGSAP(()=>{
  //   const tl = gsap.timeline();
  //   tl.to(".box",{
  //     stagger:{
  //       each:0.1,
  //       from:"start",
  //       grid:"auto",
  //     },
  //     x:1000,
  //     duration:2,
  //     delay:1,
  //   })
  // })



  // const tl = gsap.timeline()
  // useGSAP(()=>{
  //   tl.to(".loader",{
  //     repeat:-1,
  //     rotate:360,
  //     ease:"linear",
  //     duration:1.5,
  //   })
  // })


  
  // useGSAP(()=>{
  //   const obj ={
  //    val:0
  //   }
  //   const tl = gsap.timeline({paused:true})
  //   gsap.to(obj,{
  //     duration:1.7,
  //     ease:"power2.inOut",
  //     val:100,
  //     onUpdate:()=>{
  //       useReff.current.textContent=`${Math.round(obj.val)}%`
  //     },
  //     onComplete:()=>{
  //       gsap.to(useReff.current,{
  //         duration:1,
  //         ease:"power2.in",
  //         opacity:0,
  //         onComplete:()=>{
  //           tl.play()
  //         }
  //       })
        
  //     }
  //   })


  //   tl.to(".loader",{
  //     yPercent:1000,
  //     duration:1.2,
  //     ease:"power2.in",
  //   })
  //   .from("img",{
  //     duration:1.2,
  //     scale:1.2,
  //     ease:"power2.out"
  //   },"-=1.1")
  //   .from("h1",{
  //     duration:1.2,
  //     ease:"power1.out",
  //     yPercent:300,
  //     opacity:0,
  //     stagger:{
  //       duration:0.1,
  //     }
  //   },"-=1.05")
  //   .from("p",{
  //       duration:1.2,
  //       ease:"power1.out",
  //       yPercent:300,
  //       opacity:0,
  //     })
  // })





  // useGSAP(()=>{
  //   gsap.registerPlugin(ScrollTrigger);
    // gsap.to(".box",{
    //   x:1300,
    //   scrollTrigger:{
    //     trigger:".box",
    //     start:"top 80%", //top - box ka top , 70% - viewport ka 70%
    //     end:"top 20%",
    //     scrub:true,
    //     markers:true,
    //     onEnter:()=>{console.log("enter");},
    //     onLeave:()=>{console.log("leave");},
    //     onEnterBack:()=>{console.log("enter back");},
    //     onLeaveBack:()=>{console.log("leave back");},
    //   }
    // })

  //   gsap.set(".p2 img",{
  //     clipPath:"inset(33% 28% 28% 32%)",
  //     scale:1.4
  //   })
  //   gsap.to(".p2 img",{
  //     clipPath:"inset(0% 0% 0% 0%)",
  //     scale:1,
  //     scrollTrigger:{
  //       trigger:".p2",
  //       markers:true,
  //       scrub:true,
  //       // toggleActions:"play reverse play reverse",
  //       start:"top top",
  //       end:"bottom top",
  //       pin:true,
  //     }
  //   })
  // })
  


  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".reveal-item", { 
      opacity: 0, 
      y: 40 
    });

    ScrollTrigger.batch(".reveal-item", {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,   // Staggers the items within this specific batch
        });
      }
    });

  })


  return (
    <>
      {/* <div className="box" ref={useReff}>
      App
    </div> */}
{/* 
    <div className="app">
      <div id="id1" ref={useReff}>A</div>
      <div id="id2" ref={useReff}>A</div>
      <div id="id3" ref={useReff}>A</div>
    </div> */}

    {/* <div className="box1" ref={useReff}></div>
    <div className="box2" ref={useReff}></div>
    <div className="box3" ref={useReff}></div>
    <div className="box4" ref={useReff}></div> */}


    {/* <div className="box">1</div>
    <div className="box">2</div>
    <div className="box">3</div>
    <div className="box">4</div>
    <div className="box">5</div>
    <div className="box">6</div> */}

    {/* <div className="loader"></div>
    <button onClick={()=>tl.play()}>play</button>
    <button onClick={()=>tl.pause()}>pause</button>
    <button onClick={()=>tl.reverse()}>reverse</button> */}



      {/* <div className="main">
        <div className="loader">
        <h2 ref={useReff}>0%</h2>
      </div>

      <div className="home">
        <img src="https://images.unsplash.com/photo-1782217193744-bed098daf981?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
      </div>

      <div className="content">

      <h1>Ad meliora</h1>
      <p>TOWARD BETTER THINGS</p>
      </div>
      </div> */}




{/* <div className="p1">1</div>
<div className="p2"> */}
  {/* <div className="box">
    box
  </div> */}
  {/* <img src="https://images.unsplash.com/photo-1782217193744-bed098daf981?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
</div>
<div className="p3">
  3
</div> */}




<ul class="item-list">
  <li class="reveal-item">Item 1</li>
  <li class="reveal-item">Item 2</li>
  <li class="reveal-item">Item 1</li>
  <li class="reveal-item">Item 2</li>
  <li class="reveal-item">Item 1</li>
  <li class="reveal-item">Item 2</li>
  <li class="reveal-item">Item 1</li>
  <li class="reveal-item">Item 2</li>
  <li class="reveal-item">Item 1</li>
  <li class="reveal-item">Item 2</li>
  <li class="reveal-item">Item 1</li>
  <li class="reveal-item">Item 2</li>
  <li class="reveal-item">Item 1</li>
  <li class="reveal-item">Item 2</li>
  <li class="reveal-item">Item 1</li>
  <li class="reveal-item">Item 2</li>
  <li class="reveal-item">Item 1</li>
  <li class="reveal-item">Item 2</li>
  <li class="reveal-item">Item 1</li>
  <li class="reveal-item">Item 2</li>


</ul>

      
    </>
  );
};

export default App;
