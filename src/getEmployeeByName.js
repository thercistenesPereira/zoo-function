const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  const { employees } = data;
  const employeeZoo = employees.find((employee) => employee
    .firstName === employeeName || employee.lastName === employeeName);
  return employeeZoo;
};

module.exports = getEmployeeByName;
