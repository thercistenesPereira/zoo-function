const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('A função getOpeningHours está definida', () => {
    expect(getOpeningHours).toBeDefined();
  });

  it('getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toEqual('function');
  });

  it('A função getOpeningHours  retorna {Tuesday: { open: 8, close: 6 }, Wednesday: { open: 8, close: 6 },Thursday: { open: 10, close: 8 }, Friday: { open: 10, close: 8 }, Saturday: { open: 8, close: 10 },Sunday: { open: 8, close: 8 }, Monday: { open: 0, close: 0 }}', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Ao receber os argumentos "Monday", "09:00-AM" retorna The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });

  it('Ao receber os argumentos "Tuesday", "09:00-AM" retorna The zoo is closed', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
});
