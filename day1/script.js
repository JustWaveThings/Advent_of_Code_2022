/* Psuedocode / Planning

Let's solve the example first, then worry about the larger data set

Problem - figure out how many calories each elf is carrying, by adding what they have in each bundle, and knowing each space is a different elf's pile

first issue - need to get the data into an array, so we can manipulate it. - done

second issue - need to change new line characters into something we can manipluate - done

third issue - need to separate each elf's calories into their own arrays -
*/

const fs = require('fs');
const readFile = (path) =>
	fs.readFileSync(path, { encoding: 'utf8' });

// the puzzle input as an array
const input = readFile('day1/problem_data_even_smaller.txt').split(
	'\n'
);

console.log(input);

inputToNumbers = input.forEach((element) => {
	return Number(element);
});

const allCaloriesAllElves = inputToNumbers;
console.log(allCaloriesAllElves);

/* output [
	1000, 2000, 3000, 0, 4000, 0, 5000, 6000, 0, 7000, 8000, 9000, 0,
	10000,
]; */

const elfSpaceIndices = [];
/* /* 
const elfSpacer = NaN;
let index = allCaloriesAllElves.indexOf(elfSpacer);
while (index !== -1) {
	elfSpaceIndices.push(index);
	index = allCaloriesAllElves.indexOf(elfSpacer, index + 1);
}

const appendZeroToElfIndicies = elfSpaceIndices.unshift(0);
const addLastIndexToElfIndicies = elfSpaceIndices.push(
	allCaloriesAllElves.length - 1
);
console.log(elfSpaceIndices);

const newElfArray = [];

while (elfSpaceIndices.length > 0) {
	newElfArray.push(
		allCaloriesAllElves.slice(elfSpaceIndices[0], elfSpaceIndices[1])
	);
	elfSpaceIndices.splice(0, 1);
}

 console.log(newElfArray); 

const elfTotals = [];
const initialValue = 0;
for (let i = 0; i < newElfArray.length; i++) {
	const element = newElfArray[i];
	elfTotals.push(
		element.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			initialValue
		)
	);
}

console.log(elfTotals);

function myArrayMax(arr = elfTotals) {
	return Math.max.apply(null, arr);
}

console.log(`${myArrayMax()} is the highest number`); */
