'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";
import './style.css'
const LoginModal = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [signInstatus, setsignIn] = useState(false)
  const router = useRouter();

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };


  const handlesignupSubmit = async (e) => {
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



  const handlesigninSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    
    try {
      const signInResponse = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        callbackUrl: "/admin-dashboard",
      });
      if (signInResponse === null) {
        
        router.push('/')
        setErrorMessage("Invalid email or password");
      }
      

      if (!signInResponse.error) {
        router.push("/admin-dashboard");
      } else {
        router.push(router.asPath);

        setErrorMessage(signInResponse.error);
      }

    } catch (error) {
      router.push('/')
      
    }
  };


  return (
    <>
      <form
        onSubmit={signInstatus ? handlesigninSubmit : handlesignupSubmit}
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

              <div className="modal-body">
                <div className="login-registration-form">
                  <div className="form-title">
                    <h2>{signInstatus ? "signin" : "signup"} to continue</h2>
                    <p>Enter your email address for {signInstatus ? "signin" : "signup"}.</p>
                  </div>

                  <div className="form-inner mb-20">
                    <input required={true}
                      value={formData.email} onChange={handleEmailChange} type="email" placeholder="User name or Email *" />
                  </div>
                  <div className="form-inner mb-20">
                    <input value={formData.password} onChange={handlePasswordChange} type="password" placeholder="********" />
                  </div>
                  <div>
                    <button onClick={() => setsignIn(!signInstatus)} style={{ background: "inherit" }}>
                      {signInstatus ? "toggle it to Sign Up" : "toggle it to Sign In"}
                    </button>
                  </div>
                  <div className={`switch ${signInstatus ? "on" : "off"}`} onClick={() => setsignIn(!signInstatus)}>
                    <div className="switch-slider"></div>
                  </div>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}>
                    <p style={{
                      color: "red",
                      textAlign: "center",
                      marginTop: "10px",
                    }}>{errorMessage}</p>
                  </div>

                  <input value="submit" type="submit" className="login-btn mb-25" />


                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

    </>
  );
};

export default LoginModal;
