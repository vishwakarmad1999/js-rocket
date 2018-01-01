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

			if (countDownNumber >= 4 && countDownNumber <= 6) {
				//nervous
				document.getElementById('nervous').className = 'nervous show';
			} else {
				document.getElementById('nervous').className = 'nervous';
			}

			if (countDownNumber >= 1 && countDownNumber <= 3) {
				//can't wait
				document.getElementById('cant-wait').className = 'cant-wait show';
			} else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}

		if (countDownNumber <= 0) {
			changeState(3);
		};
		}, 1000);
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

