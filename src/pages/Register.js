import React, { useState, useEffect } from "react";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Register() {
  const HomeIcon = <FontAwesomeIcon icon={faHome} />;
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  });
  const [userInfo, setUserInfo] = useState({
    password: "",
    email: "",
  });
  const [termsOfUse, setTermsOfUse] = useState(false);
  const [promotionEmailAgree, setPromotionEmailAgree] = useState(false);

  const inputOnChange = (e) => {
    setUserInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const [card, setCard] = useState(0);

  const registerUser = async (user, e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    localStorage.setItem("token", data.token);
  };

  const setPage = () => {
    if (card !== 1 && userInfo.email !== "") {
      setCard(1);
    } else {
      setCard(0);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center background pb-1">
      <div className="w-96 xl:w-1/4 h-1/2 border-transparet rounded-2xl p-10 bg-slate-800/50">
        <form action="" className="flex flex-col w-full">
          {card === 1 && (
            <button
              className="self-start text-sky-100"
              type="button"
              onClick={() => setPage()}
            >
              <u>Back</u>
            </button>
          )}

          <p className="text-end text-sky-100 text-sm">
            Already have an account?{" "}
            <a className="text-sky-500 hover:cursor-pointer m-0" href="/login">
              Login Here
            </a>
          </p>

          <h1 className="text-2xl py-3 text-sky-100 ">Create an account</h1>
          {card === 0 && (
            <div className="flex flex-col">
              <label htmlFor="email" className="text-md text-sky-100 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userInfo.email}
                onChange={(e) => inputOnChange(e)}
                className="border-transparent rounded-xl outline-0 p-2 h-9 mb-3"
              />
              <div className="flex gap-3 mb-3">
                <input
                  type="checkbox"
                  id="termsOfUse"
                  checked={termsOfUse}
                  onChange={() => setTermsOfUse(!termsOfUse)}
                  className="w-5"
                />
                <p className="text-sm text-sky-100">
                  You agree to the Terms of Use and Privacy Notice.
                </p>
              </div>
              <div className="flex gap-3 mb-10">
                <input
                  type="checkbox"
                  id="termsOfUse"
                  checked={promotionEmailAgree}
                  onChange={() => setPromotionEmailAgree(!promotionEmailAgree)}
                  className="w-12"
                />
                <p className="text-sm text-sky-100">
                  You agree to receive product news and special promotions via
                  email. You can opt-out of these emails in your My Account page
                  anytime.
                </p>
              </div>
            </div>
          )}
          {card === 1 && (
            <div className="flex flex-col">
              <label htmlFor="password" className="text-md text-sky-100 mb-2">
                Enter a password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-transparent rounded-xl outline-0 p-2 h-9 mb-3"
                value={userInfo.password}
                onChange={(e) => inputOnChange(e)}
              />
              <label
                htmlFor="confirmPass"
                className="text-md text-sky-100 mb-2"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPass"
                id="confirmPass"
                className="border-transparent rounded-xl outline-0 p-2 h-9 mb-16"
              />
            </div>
          )}
          {card === 0 && (
            <button
              type="button"
              className={
                termsOfUse && userInfo.email !== ""
                  ? "w-full bg-zinc-900/75 h-10 text-sky-100"
                  : "w-full bg-zinc-900/25 h-10 text-sky-100/25 hover:cursor-default"
              }
              onClick={() => setPage()}
              disabled={!termsOfUse}
            >
              Next
            </button>
          )}
          {card === 1 && (
            <button
              type="submit"
              className="w-full w-full bg-zinc-900/75 h-10 text-sky-100"
              onClick={(e) => registerUser(userInfo, e)}
            >
              Create Account
            </button>
          )}
          <a href="/" className="text-white text-center mt-5">
            {HomeIcon}
          </a>
        </form>
      </div>
    </div>
  );
}

export default Register;
