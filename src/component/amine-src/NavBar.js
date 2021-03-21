import React, { Component } from 'react'
import './style.css';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand flex-grow-1 ml-3" href="#">
                    <i className="fas fa-utensils"></i>
                Mk' Beldi</a>
                <button className="navbar-toggler d-lg-none btn-toggle" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"><i class="fas fa-bars"></i></span>
                </button>
                
                <div className="collapse navbar-collapse flex-grow-0" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <i class="fas fa-home"></i>
                            Acceuille<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i class="fas fa-utensils"></i>
                            Nos plats</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i class="fas fa-question-circle"></i>A propos</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-user"></i>
                            Compte</a>
                            <div className="dropdown-menu drp-account" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">
                                    <i class="fas fa-sign-in-alt"></i>
                                S'identifier</a>
                                <a className="dropdown-item" href="#">
                                    <i class="fas fa-user-plus"></i>
                                S'inscrire</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i class="fas fa-shopping-cart"></i>Panier</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}