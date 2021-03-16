import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import ProductSlider from './Home_ProSlid';
import HomeFeedbacks from './home_Feedbacks';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            CategoryProductSlider: [
                {
                    key: "1",
                    category: "Les Mini Salé",
                    categoryProducts: [
                        { key: "1", image: "http://192.168.2.110/food/1.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "230", MaxPrice: "500", likes: "110" },
                        { key: "2", image: "http://192.168.2.110/food/2.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "230", MaxPrice: "500", likes: "123" },
                        { key: "3", image: "http://192.168.2.110/food/3.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "150", MaxPrice: "500", likes: "145" },
                        { key: "4", image: "http://192.168.2.110/food/4.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "400", MaxPrice: "500", likes: "144" },
                        { key: "5", image: "http://192.168.2.110/food/5.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "350", MaxPrice: "500", likes: "191" },
                        { key: "6", image: "http://192.168.2.110/food/6.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "299", MaxPrice: "500", likes: "300" },
                        { key: "7", image: "http://192.168.2.110/food/7.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "205", MaxPrice: "500", likes: "457" },
                    ]
                },
                {
                    key: "2",
                    category: "Les Plats Traditionel",
                    categoryProducts: [
                        { key: "1", image: "http://192.168.2.110/food/1.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "230", MaxPrice: "500", likes: "110" },
                        { key: "2", image: "http://192.168.2.110/food/2.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "230", MaxPrice: "500", likes: "123" },
                        { key: "3", image: "http://192.168.2.110/food/3.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "150", MaxPrice: "500", likes: "145" },
                        { key: "4", image: "http://192.168.2.110/food/4.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "400", MaxPrice: "500", likes: "144" },
                        { key: "5", image: "http://192.168.2.110/food/5.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "350", MaxPrice: "500", likes: "191" },
                        { key: "6", image: "http://192.168.2.110/food/6.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "299", MaxPrice: "500", likes: "300" },
                        { key: "7", image: "http://192.168.2.110/food/7.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "205", MaxPrice: "500", likes: "457" },
                    ]
                },
                {
                    key: "3",
                    category: "Les Grandes Pastillas",
                    categoryProducts: [
                        { key: "1", image: "http://192.168.2.110/food/1.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "230", MaxPrice: "500", likes: "110" },
                        { key: "2", image: "http://192.168.2.110/food/2.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "230", MaxPrice: "500", likes: "123" },
                        { key: "3", image: "http://192.168.2.110/food/3.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "150", MaxPrice: "500", likes: "145" },
                        { key: "4", image: "http://192.168.2.110/food/4.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "400", MaxPrice: "500", likes: "144" },
                        { key: "5", image: "http://192.168.2.110/food/5.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "350", MaxPrice: "500", likes: "191" },
                        { key: "6", image: "http://192.168.2.110/food/6.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "299", MaxPrice: "500", likes: "300" },
                        { key: "7", image: "http://192.168.2.110/food/7.png", id_cat: "2", title: "Pastila Traditionnelle : Pastilla fruit de mer", MinPrice: "205", MaxPrice: "500", likes: "457" },
                    ]
                },
            ],
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
                <ProductSlider id={c.key} category={c.category} products={c.categoryProducts} />
            )
        )
    }

    render() {
        return (
            <div className="home">
                <Navbar />
                <section className="schopr shadow-1-strong" id="wave">
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


                {this.categorySlider(this.state.CategoryProductSlider)}

                <HomeFeedbacks
                    feedbacks={this.state.feedbacks}
                />

                <Footer />
            </div>
        );
    }
}