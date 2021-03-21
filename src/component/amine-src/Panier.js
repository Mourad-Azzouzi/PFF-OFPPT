import {useEffect, useState} from 'react';

const SidePanier = (turnOn,product) =>{
    


    const myStyle1 = {
        display: "none"
    };
    const myStyle2 = {
        display: "block"
    };


    const [addtoP, setAddtoP] = useState();
    const [supSB, setSupSB] = useState(0);
    const [on, setOn] = useState(1);
    const desActiver = () =>{
        if(on===1){
            setOn(0);
            setAddtoP(0);
        }
    };

    useEffect(() =>{
        if(turnOn===1){
            setOn(1);
        }
    },[turnOn,product,on]);
   
    const SideBasket = () =>(
            <div id="SideBar" style={on===1?myStyle2:myStyle1}>
                <section className="headerSB">
                    <i class="fas fa-shopping-cart shopping">  Panier</i>                   
                    <button className="fermerSB" onClick={desActiver}>X</button>                
                </section>
                <section className="ProduitSB"> 
                    <h5 className="ListDP">Liste des Produits</h5> 
                    {product.map(pros =>(
                        <div className="ProdPanier">
                            <div className="PicTitle">
                                <img className="PhotoSB" src={pros.pic} alt="pic"/>
                                <div>
                                    <h6>{pros.title}</h6>
                                    <div className="Quantité">
                                        <p>Quantité:</p>
                                        <input className="inputSB" type="Text" value={pros.contity}/>                                 
                                    </div>                                    
                                </div>                               
                            </div>                           

                            <div className="PrixSup">
                                <p className="PrixSB">Prix totale : <strong>{pros.prix} DH</strong> </p> 
                                <button className="btnSB" onClick={() =>{if(product.indexOf(pros)> -1){
                                    product.splice(product.indexOf(pros), 1);
                                    supSB===0?setSupSB(1):setSupSB(0);
                                }}}><i class="fas fa-trash"> Suprimer</i></button>
                            </div>
                                                                             
                        </div>
                    ))}
                </section>
            </div>
    );

    return[SideBasket,on,addtoP, supSB];
}

export default SidePanier;