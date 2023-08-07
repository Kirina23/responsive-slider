const images = document.querySelectorAll('.slider .slider-item img')
const sliderItem = document.querySelector('.slider-item')
let count = 0;
let width;
function init() {
   width = document.querySelector('.slider').offsetWidth
   sliderItem.style.width = width * images.length + 'px'
   images.forEach(item => {
      item.style.width = width + 'px'
      item.style.width = 'auto' + 'px'
   })
}
window.addEventListener('resize', init)
init()

document.querySelector('.slider-next').addEventListener('click', () => {
   count++;
   if (count >= images.length) {
      count = 0;
   }
   rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', () => {
   count--;
   if (count < 0) {
      count = images.length - 1;
   }
   rollSlider();
});

function rollSlider() {
   sliderItem.style.transform = 'translate(-' + count * width + 'px)'
}

