exports.add = function add(x, y){
    return x + y;
}

exports.multiply = function multiply(x, y) {
    const sum = x * y;
    return sum;
}

exports.checkFriends = function(user, names){
    if (!user || !names) {
        throw new Error("User or array of names are missing");
    }

    return names.filter(name => user.friends.includes(name));
}