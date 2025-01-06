/*==========================EMAIL JS========================*/
const contactForm = document.getElementById('contact-form');
      contactMessage= document.getElementById('contact-message');



 const sendEmail=(e)=>{
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_sy37127','template_hmknf97','#contact-form', 'IZEDIH4BfuNOFUrto' )
    .then(()=>{
      //Show sent Message
      contactMessage.textContent='Message sent successfully!'

      //Remove message after five seconds
      setTimeout(()=>{
         contactMessage.textContent=''
      }, 5000)
      //clear input fields
      contactForm.reset()
    }, ()=>{
      //Show error message
      contactMessage.textContent='Message not sent (service error) X '
    })
 }     

 contactForm.addEventListener('submit', sendEmail);


 //SHOW SCROLL UP
//  const scrollUp = () =>{
//    const scrollUp = document.getElementById('scroll-up');
//    //when the scroll is higher than 
//    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
//  }

//  window.addEventListener('scroll', scrollUp);

// JavaScript to toggle visibility based on scroll
const scrollUp = document.getElementById('scrollup');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
});



//  Scroll Section Active Link

const sections= document.querySelectorAll('section[id]')

const scrollActive = ()=>{
   const scrollDown = window.scrollY

   sections.forEach(current =>{
      const sectionHeight=current.offsetHeight,
      sectionTop=current.offsetTop - 50,
      sectionId = current.getAttribute('id'),
      sectionsClass =document.querySelector('.nav__list a[href*=' + sectionId + ']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
         sectionsClass.classList.add('active-link')
      }else{
         sectionsClass.classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)


// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
   origin:'top',
   distance:'60px',
   duration:2500,
   delay: 400,
   //reset: true //Animations repeat
})

sr.reveal(`.perfil, .contact__form`)
sr.reveal(`.info`, {origin: 'left', delay: 800})
sr.reveal(`.skills`, {origin: 'left', delay: 1000})
sr.reveal(`.about`, {origin: 'right', delay: 1200})
sr.reveal(`.projects__card .services__card, .experience__card`, {interval: 100})
