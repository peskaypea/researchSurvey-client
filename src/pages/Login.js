import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Login() {
  const HomeIcon = <FontAwesomeIcon icon={faHome} />;
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  });
  const [loginInfo, setLoginInfo] = useState({
    password: "",
    email: "",
  });

  const [rememberLogin, setRememberLogin] = useState(false);
  const inputOnChange = (e) => {
    setLoginInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const logUserIn = async (userInfo, e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center background pb-1">
      <div className="w-96 xl:w-1/4 flex flex-col h-1/2 border-transparet rounded-2xl p-10 bg-slate-800/50">
        <form action="" className="flex flex-col w-full">
          <p className="text-end text-sky-100 text-sm">
            Don't have an account yet?{" "}
            <a
              href="/register"
              className="text-sky-500 hover:cursor-pointer m-0 p-0"
            >
              Sign Up Here
            </a>
          </p>

          <h1 className="text-2xl py-3 text-sky-100 ">Create an account</h1>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-md text-sky-100 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginInfo.email}
              onChange={(e) => inputOnChange(e)}
              className="border-transparent rounded-xl outline-0 p-2 h-9 mb-3"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-md text-sky-100 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginInfo.password}
              className="border-transparent rounded-xl outline-0 p-2 h-9 mb-3"
              onChange={(e) => inputOnChange(e)}
            />
          </div>
          <div className="flex gap-1 mb-3">
            <input
              type="checkbox"
              id="termsOfUse"
              checked={rememberLogin}
              onChange={() => setRememberLogin(!rememberLogin)}
              className="w-7"
            />
            <p className="text-sm text-sky-100">Remember Me</p>
          </div>
          <button
            type="submit"
            className="w-full w-full bg-zinc-900/75 h-10 text-sky-100"
            onClick={(e) => logUserIn(loginInfo, e)}
          >
            Log In
          </button>
        </form>
        <a href="/" className="text-white text-center mt-5">
          {HomeIcon}
        </a>
      </div>
    </div>
  );
}

export default Login;
