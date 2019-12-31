var Dog = require('./dog');
var Cat = require('./cat');
var Mouse = require('./mouse');

var dog1 = new Dog('tom')
var tom = new Cat();
var mickey = new Mouse('mickey');
mickey.die();

tom.eat(mickey)

dog1.eat(tom);
console.log(dog1)