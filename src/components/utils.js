export const calcTotalPrice = (items) =>
	items
		.reduce((acc, game) => (acc += game.price), 0)
		.toFixed(2);
