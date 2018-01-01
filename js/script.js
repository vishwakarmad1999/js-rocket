console.log("Hello there friends");

var x = 1;
var incrementX = function () {
	x++;
}
var doCoolStuff = function () {
		if (x % 2 == 1) {
			document.getElementById('cool').className = 'cool pink';
			incrementX();
		}
		else {
			document.getElementById('cool').className = 'cool';
			incrementX();
		}
}


var checkSwitch = function () {
	if (x % 2 == 0) {
		car.switchCar(true);
		incrementX();
	}
	else {
		car.switchCar(false);
		incrementX();
	}
}
		var car = {
			make : 'Maruti Suzuki',
			type : 'Swift',
			color : 'Azure Gray',
			isTurnedOn : false,
			numberOfWheels : 4,
			seats : ['seat1', 
					 'seat2', 
					 'seat3', 
					 'seat4'],
			turnOn : function () { 
				if (this.isTurnedOn == false) 
					{ 
						this.isTurnedOn = true;
					}
				},
			fly : function () {
					alert('fly');
				},
			switchCar : function(isOn) {
				console.log('Car is : ' + isOn); /* true - car is on else false */
				if (isOn == true) {
					this.isTurnedOn = true;
				}
				else {
					this.isTurnedOn = false;
				}
			}
		};
