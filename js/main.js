// Main JavaScript functionality

class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupThemeToggle();
        this.setupNavigation();
        this.setupSmoothScrolling();
        this.setupTestimonialSlider();
        this.setupContactForm();
        this.setupScrollAnimations();
        this.setupActiveNavigation();
    }

    // Theme Toggle Functionality
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const icon = themeToggle.querySelector('i');

        // Check for saved theme preference or default to light mode
        const currentTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', currentTheme);
        this.updateThemeIcon(currentTheme, icon);

        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            this.updateThemeIcon(newTheme, icon);

            // Add a small animation
            themeToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                themeToggle.style.transform = 'scale(1)';
            }, 150);
        });
    }

    updateThemeIcon(theme, icon) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Mobile Navigation Toggle
    setupNavigation() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Smooth Scrolling for Navigation Links
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Testimonial Slider
    setupTestimonialSlider() {
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        const navDots = document.querySelectorAll('.nav-dot');
        let currentSlide = 0;

        function showSlide(index) {
            // Hide all testimonial items
            testimonialItems.forEach(item => {
                item.classList.remove('active');
            });

            // Remove active class from all nav dots
            navDots.forEach(dot => {
                dot.classList.remove('active');
            });

            // Show current testimonial item
            testimonialItems[index].classList.add('active');
            navDots[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % testimonialItems.length;
            showSlide(currentSlide);
        }

        // Auto-play testimonial slider
        setInterval(nextSlide, 5000);

        // Manual navigation
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
    }

    // Contact Form Handling
    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData);
            
            // Simple form validation
            if (this.validateForm(formObject)) {
                this.submitForm(formObject);
            }
        });
    }

    validateForm(data) {
        const { name, email, subject, message } = data;
        
        // Basic validation
        if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            this.showNotification('Mohon isi semua field yang diperlukan!', 'error');
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showNotification('Mohon masukkan email yang valid!', 'error');
            return false;
        }

        return true;
    }

    submitForm(data) {
        // Simulate form submission
        const submitBtn = document.querySelector('#contact-form button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Mengirim...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // Reset form
            document.getElementById('contact-form').reset();
            
            // Show success message
            this.showNotification('Pesan berhasil dikirim! Saya akan segera menghubungi Anda.', 'success');
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '10px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            maxWidth: '300px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });

        // Set background color based on type
        if (type === 'success') {
            notification.style.backgroundColor = '#10b981';
        } else if (type === 'error') {
            notification.style.backgroundColor = '#ef4444';
        }

        // Add to DOM
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // Scroll Animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.skill-item, .portfolio-item, .timeline-item, .contact-item');
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Active Navigation Link
    setupActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const updateActiveLink = () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink(); // Initial call
    }
}

// Typing Animation for Home Section
class TypingAnimation {
    constructor(element, words, speed = 100) {
        this.element = element;
        this.words = words;
        this.speed = speed;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const currentWord = this.words[this.wordIndex];
        const currentChar = currentWord.substring(0, this.charIndex);
        
        this.element.textContent = currentChar;

        if (!this.isDeleting && this.charIndex < currentWord.length) {
            // Typing forward
            this.charIndex++;
            setTimeout(() => this.type(), this.speed);
        } else if (this.isDeleting && this.charIndex > 0) {
            // Deleting
            this.charIndex--;
            setTimeout(() => this.type(), this.speed / 2);
        } else if (!this.isDeleting && this.charIndex === currentWord.length) {
            // Word complete, pause before deleting
            setTimeout(() => {
                this.isDeleting = true;
                this.type();
            }, 2000);
        } else if (this.isDeleting && this.charIndex === 0) {
            // Word deleted, move to next word
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
            setTimeout(() => this.type(), 500);
        }
    }
}

// Initialize the portfolio app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
    
    // Add typing animation to the title if you want
    const titleElement = document.querySelector('.home-title .title');
    if (titleElement) {
        // You can add typing animation here if desired
        // new TypingAnimation(titleElement, ['Developer', 'Mahasiswa', 'Problem Solver']);
    }
});

// Add some utility functions
const Utils = {
    // Debounce function for scroll events
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Get current year for footer
    getCurrentYear() {
        return new Date().getFullYear();
    }
};

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add pulse effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'pulse 2s infinite';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.animation = 'none';
        });
    });
});

// Add CSS animations keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
        }
        40%, 43% {
            transform: translate3d(0, -8px, 0);
        }
        70% {
            transform: translate3d(0, -4px, 0);
        }
        90% {
            transform: translate3d(0, -2px, 0);
        }
    }
    
    .bounce {
        animation: bounce 0.6s;
    }
`;
document.head.appendChild(style);

