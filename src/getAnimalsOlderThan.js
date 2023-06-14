const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const species = data.species.find((specie) => specie.name === animal);
  return species.residents.every((animals) => animals.age >= age);
};

module.exports = getAnimalsOlderThan;
