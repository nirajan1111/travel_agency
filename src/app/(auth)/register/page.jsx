'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:3000/api/Users", formData);
  
        if (response.data.success) {
          router.push("/");
        } else {
          setErrorMessage(response.data.message);
        }
      } catch (error) {
        
      }
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          required
        />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
