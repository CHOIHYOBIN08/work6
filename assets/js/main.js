

//스크롤 부드럽게
const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 600)
})

gsap.ticker.lagSmoothing(0)







//메뉴버튼

$('#header .menu-area a').click(function(e){
    e.preventDefault(); 
    $('.menu-more').addClass('show');
})
$('.menu-more .close').click(function(){
    $('.menu-more').removeClass('show');
})






//검색버튼
$('#header .search-area button').click(function(){ 
  $('html').addClass('hidden');
  $('.search-popup').addClass('show');
})
$('.search-top .close').click(function(){
  $('.search-popup').removeClass('show')
  $('html').removeClass('hidden');;
})

//심볼
$(document).mousemove(function(event) {

  var mouseX = event.clientX;
  var mouseY = event.clientY;
  

  $('#mouseX').text(mouseX);
  $('#mouseY').text(mouseY);
});




//텍스트스크롤
const scrollTxt = new SplitType('.sc-intro .txt', { types: 'words, chars', });


  gsap.to('.sc-intro .char', {
    scrollTrigger: {
      trigger: '.sc-intro',
      start: '10% 0%',
      end: '300%',
      scrub: true,
      pin:true,
    },
    duration:0,
    color:'#fff',
    stagger:0.1,
  });


  //비주얼 
  const swiper = new Swiper('.sc-visual .swiper', {
    loop: true,                 
    autoplay: {
      delay: 0,                
      disableOnInteraction: false,
    },
    speed: 30000,                
    slidesPerView: 'auto',                  
    centeredSlides: true,       
    freeModeMomentum: false,
  });

  //시리즈
  let mm = gsap.matchMedia();

// 800px 이상일 때와 799px 이하일 때 동일한 애니메이션 적용
mm.add("(min-width: 800px)", () => {
  applyHorizontalScroll();
});

mm.add("(max-width: 799px)", () => {
  applyHorizontalScroll();
});

// 가로 스크롤 애니메이션을 적용하는 함수
function applyHorizontalScroll() {
  const horiMotion = gsap.to('.sc-series .series-list', {
    scrollTrigger: {
      trigger: '.sc-series', 
      start: '0% 0%',
      end: () => "+=" + (document.querySelector('.sc-series .series-list').scrollWidth - window.innerWidth),
      scrub: 0, 
      pin: '.sc-series',
      pinSpacing: true,
      invalidateOnRefresh: true ,
    },
    ease: 'none',
    x: function() {
      return -(document.querySelector('.sc-series .series-list').scrollWidth - window.innerWidth);
    }
  });
}


  //푸터

  $('.title-area span').click(function() {
    $(this).closest('.nav-section').find('.footer-area').slideToggle();
});
  

  





