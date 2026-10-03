import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  // let obj = {
  //   name: "Adnan",
  //   age: 45,
  //   role: "MERN STACK DEV",
  // };
  // localStorage.setItem("user", JSON.stringify(obj));
  // let lsd = JSON.parse(localStorage.getItem("user"));
  // console.log(lsd);

  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );

  const [updatedData, setUpdatedData] = useState(null)
  console.log("app me hu updated data=>",updatedData);

  const dltUser = (id) =>{
    let filterUser = users.filter((val,index)=>{
      return index!=id
    })
    setUsers(filterUser)
    localStorage.setItem('user',JSON.stringify(filterUser))
  }


  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex gap-4 flex-wrap">
          {users.map((elem) => {
            return <Usercard key={elem.id} user={elem} setToggle={setToggle} dltUser={dltUser}  setUpdatedData={setUpdatedData}/>;
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form setUsers={setUsers} setToggle={setToggle} users={users} updatedData={updatedData}/>
        </div>
      )}
    </div>
  );
};

export default App;
