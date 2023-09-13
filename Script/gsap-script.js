gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "85px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main-section", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main-section",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#p-name h1", {
  x: 600,
  duration: 2,
  scrollTrigger: {
    trigger: "#p-name h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

gsap.from("#contact-heading h1", {
  x: -600,
  duration: 2,
  scrollTrigger: {
    trigger: "#contact-heading h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

gsap.to("#form", {
  backgroundColor: "#b75499",
  scrollTrigger: {
    trigger: "#projects",
    scroller: "body",
    // markers: true,
    start: "top -60%",
    end: "top -70%",
    scrub: 2,
  },
});
