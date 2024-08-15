const thumbs = document.querySelectorAll('.thumb li');
const infoSlider = document.querySelectorAll('.info-slider');
const imgSlider = document.querySelectorAll('.img-slider');
const items = document.querySelectorAll('.item');

let index = 0;

thumbs.forEach((thumb, ind) => {
    thumb.addEventListener('click', () => {

        // Remove 'selected' class from the currently active thumbnail
        document.querySelector('.thumb .selected').classList.remove('selected');
        thumb.classList.add('selected');

        // Update the index based on the clicked thumbnail
        index = ind;

        // Update the position of the info slider
        infoSlider.forEach(slide => {
            slide.style.transform = `translateY(${index * -100}%)`;
        });

        // Update the position of the image slider
        imgSlider.forEach(slide => {
            slide.style.transform = `translateX(${index * -100}%)`;
        });

        // Remove 'active' class from the currently active item and add it to the new one
        document.querySelector('.item.active').classList.remove('active');
        items[index].classList.add('active');
    });
});
