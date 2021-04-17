import React, { Component} from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import CategoryPlats from './ProductCategory';
import axios from 'axios';

export default class Plats extends Component{

    // const [value3, setValue3] = useState('');
    constructor(){
    super()
    this.state = {
    plats: [
        {
            id:"1",
            category: ``,
            product_details: [
                {key:"1",  image:"http://192.168.2.110/food/1.png", id_cat:"1", title:"Pastila Traditionnelle : Pastilla fruit de mer", MinPrice:"230", MaxPrice:"500", likes:"110"},
            ],
        },
    ],
    }
    }


    mapping(category) {
        return (
            category.map((cat) => 
            <CategoryPlats id={cat.key} category={cat.category} product_count = {cat.product_count} product_details={cat.product_details}/>
            )
        )
    }

    // Fetch Category With All Products
    FetchCategoryTHAllProducts(){
        axios.get('https://localhost:44397/category/Get/Categories/Products')
        .then(res => this.setState({plats : res.data}))
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.FetchCategoryTHAllProducts();
    }

    render(){
        return(
            <div className="Plats">
                <Navbar/>
                <div className="filter">
                    <div className="container">
                    <h3>Filtrer Les Plats</h3>
                    <div className="w-100 fl-cat shadow-1-strong">
                        <div className="row p-3">
                            <div className="col-lg-3 mt-1 col-md-4">
                                <input type="checkbox" name="all" className="mr-1 form-check-input " id="mini-sale-check" ref={'1'}/>
                                <label htmlFor="mini-sale-check">Les Mini Salés (13)</label>
                            </div>
                            <div className="col-lg-3 mt-1 col-md-4">
                                <input type="checkbox" name="all" className="mr-1 form-check-input " id="plat-trad" ref={'2'}/>
                                <label htmlFor="plat-trad">Les Plat Traditionnels(7)</label>
                            </div>
                            <div className="col-lg-3 mt-1 col-md-4">
                                <input type="checkbox" name="all" className="mr-1 form-check-input " id="grand-pastil" />
                                <label htmlFor="grand-pastil">Les Grandes Pastillas (4)</label>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <input type="checkbox" name="all" className="mr-1 form-check-input " id="disp-all" defaultChecked/>
                                <label htmlFor="disp-all">Afficher Tout(20)</label>
                            </div>
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
                    </div>
                </div>
                </div>

                {this.mapping(this.state.plats)}
                
                <Footer />
            </div>
        );
    }
}