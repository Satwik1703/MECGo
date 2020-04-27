import React from 'react';
import ShowRequests from '../ShowRequests/ShowRequests';
import './WardenLoggedIn.scss';

function WardenLoggedIn(props){
  return(
    <div className='WardenLoggedIn'>
      {
        props.data.map(info => (<ShowRequests info={info} />))
      }
      <button type='submit' onClick={props.onChangePass}>Change Password</button><br/>
    </div>
  )
}

export default WardenLoggedIn;
