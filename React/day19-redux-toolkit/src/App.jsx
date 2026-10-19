import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice";

const App = () => {

  let dispatch = useDispatch()

  let { count } = useSelector((store) => store.counter);

  console.log(count);

  return (
    <>
      <div>App {count}</div>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(increment(65))}>Increment</button>
    </>
  );
};

export default App;
