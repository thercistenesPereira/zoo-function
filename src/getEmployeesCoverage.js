const data = require('../data/zoo_data');

const getEmployeesCoverage = (options = {}) => {
  const { id, name } = options;
  const employees = data.employees;

  if (id) {
    const employee = employees.find((emp) => emp.id === id);
    if (!employee) {
      throw new Error('Informações inválidas');
    }
    const { firstName, lastName, responsibleFor } = employee;
    const fullName = `${firstName} ${lastName}`;
    const animalNames = responsibleFor.map((animalId) =>
      data.animals.find((animal) => animal.id === animalId).name
    );
    return { [fullName]: animalNames };
  }

  if (name) {
    const employee = employees.find(
      (emp) => emp.firstName === name || emp.lastName === name
    );
    if (!employee) {
      throw new Error('Informações inválidas');
    }
    const { firstName, lastName, responsibleFor } = employee;
    const fullName = `${firstName} ${lastName}`;
    const animalNames = responsibleFor.map((animalId) =>
      data.animals.find((animal) => animal.id === animalId).name
    );
    return { [fullName]: animalNames };
  }

  const coverage = {};
  employees.forEach((employee) => {
    const { firstName, lastName, responsibleFor } = employee;
    const fullName = `${firstName} ${lastName}`;
    const animalNames = responsibleFor.map((animalId) =>
      data.animals.find((animal) => animal.id === animalId).name
    );
    coverage[fullName] = animalNames;
  });

  return coverage;
};

module.exports = getEmployeesCoverage;
