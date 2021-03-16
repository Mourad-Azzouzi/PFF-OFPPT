import React from 'react';

export default class Feedback extends React.Component {
   render(){
      return(
         <div class="carousel-cell px-5 pt-4">
            <h5>{this.props.name}</h5>
            <p>{this.props.feedbackText}</p>
         </div>
      )
   }
}