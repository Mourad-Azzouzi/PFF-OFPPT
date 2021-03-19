import React from 'react';
import Feedback from './feedbackHome';

export default class Feedbacks extends React.Component {
   
   feedbackMapping(feedbacks){
      return(
         feedbacks.map( (f) => 
         <Feedback
         id={f.key} 
         name={f.name}
         feedbackText={f.feedbackText}
         />
         )
      )
   }

   render() {
      return (
         <section className="feedback pt-5 pb-5">
            <div className="container">
               <h1>Les Avis Des Clients</h1>
               <h6 className="m-1" >Votre feedback nous interésse</h6>
               <div className="row">
                  <div className="feedback-slider col col-lg-7 col-sm-12 mt-4 mb-4">
                     <div class="carousel" data-flickity='{"autoPlay":"true"}'>
                        
                        {this.feedbackMapping(this.props.feedbacks)}

                     </div>
                  </div>
                  <div className="feedback-form col-lg-4 col-sm-12">
                     <form action="" className="w-100">
                        <table className="w-100">
                           <tr><td><input type="text" placeholder="Nom Complete" required /></td></tr>
                           <tr><td><input type="email" placeholder="Votre E-mail" required /></td></tr>
                           <tr><td><input type="text" placeholder="Votre feedback" required /></td></tr>
                           <tr><td><button className="btn btn-outline-" data-mdb-ripple-color="dark">Envoyer</button></td></tr>
                        </table>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      )
   }
}