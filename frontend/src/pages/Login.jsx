import { useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const userdetails = [];
  const handelSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };

    fetch("http://localhost:8080/user/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        userdetails.push({ token: res.token });
        userdetails.push({ name: res.firstname });
        localStorage.setItem("details", JSON.stringify(userdetails));
        if (res.msg == "Login Successfull") {
          toast({
            title: "Login Success.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/");
        } else {
          toast({
            title: "Wrong Credentials",
            status: "error",
            isClosable: true,
          })
          console.log(res.msg);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id={styles.Container}>
      <div id={styles.Box1}>
        <div id={styles.sub1}>
          <div id={styles.name}>
            <h1>Adorama</h1>
          </div>
          <div id={styles.new}>
            <h2>New Customer ?</h2>
            <p>
              {" "}
              <Link to="/signup"> Create New Account {">"}</Link>
            </p>
          </div>
        </div>
        <div id={styles.sub2}>
          <div id={styles.sign}>
            <h1>Sign In</h1>
            <div>
              <form onSubmit={handelSubmit}>
                <label>Your Email :</label>
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label>Your Password :</label>
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                />
                <label>
                  <input type="checkbox" name="remember" /> Remember me
                </label>
                <input type="submit" value="LOGIN" />
                <br />
              </form>
              <p id={styles.ps}>
                <Link to="/forgot">Forgot Password ?</Link>{" "}
              </p>
            </div>
            <div>
              <hr styles={{ width: "15px" }} />
            </div>
            <div id={styles.good}>
              <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="df" />
              <button> Sign in With Google</button>
              <div id={styles.apple}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
                  alt="apple"
                />
              </div>
              <button>Sign in With Apple</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// function ToastExample() {
//
//   return (
//     <Button
//       onClick={() =>
//
//       }
//     >
//       Show Toast
//     </Button>
//   )
// }
