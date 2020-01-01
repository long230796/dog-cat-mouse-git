var Dog = require('./dog');
var Cat = require('./cat');
var Mouse = require('./mouse');

var dog = new Dog('ki ki')
var tom = new Cat();
var mickey = new Mouse('mickey');
mickey.die();

try {
	tom.eat(dog)
} catch (error) {
	console.log('err when cat eating dog');
}


console.log(tom)