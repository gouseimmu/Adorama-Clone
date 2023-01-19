import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";

const ForgotPassword = () => {
  const [email,setEmail]=useState("")
  const[password,setPass] = useState("")
  const handelSubmit=(e)=>{
    e.preventDefault()
    const payload={
      email:email,
      password:password
    }

    fetch("http://localhost:8080/user/login",{
      method:"PATCH",
      body:JSON.stringify(payload),
      headers:{
        "Content-type":"application/json"
      }
    }).then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  


  return (
    <div id={styles.Container}>
      <div id={styles.Box1}>
        <div id={styles.sub1}>
          <div id={styles.name}>
            <h1>Adorama</h1>
          </div>
          <div id={styles.new}>
            <h2>New Customer ?</h2>
            <p> <Link to="/signup"> Create New Account {">"}</Link></p>
          </div>
        </div>
        <div id={styles.sub2}>
          <div id={styles.sign}>
            <h1>RESET PASSWORD</h1>
            <div>
              <form onSubmit={handelSubmit}>
                <label>Your Email :</label>
                <br />
                <input type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                <br />
                <label>New Password :</label>
                <br />
                <input type="password" placeholder=" New Password" required value={password} onChange={(e)=>setPass(e.target.value)} />
                 
                <input type="submit" value="RESET PASSWORD" />
                <br />
              </form>
              
            </div>
            
           
            

             
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

 
