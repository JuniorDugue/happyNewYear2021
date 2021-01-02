const glassContainer = document.getElementById("container");

const timeLine = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 1.5 } });

timeLine.from("img", { x: "-10%", opacity: 0 }).from(".container", { opacity: 0, delay: 0.5, duration: 1 }, "-=1.5").from(".container", { x: "-20%", backdropFilter: "blur(0px" }).from(".seqeunce", { y: -30, opacity: 0, stagger: 0.2, duration: 0.5 }, "-=5").from("h2", { y: 20, clipPath: "inset(0 0 100% 0" }, "-=.8").from("footer", { y: 20, clipPath: "inset(0 0 100% 0" }, "-=.8");
