import { render } from '@testing-library/react';
import React from 'react';
import TopNavbar from '../AdminNavs/navTop';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class ManageProducts extends React.Component {
   constructor(){
      super()
      this.state = {
         category : [
            {cat_id:1,cat_name:"Les Mini Salé",Nproduct:15},
            {cat_id:1,cat_name:"Les Grandes pastilas",Nproduct:20},
            {cat_id:1,cat_name:"Les Plats Traditionnel",Nproduct:7},
         ],
         product : [
            {key:1,title:"Exemple Titre 1",category:"Exemple Category 1"},
            {key:2,title:"Exemple Titre 2",category:"Exemple Category 2"},
            {key:3,title:"Exemple Titre 3",category:"Exemple Category 3"},
            {key:4,title:"Exemple Titre 4",category:"Exemple Category 4"},
            {key:5,title:"Exemple Titre 5",category:"Exemple Category 5"},
         ],
         editorState: "",
      }
      
   }

   RenderCategoryTable = ( category ) => {
      return(
         <table className="table">
            <tr className="bg-info text-white">
               <th className="p-2">Category</th>
               <th className="p-2">Nombre des produits</th>
               <th className="p-2">Action</th>
            </tr>
            {category.map((c) => 
               <tr>
                  <td className="p-2">{c.cat_name}</td>
                  <td className="p-2">{c.Nproduct}</td>
                  <td className="p-2">
                     <button className="btn pt-1 pb-1 pl-0"><i class="fas fa-trash"></i>Supprimer</button>
                     <button className="btn pt-1 pb-1 pl-0 "><i class="far fa-edit"></i>Modifier</button>
                  </td>
               </tr>
            )}
         </table>
      )
   }

   getInfos = (e) => {
      console.log(e.target.parent)
   }

   RenderProductTable = ( product ) => {
      return(
         <table className="table">
            <tr className="bg-info text-white">
               <th className="p-2">Id Produit</th>
               <th className="p-2">Titre Produit</th>
               <th className="p-2">Categorie</th>
               <th className="p-2">Action</th>
            </tr>
            {product.map((c) =>
               <tr>
                  <td className="p-2">{c.key}</td>
                  <td className="p-2">{c.title}</td>
                  <td className="p-2">{c.category}</td>
                  <td className="p-2">
                     <button onClick={this.getInfos} className="btn pt-1 pb-1 pl-0"><i class="fas fa-trash"></i>Supprimer</button>
                     <button className="btn pt-1 pb-1 pl-0 "><i class="far fa-edit"></i>Modifier</button>
                  </td>
               </tr>
            )}
         </table>
      )
   }

   render() {
      return (
         <div className="container-fluid">
         <div className="ManageProducts">
            <TopNavbar />
            <div className="listCategory shadow">
                  <h3>Gerer Les Produits</h3>   
                  <hr/>
                  <h6>Liste categorie</h6>

                  {this.RenderCategoryTable(this.state.category)}

               </div>
            </div>
            <div className="Add_Category shadow">
               <a href="#" data-mdb-toggle="modal" data-mdb-target="#staticBackdrop"><i class="fas fa-plus"></i>Ajouter Une Category</a> 
            </div>
            <div className="Add_Produit shadow">
               <a href="#" data-mdb-toggle="modal" data-mdb-target="#staticBackdrop1"><i class="fas fa-plus"></i>Ajouter Un Produit</a> 
            </div>

            <div className="productsList shadow">
               <h4>Liste des Produits</h4>
               {this.RenderProductTable(this.state.product)}
            </div>

            {/* Add Product Modal */}
            <div class="add-product-modal modal fade" id="staticBackdrop1" data-mdb-backdrop="static" data-mdb-keyboard="false" tabindex="-1" 
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
               <div class="modal-content">
                  <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Ajouter Un Produit</h5>
                  <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                  </div>

                  {/* Add Product*/}
                  <div class="modal-body">
                     <div className="container">

                        <div class="form-outline mb-3">
                           <input type="text" id="form2Example1" class="form-control txt-cat-name" />
                           <label class="form-label" for="form2Example1">Titre de produit</label>
                        </div>

                        <div class="form-outline mb-3">
                           <select name="categories" id="">
                              <option value="null">Choisie la categorie</option>
                           </select>
                        </div>
                        {/* Les Emages des produit */}

                        <div class="form-outline mb-3">
                           <input type="text" id="form2Example1" class="form-control txt-cat-name" />
                           <label class="form-label" for="form2Example1">Prix individuel</label>
                        </div>

                        <div class="form-outline mb-3">
                           <input type="text" id="form2Example1" class="form-control txt-cat-name" />
                           <label class="form-label" for="form2Example1">Prix 2 personne</label>
                        </div>
                        <div class="form-outline mb-3">
                           <input type="text" id="form2Example1" class="form-control txt-cat-name" />
                           <label class="form-label" for="form2Example1">Prix 4 personne</label>
                        </div>
                        <div class="form-outline mb-3">
                           <input type="text" id="form2Example1" class="form-control txt-cat-name" />
                           <label class="form-label" for="form2Example1">Prix 6 personne</label>
                        </div>
                        <div class="form-outline mb-3">
                           <input type="text" id="form2Example1" class="form-control txt-cat-name" />
                           <label class="form-label" for="form2Example1">Prix 8 personne</label>
                        </div>
                        <div class="form-outline mb-3">
                           <input type="text" id="form2Example1" class="form-control txt-cat-name" />
                           <label class="form-label" for="form2Example1">Prix 10 personne</label>
                        </div>
                        <Editor
                           editorState={this.state.editorState}
                           toolbarClassName="toolbarClassName"
                           wrapperClassName="wrapperClassName"
                           editorClassName="editorClassName"
                           onEditorStateChange={this.onEditorStateChange}
                        />
                                                   
                        <button type="button" class="btn btn-primary btn-save">
                           Ajouter
                        </button>
                     </div>
                  </div>
                  <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-mdb-dismiss="modal">Fermer</button>
                  </div>
               </div>
            </div>
            </div>

            {/* Add Category */}
            <div class="add-Category-Modal modal fade" id="staticBackdrop" data-mdb-backdrop="static" data-mdb-keyboard="false" tabindex="-1" 
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
               <div class="modal-content">
                  <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Ajouter Une Category</h5>
                  <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                  </div>

                  {/* This Is The modal Content */}
                  <div class="modal-body">
                     <div className="container">
                        <div class="form-outline mb-3">
                           <input type="text" id="form2Example1" class="form-control txt-cat-name" />
                           <label class="form-label" for="form2Example1">Entrer Le Nom de Categorie</label>
                        </div>
                        <button type="button" class="btn btn-primary btn-save">
                           Enregistrer
                        </button>
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
