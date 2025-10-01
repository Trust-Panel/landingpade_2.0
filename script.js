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
  const testimonialSection = document.querySelector('.testimonials');
  if (!testimonialSection) return;

  // Remove qualquer dots existente para evitar duplicação
  testimonialSection.querySelectorAll('.testimonial-dots').forEach(n => n.remove());

  // Só mostra no mobile
  if (window.innerWidth > 768) return;

  const testimonialCards = document.querySelectorAll('.testimonial__card');
  if (testimonialCards.length <= 1) return;

  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'testimonial-dots';
  dotsContainer.style.cssText = `
    display:flex; justify-content:center; gap:0.5rem; margin-top:2rem;
  `;

  testimonialCards.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
    dot.style.cssText = `
      width:12px; height:12px; border-radius:50%;
      background:${index === 0 ? 'var(--color-primary)' : 'rgba(22,198,79,0.3)'};
      cursor:pointer; transition:all .3s;
    `;
    dot.addEventListener('click', () => {
      testimonialSection.querySelectorAll('.testimonial-dot').forEach(d => {
        d.style.background = 'rgba(22, 198, 79, 0.3)';
      });
      dot.style.background = 'var(--color-primary)';
      testimonialCards[index].scrollIntoView({ behavior:'smooth', block:'nearest' });
    });
    dotsContainer.appendChild(dot);
  });

  testimonialSection.appendChild(dotsContainer);
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

// ===== REGISTRATION FORM FUNCTIONALITY =====
// Registration form variables
const registrationForm = document.getElementById('registration-form');
const progressFill = document.getElementById('progress-fill');
const progressSteps = document.querySelectorAll('.progress-step');
const formSteps = document.querySelectorAll('.form-step');

// Step navigation buttons
const nextStep1Btn = document.getElementById('next-step-1');
const prevStep2Btn = document.getElementById('prev-step-2');
const finishRegistrationBtn = document.getElementById('finish-registration');
const goToLoginBtn = document.getElementById('go-to-login');

// Password toggle buttons
const togglePasswordBtn = document.getElementById('toggle-password');
const toggleConfirmPasswordBtn = document.getElementById('toggle-confirm-password');

// Form inputs
const companyNameInput = document.getElementById('company-name');
const cnpjInput = document.getElementById('cnpj');
const companyPhoneInput = document.getElementById('company-phone');
const companyEmailInput = document.getElementById('company-email');
const adminNameInput = document.getElementById('admin-name');
const adminEmailInput = document.getElementById('admin-email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Password strength elements
const passwordStrength = document.getElementById('password-strength');
const strengthFill = passwordStrength?.querySelector('.strength-fill');
const strengthText = passwordStrength?.querySelector('.strength-text');

// Current step tracker
let currentStep = 1;
const totalSteps = 3;

// Registration data storage
let registrationData = {};

// Initialize registration form if it exists
if (registrationForm) {
    initRegistrationForm();
}

function initRegistrationForm() {
    // Add event listeners for step navigation
    if (nextStep1Btn) {
        nextStep1Btn.addEventListener('click', () => validateAndGoToStep(2));
    }
    
    if (prevStep2Btn) {
        prevStep2Btn.addEventListener('click', () => goToStep(1));
    }
    
    if (finishRegistrationBtn) {
        finishRegistrationBtn.addEventListener('click', validateAndFinishRegistration);
    }
    
    if (goToLoginBtn) {
        goToLoginBtn.addEventListener('click', () => {
            // Redirect to login page or show login modal
            showNotification('Redirecionando para a página de login...', 'info');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
    }
    
    // Password toggle functionality
    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', () => togglePasswordVisibility('password'));
    }
    
    if (toggleConfirmPasswordBtn) {
        toggleConfirmPasswordBtn.addEventListener('click', () => togglePasswordVisibility('confirm-password'));
    }
    
    // Input formatting and validation
    if (cnpjInput) {
        cnpjInput.addEventListener('input', formatCNPJ);
        cnpjInput.addEventListener('blur', () => validateField(cnpjInput));
    }
    
    if (companyPhoneInput) {
        companyPhoneInput.addEventListener('input', formatPhone);
    }
    
    if (passwordInput) {
        passwordInput.addEventListener('input', checkPasswordStrength);
    }
    
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', validatePasswordMatch);
    }
    
    // Real-time validation for all inputs
    const allInputs = [companyNameInput, cnpjInput, companyPhoneInput, companyEmailInput, 
                      adminNameInput, adminEmailInput, passwordInput, confirmPasswordInput];
    
    allInputs.forEach(input => {
        if (input) {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearFieldError(input));
        }
    });
}

