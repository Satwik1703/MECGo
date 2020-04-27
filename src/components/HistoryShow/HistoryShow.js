import React from 'react';

function HistoryShow(props){
  return(
    <div>
      <h1>{props.info.name}</h1>
      <h2>{props.info.username}</h2>
      <h4>{props.info.reason}</h4>
      <h3>From - {props.info.f_d}</h3>
      <h3>To - {props.info.t_d}</h3>
    </div>
  )
}

export default HistoryShow;
