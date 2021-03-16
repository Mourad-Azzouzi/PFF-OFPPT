import React from 'react';
import HomeProducts from './Home_product';

export default class ProductSlider extends React.Component {


   slider_products(product) {
      return (
         product.map((e) =>
            <HomeProducts
               id={e.key}
               image={e.image}
               title={e.title}
               MinPrice={e.MinPrice}
               MaxPrice={e.MaxPrice}
            />
         )
      )
   }

   render() {
      return (
         <div className="slider w-100">
            <div className="container">
               <h2>{this.props.category}</h2>
               <div className="owl-carousel owl-theme product-slider">
                  {/* {this.slider_products(this.props.products)} */}
                  
                  {
                     this.props.products.map((e) =>
                     <HomeProducts
                        id={e.key}
                        image={e.image}
                        title={e.title}
                        MinPrice={e.MinPrice}
                        MaxPrice={e.MaxPrice}
                     />
                  )
                  }
               </div>
            </div>
         </div>
      )
   }
}