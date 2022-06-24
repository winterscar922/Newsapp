import React, { Component } from 'react';
import Loading from './Loading.gif';

export class spinner extends Component {
  
  render() {
    // console.log("spinner");

    return (
        <div className='text-center'>
            <img src={Loading} alt="" />
        </div>
      
    )
  }
}

export default spinner;