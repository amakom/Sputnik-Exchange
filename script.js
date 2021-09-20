
// scrolling effect

jQuery(document).ready(function( $ )
{ $('.counter').counterUp({
  delay: 10,
  time: 1000
});
});

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 700;
  header.classList.toggle('scrolling-active', windowPosition);
})

