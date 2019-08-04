const axios = require('axios');

const key = 'AIzaSyDzbQ_553v - n8QNs2aafN9QaZbByTyM7gQ';





const getCityData = async city => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${key}`;

    let respuesta = await axios.get(url)
    if (respuesta.data.status === "ZERO_RESULTS")
        throw new Error('La ciudad indicada no existe');

    let data = respuesta.data.results[0];
    let { lat, lng } = data.geometry.location;

    return {
        address: data.formatted_address,
        lat,
        lng
    }



}

module.exports = {
    getCityData
}