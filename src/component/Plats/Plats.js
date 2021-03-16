import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import CategoryPlats from './ProductCategory';

export default class Plats extends React.Component{

    // const [value3, setValue3] = useState('');
    constructor(){
    super()
    this.state = {
        
    plats: [
        {
            id:"1",
            category: "Mini Salés (14)",
            product_details: [
                {key:"1",  image:"http://192.168.2.110/food/1.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"230", MaxPrice:"500", likes:"110"},
                {key:"2",  image:"http://192.168.2.110/food/2.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"230", MaxPrice:"500", likes:"123"},
                {key:"3",  image:"http://192.168.2.110/food/3.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"150", MaxPrice:"500", likes:"145"},
                {key:"4",  image:"http://192.168.2.110/food/4.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"400", MaxPrice:"500", likes:"144"},
                {key:"5",  image:"http://192.168.2.110/food/5.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"350", MaxPrice:"500", likes:"191"},
                {key:"6",  image:"http://192.168.2.110/food/6.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"299", MaxPrice:"500", likes:"300"},
                {key:"7",  image:"http://192.168.2.110/food/7.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"205", MaxPrice:"500", likes:"457"},
                {key:"8",  image:"http://192.168.2.110/food/2.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"200", MaxPrice:"500", likes:"1330"},
                {key:"9",  image:"http://192.168.2.110/food/6.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"299", MaxPrice:"500", likes:"402"},
                {key:"10", image:"http://192.168.2.110/food/5.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"159", MaxPrice:"500", likes:"415"},
                {key:"11", image:"http://192.168.2.110/food/4.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"199", MaxPrice:"500", likes:"415"},
                {key:"1",  image:"http://192.168.2.110/food/3.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"200", MaxPrice:"500", likes:"110"},
                {key:"2",  image:"http://192.168.2.110/food/2.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"270", MaxPrice:"500", likes:"123"},
                {key:"3",  image:"http://192.168.2.110/food/1.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"270", MaxPrice:"500", likes:"145"},
                {key:"4",  image:"http://192.168.2.110/food/2.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"140", MaxPrice:"530", likes:"144"},
                {key:"5",  image:"http://192.168.2.110/food/3.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"240", MaxPrice:"650", likes:"191"},
                {key:"6",  image:"http://192.168.2.110/food/4.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"300", MaxPrice:"700", likes:"300"},
                {key:"7",  image:"http://192.168.2.110/food/5.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"477", MaxPrice:"600", likes:"457"},
                {key:"8",  image:"http://192.168.2.110/food/6.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"580", MaxPrice:"760", likes:"1330"},
                {key:"9",  image:"http://192.168.2.110/food/7.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"190", MaxPrice:"600", likes:"402"},
                {key:"10", image:"http://192.168.2.110/food/1.png",id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"366", MaxPrice:"700", likes:"415"},
            ],
        },
        {
            id:"2",
            category: "Plat Traditionnels(7)",
            product_details: [
                {key:"1",  image:"http://192.168.2.110/food/1.png",id_cat:"2", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"230", MaxPrice:"500", likes:"110"},
                {key:"2",  image:"http://192.168.2.110/food/2.png",id_cat:"2", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"230", MaxPrice:"500", likes:"123"},
                {key:"3",  image:"http://192.168.2.110/food/3.png",id_cat:"2", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"150", MaxPrice:"500", likes:"145"},
                {key:"4",  image:"http://192.168.2.110/food/4.png",id_cat:"2", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"400", MaxPrice:"500", likes:"144"},
                {key:"5",  image:"http://192.168.2.110/food/5.png",id_cat:"2", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"350", MaxPrice:"500", likes:"191"},
                {key:"6",  image:"http://192.168.2.110/food/6.png",id_cat:"2", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"299", MaxPrice:"500", likes:"300"},
                {key:"7",  image:"http://192.168.2.110/food/7.png",id_cat:"2", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"205", MaxPrice:"500", likes:"457"},
            ],
        },
    ],
    }
    }

    
    mapping(category) {
        return (
            category.map((cat) => 
            <CategoryPlats id={cat.key} category={cat.category} product_details={cat.product_details}/>
            )
        )
    }


    render(){
        return(
            <div className="Plats">
                <Navbar/>
                <div className="filter">
                    <div className="container">
                    <h3>Filtrer Les Plats</h3>
                    <div className="w-100 fl-cat shadow-1-strong">
                        {/* <div className="card-header p-2">
                        <h6 className="text-dark m-0">Filtrer Les Produit</h6>
                        </div> */}
                        <div className="row p-3">
                            <div className="col-lg-3 mt-1 col-md-4"><input type="checkbox" name="cat" className="mr-1 form-check-input " id="mini-sale"/><label htmlFor="mini-sale">Les Mini Salés (13)</label></div>
                            <div className="col-lg-3 mt-1 col-md-4"><input type="checkbox" name="cat" className="mr-1 form-check-input " id="plat-trad"/><label htmlFor="plat-trad">Les Plat Traditionnels(7)</label></div>
                            <div className="col-lg-3 mt-1 col-md-4"><input type="checkbox" name="cat" className="mr-1 form-check-input " id="grand-pastil"/><label htmlFor="grand-pastil">Les Grandes Pastillas (4)</label></div>
                            <div className="col-lg-3 col-md-4"><input type="checkbox" name="all" className="mr-1 form-check-input " id="disp-all"/><label htmlFor="disp-all">Afficher Tout(20)</label></div>
                        </div>
                    </div>
                    </div>
                    <div className="search-bar">
                    <div className="container">
                        <h3 className="">Rechercher</h3>
                        <div class="btninp w-100" role="group">
                            <input type="text" className="w-100 txt-search btn btn-outline-dark text-start shadow-1-strong rounded" id="" placeholder="Faire un recherche" />
                            <button className="btn-search btn mt-1 shadow-1-strong" data-mdb-ripple-color="dark" type="button">Rechercher</button>
                        </div>
                        {/* <button type="button" class="btn btn-outline-light mt-1">Chercher</button> data-mdb-ripple-color="dark" */}
                    </div>
                </div>
                </div>

                {this.mapping(this.state.plats)}
                
                <Footer />
            </div>
        );
    }
}