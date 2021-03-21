

const CustomStyle = (images, active) =>{
    const myStyle1 = {
        opacity : "0.5"
    };
    const myStyle2 = {
        opacity : "1"
    }
    const stylisht1 = () =>{
        if(images[active]===images[1]){
            return myStyle1;
        }
        return myStyle2;
    };
    const stylisht2 = () =>{
        if(images[active]===images[2]){
            return myStyle1;
        }
        return myStyle2;
    };
    const stylisht0 = () =>{
        if(images[active]===images[0]){
            return myStyle1;
        }
        return myStyle2;
    };
    return [stylisht1, stylisht2, stylisht0];
}
export default CustomStyle;