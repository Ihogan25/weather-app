
import { type } from "os";
import { domData } from ".";
import  card from './cards'
import fetchApi from "./fetchAPI";

    type City = string
    type Country = string;

    class Location {
        city: string;
        country: string;
        constructor(city: City, country: Country) {
            this.city = city;
            this.country = country
        }
    }

const storage = (()=> {



    
      
    const loadStoredLocations = async () => {
        if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i++) {
                    const item = localStorage.key(i) || ""
                    const location:Location = JSON.parse(localStorage.getItem(item) || "")
                    const gif = await fetchApi.GIFYApi()
                    const historyCard:HTMLDivElement = card.historyCard(location.city, location.country, gif.data.images.original.url);
                    domData.history.appendChild(historyCard)

            }   
        }
    }


    const addToStorage = (Location: Location):void => {
        const location = JSON.stringify(Location)
        localStorage.setItem(Location.city, location);
    }

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
        clearData,
        addToStorage,
        loadStoredLocations
    }


})();


export { storage, Location, City, Country}