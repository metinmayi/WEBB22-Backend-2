const { add, multiply, filterArrayByUsersFriends, checkFriends } = require("./functions");

describe("Testing my functions", () => {
  it("Adding 5 and 10 should equal 15", () => {
    const sum = add(5, 10);
    expect(sum).toBe(15);
  });

  it("Multiplying 5 and 10 should equal 50", () => {
    const sum = multiply(5, 10);
    expect(sum).toBe(50);
  });

  it("Should only return names of user's friends from array of names", () => {
    const user = {
        name: 'Metin',
        age: 28,
        friends: ['James Bond', 'Rihanna', 'Indiana Jones', 'Stewie from Family Guy']
    };
    const array = ['Barack Obama', 'Alexander Gustafsson', 'Indiana Jones', 'Rihanna', 'Rachael from Friends', 'Lara Croft', 'Jon Snow', 'Erik', 'Karin'];

    const result = checkFriends(user, array);

    expect(result).toEqual(['Indiana Jones', 'Rihanna']);
  });

  it("Should throw error if user or array is omitted", () => {
    expect(() => {checkFriends()}).toThrow('User or array of names are missing');
  });
});
