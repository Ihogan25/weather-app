import './styles.css';
import card from './cards';
import fetchApi from './fetchAPI';
import storage from './storage';
import convert from './converions';

export const domData = {
    newLocationBtn: (<HTMLButtonElement>document.getElementById('new-location-btn')),
    newLocationInput: (<HTMLInputElement>document.getElementById('new-location-input')),
    bigCard: (<HTMLDivElement>document.getElementById('big-card')),
    sideCardOne: (<HTMLDivElement>document.getElementById('side-card-one')),
    sideCardTwo: (<HTMLDivElement>document.getElementById('side-card-two')),
    history: document.getElementById('recent-searches')
}

domData.newLocationBtn.addEventListener('click', async ()=> {
    const location: string = domData.newLocationInput.value;
    const data = await fetchApi.weatherApi(location);
    const mainCard = card.mainCard(data.name, data.sys.country, convert.toFarienheit(data.main.temp))
    const sideCard1 = card.sideCard(convert.toFarienheit(data.main.feels_like), data.main.humidity, 'Feels Like: ', 'Humidity: ')
    const sideCard2 = card.sideCard(data.weather[0].main, data.weather[0].description);
    storage.clearData()
    domData.bigCard.appendChild(mainCard);
    domData.sideCardOne.appendChild(sideCard1);
    domData.sideCardTwo.appendChild(sideCard2)
})






