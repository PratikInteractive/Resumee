// console.log("check")

// $('.parent-div').slick({
//     infinite: false,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   });

// Header Toggle
$(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".navigation").slideToggle();
    $("body").toggleClass("overflow-y-hidden");
});

$(document).ready(function() {


    // Header
    gsap.fromTo("header", {
        opacity: 0,
        y: -50,
    },{
        y: 0,
        opacity: 1,
        delay: '0.5'
    });

    // Spotlight
    gsap.fromTo(".spotlight-section" , {
        y: '100%',
        ease: "bounce",
    },{
        y: 0,
        delay: '0.5',
    })

    // Spotlight Text
    const myText = new SplitType('.spotlight-heading')
    gsap.fromTo('.char' ,{
        y: 25,
        opacity: 0
    },
    {
        delay: 1,
        opacity: 1,
        y: 0,
        stagger: 0.05,
    })

});



// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// const smoother = ScrollSmoother.create({
//   content: "#scrollsmoother-container",
//   smooth: 3,
//   normalizeScroll: true,
//   ignoreMobileResize: true,
// 	effects: true,
// });