// Step navigation functions
function goToStep(step) {
    if (step < 1 || step > totalSteps) return;
    
    // Update current step
    const previousStep = currentStep;
    currentStep = step;
    
    // Update progress bar
    updateProgressBar();
    
    // Update form steps visibility
    updateFormSteps(previousStep);
    
    // Update progress steps
    updateProgressSteps();
}

function validateAndGoToStep(step) {
    if (validateCurrentStep()) {
        saveCurrentStepData();
        goToStep(step);
    }
}

function updateProgressBar() {
    const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
    if (progressFill) {
        progressFill.style.width = `${progressPercentage}%`;
    }
}

function updateFormSteps(previousStep) {
    formSteps.forEach((step, index) => {
        const stepNumber = index + 1;
        
        if (stepNumber === currentStep) {
            step.classList.add('active');
            step.classList.remove('prev');
        } else if (stepNumber === previousStep) {
            step.classList.remove('active');
            step.classList.add('prev');
            setTimeout(() => {
                step.classList.remove('prev');
            }, 500);
        } else {
            step.classList.remove('active', 'prev');
        }
    });
}

function updateProgressSteps() {
    progressSteps.forEach((step, index) => {
        const stepNumber = index + 1;
        
        if (stepNumber === currentStep) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else if (stepNumber < currentStep) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
}

// Validation functions
function validateCurrentStep() {
    let isValid = true;
    
    if (currentStep === 1) {
        // Validate company data
        isValid = validateField(companyNameInput) && isValid;
        isValid = validateField(cnpjInput) && isValid;
        isValid = validateField(companyPhoneInput) && isValid;
        isValid = validateField(companyEmailInput) && isValid;
    } else if (currentStep === 2) {
        // Validate administrator data
        isValid = validateField(adminNameInput) && isValid;
        isValid = validateField(adminEmailInput) && isValid;
        isValid = validateField(passwordInput) && isValid;
        isValid = validateField(confirmPasswordInput) && isValid;
    }
    
    return isValid;
}

function validateField(input) {
    if (!input) return true;
    
    const value = input.value.trim();
    const fieldName = input.name;
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (input.hasAttribute('required') && !value) {
        errorMessage = 'Este campo é obrigatório.';
        isValid = false;
    }
    
    // Specific field validations
    if (value && isValid) {
        switch (fieldName) {
            case 'companyName':
                if (value.length < 2) {
                    errorMessage = 'Nome da empresa deve ter pelo menos 2 caracteres.';
                    isValid = false;
                }
                break;
                
            case 'cnpj':
                if (!isValidCNPJ(value)) {
                    errorMessage = 'CNPJ inválido.';
                    isValid = false;
                }
                break;
                
            case 'companyPhone':
                if (!isValidPhone(value)) {
                    errorMessage = 'Telefone inválido.';
                    isValid = false;
                }
                break;
                
            case 'companyEmail':
            case 'adminEmail':
                if (!isValidEmail(value)) {
                    errorMessage = 'E-mail inválido.';
                    isValid = false;
                }
                break;
                
            case 'adminName':
                if (value.length < 2) {
                    errorMessage = 'Nome deve ter pelo menos 2 caracteres.';
                    isValid = false;
                }
                break;
                
            case 'password':
                const passwordStrength = getPasswordStrength(value);
                if (passwordStrength.score < 2) {
                    errorMessage = 'Senha muito fraca. Use pelo menos 8 caracteres com letras e números.';
                    isValid = false;
                }
                break;
                
            case 'confirmPassword':
                if (value !== passwordInput.value) {
                    errorMessage = 'As senhas não coincidem.';
                    isValid = false;
                }
                break;
        }
    }
    
    // Show/hide error message
    showFieldError(input, errorMessage, isValid);
    
    return isValid;
}

function showFieldError(input, message, isValid) {
    const errorElement = document.getElementById(`${input.id}-error`);
    
    if (isValid) {
        input.classList.remove('error');
        input.classList.add('success');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        }
    } else {
        input.classList.remove('success');
        input.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
    }
}

function clearFieldError(input) {
    input.classList.remove('error');
    const errorElement = document.getElementById(`${input.id}-error`);
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

// Input formatting functions
function formatCNPJ(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');
    e.target.value = value;
}

function formatPhone(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = value;
}

// Validation helper functions
function isValidCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, '');
    
    if (cnpj.length !== 14) return false;
    if (/^(\d)\1+$/.test(cnpj)) return false;
    
    // CNPJ validation algorithm
    let sum = 0;
    let weight = 2;
    
    for (let i = 11; i >= 0; i--) {
        sum += parseInt(cnpj.charAt(i)) * weight;
        weight = weight === 9 ? 2 : weight + 1;
    }
    
    let digit1 = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    
    sum = 0;
    weight = 2;
    
    for (let i = 12; i >= 0; i--) {
        sum += parseInt(cnpj.charAt(i)) * weight;
        weight = weight === 9 ? 2 : weight + 1;
    }
    
    let digit2 = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    
    return parseInt(cnpj.charAt(12)) === digit1 && parseInt(cnpj.charAt(13)) === digit2;
}

