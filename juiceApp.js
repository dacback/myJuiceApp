function Food(name) {
	this.name = name;

	this.foodJuicer = function(){
		console.log('Measure and add ' + this.name + " to the juicer" );
	}

}

// code below creates Fruit object that inherits from Food

function Fruit () {
	Food.apply(this,arguments);
}

Fruit.prototype = new Food();

// Code below creates a new instance of fruit

var berry = new Fruit('Strawberry');

// Code below adds a new method, sayName()

Fruit.prototype.sayName = function() {
	console.log('This fruit is called ' + this.name);
}

// Code defines an apple contructor that takes from Fruit

var apple = new Fruit('');
apple.name = ['Golden Delicious', 'Red Delicious','Gala','Macintosh','Granny Smith'];

// Code adds hasSkin property with boolean value;
apple.hasSkin = true;


// code below creates a removeSkin method on Fruit constructor
// also prints message to the console.

Fruit.prototype.removeSkin = function(){
  
  if(this.hasSkin){
    this.hasSkin = false;
    console.log('Skin has been removed.');
  }
  
  var nameArr = this.name;
  var item = " ";
  
  if(Array.isArray(nameArr)){
      for (var i = 0; i <= nameArr.length; i++){
         item += nameArr[i] + ", " ;
    }
      console.log('Apples cannot be juiced until their skin is removed. Be careful!' + '\nFavorite of these fruits to juice are' + item + '.');
  } else {
    
    console.log('Favorite apple to juice is ' + this.name + '.');
  }
};

console.log(apple.removeSkin());


// code below creates a Vegetable object that inherits from Food... and creates a new 
// instance of carrot from Vegetable object

function Vegetable() {
  this.wash = function() {
      console.log('vegetables are being washed');
    };
  Food.apply(this, arguments);
  }

Vegetable.prototype = new Food();

var carrot = new Vegetable();

