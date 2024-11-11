const needle = require('needle');

const apiKey = '';
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = async function(breedName, callback) {

  try {
    const url = `${apiUrl}?q=${breedName}`;
    const response = await needle('get', url, {
      headers: {
        'x-api-key': apiKey, // if needed.
      },
    });

    if (response.statusCode === 200) {
      const data = response.body;

      if (data.length > 0) {

        const firstBreed = data[0];
        callback(null, firstBreed.description);

      } else {
        callback(null, undefined);
      }
    } else {
      callback(`Error: status code ${response.statusCode}`);
    }
  } catch (error) {
    callback(`Error fetching data: ${error.message}`);
  }
};

module.exports = { fetchBreedDescription };