const data = require('../data/zoo_data');

const { species, hours } = data;

const returnDayTrue = (scheduleTarget) => Object.keys(hours).some((day) => day === scheduleTarget);

const animalTrue = (scheduleTarget) => species.some((specie) => specie.name === scheduleTarget);

const zooOpen = (scheduleTarget) => {
  const day = Object.entries(hours).find(([key]) => key === scheduleTarget);
  if (day) return day[1];
};

const showSpecie = (scheduleTarget) => species
  .filter((specie) => specie.availability.includes(scheduleTarget)).map((specie) => specie.name);

const dayAnimal = (scheduleTarget) => {
  const obj = {
    [scheduleTarget]: scheduleTarget === 'Monday'
      ? { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
      } : { officeHour: `Open from ${zooOpen(scheduleTarget)
        .open}am until ${zooOpen(scheduleTarget).close}pm`,
      exhibition: showSpecie(scheduleTarget) } };
  return obj;
};

const showWeek = () => {
  const days = Object.keys(hours);
  const obj = days.reduce((acc, day) => {
    const schedule = day === 'Monday'
      ? { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } : {
        officeHour: `Open from ${zooOpen(day).open}am until ${zooOpen(day).close}pm`,
        exhibition: showSpecie(day) };
    return { ...acc, [day]: schedule };
  }, {}); return obj;
};

const getSchedule = (scheduleTarget) => {
  if (animalTrue(scheduleTarget)) {
    return species.find((element) => element.name === scheduleTarget).availability;
  }
  return returnDayTrue(scheduleTarget) ? dayAnimal(scheduleTarget) : showWeek();
};
module.exports = getSchedule;
