import React from 'react';
import {Link} from 'react-router-dom';
import './PasswordChange.scss';

class PasswordChange extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      password: '',
      new_password: ''
    }
  }

  onChangeValue = (event) => {
    if(event.target.id === 'password')
      this.setState({password: event.target.value});
    if(event.target.id === 'new_password')
      this.setState({new_password: event.target.value});
  }

  onSubmit = () => {
    fetch('https://young-mountain-06631.herokuapp.com/parent/change', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
        new_password: this.state.new_password
      })
    })
    .then(response => response.json())
    .then(msg => alert(msg));
  }

  render(){
    return(
      <div className='PasswordChange' >
        <label>Password: </label>
        <input type='password' id='password' onChange={this.onChangeValue} /><br/>
        <label id='new_pass'>New Password: </label>
        <input type='password' id='new_password' onChange={this.onChangeValue} /><br/>
        <Link to='/'>
          <button type='submit' onClick={this.onSubmit}>Change!</button>
        </Link>
      </div>
    )
  }
}

export default PasswordChange;
