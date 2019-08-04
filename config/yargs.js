const argv = require('yargs').options({
    city: {
        alias: 'c',
        desc: 'Ciudad de la que obtendremos el clima',
        demand: true
    }
}).argv

module.exports = {
    argv
}