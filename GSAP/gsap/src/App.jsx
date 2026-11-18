import "./index.css";
import { gsap } from "gsap";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";

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



  useGSAP(() => {
    gsap.to(["#id1","#id2"], {
      x: 300, //move 300px right
      rotation: 180, //spin
      duration: 2,
      ease: "power2.out",
    });
  });

  return (
    <>
      {/* <div className="box" ref={useReff}>
      App
    </div> */}

    <div className="app">
      <div id="id1" ref={useReff}>A</div>
      <div id="id2" ref={useReff}>A</div>
      <div id="id3" ref={useReff}>A</div>
    </div>
    </>
  );
};

export default App;
