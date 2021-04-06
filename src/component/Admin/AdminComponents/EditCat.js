import { render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';


export default class EditCategoryModal extends React.Component {

   HundleUpdateCategry(event){
      event.preventDefault()

      axios.put('https://localhost:44397/category/UpdateCategory',
      {
         "idcategory": ""+event.target.categoryId.value,
         "namecategory": ""+event.target.categoryName.value
      })
      .then(res => alert('Categorie Modifier Avec Success.'))
      .catch(err => alert("Erreur , Categorie N'e pas Ajouter"+err))
   }

   render(){
      return(
         <div class="add-Category-Modal modal fade" id="EditCategory" data-mdb-backdrop="static" data-mdb-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="staticBackdropLabel">Modifier Une Category</h5>
                     <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                  </div>

                  {/* This Is The modal Content */}
                  <div class="modal-body">
                     <div className="container">
                        <form onSubmit={this.HundleUpdateCategry} action="">
                           <div class="form-outline mb-3">
                              <label>Categorie Id</label>
                              <input type="text" id="form2Example1" name="categoryId" defaultValue={this.props.idCategory} class=" px-2 form-control txt-cat-name" disabled/>
                              {/* <label>Entrer Le Nom de Categorie</label> */}
                           </div>
                           <div class="form-outline mb-3">
                              <label>Entrer Le Nouveau Nom de categorie</label>
                              <input type="text" id="form2Example1" name="categoryName" defaultValue={this.props.namecategory}
                               class="form-control txt-cat-name" required/>
                              {/* <label class="form-label" for="form2Example1">Entrer Le Nouveau Nom de Categorie</label> */}
                           </div>
                           <button type="submit" class="btn btn-primary btn-save">
                              Enregistrer
                        </button>
                        </form>
                     </div>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-primary" data-mdb-dismiss="modal">Fermer</button>
                  </div>
               </div>
            </div>
         </div>

      )
   }
}