const weatherApiKey:string = 'da19c37c32dd76a76e6a97a58c30d21a'

const fetchApi = (()=> {

    
    
    async function weatherApi(location:string) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}`)
            const inputData = await response.json();
            return inputData;

            
        } catch (error) {
            return error
        }
    }


    async function GIFYApi() {
        try {

            
        } catch (error) {
            
        }
        
    }
    return {
        weatherApi,
        GIFYApi,
    }
})()

export default fetchApi