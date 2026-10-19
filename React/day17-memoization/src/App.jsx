import React, { useCallback, useMemo, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("App rendering...");

  const [count, setcount] = useState(0);
  const [users, setUsers] = useState({ name: "Raghav", id: 789 });

  let calculation = useMemo(() => {
    console.log("calculation");

    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += i;
    }
    return sum;
  }, [users]);

  let greet = useCallback(() => {
    console.log("good evening");
  }, []);

  return (
    <div>
      App
      <h2>Count is {count}</h2>
      <h2>Name is {users.name}</h2>
      <h2>My calculation is {calculation}</h2>
      <button onClick={() => setUsers({ ...users, name: "Ranjeet" })}>
        Change name
      </button>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increament
      </button>
      <Home users={users} />
      <About users={greet} />
    </div>
  );
};

export default App;