function isValidPhone(phone) {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length === 10 || cleanPhone.length === 11;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Password functionality
function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const toggleBtn = document.getElementById(`toggle-${inputId}`);
    
    if (input && toggleBtn) {
        const icon = toggleBtn.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    }
}

function checkPasswordStrength(e) {
    const password = e.target.value;
    const strength = getPasswordStrength(password);
    
    if (strengthFill && strengthText) {
        strengthFill.className = `strength-fill ${strength.class}`;
        strengthText.textContent = strength.text;
    }
}

function getPasswordStrength(password) {
    let score = 0;
    let feedback = [];
    
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    const strengths = [
        { class: '', text: 'Digite uma senha' },
        { class: 'weak', text: 'Muito fraca' },
        { class: 'fair', text: 'Fraca' },
        { class: 'good', text: 'Boa' },
        { class: 'strong', text: 'Forte' },
        { class: 'strong', text: 'Muito forte' }
    ];
    
    return { score, ...strengths[score] };
}

function validatePasswordMatch() {
    if (confirmPasswordInput && passwordInput) {
        const isMatch = confirmPasswordInput.value === passwordInput.value;
        const errorElement = document.getElementById('confirm-password-error');
        
        if (confirmPasswordInput.value && !isMatch) {
            confirmPasswordInput.classList.add('error');
            if (errorElement) {
                errorElement.textContent = 'As senhas não coincidem.';
                errorElement.classList.add('show');
            }
        } else {
            confirmPasswordInput.classList.remove('error');
            if (confirmPasswordInput.value) {
                confirmPasswordInput.classList.add('success');
            }
            if (errorElement) {
                errorElement.classList.remove('show');
            }
        }
    }
}

// Data management
function saveCurrentStepData() {
    if (currentStep === 1) {
        registrationData.companyName = companyNameInput?.value || '';
        registrationData.cnpj = cnpjInput?.value || '';
        registrationData.companyPhone = companyPhoneInput?.value || '';
        registrationData.companyEmail = companyEmailInput?.value || '';
    } else if (currentStep === 2) {
        registrationData.adminName = adminNameInput?.value || '';
        registrationData.adminEmail = adminEmailInput?.value || '';
        registrationData.password = passwordInput?.value || '';
    }
}

function validateAndFinishRegistration() {
    if (validateCurrentStep()) {
        saveCurrentStepData();
        finishRegistration();
    }
}

function finishRegistration() {
    // Show loading state
    if (finishRegistrationBtn) {
        const originalText = finishRegistrationBtn.innerHTML;
        finishRegistrationBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
        finishRegistrationBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Populate confirmation data
            populateConfirmationData();
            
            // Go to confirmation step
            goToStep(3);
            
            // Reset button (in case user goes back)
            finishRegistrationBtn.innerHTML = originalText;
            finishRegistrationBtn.disabled = false;
            
            // Show success notification
            showNotification('Cadastro realizado com sucesso!', 'success');
        }, 2000);
    }
}

function populateConfirmationData() {
    // Company data
    const summaryCompanyName = document.getElementById('summary-company-name');
    const summaryCnpj = document.getElementById('summary-cnpj');
    const summaryPhone = document.getElementById('summary-phone');
    const summaryCompanyEmail = document.getElementById('summary-company-email');
    
    // Admin data
    const summaryAdminName = document.getElementById('summary-admin-name');
    const summaryAdminEmail = document.getElementById('summary-admin-email');
    
    if (summaryCompanyName) summaryCompanyName.textContent = registrationData.companyName;
    if (summaryCnpj) summaryCnpj.textContent = registrationData.cnpj;
    if (summaryPhone) summaryPhone.textContent = registrationData.companyPhone;
    if (summaryCompanyEmail) summaryCompanyEmail.textContent = registrationData.companyEmail;
    if (summaryAdminName) summaryAdminName.textContent = registrationData.adminName;
    if (summaryAdminEmail) summaryAdminEmail.textContent = registrationData.adminEmail;
}

// ===== RESPONSIVE UTILITIES =====
function handleResize() {
    // Reinitialize components that need responsive handling
    initTestimonialCarousel();
    
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('show-menu')) {
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
