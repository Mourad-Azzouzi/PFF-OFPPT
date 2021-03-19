
import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
    render() {
        return (
            <div className="main">
                <Navbar/>
                <section className="login p-3">
                    <form action="" className="frm_login shadow container pb-5" novalidate>
                            <h1 className="text-center title mb-4">S'inscrire a <span>Mk' Beldi</span></h1>
                            <div class="form-outline mb-4">
                                <input type="text" id="form6Example1" class="form-control" autoComplete= "off"/>
                                <label class="form-label" for="form6Example1">Nom Complet</label>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="text" id="form6Example4" class="form-control" autoComplete="off"/>
                                <label class="form-label" for="form6Example4">Addresse</label>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="email" id="form6Example5" class="form-control" autoComplete="off"/>
                                <label class="form-label" for="form6Example5">E-mail</label>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="number" id="form6Example6" class="form-control" autoComplete="off"/>
                                <label class="form-label" for="form6Example6">N° Tel</label>
                            </div>

                            <div class="form-outline mb-4">
                                <input type="password" id="form6Example3" class="form-control" />
                                <label class="form-label" for="form6Example3">Mot de pass</label>
                            </div>

                            <div class="form-check mb-4">
                                <input
                                    class="form-check-input check_accept"
                                    type="checkbox"
                                    id="form6Example8"
                                    
                                />
                                <label class="form-check-label" for="form6Example8"> J’accepter tout les <a href="#">terme</a> & <a href="">Policies</a></label>
                            </div>

                            <button type="submit" class="btn btn-primary btn-block mb-4">S'inscrire</button>

                            <p>Tu avais deja un compte ? <Link to="/Login">Se connecter</Link></p>
                            <div className="text-center">
                            <p>Où creér un compte avec :</p>
                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-danger btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>
                        </div> 
                        </form>
                </section>
                <Footer/>
            </div>
        );
    }
}