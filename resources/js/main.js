const logo = document.querySelectorAll("#logo path");

for(let i = 0; i<logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

/* CURSOR */

var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
posY = 0,
mouseX = 0,
mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 20,
        top: posY - 20
      }
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});

 $(document).on("mousemove", function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
  });

  $(".map").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
  });

  $(".map").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
  });

/* BURGER */

function disableScroll() { 
  // Get the current page scroll position 
  scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 

      // if any scroll is attempted, set this to the previous value 
      window.onscroll = function() { 
          window.scrollTo(scrollLeft, scrollTop); 
      }; 
}   

function enableScroll() { 
  window.onscroll = function() {}; 
} 

var el = document.querySelector('.burger');
var elopen = document.querySelector('.navlinks-slidein');
var france = document.querySelector('.france');
var burgerfade = document.querySelector('.burgerfade');
var header = document.querySelector('.home');
var navlinks = document.querySelector('.nav-links');

  burgerfade.addEventListener('webkitAnimationEnd', function() {
    el.classList.remove("burgerfade");
  }, false);

 el.addEventListener('click', function() {
    el.classList.toggle('active');
    elopen.classList.toggle('slide');
    france.classList.toggle('invisible');
    if($(".burger.active").is(':visible')) {
      header.classList.add('scrolllock');
      var slide = document.querySelector('.slide');
      slide.addEventListener('webkitAnimationEnd', function() {
        /*navlinks.classList.remove('slide');
        navlinks.classList.add('menuexit');*/
      }, false);
    }
    else {
      header.classList.remove('scrolllock');
    }
  }, false);


/* CLOSE MENU */

var x = document.querySelector('#close');
x.addEventListener('click', function () {
  elopen.classList.toggle('slide');
  el.classList.toggle('active');
  france.classList.toggle('invisible');
  if($(".burger.active").is(':visible')) {
    header.classList.add('scrolllock');      
    burgerfade.addEventListener('webkitAnimationEnd', function() {
      el.classList.remove("burgerfade");
    }, false);
  }
  else {
    header.classList.remove('scrolllock');
  }
}, false);


