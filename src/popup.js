import React, { Component } from 'react';

 export  default class Popup extends Component {

     constructor() {
         super();
     }

     render() {
         return (
             <div>
                 <div>
                     <label>
                         {this.props.message}
                     </label>
                 </div>
             </div>
         )
     }
 }





