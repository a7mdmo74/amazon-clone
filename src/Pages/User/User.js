import React, { useState } from "react";
import { toast } from "react-toastify";
import "./user.scss";
import logo from "../../assets/img/amazon_logo.png";
import { useNavigate } from "react-router-dom";
const User = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/");
      toast.success("Sign in successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.warn("Fill empty fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="amazon__user">
      <div className="container">
        <div className="amazon__user-logo">
          <img src={logo} alt="amazon logo" />
        </div>
        <form
          className="amazon__user-wrapper form d-flex justify-content-center"
          onSubmit={handleLogin}
        >
          <div className="amazon__user-content pt-5 w-75">
            <div className="mb-3">
              <input
                type="email"
                placeholder="email"
                className="form-control py-2 mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                className="form-control py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              sint consequatur quae a in corrupti perspiciatis numquam deleniti?
              Ea provident vel odit quos sapiente. Iusto dignissimos voluptate
              corporis aperiam laudantium!
            </p>
            <button type="submit" className="btn btn-warning w-100">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
