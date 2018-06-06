const axios = require('axios');

const getStarshipsById = async (id) => {
    const starshipResponse = await axios(`https://swapi.co/api/starships/${id}`);
    return starshipResponse.data;
}

const getStarships = async () => {
    const starshipResponse = await axios('https://swapi.co/api/starships/');
    return starshipResponse.data.results;
}

module.exports = [
    { method: 'GET', path: '/starships', handler: getStarships },
    { method: 'GET', path: '/starships/{id}', handler: (request) => getStarshipsById(request.params.id) }
];