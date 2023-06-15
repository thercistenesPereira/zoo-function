const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const { species, employees } = data;
  const employeeZoo = employees.find((employee) => employee.id === id);
  const speciesId = employeeZoo.responsibleFor[0];
  const speciesZoo = species.find((specie) => specie.id === speciesId);
  const oldestResident = speciesZoo.residents.sort((a, b) => b.age - a.age)[0];
  return [oldestResident.name, oldestResident.sex, oldestResident.age];
};

module.exports = getOldestFromFirstSpecies;
