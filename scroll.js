
    const swiper = new Swiper('.mySwiper', {
    
    //parameters
    spaceBetween: 30,
    grabCursor: true,

    //autoplay
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    // Optional parameters
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        690: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
    });
