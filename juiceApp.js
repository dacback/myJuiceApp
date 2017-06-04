function Food(name) {
	this.name = name;

	this.foodJuicer = function(){
		console.log('Measure and add' + this.name + " " + " to the juicer" );
	}

}