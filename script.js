const dekdSlide = document.querySelector('.dekd-slide');
const dekdImages = document.querySelectorAll('.dekd-slide img');

//Button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = dekdImages[0].clientWidth;
dekdSlide.style.transform = 'translateX(' + (-size * counter) + 'px';

//Button Listeners
nextBtn.addEventListener('click',() => {
    if(counter >= dekdImages.length-1) return;
    dekdSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    dekdSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',() => {
    if(counter <= 0) return;
    dekdSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    dekdSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

dekdSlide.addEventListener('transitionend', () => {
    if(dekdImages[counter].id === 'lastPic') {
        dekdSlide.style.transition = "none";
        counter = dekdImages.length-2;
        dekdSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(dekdImages[counter].id === 'firstPic') {
        dekdSlide.style.transition = "none";
        counter = dekdImages.length - counter;
        dekdSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});