
# Segregate Numbers Algorithm
![image](https://github.com/mohamedreda22/segregateNumbers/assets/73208810/efaefed2-4385-42de-86c5-720dd8b0fd62)


This repository contains a JavaScript algorithm that segregates an array of positive and negative numbers while maintaining their relative order.

## Algorithm Description

The `segregateNumbers` function takes an array of positive and negative integers as input and performs the following steps:

1. Initializes two arrays: `result` and `positiveNumbers`.
2. Iterates through each element in the input `numbers` array.
   - If the current number is positive (greater than 0), it is added to the `positiveNumbers` array.
   - If the current number is non-positive (less than or equal to 0), it is added to the `result` array.
3. Returns a new array by concatenating the `result` array (containing non-positive numbers) with the `positiveNumbers` array (containing positive numbers).

## Usage

1. Clone this repository:

   ```bash
   git clone https://github.com/mohamedreda22/segregateNumbers.git
   ```

2. Navigate to the repository's directory:

   ```bash
   cd segregateNumbers
   ```

3. Run the JavaScript file:

   ```bash
   node segregateNumbers.js
   ```

4. The console will display the segregated result of the input array.

## Example

Given the input array:
```javascript
const numbers = [9, -3, 5, -2, -8, -6, 1, 3];
```

The algorithm will produce the segregated result:
```javascript
Segregated Result: [-3, -2, -8, -6, 9, 5, 1, 3]
```
