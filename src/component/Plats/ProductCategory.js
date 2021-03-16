import React from 'react';
import CategoryProduct from './CategoryProduct'



export default class CategoryPlats extends React.Component{

    Products(product) {
        return(
            product.map((pt) => 
                <CategoryProduct
                id={pt.key}
                image={pt.image}
                title={pt.title}
                MinPrice={pt.MinPrice}
                MaxPrice={pt.MaxPrice}
                likes={pt.likes}
                />
            )
        )
    }
    
    render(){
        return(
            <div className="CategoryPlats">
                <div className="container">
                    <h2>{this.props.category}</h2>
                </div>
                 <div className="products">
                    <div className="container">
                        <div className="row">
                            {this.Products(this.props.product_details)}
                        </div>
                    </div>
                 </div> 
            </div>
        );
    }
}