import React, { Component } from 'react';

 export  default class Popup extends Component {

     constructor() {
         super();
         this.hidePopup = this.hidePopup.bind(this);
     }

     hidePopup(){
         this.props.hidePopup();

     }

     render() {
         var html = this.props.showPopup ? (
         <div className="modal fade">
             <div className="modal-dialog" role = "document">
                 <div className="modal-content">
                     <div className="modal-header">
                         <h5 className="modal-title">Status</h5>
                         <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.hidePopup}>
                             <span aria-hidden="true">&times;</span>
                         </button>
                     </div>
                     <div className="modal-body">
                         <p>{this.props.message}</p>
                     </div>
                 </div>

             </div>

         </div>): null;

         return (
             html

         );

     }

 }





