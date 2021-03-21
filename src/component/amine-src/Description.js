

const Description = ({description, picture}) =>{ 
    return(
        <div className={description===0?"description_Off":"description_On"}>
            <h1 id="description_title">Pastila Traditionnelle : Pastila fruit de mer</h1>
            <p>Mk beldi sfg rssy stry fdtr kwkw oowiwd iouvn wnvnf djkl wxbcnfr ezoepr-ikkd sfg rssy stry fdtr kwkw
            sfg rssy stry fdtr kwkw oowiwd iouvn wnvnf djkl wxbcnfr ezoepr-ikkd kwkw oowiwd iouvn wnvnf djkl wxbcnfr 
            ezoepr-ikkd sfg rssy stry fdtr kwkwsfg rssy stry fdtr kwkw oowiwd iouvn wnvnf djkl wxbcnfr ezoepr-ikkd 
            oowiwd iouvn wnvnf djkl wxbcnfr oowiwd iouvn wnvnf djkl wxbcnfr ezoepr-ikkd</p>
            <img id="desc_img" src={picture} alt="immg"/>
        </div>
    );
}

export default Description;