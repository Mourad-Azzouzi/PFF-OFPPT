import React from 'react';

const Login = () => {
   return(
      <div className="admin-login">
         <div className="brand d-inline">
            <i className="fas fa-utensils"></i><span>Mk' Beldi</span><sub className="bg-dark p-1 m-1 rounded">Admin </sub>
         </div>
         <div className="overlay"></div>
         <div className="container">
            <form className="ad-frm-login shadow-1-strong">
               <div className="mb-4"><h2>Se Connecter a <span>Mk' Beldi<sub className="bg-dark p-1 m-1 rounded text-white">Admin</sub></span></h2></div>
               <div class="form-outline mb-4">
                  <input type="email" id="form2Example1" class="form-control" autoComplete="off"/>
                  <label class="form-label" for="form2Example1">Email address</label>
               </div>

               <div class="form-outline mb-4">
                  <input type="password" id="form2Example2" class="form-control" autoComplete="off"/>
                  <label class="form-label" for="form2Example2">Password</label>
               </div>

               <div class="mb-4">
                     <div class="form-chec">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example3"/>
                        <label class="form-check-label" for="form2Example3">&nbsp;Remember me </label>
                     </div>
               </div>
               <button type="submit" class="btn btn-primary btn-block mb-2">Se Connecter</button>
            </form>
         </div>

         <miniFooter>
            Copyright © 2021 - Tous Les Droits Sont  Réservés
         </miniFooter>
      </div>

   )
} 

export default Login;