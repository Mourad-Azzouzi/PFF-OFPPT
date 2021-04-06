import axios from 'axios';
import React from 'react';

export default class UpdateProduct extends React.Component {

   constructor(){
      super()
      this.state = {
         category : [],  // idCategory , namecategory
         title : null,
         idCategory: null,
         Price1 : null,
         Price2 : null,
         Price4 : null,
         Price6 : null,
         Price8 : null,
         Price10: null,
         description : null, 
         ImageFile1 : null,
         ImageFile2 : null,
         ImageFile3 : null,

      }
   }

   // Fetch Category for select
   FetchCatgories = () => {
      axios.get('https://localhost:44397/category/GetAllCategories')
      .then(res => this.setState({category : res.data}))
      .catch(err => console.log(err))
   }

   componentDidMount(){
      this.FetchCatgories();
   }

   componentWillReceiveProps(){
      this.setState({Price1 : this.props.Price1});
      this.setState({Price2 : this.props.Price2});
      this.setState({Price4 : this.props.Price4});
      this.setState({Price6 : this.props.Price6});
      this.setState({Price8 : this.props.Price8});
      this.setState({Price10 : this.props.Price10});
      this.setState({description : this.props.description});
      this.setState({ImageFile1 : this.props.ImageFile1});
      this.setState({ImageFile2 : this.props.ImageFile2});
      this.setState({ImageFile3 : this.props.ImageFile3});
      this.setState({title : this.props.title});
      this.setState({idCategory : this.props.idCategory});

   }

   //Fetch Product Previews Values
   // FetchProductPreviewsValues = (id) =>{
   //    axios.get('https://localhost:44397/product/Get/ProductAllValues/'+id)
   //    .then(res => this.setState({productPreviewsValues : res.data}))
   //    .catch(err => console.log(err))
   // }

   // componentDidUpdate = () => {
   //    this.FetchProductPreviewsValues(this.props.idProduct);
   //    this.FetchCatgories();
   // }


   // Update Product
   HundleFormSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();

      formData.append('idProduct', this.props.idProduct);

      formData.append('Idcategory', this.state.idCategory);

      // if(this.state.title != null)
      // formData.append('title',this.state.title);
      // else
      formData.append('title',this.state.title);

      // if(this.state.description != null)
      // formData.append('descreption',this.state.description);
      // else
      formData.append('descreption',this.state.description);

      formData.append('picture1', this.props.picture1);
      formData.append('picture2', this.props.picture2);
      formData.append('picture3', this.props.picture1);
      
      // if(this.state.Price1 != null)
      // formData.append('price1',this.state.Price1);
      // else
      formData.append('price1', this.state.Price1);

      // if(this.state.Price2 != null)
      // formData.append('price2',this.state.Price2);
      // else
      formData.append('price2', this.state.Price2);

      // if(this.state.Price4 != null)
      // formData.append('price4',this.state.Price4);
      // else
      formData.append('price4', this.state.Price4);

      // if(this.state.Price6 != null)
      // formData.append('price6',this.state.Price6);
      // else
      formData.append('price6', this.state.Price6);
       
      // if(this.state.Price8 != null)
      // formData.append('price8',this.state.Price8);
      // else
      formData.append('price8', this.state.Price8);

      // if(this.state.Price10 != null)
      // formData.append('price10',this.state.Price10);
      // else
      formData.append('price10', this.state.Price10);

      // if(this.state.ImageFile1 != null)
      formData.append('ImageFile1', this.state.ImageFile1);
      // else
      // formData.append('ImageFile1', null);


      // if(this.state.ImageFile2 != null)
      formData.append('ImageFile2', this.state.ImageFile2);
      // else
      // formData.append('ImageFile2', null);

      // if(this.state.ImageFile3 != null)
      formData.append('ImageFile3', this.state.ImageFile3);
      // else
      // formData.append('ImageFile3', null);

      const config = {
         headers : {
            'content-type': 'multipart/form-data'
         }
      };

