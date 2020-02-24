let orchestra = null;
document.addEventListener('DOMContentLoaded', function() {
  orchestra = new A4Orchestra();
  if (typeof orchestra.assignConductor === 'function') {
    orchestra.assignConductor();
    orchestra.setHeaderEvent();
  }
});

/** オーケストラ  */
const A4Orchestra = function () {
  this.conductor = null;
};

A4Orchestra.prototype.assignConductor = null;

A4Orchestra.prototype.inheritConductor = function(aConductor) {
  Object.setPrototypeOf(aConductor.prototype, A4AbstractorConductor.prototype);
  const conductor = new aConductor();
  conductor.orchestra = this;
  conductor.super = new A4AbstractorConductor();
  return conductor;
};

A4Orchestra.prototype.setHeaderEvent = function() {
  switch(this.conductor.layoutName) {
    case 'default':
      this.initializeDefaultHead();
      break;
  }
}

A4Orchestra.prototype.initializeDefaultHead = function() {
  //ドロワーメニュー
  document.querySelector('.l-drawer .l-drawer__trigger').addEventListener('click', (aEvent) => {
    aEvent.path.some((aPath) => {
      if (aPath.classList === undefined) return false;
      if (aPath.classList.contains('l-drawer')) {
        aPath.classList.toggle('is-open');
        return true;
      }
    });
  });
};

/** コンダクター  */
const A4AbstractorConductor = function() {
  this.orchestra = null;
  this.super = null;
};

A4AbstractorConductor.prototype.initialize = function() {

};
