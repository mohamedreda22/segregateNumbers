function segregateNumbers(numbers) {
    let result = [];
    let positiveNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        } else {
            result.push(numbers[i]);
        }
    }

    return result.concat(positiveNumbers);
}

const numbers = [9, -3, 5, -2, -8, -6, 1, 3];
const segregatedResult = segregateNumbers(numbers);

console.log("Segregated Result: " + JSON.stringify(segregatedResult));