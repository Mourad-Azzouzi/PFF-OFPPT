import React from 'react';
import MainNav from '../AdminNavs/navTop'

export default class ManageOrders extends React.Component{
   constructor() {
      super()
      this.state = {
         orders:[
            {key:1, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:2, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:3, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:4, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:1, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:2, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:3, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:4, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:1, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:2, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:3, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:4, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:1, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:2, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:3, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:4, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:1, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:2, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:3, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
            {key:4, prixTotale:"450", StatutCommande:"Livré", DateCommande:"13/1/2021"},
         ]
      }
   }

   RenderOrdersTable = ( commands ) => {
      return(
         <table className="table table-bordered mt-4 mb-4">
            <tr>
               <th className="pt-2 pb-2">Commande ID</th>
               <th className="pt-2 pb-2">Prix totale</th>
               <th className="pt-2 pb-2">Statut de commande</th>
               <th className="pt-2 pb-2">Date de Commande</th>
               <th className="pt-2 pb-2">Action</th>
            </tr>
            {
               commands.map( (c) => 
               <tr>
                  <td className="pt-2 pb-2">{c.key}</td>
                  <td className="pt-2 pb-2">{c.prixTotale} Dh</td>
                  <td className="pt-2 pb-2">{c.StatutCommande}</td>
                  <td className="pt-2 pb-2">{c.DateCommande}</td>
                  <td className="pt-2 pb-2"><a href="">Afficher Les Details</a></td>
               </tr>
               )
            }
         </table>
      )
   }

   render(){
      return(
         <div className="container-fluid">

            <MainNav/>
            <div className="ManageOrders">
               <div className="orders shadow">
                  <h3>Gérer Les Commandes</h3>
                  <hr/>
                  <h6>Filtrer les commande selon leur statut</h6>
                  <select name="ordersStatus" id="">
                     <option value="All">Afficher tout</option>
                  </select>

                  {/* Statistics */}
                  <section className="analytics"></section>

                  {/* commandesTable */}
                  {this.RenderOrdersTable(this.state.orders)}

               </div>
            </div>


         </div>
      )
   }
}