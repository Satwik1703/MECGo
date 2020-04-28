import React from 'react';
import './Login.scss';

function Login(props){
  return(
    <div className='Login'>
      <img src={require("./assets/logo.png")} alt="" id = "logoimg"/>

      <div className="main" id='main1' >
        <p className="signin" id="signin1" align="center">Sign In</p>
        <form className="form1" />
        <input type='text' id='username' align="center" placeholder="Username" onChange={props.onChangeValue}/><br/>
        <input type='password' id='password' align="center" placeholder="Password" onChange={props.onChangeValue}/><br/>
        <button type='submit' id='signin' onClick={props.onSubmit}>Sign In</button>
        <button type='submit' id='forgotpassword' onClick={props.onForgot}>Forgot Password</button>
      </div>
    </div>
  )
}

export default Login;
