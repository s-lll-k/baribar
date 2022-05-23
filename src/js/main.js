'use strict'

document.addEventListener('DOMContentLoaded', () => {

    const generateICS = () => {
        const addToCalBtn = document.querySelector('.add-to-my-calendar-btn');
        addToCalBtn.addEventListener('click', () => {
            const ics = `BEGIN:VCALENDAR
                VERSION:2.0
                PRODID:-//bobbin v0.1//NONSGML iCal Writer//EN
                CALSCALE:GREGORIAN
                METHOD:PUBLISH
                BEGIN:VEVENT
                DTSTART:20180327T080000Z
                DTEND:20180327T110000Z
                DTSTAMP:20091130T213238Z
                UID:1285935469767a7c7c1a9b3f0df8003a@yourserver.com
                CREATED:20091130T213238Z
                DESCRIPTION:Example event 1
                LAST-MODIFIED:20091130T213238Z
                SEQUENCE:0
                STATUS:CONFIRMED
                SUMMARY:Example event 1
                TRANSP:OPAQUE
                END:VEVENT
                BEGIN:VEVENT
                DTSTART:20180328T120000Z
                DTEND:20180328T130000Z
                DTSTAMP:20091130T213238Z
                UID:1285935469767a7c7c1a9b3f0df8003b@yourserver.com
                CREATED:20091130T213238Z
                DESCRIPTION:Example event 2
                LAST-MODIFIED:20091130T213238Z
                SEQUENCE:0
                STATUS:CONFIRMED
                SUMMARY:Example event 2
                TRANSP:OPAQUE
                END:VEVENT
                END:VCALENDAR`;
            const link = document.createElement('a');
            
            link.setAttribute('href', 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics));
            link.setAttribute('download', 'calendar');
            link.click();
        });
    }
    generateICS()

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