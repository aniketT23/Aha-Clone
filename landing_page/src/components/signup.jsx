import { useState } from "react";
import "./signup.css";
import axios from "axios";

const userData = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

function Signup() {
  const [signUpformData, setsignUpFormData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignUpFormData({ ...signUpformData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const userInfo = await axios
        .post("https://mighty-dawn-13827.herokuapp.com/signup", signUpformData)
        .then((res) => {
          if (res.statusText === "OK") {
            alert("You are registered succesfully");
            window.location = "/";
          }
        });
      console.log(userInfo);
    } catch (err) {
      console.log("error :", err);
      alert("Email already exists, Try with a new email");
    }
  };

  return (
    <>
      <div className="modalbox">
        <div className="loginContainer">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              onChange={handleChange}
              required={true}
              name="first_name"
              placeholder="Firstname"
            />
            <input
              onChange={handleChange}
              required={true}
              name="last_name"
              placeholder="Lastname"
            />
            <input
              onChange={handleChange}
              required={true}
              name="email"
              type="text"
              placeholder="Email"
            />

            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              required={true}
              minLength="8"
              placeholder="Password"
            />

            <input className="signupButton" type="submit" value="SignUp" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
