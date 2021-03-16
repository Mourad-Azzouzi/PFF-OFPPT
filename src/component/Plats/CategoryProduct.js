import React from 'react';

export default class extends React.Component{
    render(){
        return(
            <div className="product card p-0 hover-shadow">
                <div className="card-header p-0 m-0">
                    <img src={this.props.image} alt="Image de Produit" />
                </div>
                <div className="card-body button">
                    <h6>{this.props.title}</h6>
                    <span>Prix : <strong>{this.props.MinPrice} DH</strong> - {this.props.MaxPrice} DH</span>
                    <span className="text-right float-end">{this.props.likes} <i className="fas fa-heart text-danger"></i></span><br></br>
                    <button className="btn btn-outline-danger w-100 p-1 " data-mdb-ripple-color="dark">Commander</button>
                </div>
            </div>
        )
    }
}