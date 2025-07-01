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

document.querySelectorAll('.opportunity-card .btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const buttonText = e.target.textContent.trim();
    const messages = {
      'View Openings': 'Redirecting to our news & insights page...',
      'Become a Partner': 'Thank you for your interest in partnering with CAPACITI! Redirecting now...',
      'Get Involved': 'Thank you for your interest in getting involved! Redirecting now...'
    };

    alert(messages[buttonText] || 'Thank you for your interest!');

    if (buttonText === 'View Openings') {
      setTimeout(() => {
        window.location.href = 'https://uvuafrica.com/news-insights/';
      }, 1000);
    }

    if (buttonText === 'Become a Partner') {
      setTimeout(() => {
        window.location.href = 'https://uvuafrica.com/capaciti/';
      }, 1000);
    }

    if (buttonText === 'Get Involved') {
      setTimeout(() => {
        window.location.href = 'https://uvuafrica.com/capaciti/';
      }, 1000);
    }
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

let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Run the slideshow once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    showSlides();
});

// chatbot for CAPACITI
document.addEventListener("DOMContentLoaded", () => {
  const chatIcon = document.getElementById("chat-icon");
  const chatBox = document.getElementById("chat-box");
  const closeChat = document.getElementById("close-chat");
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");
  const chatContent = document.getElementById("chat-content");

  chatIcon.addEventListener("click", () => {
    chatBox.classList.remove("hidden");
    chatIcon.style.display = "none";
  });

  closeChat.addEventListener("click", () => {
    chatBox.classList.add("hidden");
    chatIcon.style.display = "block";
  });

  sendBtn.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const input = chatInput.value.trim();
    if (input === "") return;

    appendMessage("user", input);
    respond(input);
    chatInput.value = "";
  }

  function appendMessage(type, text) {
    const msg = document.createElement("div");
    msg.className = type === "user" ? "user-message" : "bot-message";
    msg.textContent = text;
    chatContent.appendChild(msg);
    chatContent.scrollTop = chatContent.scrollHeight;
  }

  function respond(input) {
    const msg = input.toLowerCase();
    let response = "Sorry, I’m not sure how to answer that. Try asking something else about CAPACITI.";

    if (msg.includes("what is capaciti") || msg.includes("about capaciti")) {
      response = "CAPACITI is a skills development programme by the Cape Innovation and Technology Initiative (CiTi) that prepares young South Africans for careers in the digital and tech industries.";
    } else if (msg.includes("who can apply") || msg.includes("requirements") || msg.includes("eligibility")) {
      response = "CAPACITI is open to South African youth who are passionate about technology, especially those with qualifications in ICT, Computer Science, or related fields. Some programmes may require a degree or diploma.";
    } else if (msg.includes("how to apply") || msg.includes("application process")) {
      response = "You can apply by visiting CAPACITI’s official website and submitting an online application. Follow them on social media for updates on application openings.";
    } else if (msg.includes("cost") || msg.includes("free") || msg.includes("pay")) {
      response = "CAPACITI programmes are free to participants. In fact, successful candidates often receive a stipend to assist with travel and meals.";
    } else if (msg.includes("duration") || msg.includes("how long") || msg.includes("length")) {
      response = "The duration depends on the specific programme. Most CAPACITI training programmes run for 6 to 12 months.";
    } else if (msg.includes("location") || msg.includes("where")) {
      response = "CAPACITI operates in multiple regions including Cape Town and Johannesburg. Some programmes are remote or hybrid.";
    } else if (msg.includes("contact") || msg.includes("get in touch")) {
      response = "You can contact CAPACITI through the CiTi website: www.citi.org.za, or email info@capaciti.org.za.";
    }

    setTimeout(() => appendMessage("bot", response), 500);
  }
});
// End of CAPACITI chatbot code

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) =>
      slide.classList.toggle("active", i === index)
    );
  }

  function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  console.log("Switching to slide:", currentSlide);
  showSlide(currentSlide);
  }

  // Auto-switch every 6 seconds
  setInterval(nextSlide, 6000);
});
