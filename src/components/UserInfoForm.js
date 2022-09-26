import React, { useState } from "react";
import "./UserInfoForm.css";
function UserInfoForm(props) {
  const setUserData = props.setUser;
  const userData = props.user;

  return (
    <div className="userform-container">
      <form className="userInfoForm">
        <h3>Basic Information</h3>
        <hr />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          placeholder="Your email address"
          id="email"
          name="email"
          value={userData.email}
          onChange={setUserData}
        />
        <br />
        <label htmlFor="fullname">Your Full Name</label>
        <br />
        <input
          type="text"
          placeholder="Full name"
          id="fullname"
          name="userName"
          value={userData.userName}
          onChange={setUserData}
        />
        <br />
        <div className="d-flex justify-content-end">
          <a href="/survey" className="btn btn-primary">
            Next
          </a>
        </div>
      </form>
    </div>
  );
}

export default UserInfoForm;
