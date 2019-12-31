var chalk = require('chalk');
function dog(name) {
	this.stomach = [];
	this.name = name;
}

dog.prototype.sayhi = function() {
	console.log('hi my name is ' + chalk.red(this.name))
}

dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};
module.exports = dog;