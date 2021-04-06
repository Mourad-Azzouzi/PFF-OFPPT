import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer'

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
               {/* les information de commande */}
               <div className="orderInfo">
                  <h3>Les information de produit</h3>
                  <hr/>
                  <table className="table">
                     <tr>
                        <th>Titre de Product</th>
                        <th>Prix Total</th>
                        <th>Quantité</th>
                        <th>Nombre des personnes</th>
                     </tr>
                     <tr>
                        {/* <td>{this.state.productInfo.id}</td>
                        <td>{this.state.productInfo.title}</td> */}
                        <td>Pastillas de mer</td>
                        <td>450dh</td>
                        <td>x 2</td>
                        <td>2 personne</td>
                     </tr>
                  </table>
               </div>
               {/* Les Informations de - client */}
               <div className="client-info">
                  <h3>Les informations du client</h3>
                  <hr/>
                  <div className="container">
                     <form className="frm-client-info">
                        <div class="form-outline mb-4">
                           <input type="text" id="form1Example1" class="form-control" />
                           <label class="form-label" for="form1Example1">Nom Complet</label>
                        </div>
                        <div class="form-outline mb-4">
                           <input type="text" id="form1Example1" class="form-control" />
                           <label class="form-label" for="form1Example1">Tel</label>
                        </div>
                        <div class="form-outline mb-4">
                           <input type="text" id="form1Example1" class="form-control" />
                           <label class="form-label" for="form1Example1">Adresse</label>
                        </div>
                        <div class="form-outline mb-4">
                           <input type="text" id="form1Example1" class="form-control" />
                           <label class="form-label" for="form1Example1">Ville</label>
                        </div>
                        <div class="form-outline mb-4">
                           <input type="text" id="form1Example1" class="form-control" />
                           <label class="form-label" for="form1Example1">Code Postal</label>
                        </div>
                        <button className="btn btn-primary">Passer La Commande</button>
                     </form>
                  </div>
               </div>

            </div>
            <Footer/>
         </div>
      )
   }
}