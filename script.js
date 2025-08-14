// ===== GSAP SETUP =====
gsap.registerPlugin(ScrollTrigger);

// ===== DOM ELEMENTS =====
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__link');

// ===== HERO SLIDESHOW =====
let currentSlide = 0;
const slides = document.querySelectorAll('.hero__slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to current slide
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Start slideshow
if (slides.length > 0) {
    // Change slide every 4 seconds
    setInterval(nextSlide, 4000);
}

// ===== MOBILE NAVIGATION =====
let isMenuOpen = false;

navToggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        // Open menu
        navMenu.style.display = 'flex';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.backgroundColor = 'var(--color-dark-green)';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = '2rem';
        navMenu.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        
        // Animate hamburger to X
        const spans = navToggle.querySelectorAll('span');
        gsap.to(spans[0], { rotation: 45, y: 7, duration: 0.3 });
        gsap.to(spans[1], { opacity: 0, duration: 0.3 });
        gsap.to(spans[2], { rotation: -45, y: -7, duration: 0.3 });
        
        // Animate menu items
        gsap.fromTo(navMenu, 
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
        
        gsap.fromTo('.nav__item',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, delay: 0.2 }
        );
    } else {
        // Close menu
        gsap.to(navMenu, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                navMenu.style.display = 'none';
                navMenu.style.position = 'static';
                navMenu.style.flexDirection = 'row';
                navMenu.style.padding = '0';
                navMenu.style.boxShadow = 'none';
            }
        });
        
        // Animate X back to hamburger
        const spans = navToggle.querySelectorAll('span');
        gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(spans[1], { opacity: 1, duration: 0.3 });
        gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
    }
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && isMenuOpen) {
            navToggle.click();
        }
    });
});

// Close menu when window is resized to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMenuOpen) {
        navToggle.click();
    }
});

// ===== SCROLL ANIMATIONS =====

// Hero Section Animations
gsap.fromTo('.hero__product-card', 
    { opacity: 0, x: -100, scale: 0.8 },
    { opacity: 1, x: 0, scale: 1, duration: 1, delay: 0.8 }
);

gsap.fromTo('.hero__subtitle', 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, delay: 1 }
);

gsap.fromTo('.hero__player-container', 
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 0.8, delay: 1.2 }
);

gsap.fromTo('.hero__food-container', 
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.8, delay: 1.4 }
);

// Mission Section Animations
ScrollTrigger.create({
    trigger: '.mission',
    start: 'top 80%',
    onEnter: () => {
        gsap.fromTo('.mission__label',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 }
        );
        
        gsap.fromTo('.mission__heading',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
        );
        
        gsap.fromTo('.mission__paragraph',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.4 }
        );
        
        gsap.fromTo('.mission__button',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.6 }
        );
        
        gsap.fromTo('.mission__image-wrapper',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, delay: 0.3 }
        );
        
        gsap.fromTo('.mission__background-text',
            { opacity: 0 },
            { opacity: 0.6, duration: 1, delay: 0.5 }
        );
    }
});

// Products Section Animations
ScrollTrigger.create({
    trigger: '.products',
    start: 'top 80%',
    onEnter: () => {
        gsap.fromTo('.products__heading',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 }
        );
        
        gsap.fromTo('.products__description',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
        );
        
        gsap.fromTo('.product-card',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.4 }
        );
    }
});

// Recipes Section Animations
ScrollTrigger.create({
    trigger: '.recipes',
    start: 'top 80%',
    onEnter: () => {
        gsap.fromTo('.recipes__heading',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 }
        );
        
        gsap.fromTo('.recipes__description',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
        );
        
        gsap.fromTo('.recipe-card',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, delay: 0.4 }
        );
    }
});

// Sustainability Section Animations
ScrollTrigger.create({
    trigger: '.sustainability',
    start: 'top 80%',
    onEnter: () => {
        gsap.fromTo('.sustainability__heading',
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.8 }
        );
        
        gsap.fromTo('.sustainability__paragraph',
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.6, delay: 0.3 }
        );
        
        gsap.fromTo('.sustainability__image',
            { opacity: 0, scale: 1.1 },
            { opacity: 1, scale: 1, duration: 1.2, delay: 0.2 }
        );
    }
});

// CTA Section Animations
ScrollTrigger.create({
    trigger: '.cta',
    start: 'top 80%',
    onEnter: () => {
        gsap.fromTo('.cta__heading',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 }
        );
        
        gsap.fromTo('.cta__button',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.6, delay: 0.3 }
        );
    }
});

// Footer Animations
ScrollTrigger.create({
    trigger: '.footer',
    start: 'top 90%',
    onEnter: () => {
        gsap.fromTo('.footer__logo',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 }
        );
        
        gsap.fromTo('.footer__link',
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.2 }
        );
        
        gsap.fromTo('.footer__social-link',
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, delay: 0.4 }
        );
        
        gsap.fromTo('.footer__copyright',
            { opacity: 0 },
            { opacity: 1, duration: 0.6, delay: 0.6 }
        );
    }
});

// ===== HEADER SCROLL EFFECT =====
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        header.style.backgroundColor = 'rgba(0, 51, 0, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.padding = '0.5rem 0';
    } else {
        header.style.backgroundColor = 'var(--color-dark-green)';
        header.style.backdropFilter = 'none';
        header.style.padding = '1rem 0';
    }
    
    lastScrollY = currentScrollY;
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== PARALLAX EFFECTS =====
ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    onUpdate: (self) => {
        const progress = self.progress;
        gsap.set('.hero__player-image', {
            y: progress * 50
        });
        gsap.set('.hero__food-image', {
            y: progress * -30
        });
    }
});

ScrollTrigger.create({
    trigger: '.sustainability',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1,
    onUpdate: (self) => {
        const progress = self.progress;
        gsap.set('.sustainability__image', {
            y: progress * -50
        });
    }
});

// ===== ENHANCED HOVER EFFECTS =====
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.product-card__image'), {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.product-card__image'), {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        });
    });
});

document.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.recipe-card__image'), {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.recipe-card__image'), {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// ===== BUTTON CLICK ANIMATIONS =====
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    });
});

// ===== CSS ANIMATIONS KEYFRAMES =====
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== INTERSECTION OBSERVER FOR PERFORMANCE =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe all sections for potential optimizations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    // Hide any loading screen if present
    const loader = document.querySelector('.loader');
    if (loader) {
        gsap.to(loader, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => loader.remove()
        });
    }
    
    // Start initial animations
    gsap.fromTo('body', 
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
    );
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// ===== PERFORMANCE MONITORING =====
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
} 