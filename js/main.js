$(document).ready(function () {
  $("#team-carousel").owlCarousel({
    margin: 30,
    loop: true,
    nav: true,
    navText: ['<img src="./assets/images/prev.svg"/>', '<img src="./assets/images/next.svg"/>'],
    dots: true,
    avtodelay:true,
    items:2,
    responsive: {
      280: {
        items: 1,
      } ,

       700: {
        items: 2,
      } ,

       900: {
        items: 3,
      } ,

      1200: {
        items: 4,
      } 
    }
  });
});

$(document).ready(function () {
  $("#team-carousels").owlCarousel({
    margin: 30,
    loop: true,
    nav: true,
    navText: ['<img src="./assets/images/prev.svg"/>', '<img src="./assets/images/next.svg"/>'],
    dots: true,
    items:2,
    responsive: {
      280: {
        items: 1,
      } ,
      //  600: {
      //   items: 2,
      // } ,

      //  800: {
      //   items: 3,
      // } ,


      1100: {
        items: 3,
      } 
    }
  });
});
$(document).ready(function () {
  $("#team-carouselss").owlCarousel({
    margin: 30,
    loop: true,
    nav: true,
    navText: ['<img src="./assets/images/prev.svg"/>', '<img src="./assets/images/next.svg"/>'],
    dots: true,
    items:2,
    responsive: {
      280: {
        items: 1,
      } ,

      1100: {
        items: 3,
      } 
    }
  });
});

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "./assets/images/light.svg";
  } else {
    this.firstElementChild.src = "./assets/images/dark.svg";
  }
  document.body.classList.toggle("dark");
});


const loading = document.getElementById("loading");

const loadingDuration = 1000; // 1s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}


window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}



function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);


// AOS.init();