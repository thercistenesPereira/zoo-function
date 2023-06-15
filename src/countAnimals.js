const data = require('../data/zoo_data');

const countAllSpecies = () => data.species.reduce((acc, specie) => {
  acc[specie.name] = specie.residents.length;
  return acc;
}, {});

const findSpecies = (speciesName) => data.species.find((s) => s.name === speciesName);

const countAllResidents = (species) => species.residents.length;

const countResidentsBySex = (species, sex) => species
  .residents.filter((resident) => resident.sex === sex).length;

const countAnimals = (animal) => {
  if (!animal) {
    return countAllSpecies();
  }
  if (findSpecies(animal.species)) {
    if (!animal.sex) {
      return countAllResidents(findSpecies(animal.species));
    }
    return countResidentsBySex(findSpecies(animal.species), animal.sex);
  }
};

module.exports = countAnimals;
