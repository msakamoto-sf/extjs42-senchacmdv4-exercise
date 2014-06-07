var MyKlass = function(yourName, myName) {
  this.you = yourName;
  this.myself = myName;
}
MyKlass.prototype.greeting = function(greet) {
  return greet + " " + this.you + ", I'm " + this.myself + ".";
};
