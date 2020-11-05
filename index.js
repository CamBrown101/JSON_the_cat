const { fetchBreedDescription } = require('./breedFetcher');


const breed = process.argv[2];
fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (desc.length) {
    console.log(desc[0].description);
    return desc[0].description;
  } else {
    console.log('No data was found!');
  }
});