import React from 'react';
import MainNav from '../AdminNavs/navTop'

export default class UsersList extends React.Component{
   constructor() {
      super()
      this.state = {
         usersList:[
            {key:1,fullname:"Ahmed E",tel:"0615565842",email:"ahmed.ar@gmail.com"},
            {key:2,fullname:"Amine E",tel:"0622565842",email:"Amine.ar@gmail.com"},
            {key:3,fullname:"Asmae E",tel:"0687454552",email:"Asmae.ar@gmail.com"},
            {key:4,fullname:"Imane E",tel:"0647484889",email:"Imane.ar@gmail.com"},
            {key:5,fullname:"Mohamed E",tel:"0641557477",email:"Mohamed.ar@gmail.com"},
            {key:6,fullname:"Mohamed E",tel:"06215499454",email:"Alie.ar@gmail.com"},
            {key:7,fullname:"Alae E",tel:"0600114477",email:"Alae.ar@gmail.com"},
            {key:8,fullname:"Abdelhak E",tel:"06011471544",email:"Abdelhak.ar@gmail.com"},
            {key:9,fullname:"Fahd E",tel:"0612201474",email:"Fahd.ar@gmail.com"},
         ]
      }
   }

   RenderOrdersTable = ( Users ) => {
      return(
         <table className="table table-bordered mt-4 mb-4">
            <tr className="border-info bg-info text-white">
               <th className="pt-2 pb-2 px-3">User ID</th>
               <th className="pt-2 pb-2 px-3">Nom Complet</th>
               <th className="pt-2 pb-2 px-3">Tel</th>
               <th className="pt-2 pb-2 px-3">Email</th>
            </tr>
            {
               Users.map( (c) => 
               <tr className="border-dark" key={c.key}>
                  <td className="pt-2 pb-2 px-3">{c.key}</td>
                  <td className="pt-2 pb-2 px-3">{c.fullname} Dh</td>
                  <td className="pt-2 pb-2 px-3">{c.tel}</td>
                  <td className="pt-2 pb-2 px-3">{c.email}</td>
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
                  <h3>Liste Des Utilisateurs</h3>
                  <hr/>

                  {/* Statistics */}
                  <section className="analytics"></section>

                  {/* commandesTable */}
                  {this.RenderOrdersTable(this.state.usersList)}

               </div>
            </div>


            {/*  */}
            {/* <div class="add-Category-Modal modal fade" id="afficherDetailCommande" data-mdb-backdrop="static" data-mdb-keyboard="false" tabindex="-1" 
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
               <div class="modal-content">
                  <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Les infromation de commande</h5>
                  <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                  </div>

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
                           <strong>Titre produit</strong>        : Mohamed El Alaoui <br></br>   
                           <strong>Quantité</strong>             : 06 54 55 22 33<br></br>   
                           <strong>Nombre des peronne ?</strong> : Rue 16 N:124<br></br><hr/>
                           <strong>Sous Total</strong>           : 420,99 dh <br></br>   
                        </pre>
                     </div>
                  </div>
                  <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-mdb-dismiss="modal">Fermer</button>
                  </div>
               </div>
            </div>
            </div> */}


         </div>
      )
   }
}