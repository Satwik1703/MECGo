import React from 'react';
import './SecurityShow.scss';

class ShowRequests extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
  }

  onAccept = (event) => {
    fetch('https://young-mountain-06631.herokuapp.com/security/accept', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name: this.props.info.name,
        username: this.props.info.username,
      })
    })
    .then(response => response.json())
    .then(op => this.setState({clicked: true}));
  }

  render(){
    return(
      <div className='SecurityShow'>
        <h1>{this.props.info.name}</h1>
        <h2>{this.props.info.username}</h2>
        <h4>{this.props.info.reason}</h4>
        <h3>From - {this.props.info.f_d}</h3>
        <h3>To - {this.props.info.t_d}</h3>
        <h3>Status - {this.props.info.status}</h3>

        <button id='ok' type='submit' disabled={this.state.clicked}
         onClick={this.onAccept} >Ok!</button>
      </div>
    )
  }
}

export default ShowRequests;
