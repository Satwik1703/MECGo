import React from 'react';
import SecurityShow from '../SecurityShow/SecurityShow';

class Secutity extends React.Component{
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }

  componentWillMount(){
    fetch('https://young-mountain-06631.herokuapp.com/security')
    .then(response => response.json())
    .then(info => {
      if(info.length > 0)
        this.setState({data: info});
      else
        alert("No Requests to Show!")
    })
  }

  render(){
    return(
      <div>
        {
          this.state.data.map(info => (<SecurityShow info={info} />))
        }
      </div>
    )
  }

}

export default Secutity;
