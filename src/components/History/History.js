import React from 'react';
import HistoryShow from '../HistoryShow/HistoryShow';

class History extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentWillMount(){
    fetch('https://young-mountain-06631.herokuapp.com/history'+window.location.search)
    .then(response => response.json())
    .then(data => {
      if(data !== 'None'){
        this.setState({data:data});
      }
      else {
        alert("No Requests to Show!")
      }
    });
  }

  render(){
    return(
      <div>
        <h1>History</h1>
        {this.state.data.map(info => (<HistoryShow info={info} />))}
      </div>
    )}
}

export default History;
