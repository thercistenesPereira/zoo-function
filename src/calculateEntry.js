const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const count = {
    adult: 0,
    senior: 0,
    child: 0,
  };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      count.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      count.adult += 1;
    } else {
      count.senior += 1;
    }
  });
  return count;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const { prices } = data;
  const { adult, senior, child } = countEntrants(entrants);

  const total = (adult * prices.adult) + (senior * prices.senior) + (child * prices.child);

  return total;
};

module.exports = { calculateEntry, countEntrants };
