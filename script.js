// ==================== //
// KNN Particle Animation (Hero Section)
// ==================== //
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const particles = [];
const particleCount = 100;
const maxDistance = 150;

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                const opacity = 1 - distance / maxDistance;
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

let mouseX = 0;
let mouseY = 0;

canvas.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        // Mouse interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            particle.x -= dx * 0.01;
            particle.y -= dy * 0.01;
        }

        particle.update();
        particle.draw();
    });

    connectParticles();
    requestAnimationFrame(animateParticles);
}

animateParticles();

// ==================== //
// Toggle Skill Category (Collapsible)
// ==================== //
function toggleSkillCategory(header) {
    const skillCategory = header.closest('.skill-category');
    const skillContent = skillCategory.querySelector('.skill-content');
    
    // Toggle active class
    skillContent.classList.toggle('active');
    skillCategory.classList.toggle('collapsed');
}

// ==================== //
// Navigation Menu Toggle
// ==================== //
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== //
// Active Navigation Link
// ==================== //
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== //
// Navbar Background on Scroll
// ==================== //
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== //
// Scroll Reveal Animation
// ==================== //
function reveal() {
    const reveals = document.querySelectorAll('.skill-category, .project-card, .cert-card, .timeline-item');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('reveal');
            setTimeout(() => {
                element.classList.add('active');
            }, 100);
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Call once on load

// ==================== //
// Contact Form Handling
// ==================== //
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:akashyadav.aiml@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! Your email client will open to send the message.');
    
    // Reset form
    contactForm.reset();
});

// ==================== //
// Smooth Scroll for All Links
// ==================== //
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

// ==================== //
// Typing Effect for Hero Section
// ==================== //
const heroSubtitle = document.querySelector('.hero-subtitle');
const text = heroSubtitle.textContent;
heroSubtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        heroSubtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// ==================== //
// Dynamic Year in Footer
// ==================== //
const year = new Date().getFullYear();
const footerYear = document.querySelector('.footer p');
if (footerYear) {
    footerYear.textContent = footerYear.textContent.replace('2025', year);
}

// ==================== //
// Animated Counter for Achievements
// ==================== //
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ==================== //
// Interactive Skill Tags
// ==================== //
const allSkillTags = document.querySelectorAll('.tag');
allSkillTags.forEach(tag => {
    tag.addEventListener('click', () => {
        tag.style.transform = 'scale(1.1)';
        setTimeout(() => {
            tag.style.transform = 'scale(1)';
        }, 200);
    });
});

// ==================== //
// Enhanced Project Card 3D Tilt Effect
// ==================== //
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.03)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
});

// ==================== //
// 3D Skill Cards Parallax
// ==================== //
const skillCards = document.querySelectorAll('.skill-category');
skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==================== //
// Magnetic Button Effect
// ==================== //
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0) scale(1)';
    });
});

// ==================== //
// Animated Skill Tags with Ripple Effect
// ==================== //
const skillTags = document.querySelectorAll('.tag');
skillTags.forEach(tag => {
    tag.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = '10px';
        ripple.style.height = '10px';
        ripple.style.left = e.offsetX + 'px';
        ripple.style.top = e.offsetY + 'px';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        tag.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== //
// Parallax Scroll Effect
// ==================== //
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    // Parallax for skill cards
    skillCards.forEach((card, index) => {
        const speed = (index % 2 === 0) ? 0.1 : -0.1;
        const rect = card.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.transform = `translateY(${scrolled * speed}px)`;
        }
    });
});

// ==================== //
// Floating Animation for Cube
// ==================== //
const cubeContainer = document.querySelector('.cube-container');
if (cubeContainer) {
    let isMouseOver = false;
    let autoRotation = 0;
    
    // Auto-rotation function
    function animateCube() {
        if (!isMouseOver) {
            autoRotation += 0.5;
            cubeContainer.style.transform = `rotateX(${autoRotation}deg) rotateY(${autoRotation}deg)`;
        }
        requestAnimationFrame(animateCube);
    }
    
    animateCube();
    
    // Get the parent container for better mouse tracking
    const imageContainer = document.querySelector('.about-image');
    
    if (imageContainer) {
        // Interactive cube rotation on mouse move
        imageContainer.addEventListener('mousemove', (e) => {
            isMouseOver = true;
            
            const rect = imageContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation based on mouse position
            const rotateY = ((x - centerX) / centerX) * 45; // -45 to 45 degrees
            const rotateX = ((centerY - y) / centerY) * 45; // -45 to 45 degrees
            
            cubeContainer.style.transform = `
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg)
                scale(1.1)
            `;
            cubeContainer.style.transition = 'transform 0.1s ease-out';
        });
        
        imageContainer.addEventListener('mouseleave', () => {
            isMouseOver = false;
            cubeContainer.style.transition = 'transform 1s ease';
            cubeContainer.style.transform = `rotateX(${autoRotation}deg) rotateY(${autoRotation}deg)`;
        });
    }
}

// ==================== //
// Scroll Progress Indicator
// ==================== //
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollProgress();

// ==================== //
// Loading Animation
// ==================== //
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== //
// Console Message
// ==================== //
console.log('%c👋 Hello! Welcome to my portfolio!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%c🚀 Looking for collaborations? Let\'s connect!', 'font-size: 14px; color: #8b5cf6;');
console.log('%c📧 Email: akashyadav.aiml@gmail.com', 'font-size: 12px; color: #6b7280;');
