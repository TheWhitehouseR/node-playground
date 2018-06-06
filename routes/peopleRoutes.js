const axios = require('axios');


const getPeopleById = async (id) => {
    const peopleResponse = await axios(`https://swapi.co/api/people/${id}`);
    return peopleResponse.data;
}

const getPeople = async () => {
    /*
    return axios.get('https://swapi.co/api/people/')
    .then(response => {
      console.log(response.data.results);
      return response.data.results;
    })
    .catch(error => {
      console.log(error);
    });
    */
    const peopleResponse = await axios('https://swapi.co/api/people/');
    return peopleResponse.data.results;
}

module.exports = [
    { method: 'GET', path: '/people', handler: getPeople },
    { method: 'GET', path: '/people/{id}', handler: (request) => getPeopleById(request.params.id) }
];