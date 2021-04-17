import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import Home from './Home/home';
import Plats from './Plats/Plats';
import Login from './Account/login';
import Register from './Account/register';
import Product from './amine-src/EachProduct';
import MesInformation from './User/MesInformation/info';
import Admin_Login from './Admin/Login';
import GererProduits from './Admin/AdminComponents/ManageProducts';
import GererCommandes from './Admin/AdminComponents/ManageOrders';
import MakeOrder from './amine-src/makeOrder';
import UsersList from './Admin/AdminComponents/UsersList';
import ManageFeedbacks from './Admin/AdminComponents/ManageFeedbacks';
import TesUpload from './Admin/AdminComponents/testUploadImages';


const App = () => {

   
   useEffect( () => {
      
   },[])

   return (
      <Router>
         <Switch>
            {/* Home Component*/}
            <Route exact path="/">
               <Home />
            </Route>

            {/* Nos Plats */}
            <Route path="/Plats">
               <Plats/>
            </Route>    

            {/* Product Page */}
            <Route path="/Product/:idProduct">
               <Product/>
            </Route>

            {/* Login Component*/}
            <Route path="/Login">
               <Login />
            </Route>

            {/* Register Component*/}
            <Route path="/Register">
               <Register />
            </Route>

            {/* User Component / Mes Information */}
            <Route path="/User/Personal-info">
               <MesInformation />
            </Route>

            {/* Admin Page - Login */}
            <Route path="/Admin/Login">
               <Admin_Login />
            </Route>

            {/* Admin - Product Management */}
            <Route path="/Admin/Manage/Product">
               <GererProduits />
            </Route>

            {/* This Is For Test */}
            <Route path="/Admin/Manage/Orders">
               <GererCommandes />
            </Route>

            {/* Make Order */}
            <Route path="/makeOrder">
               <MakeOrder />
            </Route>

            {/* Users List */}
            <Route path="/Admin/UsersList">
               <UsersList />
            </Route>

            {/* Manage Feebacks */}
            <Route path="/Admin/Manage/Feedbacks">
               <ManageFeedbacks />
            </Route>

            {/* Test upload image */}
            <Route path="/upload/image">
               <TesUpload />
            </Route>

         </Switch>
      </Router>
   )
}

export default App;