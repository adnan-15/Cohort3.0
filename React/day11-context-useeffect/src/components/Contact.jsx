import React, { useEffect } from "react";

const Contact = () => {
  // console.log("Conteact rendering ");

  let interval = setInterval(() => {
    console.log("hey i m in contact");
  }, 1000);

  useEffect(() => {
    console.log("contact rendering , component ayega to ye line chlegi");

    // only use when your componenets leaks some memory and if u want to track any updates
    //for unmounting
    return () => {
      clearInterval(interval);
      console.log(
        "im triggered out or unmounting happen, component jaega to chlegi ye line",
      );
    };
  }, []);

  return <div>Contact</div>;
};

export default Contact;
