const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ duration: 0.8, ease: "power3.out" });

function openMenu() {
  menu.classList.toggle("active");
  document.body.classList.toggle("sidebar-open");

  tl.to(menu, {
    x: menu.classList.contains("active") ? "0" : "100%",
  });

  gsap.fromTo(
    menuItems,
    {
      x: 150,
    },
    {
      x: 0,
      duration: 0.2,
      stagger: 0.05,
      ease: "power4.out",
    }
  );
}

gsap.to(menuBtn, {
  scrollTrigger: {
    trigger: document.documentElement,
    start: 0,
    end: window.innerHeight,
    onLeave: () => {
      gsap.to(menuBtn, { scale: 1 });
    },
    onEnterBack: () => {
      gsap.to(menuBtn, { scale: 0 });
    },
  },
  duration: 0.25,
  ease: "power3.out",
});

menuBtn.addEventListener("click", openMenu);

$(document).ready(function() {
    var cardWidth = $('.card').outerWidth(true);
    var numCards = $('.card').length;
    var containerWidth = cardWidth * numCards;

    $('.card-container').css('width', containerWidth + 'px');

    function startScroll() {
        var currentPosition = 0;

        var interval = setInterval(function() {
            currentPosition -= 1;
            $('.card-container').css('transform', 'translateX(' + currentPosition + 'px)');

            if (currentPosition <= -cardWidth) {
                $('.card:first-child').appendTo('.card-container');
                currentPosition += cardWidth;
                $('.card-container').css('transform', 'translateX(' + currentPosition + 'px)');
            }
        }, 10);

        $('.card-container').hover(
            function() {
                clearInterval(interval);
            },
            function() {
                interval = setInterval(function() {
                    currentPosition -= 1;
                    $('.card-container').css('transform', 'translateX(' + currentPosition + 'px)');

                    if (currentPosition <= -cardWidth) {
                        $('.card:first-child').appendTo('.card-container');
                        currentPosition += cardWidth;
                        $('.card-container').css('transform', 'translateX(' + currentPosition + 'px)');
                    }
                }, 10);
            }
        );
    }

    startScroll();
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});







// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let slides = document.getElementsByClassName("slide");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     slides[slideIndex-1].style.display = "block";  
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
//step 1: get DOM
