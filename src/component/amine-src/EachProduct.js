import './EachProduct.css';
import { useState, useEffect } from 'react';
import CustomStyle from './CostumStyle';
import Description from './Description';
import Aviss from './Avis';
import SidePanier from './Panier';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';


const EachProd = () => {

    var images = {
        0: "http://localhost/food/1.png",
        1: "http://localhost/food/2.png",
        2: "http://localhost/food/3.png"
    };
    const myStyle1 = {
        color: "rgb(226, 43, 217)",
        borderBottom: "7px solid rgb(226, 43, 217)"
    };
    const myStyle2 = {
        color: "black",
        border: "none"
    };

    const [product, setProduct] = useState([{ id: 2, pic: "http://localhost/food/1.png", title: "Pastila Traditionnelle : Pastila fruit de mer", prix: 80, contity: 1 }]);
    const [nembre, setNembre] = useState(1);
    const [active, setActive] = useState(0);
    const [photo, setPhoto] = useState(images[active]);
    const [stylisht1, setStylisht, stlch] = CustomStyle(images, active);
    const [Avis, setAvis] = useState(0);
    const [description, setDescription] = useState(1);
    const [FAvis, nemberAvis] = Aviss(Avis);
    const [turnOn, setTurnOn] = useState();
    const [SideBasket, getOn, addtoP, SupSB] = SidePanier(turnOn, product);
    /*var titlesA =[
        {pic: "/photos/cars.jpg",title: "Pastila Traditionnelle : Pastila fruit de mer", prix:40, contity:nembre}
    ];*/
    /* if(addtoP===0){
         var titles =[titlesA];
         titles.push({pic: "/photos/cars.jpg",title: "Pastila Traditionnelle : Pastila fruit de mer", prix:40, contity:nembre});
         titles.push({pic: "/photos/cars.jpg",title: "Pastila Traditionnelle : Pastila fruit de mer", prix:40, contity:nembre});
     };*/
    console.log("first Pro", product);
    var titles = { id: 1, pic: "/photos/ffn.jpg", title: "Pastila Traditionnelle : Pastila fruit de mer", prix: 40, contity: nembre };
    var cmp = 0;
    var Activer = () => {
        if (getOn === 0) {
            if (product.length > 0) {
                product.forEach(prod => {
                    if (titles.id === prod.id) {
                        prod.contity++;
                        prod.prix += titles.prix;
                        cmp++;
                    }
                });
                if (cmp === 0) {
                    product.push(titles);
                }
            } else {
                console.log("else her");
                product.push(titles);
            }
            setTurnOn(1);
            //setProduct(titles);
            setProduct(product);
        }
    };


    var AvisOn = () => {
        if (Avis === 0) {
            setAvis(1);
            setDescription(0);
        }
    };
    var descriptionOn = () => {
        if (description === 0) {
            setDescription(1);
            setAvis(0);
        }

    }


    useEffect(() => {
        setTurnOn(addtoP);
        if (nembre < 1) {
            setNembre(1)
        }
        else if (nembre > 10) {
            setNembre(10);
        }
    }, [nembre, addtoP, turnOn, SupSB]);




    return (
        <div className="main">
            <Navbar/>
            <div className="EachProdPage_div pt-5">
                <div>
                    <section className="FicheProd shadow">
                        <div className="ProdPic">
                            <img src={photo !== images[active] ? images[active] : photo} alt="Selected Picture" />
                            <section className="OtherPic d-flex ">
                                <img id="Pic3" src={images[1]} className="shadow" alt="cars" data-index={1} onClick={(e) => { setActive(e.target.dataset.index) }} style={stylisht1.apply()} />
                                <img id="Pic3" src={images[2]} className="shadow" alt="cars" data-index={2} onClick={(e) => { setActive(e.target.dataset.index) }} style={setStylisht.apply()} />
                                <img id="Pic3" src={images[0]} className="shadow" alt="cars" data-index={0} onClick={(e) => { setActive(e.target.dataset.index) }} style={stlch.apply()} />
                            </section>
                        </div>
                        <div className="information">
                            <div className="infos p-0">
                                <h4>{titles.title}</h4>
                                <section className="reviews">
                                    <div className="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div><span className="clearfix"></span>
                                    <div className="avisNember">
                                        <p>{nemberAvis} Avis Des Clients</p>
                                    </div>
                                </section>
                                <section className="Price">
                                    Prix : <strong>{titles.prix},00 DH</strong> - 800
                                </section>
                                
                                <section className="nbPersonnes">
                                    <p>Veuiller selectionner pour combien de personnes ?</p>
                                    <select className="listNbPer p-1">
                                        <option>individuel</option>
                                        <option>Deux personnes</option>
                                        <option>Quatre personnes</option>
                                    </select>
                                </section>
                                <section className="Quantite">
                                    <p>Quantité de Produit :</p>
                                    <div className="PetM">
                                        <button className="Moin" onClick={() => { setNembre(nembre - 1) }}><h6>-</h6></button>
                                        <input className="input" type="Text" value={nembre} />
                                        <button className="Plus" onClick={() => { setNembre(nembre + 1) }}><h6>+</h6></button>
                                    </div>
                                </section>
                                <section className="shipInfo">
                                    <div className="info">
                                        <i class="fas fa-truck"><span> Livraison à Rabat, Salé, Témara, Tamesna</span></i>
                                    </div>
                                    <div className="info">
                                        <i class="fas fa-dollar-sign"><span> &nbsp;&nbsp;Paiment à la livraison (à Domicile)</span></i>                                        
                                    </div>
                                    <div className="info">
                                        <i class="fas fa-bell"><span> &nbsp;La commande sera préte aprés 48h</span></i>
                                    </div>
                                </section>
                                <section className="comPan">
                                    <button id="Commander" className="mb-2">Commander</button>
                                    <button id="APanier" className="mb-2" onClick={Activer}>Ajouter au panier</button>
                                    <button className="btn-share bg-transparent border-0"><i className="fas fa-share mt-2"></i> Partager L'article</button>
                                </section>
                            </div>

                        </div>
                    </section>
                </div>
                {/* <div className="discription_Review ">
                    <section id="desc_rev_btn">
                        <button id="Description_btn" onClick={descriptionOn} style={description === 1 ? myStyle1 : myStyle2}><h5>Description</h5></button>
                        <button id="Avis_btn" onClick={AvisOn} style={Avis === 1 ? myStyle1 : myStyle2}><h5>Avis</h5></button>
                    </section>
                    <section id="desc_rev_info">
                        <Description description={description} picture={images[0]} />
                        <FAvis />
                    </section>
                </div> */}
                <section className="discription_Review">
                    <hr/>
                    <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab" aria-controls="ex1-tabs-1" aria-selected="true">Description</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a
                                class="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab" aria-controls="ex1-tabs-2" aria-selected="false">Reviews
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content" id="ex1-content">
                        <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                            <Description description={description} picture={images[0]} />
                        </div>
                        <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                            <FAvis />
                        </div>
                    </div>
                </section>
                
                <SideBasket />
            </div>
            <Footer/>
        </div>
    );
}

export default EachProd;