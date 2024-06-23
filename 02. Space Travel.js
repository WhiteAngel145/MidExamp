function spaceTravel(input) {
	let travelToTitan = commandAndParmeters = input.shift().split('||');
	let fuel = +input.shift();
	let ammunition = +input.shift();

	for (let i = 0; i < travelToTitan.length; i++) {
		let commands = commandAndParmeters[i].split(' ');
		let command = commands.shift();
		let parameters = +commands.shift();

		if (command === 'Travel') {
			if (fuel >= parameters) {
				fuel -= parameters;
				console.log(`The spaceship travelled ${parameters} light-years.`);
			} else {
				console.log('Mission failed.');
				return;
			}
		} else if (command === 'Enemy') {
			if (ammunition >= parameters) {
				ammunition -= parameters;
				console.log(`An enemy with ${parameters} armour is defeated.`);
			} else {
				if (fuel >= parameters * 2) {
					console.log(`An enemy with ${parameters} armour is outmaneuvered.`);
				} else {
					console.log('Mission failed.');
					return;
				}
			}
		} else if (command === 'Repair') {
			if (parameters < 0) {
				parameters = 0;
			}
			fuel += parameters;
			ammunition += parameters * 2;

			console.log(`Ammunitions added: ${parameters * 2}.`);
			console.log(`Fuel added: ${parameters}.`);
		} else if (command === 'Titan') {
			console.log('You have reached Titan, all passengers are safe.');
			return;
		}

	}
}

spaceTravel([ 'Travel 10||Enemy 30||Repair -15||Titan', 
	'50', 
	'80' ])

	// spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
	// 	'60', 
	// 	'100' ])
		