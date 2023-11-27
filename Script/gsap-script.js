gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "85px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    backgroundColor: "#000",
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
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#contact-heading h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

gsap.from("#project-container", {
  y: 80,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#project-container",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 3,
  },
});

// ---------------------- skill gsap ------------------------

gsap.from("#skills", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#skills",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 50%",
    scrub: 1,
  },
});

gsap.from("#skill-main-heading", {
  opacity: 0,
  scale: 0,
  duration: 1,
  scrollTrigger: {
    scale: 1.2,
    trigger: "#skills",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});

gsap.from("#skill-main-para", {
  y: 60,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#skills",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 20%",
    scrub: 1,
  },
});

gsap.from(".skill-boxes", {
  scale: 0,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#skills",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 80%",
    scrub: 1,
  },
});
