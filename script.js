const parallax = document.getElementById("parallax");
const parallax1 = document.getElementById("parallax-1");
const parallax2 = document.getElementById("parallax-2");

onscroll = function () {
  let y = scrollTop;
  parallax.style.top = 1800 - y * 2.65 + "px";
  parallax1.style.top = 1200 - y * 0.75 + "px";
  parallax2.style.top = 800 + y * 0.5 + "px";
};
