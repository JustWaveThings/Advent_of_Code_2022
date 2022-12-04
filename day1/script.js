/* Psuedocode / Planning

Let's solve the example first, then worry about the larger data set

Problem - figure out how many calories each elf is carrying, by adding what they have in each bundle, and knowing each space is a different elf's pile

first issue - need to get the data into an array, so we can manipulate it. - done

second issue - need to change new line characters into something we can manipluate - done

third issue - need to separate each elf's calories into their own arrays - done

reduce each array then find max --- for example it's 24000
*/
let nextElf;

const allCaloriesAllElves = [
	1000,
	2000,
	3000,
	nextElf,
	4000,
	nextElf,
	5000,
	6000,
	nextElf,
	7000,
	8000,
	9000,
	nextElf,
	10000,
];

/* console.log(allCaloriesAllElves); */

/* output [
	1000, 2000, 3000, 0, 4000, 0, 5000, 6000, 0, 7000, 8000, 9000, 0,
	10000,
]; */

/* console.log(allCaloriesAllElves.indexOf(0)); */

const elfSpaceIndices = [];
const elfSpacer = 0;
let index = allCaloriesAllElves.indexOf(elfSpacer);
while (index !== -1) {
	elfSpaceIndices.push(index);
	index = allCaloriesAllElves.indexOf(elfSpacer, index + 1);
}

/* console.log(elfSpaceIndices); */
const appendZeroToElfIndicies = elfSpaceIndices.unshift(0);
const addLastIndexToElfIndicies = elfSpaceIndices.push(
	allCaloriesAllElves.length - 1
);
/*  console.log(elfSpaceIndices); /* [ 0, 3, 5, 8, 12, 13 ] */

const newElfArray = [];

while (elfSpaceIndices.length > 0) {
	newElfArray.push(
		allCaloriesAllElves.slice(elfSpaceIndices[0], elfSpaceIndices[1])
	);
	elfSpaceIndices.splice(0, 1);
}

/* console.log(newElfArray); */

const elfTotals = [];

for (let i = 0; i < newElfArray.length; i++) {
	const element = newElfArray[i];
	elfTotals.push(
		element.reduce(
			(accumulator, currentValue) => accumulator + currentValue
		)
	);
}

/* console.log(elfTotals);
 */
function myArrayMax(arr = elfTotals) {
	return Math.max.apply(null, arr);
}

console.log(`${myArrayMax()} is the highest number`);
