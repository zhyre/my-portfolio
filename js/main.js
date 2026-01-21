// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all work cards and expertise categories
document.querySelectorAll('.work-card, .expertise-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(27, 23, 23, 0.95)';
    } else {
        navbar.style.backgroundColor = 'var(--noir-black)';
    }
});

// Add typing effect to hero title with preserved HTML
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    // Split the content: "Hi, I'm " and "Zhyre Coritico"
    const beforeSpan = "Hi, I'm ";
    const insideSpan = "Zhyre Coritico";

    heroTitle.innerHTML = '';
    let i = 0;
    let isTypingSpan = false;

    function typeWriter() {
        if (!isTypingSpan && i < beforeSpan.length) {
            heroTitle.innerHTML += beforeSpan.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        } else if (!isTypingSpan) {
            // Start typing the span content
            heroTitle.innerHTML += '<span class="highlight"></span>';
            i = 0;
            isTypingSpan = true;
            setTimeout(typeWriter, 80);
        } else if (i < insideSpan.length) {
            const span = heroTitle.querySelector('.highlight');
            span.textContent += insideSpan.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }

    setTimeout(typeWriter, 500);
}