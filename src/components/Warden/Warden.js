import React from 'react';
import Login from '../Login/Login'
import SecurityPasswordChange from '../SecurityPasswordChange/SecurityPasswordChange';
import WardenLoggedIn from '../WardenLoggedIn/WardenLoggedIn';

class Warden extends React.Component{
  constructor(){
    super();
    this.state = {
      loggedIn:false,
      username:'',
      password:'',
      changePass:false,
      data:{}
    };
  }

  onChangeValue = (event) => {
    if(event.target.id === 'username')
      this.setState({username:event.target.value});
    if(event.target.id === 'password')
      this.setState({password:event.target.value});
  }

  onSubmit = () => {
    fetch('https://young-mountain-06631.herokuapp.com/warden/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(info => {
      if(info !== "Something went Wrong!"){
        fetch('https://young-mountain-06631.herokuapp.com/warden/request')
        .then(response => response.json())
        .then(data => {
          this.setState({
            data: data,
            loggedIn: true,
          })
        });
      }
      else{
        alert("Plese Check the Information Entered");
      }
    });
  }

  onChangePass = () => {
    this.setState({changePass: true});
  }

  onForgot = () => {
    alert('Please Contact the Administrator');
  }

  render(){
    return(
      <div>
      {
        (this.state.loggedIn)
        ?((this.state.changePass)
         ?(<SecurityPasswordChange
            username={this.state.username}/>)
         :(<WardenLoggedIn
            data={this.state.data}
            onChangePass={this.onChangePass}/>))
        :(<Login
            onChangeValue={this.onChangeValue}
            onSubmit={this.onSubmit}
            onForgot={this.onForgot}/>)
      }
      </div>
    )
  }

}

export default Warden;
