A4Orchestra.prototype.assignConductor = function() {
  this.conductor = this.inheritConductor(A4WelcomeConductor);
  this.conductor.initialize();
};

const A4WelcomeConductor = function() {
  this.carousel = null;
  this.layoutName = 'default';
};

A4WelcomeConductor.prototype.initialize = function() {
  this.setEventCarouselPolicy();
};

A4WelcomeConductor.prototype.setEventCarouselPolicy = function() {
  this.carousel = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  document.querySelectorAll('#container-carousel-policy .swiper-slide').forEach((aElem) => {
    aElem.addEventListener('click', function(){
      window.location.href = '/portal/policy/'
    })
  })
};
