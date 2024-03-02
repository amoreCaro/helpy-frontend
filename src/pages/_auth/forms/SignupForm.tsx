import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your signup logic here, such as sending a request to your server.
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold underline">Sign Up</h2>

      <div className="input-container">
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder='First Name' />     <br />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder='last Name' />       <br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='Email' />            <br />
        <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder='Password' />   <br />
       </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
