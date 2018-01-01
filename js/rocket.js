var timer = null;
var countDownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state' + state;

	clearInterval(timer);
	countDownNumber = 10;
	document.getElementById('countdown').innerHTML = countDownNumber;


	if (state == 2) {
		timer = setInterval(function () {
			countDownNumber--;
			document.getElementById('countdown').innerHTML = countDownNumber;
		if (countDownNumber <= 0) {
			changeState(3);
		};
		}, 100);
	}
		else if (state == 3) {
			var success = setTimeout( function () {

				var randomNumber = Math.round(Math.random() * 10);

				console.log('randomNumber : ', randomNumber);

				if (randomNumber > 5) {
					changeState(4); //success
				}
				else {
					changeState(5); //failure
				}
			}, 2000);
		}

	}
