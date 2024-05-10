gsap.registerPlugin(ScrollTrigger);

gsap.to('.features-video-overlay',{
    scrollTrigger: {
        trigger:".section-features",
        start: "top 65%",
        end: "center 50%",
        scrub: true,
    },
    opacity: .3,
})

$('.sub-title').each(function () {
    gsap.to( $(this),{
    scrollTrigger: {
        trigger:$(this),
        start: "top 65%",
        end: "center 50%",
        scrub: true,
    },
    opacity: 1,
    })

    gsap.fromTo( $(this),{
        scrollTrigger: {
            trigger: $(this),
            start: "center 50%",
            scrub: true,
        },
        opacity: 1,
    }, {
        scrollTrigger: {
            trigger: $(this),
            start: "bottom 45%",
            end: "top 15%",
            scrub: true,
        },
        opacity:0
    })
})


gsap.to( ".feature-links",{
    scrollTrigger: {
        trigger:".feature-links",
        start: "top 65%",
        end: "center 50%",
        scrub: true,
    },
    opacity: 1,
    })

    gsap.fromTo( ".feature-links",{
        scrollTrigger: {
            trigger: ".feature-links",
            start: "center 50%",
            scrub: true,
        },
        opacity: 1,
    }, {
        scrollTrigger: {
            trigger: ".feature-links",
            start: "bottom 45%",
            end: "top 15%",
            scrub: true,
        },
        opacity:0
});

// background nav and section desing 

gsap.to('.section',{
    scrollTrigger: {
        trigger:".section-features",
        start: "top 0%",
        end: "bottom 55%",
        markers: true,
        scrub: true,
    },
    backgroundColor: "#00000000",
    color: '#fff',
})