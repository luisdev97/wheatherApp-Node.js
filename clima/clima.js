const axios = require('axios');


const getClima = async(lat, lng) => {
    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=32f843d833c38373032f825c4a92418a&units=metric`);

    const { temp_min, temp_max } = clima.data.main;
    return {
        temp_min,
        temp_max
    }
}

module.exports = {
    getClima
}