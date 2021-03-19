import React from 'react';

const Adresse = () => {
   return(
      <div className="col-sm-5 col-md-6">
         <h5>{this.props.name}</h5><br></br>
         <h5>{this.props.adresse}</h5><br></br>
         <h5>{this.props.number}</h5><br></br>
      </div>
   )
}