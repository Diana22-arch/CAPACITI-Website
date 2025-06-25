// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Programme Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const programmeCards = document.querySelectorAll('.programme-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(filterBtn => filterBtn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        programmeCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filterValue === 'all' || cardCategory === filterValue) {
                card.classList.remove('hidden');
                card.classList.add('visible');
            } else {
                card.classList.add('hidden');
                card.classList.remove('visible');
            }
        });
    });
});

// Initialize all programme cards as visible
programmeCards.forEach(card => {
    card.classList.add('visible');
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            alert('Thank you for subscribing to our newsletter!');
            e.target.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.value-card, .team-member, .programme-card, .stat-card, .work-card, .opportunity-card');
    
    animateElements.forEach(el => {
        el.classList.add('section-animate');
        observer.observe(el);
    });
});

// Apply Now button functionality
document.querySelectorAll('.btn-apply').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const programmeCard = e.target.closest('.programme-card');
        const programmeName = programmeCard.querySelector('h3').textContent;
        alert(`Thank you for your interest in ${programmeName}! Our admissions team will contact you soon.`);
    });
});

// Get Started and Learn More button functionality
document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        if (buttonText === 'GET STARTED') {
            // Scroll to programmes section
            document.querySelector('#programmes').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (buttonText === 'LEARN MORE') {
            // Scroll to about section
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Career Guidance button functionality
const careerGuidanceBtn = document.querySelector('.btn-guidance');
if (careerGuidanceBtn) {
    careerGuidanceBtn.addEventListener('click', () => {
        alert('Our career advisors will be in touch with you soon! Please check your email for scheduling options.');
    });
}

// Opportunity card button functionality
document.querySelectorAll('.opportunity-card .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        const messages = {
            'View Openings': 'Redirecting to our careers page...',
            'Become a Partner': 'Thank you for your interest in partnering with CAPACITI! Our team will contact you soon.',
            'Get Involved': 'Thank you for your interest in volunteering! We will be in touch with opportunities that match your skills.'
        };
        
        alert(messages[buttonText] || 'Thank you for your interest!');
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Smooth reveal animation for hero section
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateX(0)';
    }, 300);
});

// Add CSS for initial hero animation
const style = document.createElement('style');
style.textContent = `
    .hero-content, .hero-image {
        opacity: 0;
        transition: all 0.8s ease;
    }
    
    .hero-content {
        transform: translateY(30px);
    }
    
    .hero-image {
        transform: translateX(30px);
    }
    
    .nav-link.active {
        color: var(--purple);
        position: relative;
    }
    
    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--purple);
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);
