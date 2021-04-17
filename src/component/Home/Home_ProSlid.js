import React from 'react';
import HomeProducts from './Home_product';

export default class ProductSlider extends React.Component {


   slider_products(product) {
      return (
         product.map((e) =>
            <HomeProducts
               id={e.idProduct}
               image={e.picture1}
               title={e.title}
               MinPrice={e.price1}
               MaxPrice={e.price10}
               idProduct={e.idProduct}
            />
         )
      )
   }



   render() {
      return (
         <div className="slider w-100">
            <div className="container">
               <h2>{this.props.category}</h2>
               <div className="owl-carousel  product-slider">
                  {this.slider_products(this.props.products)}
               </div>
            </div>
         </div>
      )
   }
}