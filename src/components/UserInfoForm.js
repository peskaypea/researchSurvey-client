import React, { useState } from "react";
import "./UserInfoForm.css";
function UserInfoForm(props) {
  const setUserData = props.setUser;
  const userData = props.user;
  const emailRegex = /^[a-z][a-z0-9]+?@[\w]+[.][a-z]{2,}/i; //validate email

  return (
    <div className="userform-container">
      <form className="userInfoForm">
        <h3>Basic Information</h3>
        <hr />
        <label className="label" htmlFor="email">
          Email
        </label>
        <br />
        <input
          type="email"
          placeholder="Your email address"
          id="email"
          name="email"
          value={userData.email}
          onChange={setUserData}
          required
        />
        <br />
        <label className="label" htmlFor="fullname">
          Your Full Name
        </label>
        <br />
        <input
          type="text"
          placeholder="Full name"
          id="fullname"
          name="userName"
          value={userData.userName}
          onChange={setUserData}
          required
        />
        <br />
        <div className="d-flex justify-content-end">
          <a
            href={userData.email && userData.userName ? "/survey" : ""}
            className="btn btn-primary"
            onClick={() => {
              if (!userData.email || !userData.userName) {
                alert("Please fill up required fields");
              } else {
                return;
              }
            }}
          >
            Next
          </a>
        </div>
      </form>
    </div>
  );
}

export default UserInfoForm;
