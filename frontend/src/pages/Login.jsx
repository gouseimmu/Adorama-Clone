import React from "react";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div id={styles.Container}>
      <div id={styles.Box1}>
        <div id={styles.sub1}>
          <div id={styles.name}>
            <h1>Adorama</h1>
          </div>
          <div id={styles.new}>
            <h2>New Customer ?</h2>
            <p>Create New Account {">"}</p>
          </div>
        </div>
        <div id={styles.sub2}>
          <div id={styles.sign}>
            <h1>Sign In</h1>
            <div>
              <form>
                <label>Your Email :</label>
                <br />
                <input type="text" placeholder="enter mail" required />
                <br />
                <label>Your Password :</label>
                <br />
                <input type="text" placeholder="enter Password" required />
                <label>
                  <input type="checkbox" name="remember" /> Remember me
                </label>
                <input type="submit" value="LOGIN" />
                <br />
              </form>
              <p id={styles.ps}>Forgot Password ?</p>
            </div>
            <div>
            <hr  styles={{"width":"15px"}}/>
            </div>
            <div id={styles.good}>
              <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="df" />
              <button>   Sign in With Google</button>
              <div id={styles.apple}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="apple" />
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

 
