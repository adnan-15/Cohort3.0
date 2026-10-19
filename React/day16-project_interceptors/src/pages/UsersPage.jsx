import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosInstance";

const UsersPage = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  let getUserData = async () => {
    try {
      let res = await axiosInstance.get('/users')
      console.log(res);
      setisLoading(false);
      setUsersData(res.data);
    } catch (err) {
      console.log("error in user page", err);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  if (isLoading) {
    return <h1>Loadig data</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {usersData.map((val) => {
       return <UserCard key={val.id} user={val} />;
      })}
    </div>
  );
};

export default UsersPage;
