import axios from 'axios';
import React from 'react';

export default class TesUpload extends React.Component {
   constructor(){
      super()
      this.state = {
         file : null
      }
   }

   onbub = (e) => {
      e.preventDefault()
      const formData = new FormData();
      formData.append('ImageFile', this.state.file);
      const config = {
         headers : {
            'content-type': 'multipart/form-data'
         }
      };

      axios.post('https://localhost:44397/testUpload',formData,config)
      .then(res => alert(res))
      .catch(err => alert("Not Uploaded"));
   }

   onchage = (e) => {
      this.setState({file : e.target.files[0]})
   }
   render(){
      return(
         <div className="container p-5">
            <h4>Upload File : </h4>
            <hr/>
            <form action="" onSubmit={this.onbub}>
               <input type="file" name="ImageFile" onChange={this.onchage}/>
               <button type="submit">Submit</button>
            </form>
         </div>
      )
   }
}