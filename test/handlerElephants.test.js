const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  it('Deve retornar a quantidade de elefantes', () => {
    const result = handlerElephants('count');
    expect(result).toBe(4);
  });
  it('Deve retornar um array com os nomes dos elefantes', () => {
    const result = handlerElephants('names');
    expect(result).toEqual(expect.arrayContaining(['Ilana', 'Orval', 'Bea', 'Jefferson']));
  });

  it('Deve retornar a média de idade dos elefantes', () => {
    const result = handlerElephants('averageAge');
    expect(result).toBeCloseTo(10.5);
  });

  it('Deve retornar a localização dos elefantes', () => {
    const result = handlerElephants('location');
    expect(result).toBe('NW');
  });

  it('Deve retornar a popularidade dos elefantes', () => {
    const result = handlerElephants('popularity');
    expect(result).toBe(5);
  });
  it('Deve retornar os dias de disponibilidade dos elefantes', () => {
    const result = handlerElephants('availability');
    expect(result).toEqual(expect.arrayContaining(['Friday', 'Saturday', 'Sunday', 'Tuesday']));
  });

  it('Deve retornar null para um parâmetro inválido', () => {
    const result = handlerElephants('invalid');
    expect(result).toBeNull();
  });
});
