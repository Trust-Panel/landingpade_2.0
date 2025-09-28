// ===== VARIABLES =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.getElementById('header');
const sections = document.querySelectorAll('section[id]');

// Slider variables
const sliderWrapper = document.getElementById('slider-wrapper');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
const totalSlides = indicators.length;

// Form variables
const contactForm = document.getElementById('contact-form');

// ===== MOBILE MENU =====
// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        document.body.style.overflow = 'hidden';
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = 'auto';
    });
}

// Remove menu mobile when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = 'auto';
    });
});

// ===== HEADER SCROLL EFFECT =====
function scrollHeader() {
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

// ===== ACTIVE LINK HIGHLIGHT =====
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass?.classList.add('active-link');
        } else {
            sectionsClass?.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// ===== SMOOTH SCROLLING =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== SLIDER FUNCTIONALITY =====
function updateSlider() {
    const translateX = -currentSlide * 100;
    sliderWrapper.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Slider navigation buttons
if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
}

if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
}

// Slider indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

// Auto-play slider
let sliderInterval = setInterval(nextSlide, 5000);

// Pause auto-play on hover
const sliderContainer = document.querySelector('.interface__slider');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(sliderInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        sliderInterval = setInterval(nextSlide, 5000);
    });
}

// Keyboard navigation for slider
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// ===== FORM HANDLING =====
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Add loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Show success message
            showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification__close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--color-primary)' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius-lg);
        box-shadow: var(--shadow-lg);
        z-index: var(--z-tooltip);
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== SCROLL ANIMATIONS =====
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('aos-animate');
        }
    });
}

// Add CSS for scroll animations
const style = document.createElement('style');
style.textContent = `
    [data-aos] {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    [data-aos].aos-animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification__content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }
    
    .notification__close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 50%;
        transition: background-color 0.2s;
    }
    
    .notification__close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(style);

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ===== PRICING CARD INTERACTIONS =====
const pricingCards = document.querySelectorAll('.pricing__card');

pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Add pulse animation to featured card
        if (card.classList.contains('pricing__card--featured')) {
            card.style.animation = 'pulse 0.6s ease-in-out';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.animation = '';
    });
});

// ===== FEATURE CARDS STAGGER ANIMATION =====
function staggerFeatureCards() {
    const featureCards = document.querySelectorAll('.feature__card');
    
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// ===== TESTIMONIAL CAROUSEL (Optional Enhancement) =====
function initTestimonialCarousel() {
    const testimonialCards = document.querySelectorAll('.testimonial__card');
    let currentTestimonial = 0;
    
    // Add navigation dots for testimonials on mobile
    if (window.innerWidth <= 768 && testimonialCards.length > 1) {
        const testimonialSection = document.querySelector('.testimonials');
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'testimonial-dots';
        dotsContainer.style.cssText = `
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 2rem;
        `;
        
        testimonialCards.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
            dot.style.cssText = `
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: ${index === 0 ? 'var(--color-primary)' : 'rgba(22, 198, 79, 0.3)'};
                cursor: pointer;
                transition: all 0.3s;
            `;
            
            dot.addEventListener('click', () => {
                // Update active dot
                document.querySelectorAll('.testimonial-dot').forEach(d => {
                    d.style.background = 'rgba(22, 198, 79, 0.3)';
                });
                dot.style.background = 'var(--color-primary)';
                
                // Scroll to testimonial
                testimonialCards[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            });
            
            dotsContainer.appendChild(dot);
        });
        
        testimonialSection.appendChild(dotsContainer);
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.removeEventListener('scroll', scrollHeader);
window.removeEventListener('scroll', scrollActive);
window.removeEventListener('scroll', animateOnScroll);

window.addEventListener('scroll', throttle(scrollHeader, 10));
window.addEventListener('scroll', throttle(scrollActive, 10));
window.addEventListener('scroll', throttle(animateOnScroll, 50));

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = 'auto';
        navToggle.focus();
    }
});

// Focus management for mobile menu
navToggle?.addEventListener('click', () => {
    setTimeout(() => {
        const firstLink = navMenu.querySelector('.nav__link');
        firstLink?.focus();
    }, 100);
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    staggerFeatureCards();
    initTestimonialCarousel();
    animateOnScroll();
    
    // Add loading complete class to body
    document.body.classList.add('loaded');
    
    console.log('🚀 TrustPanel Landing Page initialized successfully!');
});

// ===== UTILITY FUNCTIONS =====
// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scroll to element
function scrollToElement(element, offset = 70) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// ===== ANALYTICS TRACKING (Optional) =====
function trackEvent(eventName, properties = {}) {
    // Replace with your analytics service
    console.log('Event tracked:', eventName, properties);
    
    // Example: Google Analytics 4
    // gtag('event', eventName, properties);
    
    // Example: Facebook Pixel
    // fbq('track', eventName, properties);
}

// Track button clicks
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        const buttonText = e.target.textContent.trim();
        const buttonType = e.target.className;
        
        trackEvent('button_click', {
            button_text: buttonText,
            button_type: buttonType,
            page_section: e.target.closest('section')?.id || 'unknown'
        });
    }
});

// Track form submissions
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        trackEvent('form_submit', {
            form_type: 'contact',
            page_url: window.location.href
        });
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // You could send this to an error tracking service
});

// ===== RESPONSIVE UTILITIES =====
function handleResize() {
    // Reinitialize components that need responsive handling
    initTestimonialCarousel();
    
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768 && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = 'auto';
    }
}

window.addEventListener('resize', debounce(handleResize, 250));

// ===== PRELOADER (Optional) =====
function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
}

// Hide preloader when page is fully loaded
window.addEventListener('load', hidePreloader);
