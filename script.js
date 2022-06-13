'use strict';
const box = document.querySelector('.pictures-container');
const boxes = document.querySelectorAll('.pictures-container__box');

box.addEventListener('click', 
e => {
    if (e.target !== box){
        const boxPicture = e.target.closest('div');
        boxes.forEach(b => b.classList.remove('pictures-container__box--active'));
        boxPicture.classList.add('pictures-container__box--active');
    }    
}
);

