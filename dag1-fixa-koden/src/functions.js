// Om ni vill att en funktion ska kunna ta emot ett ospecifiecerat antal argument kan ni använda denna syntax
// args argumentet blir en array av alla parametrar som skickas in!
exports.getSum = function getSum(...numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    return sum;
}

// Det verkar som att någon glömde implementera denna funktion.
// Är du snäll och fixar den åt mig?
exports.login = function login(username, password) {
}