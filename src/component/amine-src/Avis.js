


const Aviss = (avis) =>{
    const Reviews =[
        {name:"Amine", stars:3, comment:"Great product, i like it!"},
        {name:"Morad", stars:5, comment:"deliciouse, i love it so much!"},
        {name:"yassine", stars:2, comment:"Normale!! very cold"},
        {name:"karime", stars:1, comment:"i don't like it! not god"}
    ];
    const myStyle1 = {
        color: "orange"
    };
    const myStyle2 = {
        color: "gray"
    };
    const myStyle3 = {
        color: "rgb(226, 43, 217)"
    };

    const FAvis = () =>(
        <div className={avis===0?"Avis_Off":"Avis_On"}>
            <h1 id="Avis_title">Les Avis: {Reviews.length} Avis</h1>
            {Reviews.map(rev =>(
                <div className="Review">
                    <div id="Review">
                        <h3 style={myStyle3}>{rev.name}</h3>
                        <i class="fas fa-star" style={rev.stars>=1?myStyle1:myStyle2}></i>
                        <i class="fas fa-star"style={rev.stars>=2?myStyle1:myStyle2}></i>
                        <i class="fas fa-star" style={rev.stars>=3?myStyle1:myStyle2}></i>
                        <i class="fas fa-star" style={rev.stars>=4?myStyle1:myStyle2}></i>
                        <i class="fas fa-star" style={rev.stars>=5?myStyle1:myStyle2}></i>
                        <p>{rev.comment}</p>                          
                    </div>

                </div>
            ))}                
        </div>
    );


    return[FAvis,Reviews.length];

}

export default Aviss;