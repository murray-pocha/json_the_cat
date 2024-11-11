const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

if (!breedName) {
  console.log('Provide a breed name in the command line, please.');
  process.exit(1);
}

fetchBreedDescription(breedName, (error, description) => {

  if (error) {
    console.log(error);
  } else {
    console.log(`Description of breed: '${breedName}'`);
    console.log(description);
  }
});