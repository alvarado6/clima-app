const axios = require('axios');

const getClima = async (lat, lng)  => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5cc823e3fb830a8bcb2adf32a8263845`);
    return resp.data.main.temp
}

module.exports = {
    getClima
}