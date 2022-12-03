/* Psuedocode / Planning

Let's solve the example first, then worry about the larger data set

Problem - figure out how many calories each elf is carrying, by adding what they have in each bundle, and knowing each space is a different elf's pile

first issue - need to get the data into an array, so we can manipulate it. - done

second issue - need to change new line characters into something we can manipluate - done

third issue - need to separate each elf's calories into their own arrays
*/

let nextElf = 0;

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

let newElfArray = [];
let discreteElf = 1;
for (let i = 1; i < allCaloriesAllElves.length; i++) {
	const element = allCaloriesAllElves[i];
	if (element !== 0) {
		newElfArray.push([discreteElf, element]);
	} else {
		discreteElf++;
	}
}

console.table(newElfArray);
/*
┌─────────┬───┬───────┐
│ (index) │ 0 │   1   │
├─────────┼───┼───────┤
│    0    │ 1 │ 2000  │
│    1    │ 1 │ 3000  │
│    2    │ 2 │ 4000  │
│    3    │ 3 │ 5000  │
│    4    │ 3 │ 6000  │
│    5    │ 4 │ 7000  │
│    6    │ 4 │ 8000  │
│    7    │ 4 │ 9000  │
│    8    │ 5 │ 10000 │
└─────────┴───┴───────┘ 
so we are close, but not what I wanted, but I'll work with it. 

*/
