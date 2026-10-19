import React from "react";

const Home = React.memo(
  ({ users }) => {
    console.log("home rendering");

    return <div>Home</div>;
  },
  (prevValue, nextValue) => {
    console.log(prevValue, nextValue);
    return prevValue.users.id === nextValue.users.id;
  },
);

export default Home;
