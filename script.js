// Preloader removed

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close navbar when clicking on a nav link
let navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});



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
                try {
                    document.querySelector('header nav a[href*=' + id +']').classList.add('active');
                } catch(e) {
                    // Handle case where element might not exist
                }
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Add scroll to top button visibility
    let scrollTop = document.querySelector('.footer-iconTop');
    if (scrollTop) {
        scrollTop.style.display = window.scrollY > 500 ? 'block' : 'none';
    }

    // Parallax effect for background elements
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        let speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${window.scrollY * speed}px)`;
    });

};




ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

ScrollReveal().reveal('.home-content, .heading', { 
    origin: 'top',
    interval: 150
});

ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { 
    origin: 'bottom',
    interval: 150
});

ScrollReveal().reveal('.home-content h1, .about-img', { 
    origin: 'left'
});

ScrollReveal().reveal('.home-content p, .about-content', { 
    origin: 'right'
});

ScrollReveal().reveal('.education-box, .certification-box, .skills-box', { 
    interval: 200,
    scale: 0.9,
    distance: '50px'
});




const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Development', 'Python', 'AI & Machine Learning', 'Web Development'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
});

// Enhanced Snow Effect
function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    // Random snowflake characters
    const snowflakeChars = ['❄', '❅', '❆', '*'];
    snowflake.innerHTML = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
    
    // Random position and properties
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
    snowflake.style.opacity = Math.random() * 0.7 + 0.3; // Ensure minimum visibility
    snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
    snowflake.style.zIndex = '9999';
    snowflake.style.pointerEvents = 'none';
    
    // Add subtle color variation
    const colors = ['white', '#e6f7ff', '#f0f9ff'];
    snowflake.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    snowContainer.appendChild(snowflake);
    
    // Remove snowflake after animation with smooth fade out
    setTimeout(() => {
        snowflake.style.transition = 'opacity 1s ease';
        snowflake.style.opacity = '0';
        
        setTimeout(() => {
            if (snowflake.parentNode) {
                snowflake.remove();
            }
        }, 1000);
    }, 4000);
}

// Floating Particles Effect
function createParticle() {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle-element';
    
    // Random properties
    const size = Math.random() * 5 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '100vh';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    
    // Add subtle color variation
    const colors = ['rgba(255, 107, 107, 0.7)', 'rgba(78, 205, 196, 0.7)', 'rgba(255, 230, 109, 0.7)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    particlesContainer.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 15000);
}

// Create particles periodically
setInterval(createParticle, 300);

// Create initial particles
for (let i = 0; i < 20; i++) {
    setTimeout(() => {
        createParticle();
    }, i * 500);
}

// Create snowflakes periodically with dynamic frequency
function adjustSnowIntensity() {
    const isMobile = window.innerWidth <= 768;
    const baseInterval = isMobile ? 300 : 150;
    const intensityMultiplier = 1 + (Math.random() * 0.5); // Random intensity variation
    
    return baseInterval * intensityMultiplier;
}

// Create initial snowflakes with staggered timing
for (let i = 0; i < 40; i++) {
    setTimeout(() => {
        createSnowflake();
    }, i * 200);
}

// Continuous snow generation with varying intensity
setInterval(() => {
    createSnowflake();
}, adjustSnowIntensity());

// Adjust snow intensity on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Clear some snowflakes and adjust generation rate
        const snowflakes = document.querySelectorAll('.snowflake');
        const removeCount = Math.min(10, Math.floor(snowflakes.length / 3));
        
        for (let i = 0; i < removeCount; i++) {
            if (snowflakes[i]) {
                snowflakes[i].style.transition = 'opacity 0.5s ease';
                snowflakes[i].style.opacity = '0';
                setTimeout(() => {
                    if (snowflakes[i].parentNode) {
                        snowflakes[i].remove();
                    }
                }, 500);
            }
        }
    }, 300);
});

// Magnetic cursor effect for interactive elements
document.addEventListener('mousemove', (e) => {
    const magneticElements = document.querySelectorAll('.magnetic-hover');
    
    magneticElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        if (distance < 150) {
            const moveX = distanceX * 0.1;
            const moveY = distanceY * 0.1;
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            element.style.transform = 'translate(0, 0)';
        }
    });
});

// Add spotlight effect to main sections on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            section.classList.add('spotlight');
        } else {
            section.classList.remove('spotlight');
        }
    });
});
