import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const headerContent = document.querySelector('.header__content');
const menu = document.querySelector('.menu');
const headerClose = document.querySelector('.header__close');

menu.addEventListener('click', (e)=>{
    headerContent.classList.toggle('active')
    headerClose.classList.toggle('active')
})

headerClose.addEventListener('click',(e)=>{
    headerContent.classList.remove('active')    
    headerClose.classList.remove('active')
})