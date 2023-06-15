const data = require('../data/zoo_data');

const isManager = (id) => {
  // const { employees } = data;
  // return employees.some((employee) => id === employee.id && employee.managers > 0);
};

const getRelatedEmployees = (managerId) => {
  // if (isManager(managerId)) {
  //   throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  // }
  // const { employees } = data;
  // return employees.filter((employee) => employee.managers.includes(managerId))
  //   .map((employee) => `${employee.firstName} ${employee.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
