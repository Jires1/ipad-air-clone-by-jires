// $(document).ready(function() {
//     $('#video')[0].play();
// });

// GSAP Scroll aimation 
gsap.registerPlugin(ScrollTrigger);
gsap.to("#video", {
    scrollTrigger: {
        start: "center 40%",
        end: "bottom 50%",
        trigger:"#video",
        scrub: true,
    }, 
    scale: 0.8,
    opacity: 0,
});

gsap.to(".wrap-image", {
    scrollTrigger: {
        start: "center 40%",
        end: "bottom 50%",
        trigger:".wrap-image",
        scrub: true,
    }, 
    opacity: 0,
});

gsap.to(".hero__h", {
    scrollTrigger: {
        start: "bottom 85%",
        end: "bottom 45%",
        trigger:".hero__h",
        scrub: true,        
    }, 
    opacity: 1,
})

gsap.fromTo(".hero__h", {
    scrollTrigger: {
        start: "bottom 50%",
        end: "bottom 35%",
        trigger:".hero__h",
        scrub: true,        
    }, 
    opacity: 1,
}, {
    scrollTrigger: {
        start: "bottom 50%",
        end: "bottom 35%",
        trigger:".hero__h",
        scrub: true,        
    }, 
    opacity: 0,
});
