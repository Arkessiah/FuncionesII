// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Funciones II', () => {
  it('La función multiplicaDosNumeros existe', () => {
    expect(multiplicaDosNumeros).to.not.be.an('undefined');
  });

  it('La función multiplicaDosNumeros funciona correctamente', () => {
    const result = multiplicaDosNumeros(3, 4);
    expect(result).to.equal(12);
  });

  it('La variable primerMulti es el resultado de invocar a multiplicaDosNumeros con los números 4 y 5', () => {
    expect(primerMulti).to.equal(20);
  });

  it('La función restaDos existe', () => {
    expect(restaDos).to.not.be.an('undefined');
  });

  it('La función restaDos funciona correctamente', () => {
    const result = restaDos(10, 4);
    expect(result).to.equal(6);
  });

  it('La variable resultadoFinal es el resultado de invocar a restaDos con los números 50 y primerMulti', () => {
    const result = restaDos(50, primerMulti);
    expect(resultadoFinal).to.equal(result);
  });
});
