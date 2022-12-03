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

function separateElfs() {
	const newElf1 = [];
	currentElf = newElf1;
	console.log(Array.isArray(currentElf));

	allCaloriesAllElves.forEach((element) => {
		element !== 0
			? /* addToCurrentElf(element) */ console.log('add')
			: /* makeNewElf() */ console.log('new elf');
	});
}
/* function addToCurrentElf() {
	currentElf.push(); 
}*/
let elfCounter = 1;
function makeNewElf(count = elfCounter) {
	elfCounter++;
	let newElf = `newElf${count}`;
	return (currentElf = newElf);
}

separateElfs();
