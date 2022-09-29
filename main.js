const burger = document.querySelector(".burger");
const nav = document.querySelector(".navigation");
// const nav = document.querySelector(".navigation");
burger.addEventListener("click", function () {
  if (nav.classList.contains("active")) {
    gsap.to(".navigation", { y: "0" });
  } else {
    gsap.to(".navigation", { y: "160%" });
    gsap.fromTo(
      ".list_item a",
      { opacity: 0 },
      { opacity: 1, delay: 0.9, stagger: 0.45 }
    );
    gsap.fromTo(
      ".navigation .btn",
      { opacity: 0, y: 5 },
      { opacity: 1, y: -5, delay: 2.25, stagger: 0.45 }
    );
  }
  nav.classList.toggle("active");
});

const section1_textContent = gsap.utils.toArray(".section_1 .text_content");
gsap.set(section1_textContent, { opacity: 0, x: 10 });
section1_textContent.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: "top center",
    end: "bottom center",
    markers: true,
    onEnter: () => {
      gsap.to(item, { opacity: 1, x: 0 });
    },
  });
});

const services_textContent = gsap.utils.toArray(
  ".services_section .text_content"
);
gsap.set(services_textContent, { opacity: 0, y: 10 });
services_textContent.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: "top center",
    end: "bottom center",
    markers: true,
    onEnter: () => {
      gsap.to(item, { opacity: 1, y: 0 });
    },
  });
});

const testimonials = gsap.utils.toArray(".testimonial_section .testimonial");
gsap.set(testimonials, { opacity: 0, y: 10 });
testimonials.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: "top center",
    end: "bottom center",
    markers: true,
    onEnter: () => {
      gsap.to(item, { opacity: 1, y: 0, stagger: 0.2 });
    },
  });
});
