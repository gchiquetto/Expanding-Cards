'use strict';
const box = document.querySelector('.pictures-container');

box.addEventListener('click', e => console.log(e.target.closest('div').classList));

