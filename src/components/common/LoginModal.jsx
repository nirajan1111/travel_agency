'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
const LoginModal = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    console.log(formData);
    try {
      const response = await axios.post("http://localhost:3000/api/Users", formData);
      console.log(response.data);
      if (response.data.success) {
        router.push("/dashboard");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    console.log(formData);
    try {
      const response = await axios.post("http://localhost:3000/api/Users/Login", formData);
      console.log(response.data);
      if (response.data.success) {
        
        router.push("/dashboard");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        onSubmit={handleLogin}
        method="post"
      >
        <div
          className="modal login-modal"
          id="user-login"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-clode-btn" data-bs-dismiss="modal" />
              <div className="modal-header">
                <img src="/assets/img/home1/login-modal-header-img.jpg" alt="" />
              </div>
              <div className="modal-body">
                <div className="login-registration-form">
                  <div className="form-title">
                    <h2>Sign in to continue</h2>
                    <p>Enter your email address for signin.</p>
                  </div>

                  <div className="form-inner mb-20">
                    <input required={true}
                      value={formData.email} onChange={handleEmailChange} type="email" placeholder="User name or Email *" />
                  </div>
                  <div className="form-inner mb-20">
                    <input   value={formData.password} onChange={handlePasswordChange} type="password" placeholder="********" />
                  </div>
                  <input value="submit" type="submit" className="login-btn mb-25"/>
                   
                  <div className="divider">
                    <span>or</span>
                  </div>
                  <a href="#" className="google-login-btn">
                    <div className="icon">
                      <img src="/assets/img/home1/icon/google-icon.svg" alt="" />
                    </div>
                    Sign in with Google
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <p className="text-red-500">{errorMessage}</p>
    </>
  );
};

export default LoginModal;
