AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.main-nav-links');
    navLinks.classList.toggle('active');
}

const mainNav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.main-nav-links a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainNav.style.background = 'rgba(0, 0, 0, 0.95)';
        mainNav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        mainNav.style.background = 'rgba(0, 0, 0, 0.9)';
        mainNav.style.boxShadow = 'none';
    }
});

function togglebtn() {
    const navLinks = document.querySelector('.main-nav-links');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.main-nav-links');
    const menuButton = document.querySelector('.fa-bars');
    
    if (!navLinks.contains(e.target) && !menuButton.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu after clicking
            const navLinks = document.querySelector('.main-nav-links');
            navLinks.classList.remove('active');
        }
    });
});


// Dropdown Functionality
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.mn-dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const content = dropdown.querySelector('.mn-dropdown-content');

        link.addEventListener('click', (e) => {
            e.preventDefault();

            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.querySelector('.mn-dropdown-content')?.classList.remove('active');
                }
            });

            content?.classList.toggle('active');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mn-dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.mn-dropdown-content')?.classList.remove('active');
            });
        }
    });
});

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const submitButton = this.querySelector('.submit-btn');

    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    // Simulate form submission
    setTimeout(() => {
        // Reset form and button
        this.reset();
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send Message';

        // Show success message (you could replace this with actual notification system)
        showNotification('Message sent successfully!', 'success');
    }, 1500);
});

// Add notification styles
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 5px;
        background: var(--dark-color);
        color: var(--light-color);
        display: flex;
        align-items: center;
        gap: 10px;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    
    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .notification.success {
        border-left: 4px solid var(--accent-color);
    }
    
    .notification.error {
        border-left: 4px solid #ff4444;
    }
    
    .notification i {
        font-size: 1.2rem;
    }
    
    .notification.success i {
        color: var(--accent-color);
    }
    
    .notification.error i {
        color: #ff4444;
    }
`;
document.head.appendChild(style);
