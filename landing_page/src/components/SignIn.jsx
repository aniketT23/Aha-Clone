import { useState } from "react";
import "./signin.css";
import axios from "axios";

const userData = {
  email: "",
  password: "",
};

function SignIn() {
  const [signInformData, setsignInFormData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignInFormData({ ...signInformData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await axios
        .post("https://mighty-dawn-13827.herokuapp.com/signin", signInformData)
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.user.first_name);
            alert("You are successfully logged in, Click Ok to Continue");
            window.location = "/";
          }
        });
    } catch (err) {
      console.log("error :", err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="boxmodal">
        <div className="loginContainer">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              onChange={handleChange}
              required={true}
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              name="password"
              onChange={handleChange}
              required={true}
              minLength="8"
              placeholder="Password"
            />

            <input className="loginButton" type="submit" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