      axios.put('https://localhost:44397/product/UpdateProduct',formData,config)
      .then(res => alert('Produit Modifier Avec Success !'))
      .catch(err => console.log(err))
      
   }

   ImageFile1Change = (e) => {this.setState({ImageFile1 : e.target.files[0]});}
   ImageFile2Change = (e) => {this.setState({ImageFile2 : e.target.files[0]});}
   ImageFile3Change = (e) => {this.setState({ImageFile3 : e.target.files[0]});}

   render(){
      return(
         <section>
            <div class="add-product-modal modal fade" id="UpdateProduct" 
               data-mdb-backdrop="static" data-mdb-keyboard="false" tabindex="-1"
               aria-labelledby="staticBackdropLabel"
               aria-hidden="true">
               <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                        <i class="far fa-edit"></i>
                        Modifier Un Produit</h5>
                        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close">
                        </button>
                     </div>

                     {/* Add Product*/}
                     <div class="modal-body">
                        <form action="" onSubmit={this.HundleFormSubmit}>
                           <div className="container">

                              <div class="form-outline mb-3">
                                 <label htmlFor="">Id Produit</label>
                                 <input type="text"
                                 disabled
                                 onChange={(e) => {this.setState({title : e.target.value})}}
                                 defaultValue={this.props.idProduct}
                                 placeholder="Titre De Produit"
                                 class="txt-cat-name" required/>
                              </div>

                              <div class="form-outline mb-3">
                                 <label htmlFor="">Titre Produit</label>
                                 <input type="text"
                                 onChange={(e) => {this.setState({title : e.target.value})}}
                                 defaultValue={this.state.title}
                                 placeholder="Titre De Produit"
                                 class="txt-cat-name" required/>
                              </div>

                              <div class="form-outline mb-3">
                                 <label htmlFor="">Categorie</label><br></br>
                                 <select name="categories" id=""
                                 defaultValue={this.props.idcategory}
                                 onChange={(e) => {this.setState({idCategory : e.target.value})}}
                                 >
                                    {/* <option value={this.props.idCategory}>{this.props.nameCategory}</option> */}
                                    {
                                       this.state.category.map(c =>
                                          <option value={c.idcategory}>{c.namecategory}</option>
                                       )
                                    }
                                 </select>
                              </div>
                                       
                              {/* Les Emages des produit */}
                              <fieldset>
                                 <label className="m-0">Choisir Les Images de produit</label>
                                 <hr/>
                                 <div className="row">
                                    <input className="col-sm-10 col-md-4 mb-3" 
                                    onChange={this.ImageFile1Change}
                                    type="file"/>
                                    <input className="col-sm-10 col-md-4 mb-3" 
                                    onChange={this.ImageFile2Change}
                                    type="file"/>
                                    <input className="col-sm-10 col-md-4 mb-3" 
                                    onChange={this.ImageFile3Change}
                                    type="file"/>
                                 </div>
                              </fieldset>
                              
                              

                              <div class="form-outline mb-3">
                                 <label htmlFor="">Prix Individuel</label>
                                 <input type="text" class="txt-cat-name"
                                 onChange={(e) => {this.setState({Price1 : e.target.value})}}
                                 defaultValue={this.props.Price1}
                                 placeholder="Prix 1 personne"
                                 required/>
                              </div>

                              <div class="form-outline mb-3">
                                 <label htmlFor="">Prix 2 Personne</label>
                                 <input type="text" class="txt-cat-name"
                                 onChange={(e) => {this.setState({Price2 : e.target.value})}} 
                                 defaultValue={this.props.Price2}
                                 placeholder="Prix 2 personne"
                                 required/>
                              </div>
                              <div class="form-outline mb-3">
                                 <label htmlFor="">Prix 4 Personne</label>
                                 <input type="text" class="txt-cat-name" 
                                 onChange={(e) => {this.setState({Price4 : e.target.value})}}   
                                 defaultValue={this.props.Price4}  
                                 placeholder="Prix 4 personne"                            
                                 required/>
                              </div>
                              <div class="form-outline mb-3">
                                 <label htmlFor="">Prix 6 Personne</label>
                                 <input type="text" class="txt-cat-name" 
                                 onChange={(e) => {this.setState({Price6 : e.target.value})}} 
                                 defaultValue={this.props.Price6}
                                 placeholder="Prix 6 personne"
                                 required/>
                              </div>
                              <div class="form-outline mb-3">
                                 <label htmlFor="">Prix 8 Personne</label>
                                 <input type="text" class="txt-cat-name" 
                                 onChange={(e) => {this.setState({Price8 : e.target.value})}} 
                                 defaultValue={this.props.Price8}
                                 placeholder="Prix 8 personne"
                                 required/>
                              </div>
                              <div class="form-outline mb-3">
                                 <label htmlFor="">Prix 10 Personne</label>
                                 <input type="text" class="txt-cat-name" 
                                 onChange={(e) => {this.setState({Price10 : e.target.value})}} 
                                 defaultValue={this.props.Price10}
                                 placeholder="Prix 10 personne"
                                 required/>
                              </div>

                              {/* <Editor headerTemplate={header} 
                              style={{ height: '320px' }} value={text2} 
                              onTextChange={(e) => setText2(e.htmlValue)} />
                               */}
                              
                              {/* { <Editor
                              editorState={editorState}
                              toolbarClassName="toolbarClassName"
                              wrapperClassName="wrapperClassName"
                              editorClassName="editorClassName"
                              onEditorStateChange={this.onEditorStateChange}
                              />} */}
                              <label htmlFor="">Description</label>
                              <textarea name="" className="product-description" spellcheck="false" 
                              onChange={ (e) => { this.setState({description : e.target.value})}}
                              defaultValue={this.props.description}
                              placeholder="Description du produit">
                              </textarea><br></br>
                              <button type="submit"  class="btn btn-primary btn-save">Modifier</button>
                           </div>
                        </form>
                     </div>
                     <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-mdb-dismiss="modal">Fermer</button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      )
   }
}

