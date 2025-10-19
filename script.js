let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top>=offset && top<offset  + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');

            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);



    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};




ScrollReveal({ 
   // reset: true,
    distance:'80px',
    duration:2000,
    delay:200 

});
ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });




const typed = new Typed('.multiple-text',{
strings:['Full Stack Development','python'],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true

}) ;

// Snow Effect
function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    
    // Random position
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random() * 0.8 + 0.2; // Ensure minimum visibility
    snowflake.style.fontSize = Math.random() * 15 + 15 + 'px'; // Larger for mobile
    snowflake.style.zIndex = '9999'; // Ensure it's on top
    snowflake.style.pointerEvents = 'none';
    
    snowContainer.appendChild(snowflake);
    
    // Remove snowflake after animation
    setTimeout(() => {
        if (snowflake.parentNode) {
            snowflake.remove();
        }
    }, 5000);
}

// Create snowflakes periodically - less frequent on mobile
const isMobile = window.innerWidth <= 768;
const snowInterval = isMobile ? 200 : 100;
const initialSnowflakes = isMobile ? 30 : 50;

setInterval(createSnowflake, snowInterval);

// Create initial snowflakes
for (let i = 0; i < initialSnowflakes; i++) {
    setTimeout(() => {
        createSnowflake();
    }, i * 150);
}
