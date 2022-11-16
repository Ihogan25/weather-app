import './styles.css';
import card from './cards';
import fetchApi from './fetchAPI';
import {storage, Location, City, Country} from './storage';
import convert from './converions';

export const domData = {
    newLocationBtn: (<HTMLButtonElement>document.getElementById('new-location-btn')),
    newLocationInput: (<HTMLInputElement>document.getElementById('new-location-input')),
    bigCard: (<HTMLDivElement>document.getElementById('big-card')), 
    sideCardOne: (<HTMLDivElement>document.getElementById('side-card-one')),
    sideCardTwo: (<HTMLDivElement>document.getElementById('side-card-two')),
    history: (<HTMLDivElement>document.getElementById('recent-searches'))
}

storage.loadStoredLocations()
domData.newLocationBtn.addEventListener('click', async ()=> {
    const inputLocation: string = domData.newLocationInput.value;
    const data = await fetchApi.weatherApi(inputLocation);
    const city: City = data.name
    const country: Country = data.sys.country
    const location = new Location(city, country)
    storage.addToStorage(location)
    const mainCard = card.mainCard(data.name, data.sys.country, convert.toFarienheit(data.main.temp))
    const sideCard1 = card.sideCard(convert.toFarienheit(data.main.feels_like), data.main.humidity, 'Feels Like: ', 'Humidity: ')
    const sideCard2 = card.sideCard(data.weather[0].main, data.weather[0].description);
    storage.clearData()
    domData.bigCard.appendChild(mainCard);
    domData.sideCardOne.appendChild(sideCard1);
    domData.sideCardTwo.appendChild(sideCard2);
})
    