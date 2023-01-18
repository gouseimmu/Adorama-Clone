import React from "react";
import styles from "./signup.module.css";

const Signup = () => {
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
            <h1>Create An Account</h1>
            <div>
              <form>
                <div id={styles.fl}>
             
                 
                 <input type="text" placeholder="First Name" required /><br />
                  
                 <input type="text" placeholder="Last Name" required /><br />
                </div>
             
              

                 
                
                <label id={styles.ps}>Your Email :</label>
                <br />
                <input id={styles.ps} type="text" placeholder="enter mail" required />
                <br />
                <label>Your Password :</label>
                <br />
                <input type="text" placeholder="enter Password" required />
                
                <label>Confirm Password :</label>
                <br />
                <input type="text" placeholder="Confirm Password" required />
               
                <div id={styles.lab}>
                <label>
                  <input type="checkbox" name="remember" /> Yes, I would like to receive expert tips, special offers, and product news.
                </label><br />
                <label>
                  <input type="checkbox" name="remember" />  Yes, sign me up for Adorama Rewards.
                </label><br />
                <label>
                  <input type="checkbox" name="remember" />  Remember Me.
                </label><br />
                </div>
                
                <input type="submit" value="CREATE ACCOUNT" />
                 
              </form>
        
            </div>
            
         </div>
         </div>
      </div>
    </div>
  );
};

export default Signup;

 
