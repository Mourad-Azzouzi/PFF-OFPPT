import React from 'react';
// import CategoryProduct from './CategoryProduct';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import Product from '../amine-src/EachProduct';


function CategoryPlats(props) {

    
    return (
        <div className="CategoryPlats">
            <div className="container">
                <h2>{props.category} ({props.product_count})</h2>
            </div>
            
            <div className="products">
                <div className="container">
                    <div className="row">
                        {
                        props.product_details.map(p =>
                        <div className="product card p-0 hover-shadow">
                            <div className="card-header p-0 m-0">
                                <Link to={`/Product/${p.key}`} className="link-dark"><img src={p.image} alt="Image de Produit" /></Link>
                            </div>
                            <div className="card-body button">
                                <Link to={`/Product/${p.key}`} className="link-dark">
                                    <h6>{p.title}</h6>
                                </Link>
                                <span>Prix : <strong>{p.minPrice} DH</strong> - {p.maxPrice}</span>
                                <span className="text-right float-end">{p.likes} <i className="fas fa-heart text-danger"></i></span><br></br>
                                <Link to="/MakeOrder"><button className="btn btn-outline- p-1" data-mdb-ripple-color="dark">Commander</button></Link>
                                <span className="mt-3 mx-2 share"><strong><i class="fas fa-share-square">&nbsp;Partager</i></strong></span>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPlats;