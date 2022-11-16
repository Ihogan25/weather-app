import { type } from "os";


const card = (()=> {

    const mainCard =(name:string, country: string, tempature:string):HTMLDivElement=> {
        const card = document.createElement('div');
        card.classList.add('main-card')
        card.innerHTML = 
        `
            <h3 class="city">${name}</h3>
            <p class="country">${country}</p>
            <p class="temp">${tempature}</p>
        `
        return card
    }

    const sideCard =(dataOne: string, dataTwo: string, dataThree?:string, dataFour?:string):HTMLDivElement=> {
        const card = document.createElement('div');
        card.classList.add('side-card');
        if(typeof dataThree !== 'undefined' && typeof dataFour !== 'undefined') {
            card.innerHTML = 
            `
                <p class="sc-p-1">${dataThree} ${dataOne}</p>
                <p class="sc-p-2">${dataFour}${dataTwo}</p>
            `
            return card
        }
        card.innerHTML = 
            `
                <p class="sc-p-1">${dataOne}</p>
                <p class="sc-p-2">${dataTwo}</p>
            `
        return card


        
    }

    const historyCard=()=> {
        const card = document.createElement('div');
        card.classList.add('history-card');
    }

    return {
        mainCard,
        sideCard,
        historyCard

    }
})()

export default card