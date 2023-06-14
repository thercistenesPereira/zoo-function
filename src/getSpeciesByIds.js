const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const { species } = data;
  return (!ids) ? [] : species.filter((specie) => ids.some((id) => id === specie.id));
};

module.exports = getSpeciesByIds;
