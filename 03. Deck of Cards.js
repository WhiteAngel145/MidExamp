function deckOfCards(input) {
	let listOfCard = input.shift().split(', ');
	let nLines = +input.shift();
	
	for (let i = 1; i <= nLines; i++) {
		let commandAndParmeters = input.shift().split(', ');
		let command = commandAndParmeters.shift();
		if (command === 'Add') {
			let card = commandAndParmeters.shift();
			if (listOfCard.includes(card)) {
				console.log('Card is already in the deck');
			} else {
				listOfCard.push(card);
				console.log('Card successfully added');
			}
		} else if (command === 'Remove') {
			let card = commandAndParmeters.shift();
			let indexCard = listOfCard.indexOf(card);

			if (listOfCard.length - 1 >= indexCard && indexCard >= 0) {
				listOfCard.splice(indexCard, 1);
				console.log('Card successfully removed');
			} else {
				console.log('Card not found');
			}
		} else if (command === 'Remove At') {
			let indexCard = +commandAndParmeters.shift();

			if (listOfCard.length - 1 >= indexCard && indexCard >= 0) {
				listOfCard.splice(indexCard, 1);
				console.log('Card successfully removed');
			} else {
				console.log('Index out of range');
			}
		} else if (command === 'Insert') {
			let indexCard = +commandAndParmeters.shift();
			let card = commandAndParmeters.shift();

			if (listOfCard.length >= indexCard && indexCard >= 0) {
				if (listOfCard.includes(card)) {
					console.log('Card is already added');
				} else {
					listOfCard.splice(indexCard, 0, card);
					console.log('Card successfully added');
				}
			} else {
				console.log('Index out of range');
			}
		}
	}
	console.log(listOfCard.join(', '));
}

// deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs",
// 			"3",
// 			"Add, King of Diamonds",
// 			"Insert, 2, Jack of Spades",
// 			"Remove, Ace of Diamonds"]);

// deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
// 			"2",
// 			"Add, Two of Clubs",
// 			"Remove, Five of Hearts"]);
			
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
			"2",
			"Insert, -1, Queen of Spades",
			"Remove At, 1"]);
			