import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';

export default class register extends React.Component {
    render() {
        return (
            <div className="main">
                <Navbar />
                <section className="login p-3">
                    <form action="" className="frm_login shadow container pb-5" novalidate>
                        <h1 className=" text-md-center title">Se Connecter a <span>Mk' Beldi</span></h1>
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example1" className="form-control" autoComplete="off"/>
                            <label className="form-label" for="form2Example1">E-mail address</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" className="form-control" />
                            <label className="form-label" for="form2Example2">Password</label>
                        </div>

                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-check position-absolute ">
                                    <input
                                        className="form-check-input check_accept"
                                        type="checkbox"
                                        value=""
                                        id="form2Example3"
                                    />
                                    <label className="form-check-label" for="form2Example3"> Rester Connecté </label>
                                </div>
                            </div>

                            <div className="col">
                                <a href="#!" className="float-end ">Mot de passe oublier?</a>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4">Se Connecter</button>

                        <div className="text-center">
                            <p className="text-start">Vous n'avez pas de compte? <Link to="/Register">Créer un compte</Link></p>
                            <p>Où se connecter avec:</p>
                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-danger btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>
                        </div>
                    </form>
                </section>
                <Footer />
            </div>
        );
    }
}