// MegaMenu
$(document).ready(function () {
  $("header .megamenu .shape").click(() => {
    $("header .megamenu .shape img:first-child").toggle();
    $("header .megamenu .shape img:last-child").toggle();
    $("header .megamenu ul.menu").toggle(400);
  })
})

// Slider
let testimonialsContainer = document.querySelector(".testimonials-container");
let testimonial = document.querySelectorAll(".testimonials-container .testimonial");

function myFunction(x) {
  if (x.matches) { // If media query matches
    setInterval(() => {
      testimonial.forEach((ele) => {
        ele.style.transform = "translateX(-100%)";
      })
    } ,20_000);
    
    
    setTimeout(() => {
      setInterval(() => {
        testimonial.forEach((ele) => {
          ele.style.transform = "translateX(-200%)";
        })
      } ,20_000);
    },5_000)
    
    setTimeout(() => {
      setInterval(() => {
        testimonial.forEach((ele) => {
          ele.style.transform = "translateX(-300%)";
        })
      } ,20_000);
    },10_000)
    
    setTimeout(() => {
      setInterval(() => {
        testimonial.forEach((ele) => {
          ele.style.transform = "translateX(0)";
        })
      } ,20_000);  
    },15_000)    
  } else {
    setInterval(() => {
      testimonial.forEach((ele) => {
        ele.style.transform = "translateX(-100%)";
      })
    } ,5_000);
    
    setTimeout(() => {
      setInterval(() => {
        testimonial.forEach((ele) => {
          ele.style.transform = "translateX(0)";
        })
      } ,10_000);  
    },5_000)
  }
}

let x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

// Checking Mail 
let mailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let mailGo = document.querySelector("footer form [type='submit']");
let mailInput = document.querySelector("footer form [type='text']");
let mailAlert = document.querySelector("footer form p");
mailGo.addEventListener("click", function(e){
  e.preventDefault()
});
mailGo.onclick = () => {
  if (mailInput.value.match(mailExp) == null) {
    mailAlert.style.display = "block";
  } else {
    mailAlert.style.display = "none";
  }
}
