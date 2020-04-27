import React from 'react';

class ShowRequests extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      status: this.props.info.status
    }
  }

  onDecide = (event) => {
    fetch('https://young-mountain-06631.herokuapp.com/warden/request', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name: this.props.info.name,
        username: this.props.info.username,
        status: event.target.id
      })
    })
    .then(response => response.json())
    .then(status => {
      if(status === 'Failed'){
        alert(status);
      }
    })
    this.setState({
      clicked: true,
      status: event.target.id
    });
  }

  render(){
    return(
      <div>
        <h1>{this.props.info.name}</h1>
        <h2>{this.props.info.username}</h2>
        <h4>{this.props.info.reason}</h4>
        <h3>From - {this.props.info.f_d}</h3>
        <h3>To - {this.props.info.t_d}</h3>
        <h3>Status - {this.state.status}</h3>

        <button id='accept' type='submit' disabled={this.state.clicked}
         onClick={this.onDecide} >Accept</button>
        <button id='decline' type='submit' disabled={this.state.clicked}
         onClick={this.onDecide} >Decline</button><br/>
      </div>
    )
  }
}

export default ShowRequests;
