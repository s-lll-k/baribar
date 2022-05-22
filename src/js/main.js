'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const changeHeader = () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 1) {
            header.classList.add('header_on-scroll');
        } else {
            header.classList.remove('header_on-scroll');
        }
    };

    window.addEventListener('scroll', changeHeader);

    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.header__nav');

    const handlerMenu = () => {
        menu.classList.toggle('header__nav_active');
        menuBtn.classList.toggle('menu-btn_active');
        document.body.classList.toggle('_fixed');
        if (window.innerWidth > 768) {
            if (menu.classList.contains('header__nav_active')) {
                menu.style.height = `${menu.scrollHeight}px`;
            } else menu.style.height = '0px';
        } else if (menu.hasAttribute('style')) {
            menu.removeAttribute('style');
        }
    }

    const removeMenu = () => {
        document.body.classList.remove('_fixed');
        menu.classList.remove('header__nav_active');
        menu.removeAttribute('style');
        menuBtn.classList.remove('menu-btn_active');
        menuBtn.removeEventListener('click', handlerMenu);
    }

    menuBtn.addEventListener('click', handlerMenu);

    const checkInnerWidth = () => {
        if (window.innerWidth <= 1024) {
            menuBtn.addEventListener('click', handlerMenu);
        } else {
            removeMenu();
        }
    };
    checkInnerWidth();
    window.addEventListener('resize', checkInnerWidth);
});