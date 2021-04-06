import { render } from '@testing-library/react';
import React from 'react';
import TopNavbar from '../AdminNavs/navTop';
import AddProduct from './AddProduct';
import EditCategory from './EditCat';
import UpdateProduct from './UpdateProduct';
import axios from 'axios';


export default class ManageProducts extends React.Component {
   constructor(){
      super()
      this.state = {
         category : [
         ],
         products : [
         ],
         editorState: "",
         // idToUpdateProduct : null,
         // product : {
            
         // }
      }
      
   }

   FetchCategories(){
      axios.get('https://localhost:44397/category/GetProducts')
      .then(res => this.setState({category : res.data}))
      .catch(err => 
         console.log(err)
      )
   }

   FetchProducts(){
      axios.get('https://localhost:44397/product/Get/ProductAllValues')
      .then(res => this.setState({products : res.data}))
      .catch(err => 
         console.log(err)
      )
   }

   componentDidMount(){
      this.FetchCategories();
      this.FetchProducts();
   }
   

   // FetchProductPreviewsValues(id){
   //    axios.get('https://localhost:44397/product/Get/ProductAllValues/'+id)
   //    .then(res => this.setState({ product : res.data.title}))
   //    .catch(err => console.log(err));
   // }

   HundleFormSubmitCategory(event){
      event.preventDefault()
      axios.post('https://localhost:44397/category/AddCategory',
      {
         "namecategory": ""+event.target.categoryName.value
      })
      .then(res => alert("Category Ajouter Avec Success"))
      .catch(err => alert(err))
   }

   deleteProduct = (id) => {
     if(window.confirm("Voulez vous supprimer ce produit ??"))
     {
      axios.delete('https://localhost:44397/product/DeleteProduct/'+id)
      .then(res => alert('Produit supprimer avec success !'))
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
                  <td className="p-2">{c.namecategory}</td>
                  <td className="p-2">{c.products.length}</td>
                  <td className="p-2">
                     <button 
                     onClick={ () => this.HundelCategoryDelete(c.idcategory) }
                     className="btn pt-1 pb-1 px-0 btn-delete-cat shadow-0"><i class="fas fa-trash"></i>Supprimer</button>
                     <button 
                     onClick={ () => this.setState({categoryId : c.idcategory},this.setState({CategoryName : c.namecategory}))}
                     className="btn pt-1 pb-1 pl-0 btn-update-cat shadow-0"
                     data-mdb-toggle="modal" data-mdb-target="#EditCategory"><i class="far fa-edit"></i>Modifier</button>
                  </td>
               </tr>
            )}
         </table>
      )
   }

   RenderProductTable = ( product ) => {
      return(
         <table className="table table-responsive">
            <tr className="bg-info text-white">
               <th className="p-2">Id Produit</th>
               <th className="p-2">Titre Produit</th>
               <th className="p-2">Categorie</th>
               <th className="p-2">Action</th>
            </tr>
            {product.map((p) =>
               <tr>
                  <td className="p-2">{p.idProduct}</td>
                  <td className="p-2">{p.title}</td>
                  <td className="p-2">{p.namecategory == null ? "Pas Affecter" : p.namecategory}</td>
                  <td className="p-2">
                     <button className="btn pt-1 pb-1 px-0 shadow-0"
                     onClick={ () => this.deleteProduct(p.idProduct)}
                     ><i class="fas fa-trash"></i>Supprimer</button>
                     <button className="btn pt-1 pb-1 pl-0 shadow-0"
                     onClick = { 
                        () => 
                        {
                        // idProduct, title, idCategory, nameCategory, Price1, Price2, 
                        // Price4, Price6, Price8, Price10, description
                        this.setState({idProduct : p.idProduct})
                        this.setState({title : p.title})
                        this.setState({idcategory : p.idcategory})
                        this.setState({nameCategory : p.namecategory})
                        this.setState({Price1 : p.price1})
                        this.setState({Price2 : p.price2})
                        this.setState({Price4 : p.price4})
                        this.setState({Price6 : p.price6})
                        this.setState({Price8 : p.price8})
                        this.setState({Price10 : p.price10})
                        this.setState({description : p.descreption})
                        }
                        }
                     data-mdb-toggle="modal" data-mdb-target="#UpdateProduct"><i class="far fa-edit"></i>Modifier</button>
                  </td>
               </tr>
            )}
         </table>
      )
   }

   HundelCategoryDelete(IdCategory){
      if(window.confirm('Clicker sur Ok pour confimer ??'))
      {
         axios.delete('https://localhost:44397/category/DeleteCategory/'+IdCategory)
         .then(res => alert('Categorie Supprimer avec Success.'))
         .catch(err => alert("Categorie N'a pas Ajouter : "+err))
      }
   }


   render() {
      const {categoryId, CategoryName} = this.state;
      const {
         idProduct, title, idCategory, nameCategory, Price1, Price2, 
         Price4, Price6, Price8, Price10, description, picture1,
         picture2, picture3} = this.state;

      return (
         <div className="container">
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
               {this.RenderProductTable(this.state.products)}
            </div>

            {/* Add Product Modal */}
            <AddProduct category={this.state.category}/>

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
                        <form onSubmit={this.HundleFormSubmitCategory} action="">
                           <div class="form-outline mb-3">
                              <input type="text" id="form2Example1" name="categoryName" class="form-control txt-cat-name" required/>
                              <label class="form-label" for="form2Example1">Entrer Le Nom de Categorie</label>
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

            {/* Edit Category */}
            <EditCategory idCategory ={categoryId} namecategory ={CategoryName}/>

            {/* Update Product */}
            <UpdateProduct 
            description = {description} idProduct={idProduct} 
            title = {title} idCategory = {idCategory} nameCategory = {nameCategory}
            Price1 = {Price1} Price2 = {Price2}  Price4 = {Price4} Price6 = {Price6} 
            Price8 = {Price8} Price10 = {Price10} picture1 = {picture1} picture2 ={picture2}
            picture3 = {picture3}
            />





         </div>
      )
   }

}
