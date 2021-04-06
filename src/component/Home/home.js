import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import ProductSlider from './Home_ProSlid';
import HomeFeedbacks from './home_Feedbacks';
import axios from 'axios';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            CategoryProducts: [],
            feedbacks: [
                { key: "1", name: "Mohamed", feedbackText: "Exellent service sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut t, sed do eiusmod tempor incididunt ut " },
                { key: "2", name: "Asmae", feedbackText: "c'es wow , Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor iminim t, sed do eiusmod tempor incididunt ut vencprehenderit velit esse cillum " },
                { key: "2", name: "Asmae", feedbackText: "je suis tré satisfait , Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do t, sed do eiusmod tempor incididunt ut eiusmod tempor iminim vencprehenderit velit esse cillum " },
                { key: "2", name: "Asmae", feedbackText: "genial, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t, sed do eiusmod tempor incididunt ut iminim vencprehenderit velit esse cillum genial, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t, sed do eiusmod tempor incididunt ut iminim vencprehenderit velit esse cillum " },
            ]
        }
    }

    categorySlider(cat) {
        return (
            cat.map((c) =>
                <ProductSlider id={c.idcategory} category={c.namecategory} products={c.products} />
            )
        )
    }

    FetchCategoryWithProducts(){
        axios.get('https://localhost:44397/category/GetProducts')
        .then(res => this.setState({CategoryProducts : res.data}))
        .catch(err => console.log(err));
    }

    componentDidMount(){
        this.FetchCategoryWithProducts();
    }

    render() {
        return (
            <div className="home">
                <Navbar />
                <section className="schopr" id="wave">
                    <div className="overlay"></div>
                    <div className="container">
                        <h1 className="brand">
                            <i className="fas fa-utensils"></i><br></br>
                            <a href="" class="typewrite text-white" data-period="2000"
                                data-type='["Bienvenue chez Mk Beldi","Mk Beldi ","Commander Maintenent"]'>
                                <span class="wrap"></span>
                            </a>
                        </h1>
                    </div>
                    <div className="wdgets container">
                        <div className="row">
                            <div className="wdget wdget1 col-sm-12 col-md-3 rounded-circle">
                                <i class="fas fa-ribbon"></i>
                                <h6>Produit de Huate qualité</h6>
                            </div>
                            <div className="wdget wdget2 wdget-important col-sm-12 col-md-3 rounded-circle">
                                <i class="fas fa-home"></i>
                                <h6>100% Fait Maison</h6>
                            </div>
                            <div className="wdget wdget3 col-sm-12 col-md-3 rounded-circle">
                                <i className="fas fa-utensils"></i>
                                <h6>Le Meilleur Choix</h6>
                            </div>
                        </div>
                    </div>
                </section>


                {this.categorySlider(this.state.CategoryProducts)}


                <HomeFeedbacks
                    feedbacks={this.state.feedbacks}
                />

                <Footer />
            </div>
        );
    }
}