// console.log(gsap);

// to is for final me kya hoga ye btayega
// from is for innital mtlb inintal me kya hoga ye btayega



// gsap.from(".box",{
//     x:300,
//     rotation:360,
//     duration:1.5,
// })

// gsap.to(".box",{
//     x:300,
//     rotation:360,
//     duration:1.5,
// })

// gsap.to(".box",{
//     y:100,
//     duration:1,
//     ease:"bounce.out"
// })
// gsap.to(".box1",{
//     y:100,
//     duration:1,
//     ease:"elastic.out"
// })
// gsap.to(".box2",{
//     y:100,
//     duration:1,
//     ease:"power1.out"
// })

// const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

// tl.to(".logo", { opacity: 1, y: 0 })
//   .to(".headline", { opacity: 1, y: 0 }, "-=0.5")   // starts 0.5s before the previous ends
//   .to(".cta-button", { opacity: 1, scale: 1 });

// gsap.to(".card", {
//   y: 0,
//   opacity: 1,
//   duration: 1.6,
//   stagger: 1.15,
//   ease: "power2.out"
// });




// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".panel", {
//   x: -200,
//   scrollTrigger: {
//     trigger: ".panel",
//     start: "top center",   // when panel's top hits viewport center
//     end: "bottom center",
//     scrub: true             // ties progress directly to scroll position
//   }
// });



// const btn = document.querySelector(".hover-btn");

// btn.addEventListener("mouseenter", () => {
//   gsap.to(btn, { scale: 1.08, duration: 0.3, ease: "power2.out" });
// });

// btn.addEventListener("mouseleave", () => {
//   gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
// });




// gsap.to(".line-path", {
//   strokeDashoffset: 0,
//   duration: 2,
//   ease: "power1.inOut",
//   scrollTrigger: { trigger: ".line-path", start: "top 80%" }
// });





// const heading = document.querySelector(".reveal-text");

// heading.innerHTML = heading.textContent
//   .split("")
//   .map(ch => `<span>${ch === " " ? "&nbsp;" : ch}</span>`)
//   .join("");

// gsap.from(".reveal-text span", {
//   y: 40,
//   opacity: 0,
//   duration: 0.6,
//   stagger: 0.03,
//   ease: "power3.out"
// });




// lenis
// const lenis = new Lenis();

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);




// const lenis = new Lenis({
//   duration: 1.2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//   smoothWheel: true,
//   wheelMultiplier: 1
// });
// function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
// requestAnimationFrame(raf);






// gsap.registerPlugin(ScrollTrigger);

// const lenis = new Lenis();

// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });
// gsap.ticker.lagSmoothing(0);
// function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
// requestAnimationFrame(raf);



// locomotve
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true
// });




// scroll.on("scroll", (instance) => {
//   gsap.to(".floating-icon", {
//     y: instance.scroll.y * 0.1,
//     ease: "none",
//     overwrite: true
//   });
// });

