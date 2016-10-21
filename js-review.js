var student = {
  name: 'Brandon',
  favoriteArtist: 'Gray Area',
  mealsToday: [
    'eggs and yogurt',
    'fajitas',
    'sandwich',
  ]
};
//
// console.log(student.mealsToday[2]);
var Human = function(){};

var Student = function(name, mealsArray){
  this.name = name;
  this.mealsToday = mealsArray;
};

Student.prototype.favoriteArtist = "Gray Area";

var jeff = new Student('Jeff', ['chicken', 'oatmeal cream pie']);

Student.prototype.getLastMeal = function(){
  var numberOfMeals = this.mealsToday.length;
  var lastMeal = this.mealsToday[numberOfMeals - 1];
  return lastMeal;
};

console.log(jeff.mealsToday[1]);

var getLastMeal = function(){

}

console.log(jeff.getLastMeal());
// var object = {
//   key: val,
//   key: val,
// }
