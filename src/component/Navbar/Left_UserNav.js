import React ,{useState} from 'react';
import Navbar from './navbar';
import Footer from '../Footer/Footer'

export default function LUseNav() {

   const [isActive, setActive] = useState(false);

   const handleToggle = () => {
      setActive(!isActive);
   };

   return (
      <div>
         <nav className={`navbar-left ${isActive ? "Hide_LeftNavbar" : ""}`}>
            <header>
               <img className="rounded-circle"
                  src="https://loremflickr.com/320/240?random=1"
                  width="80" height="80" alt="" />
               <h6>Mourad-Azz</h6>
            </header>
            <div className="Links">
               <li>
                  <i class="far fa-user-circle"></i>
                  <a href="">Mes Information</a>
               </li>
               <li>
                  <i class="fas fa-dolly"></i>
                  <a href="">Mes Commandes</a>
               </li>
               <li>
                  <i class="far fa-comment-alt"></i>
                  <a href="">Mes Avis</a>
               </li>
               <li>
                  <i class="fas fa-sign-out-alt"></i>
                  <a href="">Se Deconnecté</a>
               </li>
            </div>
            <div className="mini-footer px-3 text-white position-absolute bottom-0 pb-1">
            <p>Copyright © 2021 - Tous Les Droits Sont  Réservés</p>
            </div>
            <div onClick={handleToggle} className="toggleOC">
               <i class="fas fa-bars"></i>
            </div>
         </nav>
      </div>
   )
}