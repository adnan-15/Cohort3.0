import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  let data = useLocation();
  console.log(data);

  const {setloggedInUser} = useContext(Auth)

  return (
    <div className="border-r p-3 border-gray-500 flex flex-col justify-between ">
      <div className=" gap-10 flex flex-col ">
        <h1 className="text-3xl font-semibold">E-comm</h1>

        <div className="flex flex-col gap-6 ml-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main/user"}
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main/product"}
          >
            Products
          </NavLink>
        </div>
      </div>

      <button onClick={()=>{
        localStorage.removeItem("loggedInUser")
        setloggedInUser(null)
        toast.warn("User logged out")
      }} className="py-3 bg-red-600 text-white rounded cursor-pointer">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
