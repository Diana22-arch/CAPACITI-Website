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

//Form script for contact form
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert("Thank you — we'll be in touch soon!");
        contactForm.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          alert('Error: ' + data.errors.map(e => e.message).join(', '));
        } else {
          alert('Oops! Something went wrong sending your message.');
        }
      }
    } catch (err) {
      alert('Oops! Something went wrong sending your message.');
    } finally {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  });
});


// JavaScript for CapacitiHub


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

// Hero Slideshow Functionality
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const heroSlider = document.getElementById('hero-slider');
    
    let currentSlide = 0;
    let slideInterval;
    let isTransitioning = false;

    // Initialize first slide
    if (slides.length > 0) {
        slides[0].classList.add('active');
        if (indicators.length > 0) {
            indicators[0].classList.add('active');
        }
    }

    // Function to show specific slide
    function showSlide(index) {
        if (isTransitioning || index === currentSlide) return;
        
        isTransitioning = true;
        
        // Remove active class from current slide and indicator
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to new slide and indicator
        slides[index].classList.add('active');
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
        currentSlide = index;
        
        // Reset transition flag after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, 800);
    }

    // Function to go to next slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Function to go to previous slide
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    // Auto-advance slides
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Stop slideshow
    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    // Event listeners for navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopSlideshow();
            nextSlide();
            startSlideshow();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopSlideshow();
            prevSlide();
            startSlideshow();
        });
    }

    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopSlideshow();
            showSlide(index);
            startSlideshow();
        });
    });

    // Pause slideshow on hover
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', stopSlideshow);
        heroSlider.addEventListener('mouseleave', startSlideshow);
    }

    // Start the slideshow
    startSlideshow();

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            stopSlideshow();
            prevSlide();
            startSlideshow();
        } else if (e.key === 'ArrowRight') {
            stopSlideshow();
            nextSlide();
            startSlideshow();
        }
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    if (heroSlider) {
        heroSlider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        heroSlider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            stopSlideshow();
            if (diff > 0) {
                nextSlide(); // Swipe left - next slide
            } else {
                prevSlide(); // Swipe right - previous slide
            }
            startSlideshow();
        }
    }

    // Update button text based on current slide
    function updateButtonText() {
        const buttons = document.querySelectorAll('.hero-buttons .btn');
        
        // Define button text for each slide
        const slideButtons = [
            ['GET STARTED', 'LEARN MORE'],
            ['VIEW PROGRAMMES', 'OUR IMPACT'],
            ['JOIN US', 'PARTNERSHIPS'],
            ['APPLY NOW', 'SUCCESS STORIES']
        ];

        if (buttons.length >= 2 && slideButtons[currentSlide]) {
            buttons[0].textContent = slideButtons[currentSlide][0];
            buttons[1].textContent = slideButtons[currentSlide][1];
        }
    }

    // Update button text when slide changes
    const originalShowSlide = showSlide;
    showSlide = function(index) {
        originalShowSlide(index);
        updateButtonText();
    };

    // Initialize button text
    updateButtonText();
});

// Chatbot for CAPACITI
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
    let response = "Sorry, I'm not sure how to answer that. Try asking something else about CAPACITI.";

    if (msg.includes("what is capaciti") || msg.includes("about capaciti")) {
      response = "CAPACITI is a skills development programme by the Cape Innovation and Technology Initiative (CiTi) that prepares young South Africans for careers in the digital and tech industries.";
    } else if (msg.includes("who can apply") || msg.includes("requirements") || msg.includes("eligibility")) {
      response = "CAPACITI is open to South African youth who are passionate about technology, especially those with qualifications in ICT, Computer Science, or related fields. Some programmes may require a degree or diploma.";
    } else if (msg.includes("how to apply") || msg.includes("application process")) {
      response = "You can apply by visiting CAPACITI's official website and submitting an online application. Follow them on social media for updates on application openings.";
    } else if (msg.includes("cost") || msg.includes("free") || msg.includes("pay")) {
      response = "CAPACITI programmes are free to participants. In fact, successful candidates often receive a stipend to assist with travel and meals.";
    } else if (msg.includes("duration") || msg.includes("how long") || msg.includes("length")) {
      response = "The duration depends on the specific programme. Most CAPACITI training programmes run for 6 to 12 months.";
    } else if (msg.includes("location") || msg.includes("where")) {
      response = "CAPACITI operates in multiple regions including Cape Town and Johannesburg. Some programmes are remote or hybrid.";
    } else if (msg.includes("contact") || msg.includes("get in touch")) {
      response = "You can contact CAPACITI through the CiTi website: www.citi.org.za, or email info@capaciti.org.za.";
    } else if (msg.includes("programmes") || msg.includes("how to apply")) {
      response = "You can apply for multiple CAPACITI programmes while awaiting outcomes. We recommend that you align your choices with your career goals. If you advance to screening in more than one programme, we offer career counseling for your optimal career growth.";
    }

    setTimeout(() => appendMessage("bot", response), 500);
  }
});

// Blog section functionality
document.addEventListener('DOMContentLoaded', () => {
    // Blog read more functionality
    document.querySelectorAll('.blog-read-more').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const blogTitle = e.target.closest('.blog-card').querySelector('.blog-title').textContent;
            alert(`Opening blog post: "${blogTitle}"`);
        });
    });

    // View all posts button
    const viewAllPostsBtn = document.querySelector('.blog-cta .btn');
    if (viewAllPostsBtn) {
        viewAllPostsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Redirecting to full blog page...');
        });
    }

    // Event registration functionality
    document.querySelectorAll('.event-register').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const eventTitle = e.target.closest('.event-card').querySelector('.event-title').textContent;
            alert(`Registration form for "${eventTitle}" will open soon!`);
        });
    });

    // Press links functionality
    document.querySelectorAll('.press-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const linkText = e.target.querySelector('span').textContent;
            alert(`Opening ${linkText} section...`);
        });
    });

    // News card click functionality
    document.querySelectorAll('.news-card').forEach(card => {
        card.addEventListener('click', () => {
            const newsTitle = card.querySelector('.news-title').textContent;
            alert(`Opening news article: "${newsTitle}"`);
        });
        
        // Add cursor pointer style
        card.style.cursor = 'pointer';
    });

    // Blog card click functionality
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', () => {
            const blogTitle = card.querySelector('.blog-title').textContent;
            alert(`Opening blog post: "${blogTitle}"`);
        });
        
        // Add cursor pointer style
        card.style.cursor = 'pointer';
    });
});

