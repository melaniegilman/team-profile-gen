const Intern = require('../lib/Intern');

test('checks Intern school', () => {
    const intern = new Intern('John', 1234, 'john@gmail.com', 'Some University');

    expect(intern.school).toEqual(expect.any(String));
});

test('check getRole to return Intern', () => {
    const intern = new Intern('John', 1234, 'john@gmail.com', 'Some University');

    expect(intern.getRole()).toBe("Intern");
});

test('checks the retrieval of the school', () => {
    const intern = new Intern('John', 1234, 'john@gmail.com', 'Some University');

    expect(intern.getSchool()).toBe('Some University');
}); 