const myName = require('./name');

test('Test to see if my name is Brian', () => {
    expect(myName()).toBe('Brian');
});
