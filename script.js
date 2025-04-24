// Splash Screen Handler
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');
    
    // Simulate loading time (you can remove this setTimeout if you want to wait for actual content to load)
    setTimeout(() => {
        document.body.classList.add('loaded');
        
        // Add fade out animation
        splashScreen.style.opacity = '0';
        splashScreen.style.visibility = 'hidden';
        
        // Remove splash screen after animation
        setTimeout(() => {
            splashScreen.remove();
        }, 500);
    }, 2500); // Adjust this time as needed (currently set to 2.5 seconds)
});

// Preload images and assets
window.addEventListener('load', () => {
    // Your existing load event handlers
});

// Custom Cursor
document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-dot-outline');

    // Show cursors when mouse moves
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorDot.style.opacity = '1';

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
        cursorOutline.style.opacity = '1';
    });

    // Hide cursors when mouse leaves window
    window.addEventListener('mouseout', () => {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#4458dc'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#854fee',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            outMode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detectOn: 'canvas',
        events: {
            onHover: {
                enable: true,
                mode: 'grab'
            },
            onClick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Typing Effect
const typed = new Typed('.typed-text', {
    strings: [
        'Android Development',
        'Web Development',
        'QA Testing',
        'Problem Solving'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Here you would typically send the form data to a server
    console.log('Form submitted:', formObject);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Scroll Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .glass-card').forEach(element => {
    element.classList.add('fade-out');
    observer.observe(element);
});

// Add scroll-based navbar background opacity
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 25, 47, 0.9)';
    } else {
        nav.style.background = 'rgba(10, 25, 47, 0.7)';
    }
});

// Add animation class to elements when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.glass-card, .section-title');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const animateOnScroll = () => {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});

// Theme Toggle Function
function toggle_light_mode() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Set initial theme based on user's preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const darkToggler = document.getElementById('dark_toggler');
    
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        darkToggler.checked = false;
    } else {
        document.documentElement.removeAttribute('data-theme');
        darkToggler.checked = true;
    }
});

// Certificate Image Modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

function openModal(imgSrc) {
    modal.style.display = 'block';
    modalImg.src = imgSrc;
    
    // Add show class after a small delay to trigger animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Disable scroll on body
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    
    // Wait for animation to finish before hiding
    setTimeout(() => {
        modal.style.display = 'none';
        modalImg.src = '';
    }, 300);
    
    // Re-enable scroll on body
    document.body.style.overflow = '';
}

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on ESC key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Certificate Download Function
function downloadCertificate(imageUrl, fileName) {
    // Prevent modal from opening
    event.stopPropagation();
    
    // Create a temporary link
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
} 