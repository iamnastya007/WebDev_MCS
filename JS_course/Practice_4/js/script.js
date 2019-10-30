const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);
console.log(player);

// // опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if (((player == 0) && (computer == 0)) || ((player == 1) && (computer == 1))  || ((player == 2) && (computer == 2))) {
					console.log('Ничья');
					console.log(computer);
					console.log(player);

					// window.location.reload();
} else if (((player == 0) && (computer == 2)) || ((player == 1) && (computer == 0)) || ((player == 2) && (computer == 1))) 
 {					console.log('Computer win');
					console.log(computer);
					console.log(player);}
			 else {	console.log('Player win');
					console.log(computer);
					console.log(player);}

// if ((player = 0) && (computer = 1)) {
// 		console.log('player win');
// 	}
// 		 else {console.log("Смотрим дальше");}
