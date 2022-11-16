const weatherApiKey:string = 'da19c37c32dd76a76e6a97a58c30d21a';


const fetchApi = (()=> {

    
    
    async function weatherApi(location:string) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}`)
            const data = await response.json();
            return data;

            
        } catch (error) {
            return error
        }
    }


    async function GIFYApi() {
        try {
            
            const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=l7ltXIc5eu9CcrPzS435RimLS6qRjXSA&s=cats`, {mode: 'cors'})
            const data = await response.json()
            return data
            
        } catch (error) {
            
        }
        
    }
    return {
        weatherApi,
        GIFYApi,
    }
})()

export default fetchApi