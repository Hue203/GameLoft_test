import React from "react";
import "./RegisterForm.css";
import minions from "../../img/minions.png";
const RegisterForm = () => {
  return (
    <>
      <div className="container-registerForm">
        <div className="minions-img">
          <img
            src={minions}
            alt="minions img"
            style={{ width: "161px", height: "385px" }}
          />
        </div>
        <div className="form-container">
          <h1>Stay in the Know!</h1>
          <p>Don't get left behind! </p>
          <p>Subscribe to our newsletters today!</p>
          <form className="form" type="submit">
            <input type="text" placeholder="Name" name="name" />
            <br />
            <input type="email" placeholder="Email" name="email" />
            <br />
            <select id="country" name="country">
              <option label="Country"></option>
              <option value="vn">VietNam</option>
              <option value="us">USA</option>
              <option value="CAN">Canada</option>
              <option value="CN">China</option>
            </select>
            <br />
            <select id="platform" name="platform">
              <option label="Platform"> </option>
              <option value="vn">VietNam</option>
              <option value="us">USA</option>
              <option value="CAN">Canada</option>
              <option value="CN">China</option>
            </select>
            <br />
            <input type="checkbox" />
            By signing up, I confirm that I am 13 years old or older. I agree to
            the Gameloft Terms and Conditions and I have read the Privacy
            Policy.
            <br />
            <input type="checkbox" /> I agree to receive promotional offers
            relating to all Gameloft games and services
            <br />
            <button className="button">Button</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
