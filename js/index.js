const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.getElementById('gnb-mo');
let isHideMenu = false;

menuToggleBtn.addEventListener('click', function(){
    isHideMenu = !isHideMenu;
    if(isHideMenu){
        menuToggleBtn.classList.add('active');
        menuHide.classList.add('show');
    } else{
        menuToggleBtn.classList.remove('active');
        menuHide.classList.remove('show');
    }
});

//   -------main swiper-slide-------
new Swiper('.main-slider .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : true,
    slidesPerView : 1,  //한번에 보여줄 슬라이드 개수
    navigation : {
        prevEl : ".main-slide .swiper-prev",
        nextEl : ".main-slide .swiper-next"
    },
  });

   //다중 SWIPER SLIDER
   new Swiper('.best-item .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : true,
    slidesPerView : 4,  //한번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백
    navigation : {
        prevEl : ".best-item .swiper-prev",
        nextEl : ".best-item .swiper-next"
    },
    breakpoints: { //반응형 조건 속성
        320: { //640 이상일 경우
          slidesPerView: 1, //레이아웃 2열
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }
  });