import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className="p-5 m-0">
            <div className="container">
            <div className="row">
                    <div className="col-sm-10 col-md-3 d-flex align-items-center f-brand">
                        <a href="/"><i className="fas fa-utensils"></i> Mk' Beldi</a> 
                    </div>
                    <div className="col-sm-10 col-md-3 nv">
                        <h5>Nos Plat</h5>
                        <Link to="/Plats">Les Mini Salé</Link><br></br>
                        <Link to="/Plats">Les Plat Traditinell</Link><br></br>
                        <Link to="/Plats">Grandes Pastillas</Link><br></br>
                    </div>
                    <div className="col-sm-10 col-md-3 nv">
                    <h5>Mon Compte</h5>
                        <Link to="/Register">Crèer Un Compte</Link><br></br>
                        <Link to="/Login">S’identifier</Link><br></br>
                    </div>
                    <div className="col-sm-10 col-md-3 nv mb-4">
                    <h5>Support</h5>
                        <a href="">Exemple1</a><br></br>
                        <a href="">Exemple2</a><br></br>
                        <a href="">Exemple3</a><br></br>
                    </div>
            </div>
            <hr/>
            <p className="float-end text-white copyright">Copyright © 2021 - Tous Les Droits Sont  Réservés</p>
            </div>
        </footer>
    );
}

export default Footer