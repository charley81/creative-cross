// Smooth Scrolling
$("#navbar a, .btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// Hide Logo On Scroll
window.addEventListener("scroll", function() {
  if (window.scrollY > 200) {
    document.querySelector("#navbar h3").style.opacity = 0;
    document.querySelector("#navbar .hamburger").style.border =
      "1px solid #fff";
  } else {
    document.querySelector("#navbar h3").style.opacity = 1;
    document.querySelector("#navbar .hamburger").style.border = "none";
  }
});

// Close Menu Overlay
function closeNav() {
  document.getElementById("navi-toggle").checked = false;
}

// Slide In Animation
const items = document.querySelector("#contact .item");

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });

// Events
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);
