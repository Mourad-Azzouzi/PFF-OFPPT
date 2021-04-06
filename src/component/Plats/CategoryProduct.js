import React from 'react';
import {Link} from 'react-router-dom';

export default class extends React.Component{
    render(){
        return(
            <div className="product card p-0 hover-shadow">
                
                <div className="card-header p-0 m-0">
                    <Link to="/Product" className="link-dark"><img src={this.props.image} alt="Image de Produit" /></Link>
                </div>
                <div className="card-body button">
                    <Link to="/Product" className="link-dark">
                    <h6>{this.props.title}</h6>
                    </Link>
                    <span>Prix : <strong>{this.props.MinPrice} DH</strong> - {this.props.MaxPrice} DH</span>
                    <span className="text-right float-end">{this.props.likes} <i className="fas fa-heart text-danger"></i></span><br></br>
                    <Link to="/MakeOrder"><button className="btn btn-outline- p-1" data-mdb-ripple-color="dark">Commander</button></Link>
                    <span className="mt-3 mx-2 share"><strong><i class="fas fa-share-square">&nbsp;Partager</i></strong></span>
                </div>
            </div>
        )
    }
}