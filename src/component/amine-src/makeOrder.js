import React from 'react';
import Navbar from '../Navbar/navbar';

export default class MakeOrder extends React.Component {
   constructor(){
      super()
      this.state = {
         productInfo : {}
      }
   }

   componentDidMount(){
      this.setState({productInfo : this.props.productInfo})
   }

   render(){
      return(
         <div className="makeOrder">
            <Navbar/>
            <div className="container">
               <div className="orderInfo">
                  <h4>Les information de produit</h4>
                  <table>
                     <tr className="table">
                        <th>Titre de Product</th>
                        <th>Prix Total</th>
                        <th>Quantité</th>
                        <th>Nombre des personnes</th>
                     </tr>
                     <tr>
                        <td>{this.state.productInfo.id}</td>
                        <td>{this.state.productInfo.title}</td>
                        <td>{}</td>
                        <td></td>
                     </tr>
                  </table>
               </div>
            </div>
         </div>
      )
   }
}