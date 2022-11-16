
import { type } from "os";
import { domData } from ".";

const storage = (()=> {

    




   const clearData =():void=> {
        const bigCard = domData.bigCard;
        const sideCardOne = domData.sideCardOne;
        const sideCardTwo = domData.sideCardTwo;
        domData.newLocationInput.value = '';
        if( bigCard.children.length > 0 && sideCardOne.children.length > 0 && sideCardTwo.children.length > 0) {
            bigCard.removeChild(bigCard.children[0])
            sideCardOne.removeChild(sideCardOne.children[0]);
            sideCardTwo.removeChild(sideCardTwo.children[0]);
        }
    }



    return {
        clearData
    }


})();


export default storage