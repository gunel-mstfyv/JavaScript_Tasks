/************************  Slide  *************************/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /*=============== SHOW MENU ===============*/
const showMenu = (mediaId, navId) =>{
  mediaButton = document.getElementById("mediaButton"),
    nav = document.getElementById(navId)
    
    if(mediaButton && nav){
      mediaButton.addEventListener('click', ()=>{
            
            nav.classList.toggle('show-menu');
            mediaButton.classList.toggle("active");
        })
    }
}
showMenu('mediaButton','mainListDiv')

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('mainListDiv')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

 