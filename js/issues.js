// 1-masala

const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

function findCount(array) {
	const positiveNum = [],
		minusNum = [];

	array.forEach((item) => {
		if (item > 0) {
			positiveNum.push(item);
		} else {
			minusNum.push(item);
		}
	});

	let minusItemSum = 0;
	minusNum.forEach((item) => {
		minusItemSum += item;
	});

	const result = [positiveNum.length, minusItemSum];
}
findCount(arr);

// 2-masala

const variable = " 121";

function isPolindrome() {
	const array = String(variable).split("").reverse().join("");

	if (variable == array) {
		console.log("polndrome");
	} else {
		console.log("not polndrome");
	}
}
isPolindrome();

// 3-masala

const num = 1200;

function isKabisaYear(number) {
	if ((number % 4 === 0 && number % 100 !== 0) || number % 400 === 0) {
		console.log(`${number} is kabisa year`);
	} else {
		console.log(`${number} is not kabisa year`);
	}
}
isKabisaYear(num);

// 4-masala

const array = [1, 2, -3, 4, -25, 0, 21, -9, 5];

function minusNumbers(array) {
	const negatives = [];

	array.forEach((item) => {
		if (item < 0) {
			negatives.push(item);
		}
	});
	console.log(negatives);
}
minusNumbers(array);

