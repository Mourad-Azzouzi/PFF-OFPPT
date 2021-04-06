import React from 'react';
import {Link} from 'react-router-dom';

export default class HomeProduct extends React.Component {
   render() {
      return (
         <div className="product owl-stage-outer card p-0">
            <Link to="/Product">
               <div className="card-header p-0 m-0">
                  <img className="w-100" src={this.props.image} />
               </div>
               <div className="card-body p-2 text-black">
                  <h6>{this.props.title}</h6>
                  <span>Prix : <strong>{this.props.MinPrice}</strong> DH - {this.props.MaxPrice}</span>
               </div>
            </Link>
         </div>
      )
   }
}