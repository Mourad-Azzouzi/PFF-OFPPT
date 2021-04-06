import { useEffect, useState } from 'react';

const SidePanier = (turnOn, product, STproduct) => {

    //console.log("secand Pro", product.nbPersonne);
    
    const myStyle1 = {
        display: "none"
    };
    const myStyle2 = {
        display: "block"
    };

    const [nembre, setNembre] = useState(1);
    const [addtoP, setAddtoP] = useState();
    const [supSB, setSupSB] = useState(0);
    const [on, setOn] = useState(1);
    const desActiver = () => {
        if (on === 1) {
            setOn(0);
            setAddtoP(0);
        }
    };

//console.log("PP",product);
    useEffect(() => {  
        if (turnOn === 1) {
            setOn(1);
        }
        if (nembre < 1) {
            setNembre(1)
        }
        else if (nembre > 10) {
            setNembre(10);
        }
    }, [turnOn, on, nembre]);


    const SideBasket = () => (
        <div id="SideBar" className="" style={on === 1 ? myStyle2 : myStyle1}>
            <div className="panier-header">
                <i class="fas fa-shopping-cart shopping">&nbsp;<span>Panier</span></i>
                <button className="fermerSB" onClick={desActiver}>
                    <i class="fas fa-times"></i>
                </button>
                <div className="lines">
                    <hr /><hr className="w-50" /><hr className="w-25" />
                </div>
            </div>
            <section className="panier">
                <h5 className="title">Liste des Produits</h5>
                {product.map(pros => (

                    <div className="product shadow">
                        <div className="">
                            <img className="product-picture" src={pros.pic} alt="pic" />
                            <div>
                                <h6>{pros.title}</h6>
                                <div className="Quantité">
                                    <h5>Qte:</h5>
                                    {/* <input className="inputSB" type="Text" value={pros.contity}/>*/}
                                    <div className="PetM">
                                        <button className="Moin" onClick={() => { setNembre(nembre - 1) }}><h6>-</h6></button>
                                        <input className="input" type="Text" value={pros.contity>=nembre?pros.contity:nembre} />
                                        <button className="Plus" onClick={() => { setNembre(nembre + 1) }}><h6>+</h6></button>
                                    </div>
                                </div>
                                <section className="nbPersonnes">
                                        <p>Nembre de personnes</p>
                                        <select className="listNbPer p-1" value={pros.nbPersonne}>
                                            <option>individuel</option>
                                            <option>Deux personnes</option>
                                            <option>Quatre personnes</option>
                                        </select>
                                    </section>
                            </div>
                        </div>

                        <div className="price-delete">
                            <span className="price">Prix totale : <strong>{pros.prix} DH</strong></span>
                            <button className="btn-delete" onClick={() => {
                                if (product.indexOf(pros) > -1) {
                                    product.splice(product.indexOf(pros), 1);
                                    supSB === 0 ? setSupSB(1) : setSupSB(0);
                                    localStorage.removeItem('titles');
                                }
                            }}><i class="fas fa-trash">&nbsp;<span>Suprimer</span></i></button>

                        </div>

                    </div>
                ))}
            </section>
        </div>
    );

    return [SideBasket, on, addtoP, supSB];
}

export default SidePanier;