import './EachProduct.css';
import { useState, useEffect } from 'react';
import CustomStyle from './CostumStyle';
import Description from './Description';
import Aviss from './Avis';
import SidePanier from './Panier';


const EachProd = () => {

    var images = {
        0: "/photos/ffn.jpg",
        1: "/photos/cars.jpg",
        2: "/photos/groceshop.png"
    };
    const myStyle1 = {
        color: "rgb(226, 43, 217)",
        borderBottom: "7px solid rgb(226, 43, 217)"
    };
    const myStyle2 = {
        color: "black",
        border: "none"
    };
   
    const [product, setProduct] = useState([{id: 2, pic: "/photos/cars.jpg",title: "Pastila Traditionnelle : Pastila fruit de mer", prix:40, contity:1}]);
    const [nembre, setNembre] = useState(1);
    const [active, setActive] = useState(0);
    const [photo, setPhoto] = useState(images[active]);
    const [stylisht1, setStylisht, stlch] = CustomStyle(images, active);
    const [Avis, setAvis] = useState(0);
    const [description, setDescription] = useState(1);
    const [FAvis, nemberAvis] = Aviss(Avis);
    const [turnOn, setTurnOn] = useState();
    const [SideBasket, getOn, addtoP, SupSB] = SidePanier(turnOn,product);
    /*var titlesA =[
        {pic: "/photos/cars.jpg",title: "Pastila Traditionnelle : Pastila fruit de mer", prix:40, contity:nembre}
    ];*/
   /* if(addtoP===0){
        var titles =[titlesA];
        titles.push({pic: "/photos/cars.jpg",title: "Pastila Traditionnelle : Pastila fruit de mer", prix:40, contity:nembre});
        titles.push({pic: "/photos/cars.jpg",title: "Pastila Traditionnelle : Pastila fruit de mer", prix:40, contity:nembre});
    };*/
    console.log("first Pro",product);
    var titles ={id: 1, pic: "/photos/ffn.jpg",title: "Pastila Traditionnelle : Pastila fruit de mer", prix:40, contity:nembre};
    var cmp = 0;
    var Activer = () =>{ 
        if(getOn===0){
            if(product.length>0){
                    product.forEach(prod => {
                            if(titles.id===prod.id){
                                prod.contity++;                                
                                prod.prix += titles.prix;
                                cmp ++;
                            }                       
                    });
                    if(cmp===0){
                        product.push(titles);
                    }                    
            }else{
                console.log("else her");
                product.push(titles);
            }
           setTurnOn(1);
           //setProduct(titles);
           setProduct(product);
        }
    };


    var AvisOn = () =>{
        if(Avis===0){
            setAvis(1);
            setDescription(0);
        } 
    };
    var descriptionOn = () =>{
        if(description===0){
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
    }, [nembre, addtoP, turnOn,SupSB]);




    return (
        <div className="EachProdPage_div">
            <div>
                <section className="FicheProd">
                    <div className="ProdPic">
                        <img src={photo !== images[active] ? images[active] : photo} alt="yes" />
                    </div>
                    <div className="information">
                        <div className="infos">
                            <h2>{titles.title}</h2>
                            <section className="reviews">
                                <div className="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <div className="avisNember">
                                    <p>{nemberAvis} avis des clients</p>
                                </div>
                            </section>
                            <section className="Price">
                                <p className="Prix">Prix : <strong>{titles.prix} DH</strong> - 100</p>
                            </section>
                            <section className="nbPersonnes">
                                <p>Veuiller selectionner pour combien de personnes ?</p>
                                <select className="listNbPer">
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
                                <div className="delivery">
                                    <img className="trukIcon" src="/photos/delivery-truck.png" alt="" />
                                    <p>Livraison à Rabat, Salé, Témara, Tamesna</p>
                                </div>
                                <div className="delivery">
                                    <img className="trukIcon" src="/photos/payment.png" alt="" />
                                    <p>Paiment à la livraison (à Domicile)</p>
                                </div>
                                <div className="delivery">
                                    <img className="trukIcon" src="/photos/notification.png" alt="" />
                                    <p>La commande sera préte aprés 48h</p>
                                </div>
                            </section>
                            <section className="comPan">
                                <button id="Commander"><h4>Commander</h4></button>
                                <button id="APanier" onClick={Activer}><h4>Ajouter au panier</h4></button>
                            </section>
                        </div>

                    </div>
                </section>
                <section className="OtherPic">
                    <img id="Pic3" src={images[1]} alt="cars" data-index={1} onClick={(e) => { setActive(e.target.dataset.index) }} style={stylisht1.apply()} />
                    <img id="Pic3" src={images[2]} alt="cars" data-index={2} onClick={(e) => { setActive(e.target.dataset.index) }} style={setStylisht.apply()} />
                    <img id="Pic3" src={images[0]} alt="cars" data-index={0} onClick={(e) => { setActive(e.target.dataset.index) }} style={stlch.apply()} />
                </section>
            </div>
            <div className="discription_Review">
                <section id="desc_rev_btn">
                    <button id="Description_btn" onClick={descriptionOn} style={description===1?myStyle1:myStyle2}><h5>Description</h5></button>
                    <button id="Avis_btn" onClick={AvisOn} style={Avis===1?myStyle1:myStyle2}><h5>Avis</h5></button>
                </section>
                <section id="desc_rev_info">
                    <Description description={description} picture={images[0]} />
                    <FAvis />
                </section>
            </div>   
            <SideBasket/>            
        </div>
    );
}

export default EachProd;