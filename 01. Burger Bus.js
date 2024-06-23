function burgerBus(input) {

	let numOfCity = +input.shift();

	let nameOfCity = '';
	let income = 0;
	let expenses = 0;

	let totalIncome = 0;
	let totalExpenses = 0;
	let cleanIncome = 0;

	for (let city = 1; city <= numOfCity; city++) {
		nameOfCity = input.shift();
		income = +input.shift();
		expenses = +input.shift();

		if (city % 3 === 0) {
			if (city % 5 !== 0) {
				expenses *= 1.50;
			}
		}
		if (city % 5 === 0) {
			income *= 0.90;

		}

		cleanIncome = income - expenses;
		totalIncome += cleanIncome;
		console.log(`In ${nameOfCity} Burger Bus earned ${cleanIncome.toFixed(2)} leva.`);
	}
	console.log(`Burger Bus total profit: ${totalIncome.toFixed(2)} leva.`);
}

// burgerBus(["3",
// 	"Sofia",
// 	"895.67",
// 	"213.50",
// 	"Plovdiv",
// 	"2563.20",
// 	"890.26",
// 	"Burgas",
// 	"2360.55",
// 	"600.00"]);

// burgerBus(["15",
// 	"Lille",
// 	"2226.00",
// 	"1200.60",
// 	"Rennes",
// 	"6320.60",
// 	"5460.20",
// 	"Reims",
// 	"600.20",
// 	"452.32",
// 	"Bordeaux",
// 	"6925.30",
// 	"2650.40",
// 	"Montpellier",
// 	"680.50",
// 	"290.20",	
// 	"Lille",
// 	"2226.00",
// 	"1200.60",
// 	"Rennes",
// 	"6320.60",
// 	"5460.20",
// 	"Reims",
// 	"600.20",
// 	"452.32",
// 	"Bordeaux",
// 	"6925.30",
// 	"2650.40",
// 	"Montpellier",
// 	"680.50",
// 	"290.20",
// 	"Lille",
// 	"2226.00",
// 	"1200.60",
// 	"Rennes",
// 	"6320.60",
// 	"5460.20",
// 	"Reims",
// 	"600.20",
// 	"452.32",
// 	"Bordeaux",
// 	"6925.30",
// 	"2650.40",
// 	"Montpellier",
// 	"680.50",
// 	"290.20"]);
	
burgerBus(["5",
	"Lille",
	"2226.00",
	"1200.60",
	"Rennes",
	"6320.60",
	"5460.20",
	"Reims",
	"600.20",
	"452.32",
	"Bordeaux",
	"6925.30",
	"2650.40",
	"Montpellier",
	"680.50",
	"290.20"]);
	