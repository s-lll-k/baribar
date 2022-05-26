"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const scrollToAnchor = () => {
        const links = document.querySelectorAll('.header__link');
        links.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();

                document.querySelector(link.getAttribute('href')).scrollIntoView({
                    block: 'center',
                    behavior: 'smooth'
                });
                if (window.innerWidth <= 768) {
                    const menuBtn = document.querySelector(".menu-btn"),
                        menu = document.querySelector(".header__nav");
                    document.body.classList.remove("_fixed");
                    menu.classList.remove('header__nav_active');
                    menuBtn.classList.remove("menu-btn_active");
                }
            });
        });
    }
    scrollToAnchor();

    const formateDateForICS = (dateMs, addedDays) => {
        const date = new Date(dateMs + (addedDays * 86400000));
        const year = date.getFullYear(),
            month = String(date.getMonth() + 1).length === 1 ? '0' + String(date.getMonth() + 1) : date.getMonth() + 1,
            day = String(date.getDate()).length === 1 ? '0' + date.getDate() : date.getDate();
        return `${year}${month}${day}`;
    };
    const generateICS = () => {
        const addToCalBtn = document.querySelector(".add-to-my-calendar-btn"),
            inputValue = document.querySelector("#user-date");
        addToCalBtn.addEventListener("click", event => {
            event.preventDefault();
            const modalBg = document.querySelector('.modal-bg'),
                modal = document.querySelector('.modal.modal_active'),
                modalForm = document.querySelector('.modal__form');
            document.body.classList.remove("_fixed");
            modalBg.classList.remove("modal-bg_active");
            modal.classList.remove("modal_active");
            const date = new Date(inputValue.value),
                ms = date.getTime();
            const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//bobbin v0.1//NONSGML iCal Writer//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
DTSTART:${formateDateForICS(ms, 0)}
DTEND:${formateDateForICS(ms, 4)}
DTSTAMP:20091130T213238Z
UID:1285935469767a7c7c1a9b3f0df8003a@yourserver.com
CREATED:20091130T213238Z
DESCRIPTION:БЦЖ, ВГВ
LAST-MODIFIED:20091130T213238Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:БЦЖ, ВГВ
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART:${formateDateForICS(ms, 60)}
DTEND:${formateDateForICS(ms, 60)}
DTSTAMP:20091130T213238Z
UID:1285935469767a7c7c1a9b3f0df8003b@yourserver.com
CREATED:20091130T213238Z
DESCRIPTION:ВГВ, АбКДС, Хиб, ИПВ, Пневмо
LAST-MODIFIED:20091130T213238Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:ВГВ, АбКДС, Хиб, ИПВ, Пневмо
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART:${formateDateForICS(ms, 90)}
DTEND:${formateDateForICS(ms, 90)}
DTSTAMP:20091130T213238Z
UID:1285935469767a7c7c1a9b3f0df8003c@yourserver.com
CREATED:20091130T213238Z
DESCRIPTION:АбКДС, Хиб, ИПВ
LAST-MODIFIED:20091130T213238Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:АбКДС, Хиб, ИПВ
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART:${formateDateForICS(ms, 120)}
DTEND:${formateDateForICS(ms, 120)}
DTSTAMP:20091130T213238Z
UID:1285935469767a7c7c1a9b3f0df8003d@yourserver.com
CREATED:20091130T213238Z
DESCRIPTION:ВГВ, АбКДС, Хиб, ИПВ, Пневмо
LAST-MODIFIED:20091130T213238Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:ВГВ, АбКДС, Хиб, ИПВ, Пневмо
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART:${formateDateForICS(ms, 360)}
DTEND:${formateDateForICS(ms, 450)}
DTSTAMP:20091130T213238Z
UID:1285935469767a7c7c1a9b3f0df8003e@yourserver.com
CREATED:20091130T213238Z
DESCRIPTION:ІҚВ, Пневмо, ҚҚП
LAST-MODIFIED:20091130T213238Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:ІҚВ, Пневмо, ҚҚП
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART:${formateDateForICS(ms, 540)}
DTEND:${formateDateForICS(ms, 540)}
DTSTAMP:20091130T213238Z
UID:1285935469767a7c7c1a9b3f0df8003f@yourserver.com
CREATED:20091130T213238Z
DESCRIPTION:АбКДС, Хиб, ИПВ
LAST-MODIFIED:20091130T213238Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:АбКДС, Хиб, ИПВ
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART:${formateDateForICS(ms, 730)}
DTEND:${formateDateForICS(ms, 730)}
DTSTAMP:20091130T213238Z
UID:1285935469767a7c7c1a9b3f0df8003g@yourserver.com
CREATED:20091130T213238Z
DESCRIPTION:ВГА
LAST-MODIFIED:20091130T213238Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:ВГА
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART:${formateDateForICS(ms, 913)}
DTEND:${formateDateForICS(ms, 913)}
DTSTAMP:20091130T213238Z
UID:1285935469767a7c7c1a9b3f0df8003h@yourserver.com
CREATED:20091130T213238Z
DESCRIPTION:ВГА
LAST-MODIFIED:20091130T213238Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:ВГА
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART:${formateDateForICS(ms, 2190)}
DTEND:${formateDateForICS(ms, 2190)}
DTSTAMP:20091130T213238Z
UID:1285935469767a7c7c1a9b3f0df8003p@yourserver.com
CREATED:20091130T213238Z
DESCRIPTION:БЦЖ, АбКДС
LAST-MODIFIED:20091130T213238Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:БЦЖ, АбКДС
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART:${formateDateForICS(ms, 5840)}
DTEND:${formateDateForICS(ms, 5840)}
DTSTAMP:20091130T213238Z
UID:1285935469767a7c7c1a9b3f0df8003l@yourserver.com
CREATED:20091130T213238Z
DESCRIPTION:АДС-М
LAST-MODIFIED:20091130T213238Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:АДС-М
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART:${formateDateForICS(ms, 9490)}
RRULE:FREQ=YEARLY;INTERVAL=10
DTEND:${formateDateForICS(ms, 9490)}
DTSTAMP:20091130T213238Z
UID:1285935469767a7c7c1a9b3f0df8003o@yourserver.com
CREATED:20091130T213238Z
DESCRIPTION:АДС-М
LAST-MODIFIED:20091130T213238Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:АДС-М
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`;

            const link = document.createElement("a");

            link.setAttribute(
                "href",
                "data:text/calendar;charset=utf-8," + encodeURIComponent(ics)
            );
            link.setAttribute("download", "calendar");
            link.click();
            modalForm.reset();
        });
    };
    generateICS();

    const changeHeader = () => {
        const header = document.querySelector(".header");
        if (window.scrollY > 1) {
            header.classList.add("header_on-scroll");
        } else {
            header.classList.remove("header_on-scroll");
        }
    };

    window.addEventListener("scroll", changeHeader);

    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".header__nav");

    const handlerMenu = () => {
        menu.classList.toggle("header__nav_active");
        menuBtn.classList.toggle("menu-btn_active");
        document.body.classList.toggle("_fixed");
        if (window.innerWidth > 768) {
            if (menu.classList.contains("header__nav_active")) {
                menu.style.height = `${menu.scrollHeight}px`;
            } else menu.style.height = "0px";
        } else {
            document.body.classList.toggle("_fixed");
            if (menu.hasAttribute("style")) {
                menu.removeAttribute("style");
            }
        }
    };

    const removeMenu = () => {
        document.body.classList.remove("_fixed");
        menu.classList.remove("header__nav_active");
        menu.removeAttribute("style");
        menuBtn.classList.remove("menu-btn_active");
        menuBtn.removeEventListener("click", handlerMenu);
    };

    menuBtn.addEventListener("click", handlerMenu);

    const checkInnerWidth = () => {
        if (window.innerWidth <= 1024) {
            menuBtn.addEventListener("click", handlerMenu);
        } else {
            removeMenu();
        }
    };
    checkInnerWidth();
    window.addEventListener("resize", checkInnerWidth);

    const closePopup = () => {
        const modalBg = document.querySelector(".modal-bg");
        modalBg.addEventListener("click", event => {
            const target = event.target;
            if (
                target.classList.contains("modal-bg") ||
                target.closest(".modal__close") ||
                target.closest(".modal__go-back")
            ) {
                document.body.classList.remove("_fixed");
                modalBg.classList.remove("modal-bg_active");
                modal.classList.remove("modal_active");
            }
        });
    };
    closePopup();
    const openPopup = btn => {
        const modalBg = document.querySelector(".modal-bg"),
            modal = document.getElementById(btn.dataset.modal);
        document.body.classList.add("_fixed");
        modalBg.classList.add("modal-bg_active");
        modal.classList.add("modal_active");
    };
    const listenerPopup = () => {
        const popupBtns = document.querySelectorAll(".modal-open-btn");
        popupBtns.forEach(popupBtn => {
            popupBtn.addEventListener("click", openPopup.bind(null, popupBtn));
        });
    };
    listenerPopup();
});
