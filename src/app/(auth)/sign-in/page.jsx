'use client'
import { useState } from "react";
import { useRouter } from "next/navigation"; // Change from next/navigation to next/router
import { signIn } from "next-auth/react";

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
    setErrorMessage("");
    try {
      const signInResponse = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        callbackUrl: "/admindashboard",
      });
      if(signInResponse===null){
        router.push('/sign-in')
        setErrorMessage("Invalid email or password");
      }
      console.log(signInResponse);

      if (!signInResponse.error) {
        router.push("/admindashboard");
      } else {
        router.push(router.asPath);

        setErrorMessage(signInResponse.error);
      }

    } catch (error) {
      router.push('/sign-in')
      console.log(error);
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
