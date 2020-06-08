Cookies.set('datelog', 'true', { expires: 7 , domain: 'jojowanuby.github.io/Test/' });

var myCookie = Cookies.get('datelog');

var n = 1;
window.onload = function(){
n++;
return this.n;
//Cookie werden nur im firefox angezeigt, chrom iterpretiert es als unknown
}

window.onload = function() {
localStorage.setItem("Date"+n ,this.datetimenow)
}

//auch wenn man in console myCookie eingiebt leider value als undefined!!!!!
console.log(myCookie);
console.log(localStorage)



// For todays date;
Date.prototype.today = function () { 
  return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
   return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

var datetimenow = "LastSync: " + new Date().today() + " @ " + new Date().timeNow();

//Cookie Zeigt leider value als undefined!!!!!
Cookies.set('datetoday', datetimenow, { expires: 7 },{ domain: 'https://jojowanuby.github.io/Lionmonument' });


//inspiration: https://codepen.io/MarcRay/pen/vmJBn

// Sticky Header
$(window).scroll(function() {

  if ($(window).scrollTop() > 100) {
      $('.main_h').addClass('sticky');
  } else {
      $('.main_h').removeClass('sticky');
  }
});


// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
  var id = $(this).attr("href");
  var offset = 70;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
      scrollTop: target
  }, 500);
  event.preventDefault();
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
  if ($('.main_h').hasClass('open-nav')) {
      $('.main_h').removeClass('open-nav');
  } else {
      $('.main_h').addClass('open-nav');
  }
});

$('.main_h li a').click(function() {
  if ($('.main_h').hasClass('open-nav')) {
      $('.navigation').removeClass('open-nav');
      $('.main_h').removeClass('open-nav');
  }
});
