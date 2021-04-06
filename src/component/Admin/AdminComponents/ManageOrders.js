import React from 'react';
import MainNav from '../AdminNavs/navTop'

export default class ManageOrders extends React.Component{
   constructor() {
      super()
      this.state = {
         orders:[
            {key:1, prixTotale:"450", StatutCommande:"Confirmé", DateCommande:"13/2/2021"},
            {key:2, prixTotale:"750", StatutCommande:"En Preparation", DateCommande:"11/2/2021"},
            {key:3, prixTotale:"250", StatutCommande:"En Attente", DateCommande:"05/3/2021"},
            {key:4, prixTotale:"550", StatutCommande:"En Preparation", DateCommande:"07/2/2021"},
            {key:2, prixTotale:"520", StatutCommande:"En Preparation", DateCommande:"13/3/2021"},
            {key:3, prixTotale:"420", StatutCommande:"En Attente", DateCommande:"13/2/2021"},
            {key:4, prixTotale:"450", StatutCommande:"En Preparation", DateCommande:"15/2/2021"},
            {key:1, prixTotale:"320", StatutCommande:"En Attente", DateCommande:"30/3/2021"},
            {key:2, prixTotale:"250", StatutCommande:"En Attente", DateCommande:"31/2/2021"},
            {key:3, prixTotale:"380", StatutCommande:"En Attente", DateCommande:"31/2/2021"},
            {key:4, prixTotale:"420", StatutCommande:"En Attente", DateCommande:"1/3/2021"},
            {key:1, prixTotale:"450", StatutCommande:"En Attente", DateCommande:"13/1/2021"},
            {key:2, prixTotale:"80",  StatutCommande:"En Attente", DateCommande:"19/5/2021"},
            {key:3, prixTotale:"730", StatutCommande:"En Attente", DateCommande:"22/2/2021"},
            {key:4, prixTotale:"450", StatutCommande:"Annuler", DateCommande:"13/1/2021"},
            {key:1, prixTotale:"150", StatutCommande:"Confirmer", DateCommande:"29/1/2021"},
            {key:2, prixTotale:"220", StatutCommande:"Livré", DateCommande:"23/1/2021"},
            {key:3, prixTotale:"310", StatutCommande:"En Attente", DateCommande:"31/1/2021"},
            {key:4, prixTotale:"430", StatutCommande:"En Attente", DateCommande:"30/1/2021"},
         ],
      }
   }

   RenderOrdersTable = ( commands ) => {
      return(
         <table className="table table-bordered mt-4 mb-4">
            <tr className="border-info bg-info text-white">
               <th className="pt-2 pb-2 px-3">Commande ID</th>
               <th className="pt-2 pb-2 px-3">Prix totale</th>
               <th className="pt-2 pb-2 px-3">Statut de commande</th>
               <th className="pt-2 pb-2 px-3">Date de Commande</th>
               <th className="pt-2 pb-2 px-3">Detail Commande</th>
            </tr>
            {
               commands.map( (c) => 
               <tr className="border-dark">
                  <td className="pt-2 pb-2 px-3">{c.key}</td>
                  <td className="pt-2 pb-2 px-3">{c.prixTotale} Dh</td>
                  <td className="pt-2 pb-2 px-3">{c.StatutCommande}</td>
                  <td className="pt-2 pb-2 px-3">{c.DateCommande}</td>
                  <td className="pt-2 pb-2 px-3"><a href="" className="p-0"
                  data-mdb-toggle="modal" data-mdb-target="#afficherDetailCommande">Afficher Les Details</a></td>
               </tr>
               )
            }
         </table>
      )
   }

   render(){
      return(
         <div className="container">

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


            {/* Add Category */}
            <div class="add-Category-Modal modal fade-out" id="afficherDetailCommande" data-mdb-backdrop="static" data-mdb-keyboard="false" tabindex="-1" 
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
               <div class="modal-content">
                  <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Les infromation de commande</h5>
                  <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                  </div>

                  {/* This Is The modal Content */}
                  <div class="modal-body">
                     <div className="container">
                        <pre class="bg-light rounded border p-3 infoClient">
                           <h5>Les information de client</h5>
                           <hr/>
                           <strong>Nom Complet</strong> : Mohamed El Alaoui <br></br>   
                           <strong>Tel</strong>         : 06 54 55 22 33<br></br>   
                           <strong>Adresse</strong>     : Rue 16 N:124<br></br>   
                           <strong>Ville</strong>       : Rabat <br></br>   
                           <strong>Code Postal</strong> : 15400 <br></br>   
                        </pre>
                        <pre class="bg-light rounded border p-3 infoCommande">
                           <h5>Les information de commande</h5>
                           <hr/>
                           <strong>Titre produit</strong>        : Pastila Traditionnelle : Pastilla fruit de mer <br></br>   
                           <strong>Quantité</strong>             : x3<br></br>   
                           <strong>Nombre des peronne ?</strong> : 2 Personne<br></br><hr/>
                           <strong>Sous Total</strong>           : 420,99 dh <br></br>   
                        </pre>
                     </div>
                  </div>
                  <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-mdb-dismiss="modal">Fermer</button>
                  </div>
               </div>
            </div>
            </div>


         </div>
      )
   }
}