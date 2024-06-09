'use client'
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const SignupModal = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

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
      const response = await axios.post("http://localhost:3000/api/Users", formData);
      
      if (response.data.success) {
        router.push("/dashboard");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <div >
          <div>
            <div>
              <div>
                <img src="/assets/img/home1/signup-modal-header-img.jpg" alt="" />
              </div>
              <div>
                <div>
                  <div>
                    <h2>Create an Account</h2>
                    <p>Enter your email address and choose a password to create an account.</p>
                  </div>
                  <div>
                    <input
                      required={true}
                      value={formData.email || ""}
                      onChange={handleEmailChange}
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <input
                      required={true}
                      value={formData.password || ""}
                      onChange={handlePasswordChange}
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <input value="Submit" type="submit" />
                  <div>
                    <span>or</span>
                  </div>
                  <a href="#">
                    <div>
                      <img src="/assets/img/home1/icon/google-icon.svg" alt="" />
                    </div>
                    Sign up with Google
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <p>{errorMessage}</p>
    </div>
  );
};

export default SignupModal;
