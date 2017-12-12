const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });

  it('should save user with saveUser object', () => {
    var email = 'andrew@example.com';
    var password = '12345';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});