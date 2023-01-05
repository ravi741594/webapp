import React from 'react';
import { capitaliseWithSpace } from 'util/util';
export default class Card extends React.Component{
  render(){
    const {data} = this.props;
    return(
      <div className='container border border-2 mb-2'>
      <h5>{this.props.title}</h5>
      
      {data.map(
        item => <p>{capitaliseWithSpace(item.key)}:  {item.value}</p>) 
      }
    </div>
    ); 
  }
}







