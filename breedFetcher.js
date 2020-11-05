const request = require('request');

const fetchBreedDescription = (catToSearch, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${catToSearch}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body)[0].description;
    callback(null, data);
  });
};

module.exports = { fetchBreedDescription };

