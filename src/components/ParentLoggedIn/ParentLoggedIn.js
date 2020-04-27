import React from 'react';
import {Link} from 'react-router-dom';
import './ParentLoggedIn.scss';

function ParentLoggedIn(props){
  return(
    <div className='ParentLoggedIn'>
      <h1> {props.name}'s Parent </h1>
      <label>Reason: </label>
      <input id='reason' type='text' onChange={props.onChangeValue} required /><br/>
      <label>From: </label>
      <input id='f_d' type='date' onChange={props.onChangeValue} required />
      <label>To: </label>
      <input id='t_d' type='date' onChange={props.onChangeValue} required /><br/>
      <Link to='/'>
        <button type='submit' onClick={props.onRequest}>Request!</button><br/>
      </Link>
      <button type='submit' onClick={props.onChangePass}>Change Password</button><br/>
      <Link to={'/history?name='+props.name}>
        <button type='submit'>History</button>
      </Link>
    </div>
  )
}

export default ParentLoggedIn;
