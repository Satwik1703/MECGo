import React from "react";
import {Link} from 'react-router-dom';
import './Homepage.scss';

function Homepage(props){
  return(
    <div className='Homepage'>
      <div>
        <img src={require("./assets/MEC1.jpg")} alt="" id = "MECimg"/>
        <img src={require("./assets/logo.png")} alt="" id = "logoimg"/>
        <img src={require("./assets/meclogo.png")} alt="" id = "meclogoimg"/>
        <img src={require("./assets/parent.png")} alt="" id = "parentimg"/>
        <img src={require("./assets/security.png")} alt="" id = "securityimg"/>
        <img src={require("./assets/warden.png")} alt="" id = "wardenimg"/>

        <h1>WELCOME</h1>
        <div className = "vl" id = "l1"></div>
        <div className = "vl" id = "l2"></div>
      </div>
      <div>
      <Link to='/parent'>
        <button type='submit' id='parent'><span>Parent</span></button><br/>
      </Link>
      <Link to='/warden'>
        <button type='submit'  id='warden' style={{verticalAlign:"middle"}}><span>Warden</span></button><br/>
      </Link>
      <Link to='/security'>
        <button type='submit' id='security'><span>Security</span></button>
      </Link>
      </div>
    </div>
  )
}

export default Homepage;
