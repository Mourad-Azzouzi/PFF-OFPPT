import React from 'react';
import Navbar from '../../Navbar/navbar';
import LeftNav from '../../Navbar/Left_UserNav';
import Adresses from './MesAdresses';


const UserInfo = () => {
   return (
      <div className="user-info">
         <Navbar/>
         <LeftNav/>


         {/* User Personal Infos */}
         <div className="personal-info pt-4 pb-4">
            <div className="container">
               <h3>Mes Informations Personnel</h3>
               <div className="row justify-content-center">
                  <div className="col-sm-8 col-md-5">
                     <div className="form-outline">
                        <input type="text" id="form8Example1" className="form-control" />
                        <label className="form-label left-0" for="form8Example1">Nom Complet</label>
                     </div>
                  </div>
                  <div className="col-sm-8 col-md-5">
                     <div className="form-outline">
                        <input type="password" id="form8Example2" className="form-control" />
                        <label className="form-label" for="form8Example2">Mot de Passe</label>
                     </div>
                  </div>
                  <div className="col-sm-8 col-md-5">
                     <div className="form-outline">
                        <input type="number" id="form8Example2" className="form-control" />
                        <label className="form-label" for="form8Example2">Tel</label>
                     </div>
                  </div>
                  <div className="col-sm-8 col-md-5">
                     <div className="form-outline">
                        <input type="email" id="form8Example2" className="form-control" />
                        <label className="form-label" for="form8Example2">Email</label>
                     </div>
                  </div>
               </div>
               <button className="btn btn-success shadow">Enregistrer</button>
            </div>

            {/* User Adresses */}
            

            <hr/>
            {/* Change Password */}
            <div className="change-pass mt-2">
               <div className="container">
                  <h3>Changer Le mot de Passe</h3>
                  <div className="">
                     <div className="">
                        <div className="form-outline">
                           <input type="password" id="form8Example1" className="form-control" />
                           <label className="form-label left-0" for="form8Example1">Dernier Mot de passe</label>
                        </div>
                     </div>
                     <div className="">
                        <div className="form-outline">
                           <input type="password" id="form8Example2" className="form-control" />
                           <label className="form-label" for="form8Example2">Nouveau mot de passe</label>
                        </div>
                     </div>
                     <div className="">
                        <div className="form-outline">
                           <input type="password" id="form8Example2" className="form-control" />
                           <label className="form-label" for="form8Example2">Nouveau mot de passe</label>
                        </div>
                     </div>
                     <button className="btn btn-success">Changer le mot de passe</button>
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

export default UserInfo;