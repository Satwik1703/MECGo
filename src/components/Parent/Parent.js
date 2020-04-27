import React from 'react';
import Login from '../Login/Login';
import ParentLoggedIn from '../ParentLoggedIn/ParentLoggedIn';
import PasswordChange from '../PasswordChange/PasswordChange';

class Parent extends React.Component{
  constructor(){
    super();
    this.state = {
      loggedIn:false,
      username:'',
      password:'',
      name:'',
      changePass:false,
      reason:'',
      f_d:'',
      t_d:'',
      status:'pending'
    };
  }

  onChangeValue = (event) => {
    if(event.target.id === 'username')
      this.setState({username:event.target.value});
    if(event.target.id === 'password')
      this.setState({password:event.target.value});
    if(event.target.id === 'reason')
      this.setState({reason:event.target.value});
    if(event.target.id === 'f_d')
      this.setState({f_d:event.target.value});
    if(event.target.id === 't_d')
      this.setState({t_d:event.target.value});
  }

  onSubmit = () => {
    fetch('https://young-mountain-06631.herokuapp.com/parent/login', {
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
        this.setState({
          loggedIn: true,
          name: info['name']});
      }
      else{
        alert("Plese Check the Information Entered");
      }
    });
  }

  onForgot = () => {
    alert("Please Contact the Administrator")
  }

  onChangePass = () => {
    this.setState({changePass: true});
  }

  onRequest = () => {
    fetch('https://young-mountain-06631.herokuapp.com/parent/request', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        reason: this.state.reason,
        f_d: this.state.f_d,
        t_d: this.state.t_d,
        status: this.state.status
      })
    })
    .then(response => response.json())
    .then(msg => {
      if(msg === 'Success')
        alert("Succesfully submitted the Request");
    })
    .catch(err => alert("Something went Wrong!"));
  }

  render(){
    return(
      <div>
      {
        (this.state.loggedIn)
        ?((this.state.changePass)
         ?(<PasswordChange
            name={this.state.name}/>)
         :(<ParentLoggedIn
           onRequest={this.onRequest}
           name={this.state.name}
           onChangeValue={this.onChangeValue}
           onChangePass={this.onChangePass}/>))
        :(<Login
          onChangeValue={this.onChangeValue}
          onSubmit={this.onSubmit}
          onForgot={this.onForgot} />)
      }
      </div>
    )
  }

}

export default Parent;
