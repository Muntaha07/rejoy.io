gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



// var page1 = document.querySelector(".page1-text")
// var curser = document.querySelector(".mousemove")

// js 
// page1.addEventListener('mousemove',function (dets) {
//     curser.style.left = dets.x+"px"
//     curser.style.top = dets.y+"px"
    
// })

// gsap Animation 
function movecouser() {
  var page1 = document.querySelector(".page1-text")
var curser = document.querySelector(".mousemove")
    
 page1.addEventListener("mousemove",function (dets) {
    gsap.to(curser,{
        x:dets.x,
        y:dets.y,
    })
    
    })
    
    page1.addEventListener("mouseenter",function () {
        gsap.to(curser,{
            scale:1,
            opacity:1,
          })
    })
    page1.addEventListener("mouseleave",function () {
      gsap.to(curser,{
        scale:0,
        opacity:0,
      })
    })
}
movecouser()

function frontvideopage1() {
    var grap = document.querySelector(".page1-text")
var full = document.querySelector(".full-screen")
let closeBtn = document.querySelector(".close");



// js 
grap.addEventListener("click",function () {
    full.style.zIndex = 5;
    full.style.opacity = 1;
    closeBtn.style.display = "block"
    })
closeBtn.addEventListener("click",function () {
    closeBtn.style.display = "none"
    full.style.zIndex = 0;
    full.style.opacity = 0;
   

    })
    grap.addEventListener("click",function () {
        gsap.from(full,{
            x:-1000,
            duration:1.5,
            delay:.2,
        })
        })
}
frontvideopage1()

function page2animation() {
    gsap.from(".top-elem, .top-elem h1",{
        y:120,
        stagger:0.25,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:".main",
            start: "top top",
            end: "+=100%",
            // markers:true,
            scrub:2,
    
        }
    })
}
page2animation()



// page5-cursermove

function page5move() {
  var page5 = document.querySelector(".page5")
var move = document.querySelector(".mouse")
    
  page5.addEventListener("mousemove",function (dets) {
     gsap.to(move,{
         x:dets.x,
         y:dets.y,
     })
     
     })
     
     page5.addEventListener("mouseenter",function () {
         gsap.to(move,{
             scale:1,
             opacity:1,
           })
     })
     page5.addEventListener("mouseleave",function () {
       gsap.to(move,{
         scale:0,
         opacity:0,
       })
     })
 }
 page5move()
   
function svgmove() {
  gsap.to('.abs',{
    rotate:250,
    duration:5,
    ease:"power1.in",
    
    scrollTrigger:{
      trigger:".page5",
      scroller:".main",
      start: "top 40%",
      end: "top 70%",
      // markers:true,
      scrub:2,
    }
  })
}
svgmove()

function page3animatio() {
  gsap.from(".elem-top>h1",{
    y:120,
    stagger:0.25,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        start: "top 50%",
        end: "top 70%",
        // markers:true,
        scrub:2,
  
    }
  })
}
page3animatio()

function page4animation() {
  gsap.from(".top-elem-1, .top-elem-1 h4",{
      y:120,
      stagger:0.25,
      duration:1,
      scrollTrigger:{
          trigger:".page4",
          scroller:".main",
          start: "top 40%",
          end: "top 50%",
          // markers:true,
          scrub:2,
  
      }
  })
}
page4animation()
       
function menuanimation() {
  let a = document.querySelector(".mainMenu")
let b = document.querySelector(".menudev")
let c = document.querySelector(".closeMenu")

a.addEventListener("click",function () {
  // b.style.transform = "translateY(0px)";

  gsap.to(b,{duration:0.5,y:"0",ease: "power2.inOut"})
  
})
c.addEventListener("click",function () {
  // b.style.transform = "translateY(-1000px)";
  gsap.to(b,{duration:0.5,y:"-1000px",ease: "power2.inOut"})
})

}
menuanimation()

function page6animation() {
  gsap.from(".top-elem-2, .top-elem-2 h4",{
      y:120,
      stagger:0.25,
      duration:1,
      scrollTrigger:{
          trigger:".page6",
          scroller:".main",
          start: "top 40%",
          end: "top 50%",
          // markers:true,
          scrub:2,
  
      }
  })
}
page6animation()

//  <!-- Initialize Swiper -->
 
function sliderjs() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    
    loop: true,
    autoplay: {
     duration:1,
     delay: 2500,
     disableOnInteraction: true,
   },
  });
 
}
sliderjs()
        
    
function loader() {
  var t1 = gsap.timeline()
t1.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.1
})
t1.to("#loader h3",{
  x:-20,
  opacity:0,
  duration:1,
  stagger:0.1
})
t1.to("#loader",{
  
  opacity:0,
  
})
t1.from(".page1-text h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:1,
  delay:-0.5

})
t1.to("#loader",{
  display:"none"
  
})
}
loader()