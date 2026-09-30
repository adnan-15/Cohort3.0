import React from "react";
import { useState } from "react";
const Counter = () => {
  console.log("count is rendering");
  let (count, setCount) = useState(0);
  }
  return (
    <div>
      <h1>Count is {count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        Increament
      </button>
    </div>
  );
};

export default Counter;
