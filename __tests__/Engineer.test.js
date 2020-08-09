const Engineer = require('../lib/Engineer');

test('checks Engineer github', () => {
    const engineer = new Engineer('John', 1234, 'john@gmail.com', 'johngithub');

    expect(engineer.github).toEqual(expect.any(String));
});

test('check getRole to return Engineer', () => {
    const engineer = new Engineer('John', 1234, 'john@gmail.com', 'johngithub');

    expect(engineer.getRole()).toBe("Engineer");
});

test('checks the retrieval of the github account', () => {
    const engineer = new Engineer('John', 1234, 'john@gmail.com', 'johngithub');

    expect(engineer.getGithub()).toBe('johngithub');
});