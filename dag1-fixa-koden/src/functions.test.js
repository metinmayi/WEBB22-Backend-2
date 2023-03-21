const {getSum, login} = require('./functions.js');

describe('Testing my functions', () => {
    // String numbers should work.
    it('Testing getSum with numbers', () => {
        const result = getSum(5, 5, 10, '20', '40');
        expect(result).toBe(80);
    });

    it('Test login', () => {
        expect(login('admin', '123')).toBe(true);
        expect(login('admn', '23')).toBe(false);
    
        expect(login(3123, '123')).toBe('Username and password must be a string');
        expect(login('admin', {})).toBe('Username and password must be a string');
    });
});