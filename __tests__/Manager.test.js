const Manager = require('../lib/Manager');
// const { TestScheduler } = require('jest');

test('checks Manager office number', () => {
    const manager = new Manager('John', 1234, 'john@gmail.com', 24);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('check getRole to return Manager', () => {
    const manager = new Manager('John', 1234, 'john@gmail.com', 24);

    expect(manager.getRole()).toBe("Manager");
});

