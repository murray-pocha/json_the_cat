const needle = require('needle');

const apiKey = '';
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedData = async function(breedName) {

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

        console.log(`Description for breed: '${breedName}'.`);
        console.log(firstBreed.description);

      } else {
        console.log(`No data found on current breed '${breedName}'.`);
      }
    } else {
      console.log(`Error: status code ${response.statusCode}`);

    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

const breedName = process.argv[2];

if (!breedName) {
  console.log('Provide a breed name in the command line, please.');
  process.exit(1);
}

fetchBreedData(breedName);