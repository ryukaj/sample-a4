A4Orchestra.prototype.assignConductor = function() {
  this.conductor = this.inheritConductor(A4WelcomeConductor);
  this.conductor.initialize();
};

const A4WelcomeConductor = function() {
  this.carousel = null;
  this.layoutName = 'default';
};

A4WelcomeConductor.prototype.initialize = function() {
};

