

const convert = (()=> {



    const toFarienheit = (temp:string):string => {
        const result = Math.floor(((parseInt(temp)-273.15)*1.8)+32)
        const newtemp = result.toString()
        return newtemp;
    }

    const toCelcius = () => {
        

    }


    return {
        toFarienheit,
        toCelcius
    }
})()


export default convert