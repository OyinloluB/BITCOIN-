var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.item'
})
.setClassToggle('.item', 'fade-in')
.addTo(controller);

var controller2 = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.item-one'
})
.setClassToggle('.item-one', 'fade-in')
.addTo(controller2);

var controller3 = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.item-two'
})
.setClassToggle('.item-two', 'fade-in')
.addTo(controller2);

var controller4 = new ScrollMagic.Controller();
