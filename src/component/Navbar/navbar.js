import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top shadow-1-strong mk-bg">
                <div className="container-fluid">
                    <a className="navbar-brand flex-grow-1" href="#">
                        <i className="fas fa-utensils"></i>
                    Mk' Beldi</a>
                    <button className="navbar-toggler d-lg-none btn-toggle p-0" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"><i class="fas fa-bars"></i></span>
                    </button>

                    <div className="collapse navbar-collapse flex-grow-0" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    <i class="fas fa-home"></i>
                            Acceuille<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Plats">
                                    <i class="fas fa-utensils"></i>
                            Nos plats</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    <i class="fas fa-question-circle"></i>A propos</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-user"></i>
                            Compte</a>
                                <div className="dropdown-menu drp-account" aria-labelledby="dropdownId">
                                    <Link className="dropdown-item" to="/Login">
                                        <i class="fas fa-sign-in-alt"></i>
                                S'identifier</Link>
                                    <Link className="dropdown-item" to="/Register">
                                        <i class="fas fa-user-plus"></i>
                                S'inscrire</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><i class="fas fa-shopping-cart"></i>Panier</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}