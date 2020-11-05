const request = require('request');

const catToSearch = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catToSearch}`, function(error, response, body) {
  if (error) {
    return console.log('Search failed:', error);
  }
  const data = JSON.parse(body);
  if (data.length) {
    console.log(data[0].description);
  } else {
    console.log('No data was found!');
  }
});