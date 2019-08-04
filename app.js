const argv = require('./config/yargs').argv;
const getCityData = require('./lugar/lugar').getCityData;
const getClima = require('./clima/clima').getClima;

const city = argv.city;

const getInfo = async(city) => {
    try {
        let coors = await getCityData(city);
        let temperature = await getClima(coors.lat, coors.lng);
        return `Clima de ${coors.address}: \n temperaturas minimas: ${temperature.temp_min}. \n temperaturas maximas: ${temperature.temp_max}`;
    } catch (error) {
        return 'No existe un clima para la ciudad indicada';
    }

}

getInfo(city)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));