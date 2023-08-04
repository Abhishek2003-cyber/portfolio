import React from 'react'
import '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Rating(props) {
  let rating=props.rating;
  const arr =[];
  for(let i=1;i<=5;i++){
    if(i<=rating){
     arr.push( <FontAwesomeIcon icon={faStar} color='red' />);
    }
    else{
      arr.push(<FontAwesomeIcon icon={faStar} />);
    }
  }
  return (
    /*<div style={{fontSize:"40px"}}>
        <span className='checked'>★</span>
        <span className='checked'>★</span>
        <span className='checked'>★</span>
        <span >★</span>
        <span >★</span>
    </div>*/
    <div>{arr}</div>
  )
}
