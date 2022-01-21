const fetch = require("node-fetch");

const getPeoplePromise = (fetch) => {
  return fetch("http://swapi.py4e.com/api/people/?format=json")
    .then((res) => res.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeople = async (fetch) => {
  const getRequest = await fetch(
    "http://swapi.py4e.com/api/people/?format=json"
  );
  const data = await getRequest.json();
  return {
    count: data.count,
    results: data.results,
  };
};

module.exports = {
  getPeople,
  getPeoplePromise,
};
