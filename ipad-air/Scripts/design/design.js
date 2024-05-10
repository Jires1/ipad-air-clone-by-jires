gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.features-video-overlay', {
    scrollTrigger: {
        trigger:".section-design",
        start: "top 98%",
        end: "top 78%",
        scrub: true,
    },
    opacity: .3,
}, {
    scrollTrigger: {
        trigger:".section-design",
        start: "top 98%",
        end: "top 78%",
        scrub: true,
    },
    opacity :1,
})

// background nav and section desing 

gsap.fromTo('.section',{
    backgroundColor: "#00000000",
},{
    scrollTrigger: {
        trigger:".section-design",
        start: "top 55%",
        end: "top 68%",
        // markers: true,
        scrub: true,
    },
    backgroundColor: "#FFF",
    color: '#000',
    delais: 2,
});

gsap.fromTo('.bg-nav',{
    backgroundColor: "rgba(0,0,0,0.72)",
},{
    scrollTrigger: {
        trigger:".section-design",
        start: "top 55%",
        end: "top 68%",
        // markers: true,
        scrub: true,
    },
    backgroundColor: "rgba(255,255,255,0.72)",
    color: '#000',
    delais: 2,
})

gsap.fromTo('.ipad-nav',{
    color: "#fff",
},{
    scrollTrigger: {
        trigger:".section-design",
        start: "top 55%",
        end: "top 68%",
        // markers: true,
        scrub: true,
    },
    backgroundColor: "rgba(255,255,255,0.72)",
    color: '#000',
    delais: 2,
})


