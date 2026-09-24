import React, { useState } from "react";

const Register = ({ setToggle, setUsers }) => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
      image: "",
    });
  };
  return (
    <div className="w-60 p-6 rounded-xl gap-4 flex flex-col bg-white items-center justify-center">
      <h1 className=" text-2xl">Register</h1>
      <form onSubmit={submitForm} className="flex flex-col gap-4">
        <input
          type="text"
          required
          className="p-2 border border-gray-400 rounded"
          value={formData.name}
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <input
          type="text"
          required
         className="p-2 border border-gray-400 rounded"
          value={formData.email}
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <input
          type="password"
          required
          className="p-2 border border-gray-400 rounded"
          value={formData.password}
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <input
          type="url"
          required
          className="p-2 border border-gray-400 rounded"
          value={formData.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <button className="p-2 bg-blue-600 text-white rounded">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <span onClick={() => setToggle((prev) => !prev)} className="text-blue-600 cursor-pointer">Login Here</span>
      </p>
    </div>
  );
};

export default Register;
