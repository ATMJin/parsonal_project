function $(css) {
  return document.querySelector(css);
}

function $All(css) {
  return document.querySelectorAll(css)
}
window.addEventListener("load", () => {
  $(".hamburger").addEventListener("click", () => {
    $(".cover_other_page").classList.toggle("appear");
    $All(".hamburger>div")[0].classList.toggle("arrow");
    $All(".hamburger>div")[2].classList.toggle("arrow");
    $(".hamburger").classList.toggle("gotoLeft");
    $(".other_page").classList.toggle("gotoLeft");
  }, false)
}, false)