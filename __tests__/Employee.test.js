const Employee = require('../lib/Employee');

test('checks employee name, id, and email', () => {
    const employee = new Employee('John', 1234, 'john@gmail.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBeGreaterThan(0);
    expect(employee.email).toBe('john@gmail.com');
});

test('checks the retrieval of name', () => {
    const employee = new Employee('John', 1234, 'john@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('checks the retrieval of Id', () => {
    const employee = new Employee('John', 1234, 'john@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('checks the retrieval of email', () => {
    const employee = new Employee('John', 1234, 'john@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('checks the retrieval of the role', () => {
    const employee = new Employee('John', 1234, 'john@gmail.com');

    expect(employee.getRole()).toBe("Employee");
}); 