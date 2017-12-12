const expect = require('expect');
const utils = require('./utils');


describe('Utils', () => {

  describe('#add', () => {
    it ('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
    });

    //if we say 'done' in the callback, mocha knows the test isn't passed/done before done gets called
    it('should async add to numbers', (done) => {
      var res = utils.asyncAdd(4, 3, (sum) => {
          expect(sum).toBe(7).toBeA('number');
          done();
      });
    });
  });

  describe('#square', () => {
    it('should square the number', () => {
      var res = utils.square(9);
      expect(res).toBe(81).toBeA('number');
    });

    it('should async square the number', (done) => {
      utils.asyncSquare(3, (res) => {
        expect(res).toBe(9).toBeA('number');
        done();
      });
    });
  });
});


// it('should expect some value', () => {
  // expect(12).toBe(12);
  // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
  // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Juli',
//     age: 20,
//     location: 'Los Angeles'
//   }).toInclude({age: 20});
// });

it('should set first name and last name with proper values', () => {
  var user = {age: 33, pet: 'doggo'};
  var res = utils.setName(user, 'Juli Yi');

  expect(res).toInclude({ firstName: 'Juli', lastName: 'Yi'});
});