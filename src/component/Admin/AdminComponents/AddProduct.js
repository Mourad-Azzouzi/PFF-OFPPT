import axios from 'axios';
import React from 'react';
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {Editor} from  'react-draft-wysiwyg';
import {EditorState, editorState} from 'draft-js';


export default class AddProduct extends React.Component {
   constructor() {
      super()
      this.state = {
         products: [
         ],
         editorState : EditorState.createEmpty(),
         categorySelectValue : null,
         productTitle : null,
         productPicture1 : null,
         productPicture2 : null,
         productPicture3 : null,
         productPrice1 : null,
         productPrice2 : null,
         productPrice4 : null,
         productPrice6 : null,
         productPrice8 : null,
         productPrice10 : null,
         productDescription :null,
         ImageFile1 : null,
         ImageFile2 : null,
         ImageFile3 : null,
         editorTextValue: null,
      }
   }

   onSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('Idcategory',this.state.categorySelectValue);
      formData.append('title',this.state.productTitle);
      formData.append('descreption',this.state.productDescription);
      formData.append('picture1',"");
      formData.append('picture2',"");
      formData.append('picture3',"");
      formData.append('price1',this.state.productPrice1);
      formData.append('price2',this.state.productPrice2);
      formData.append('price4',this.state.productPrice4);
      formData.append('price6',this.state.productPrice6);
      formData.append('price8',this.state.productPrice8);
      formData.append('price10',this.state.productPrice10);
      formData.append('ImageFile1',this.state.ImageFile1);
      formData.append('ImageFile2',this.state.ImageFile2);
      formData.append('ImageFile3',this.state.ImageFile3);

      const config = {
         headers : {
            'content-type': 'multipart/form-data'
         }
      };
      
      axios.post('https://localhost:44397/product/AddProduct',formData,config)
      .then(res => alert("Produit Ajouter"))
      .catch(err => alert(err))
   }

   

   categorySelectChange = (e) => {
      this.setState({categorySelectValue : e.target.value});
   }

   ImageFile1Change = (e) => {this.setState({ImageFile1 : e.target.files[0]});}
   ImageFile2Change = (e) => {this.setState({ImageFile2 : e.target.files[0]});}
   ImageFile3Change = (e) => {this.setState({ImageFile3 : e.target.files[0]});}

   onEditorStateChange: Function = (editorState) => {
      this.setState({
        editorState
      });
      console.log(editorState);
    };

   render() {
      const {editorState} = this.state;
      return (
         <section>
            <div class="add-product-modal modal fade" id="staticBackdrop1" 
               data-mdb-backdrop="static" data-mdb-keyboard="false" tabindex="-1"
               aria-labelledby="staticBackdropLabel"
               aria-hidden="true">
               <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Ajouter Un Produit</h5>
                        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close">
                        </button>
                     </div>

                     {/* Add Product*/}
                     <div class="modal-body">
                        <form action="" onSubmit={this.onSubmit}>
                           <div className="container">

                              <div class="form-outline mb-3">
                                 <input type="text" id="form2Example1" 
                                 onChange={
                                    (e) => {this.setState({productTitle : e.target.value})}
                                 }
                                 class="form-control txt-cat-name" required/>
                                 <label class="form-label" for="form2Example1">Titre de produit</label>
                              </div>

                              <div class="form-outline mb-3">
                                 <select name="categories" id=""
                                    onChange={(e) => {
                                       this.setState({categorySelectValue : e.target.value})
                                    }}>
                                    <option value="null">Choisie la categorie</option>
                                    {
                                       this.props.category.map(c =>
                                          <option value={c.idcategory}>{c.namecategory}</option>
                                       )
                                    }
                                 </select>
                              </div>
                                       
                              {/* Les Emages des produit */}
                              <h6>Choisie Les Images de produit</h6>
                              <div className="row">
                                 <input className="col-sm-10 col-md-4 mb-3" 
                                 onChange={this.ImageFile1Change}
                                 type="file" required/>
                                 <input className="col-sm-10 col-md-4 mb-3" 
                                 onChange={this.ImageFile2Change}
                                 type="file" required/>
                                 <input className="col-sm-10 col-md-4 mb-3" 
                                 onChange={this.ImageFile3Change}
                                 type="file" required/>
                              </div>
                              

                              <div class="form-outline mb-3">
                                 <input type="text" id="form2Example1" class="form-control txt-cat-name"
                                 onChange={(e) => {this.setState({productPrice1 : e.target.value})}}
                                 required/>
                                 <label class="form-label" for="form2Example1">Prix individuel</label>
                              </div>

                              <div class="form-outline mb-3">
                                 <input type="text" id="form2Example1" class="form-control txt-cat-name"
                                 onChange={(e) => {this.setState({productPrice2 : e.target.value})}} 
                                 required/>
                                 <label class="form-label" for="form2Example1">Prix 2 personne</label>
                              </div>
                              <div class="form-outline mb-3">
                                 <input type="text" id="form2Example1" class="form-control txt-cat-name" 
                                 onChange={(e) => {this.setState({productPrice4 : e.target.value})}}                                  
                                 required/>
                                 <label class="form-label" for="form2Example1">Prix 4 personne</label>
                              </div>
                              <div class="form-outline mb-3">
                                 <input type="text" id="form2Example1" class="form-control txt-cat-name" 
                                 onChange={(e) => {this.setState({productPrice6 : e.target.value})}} 
                                 required/>
                                 <label class="form-label" for="form2Example1">Prix 6 personne</label>
                              </div>
                              <div class="form-outline mb-3">
                                 <input type="text" id="form2Example1" class="form-control txt-cat-name" 
                                 onChange={(e) => {this.setState({productPrice8 : e.target.value})}} 
                                 required/>
                                 <label class="form-label" for="form2Example1">Prix 8 personne</label>
                              </div>
                              <div class="form-outline mb-3">
                                 <input type="text" id="form2Example1" class="form-control txt-cat-name" 
                                 onChange={(e) => {this.setState({productPrice10 : e.target.value})}} 
                                 required/>
                                 <label class="form-label" for="form2Example1">Prix 10 personne</label>
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

                              <textarea name="" className="product-description" spellcheck="false" 
                              onChange={ (e) => { this.setState({productDescription : e.target.value})}}
                              placeholder="Description du produit">
                              </textarea><br></br>

                              <button type="submit" class="btn btn-primary btn-save">Ajouter</button>
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