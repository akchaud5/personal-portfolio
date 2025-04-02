document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Toggle the nav menu
    function toggleNav() {
        // Toggle nav
        nav.classList.toggle('nav-active');
        
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger animation
        burger.classList.toggle('toggle');
    }
    
    burger.addEventListener('click', toggleNav);
    
    // Close mobile nav when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                toggleNav();
            }
        });
    });
    
    // Scroll to top when page refreshes
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
    
    // Navbar scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 10) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Show loading indicator
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS service
            emailjs.send('default_service', 'template_contact', {
                from_name: formData.name,
                reply_to: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'Ayushkumar.chaudhary2003@gmail.com'
            })
            .then(function() {
                console.log('Email sent successfully');
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            })
            .catch(function(error) {
                console.error('Email send failed:', error);
                alert('Sorry, there was an error sending your message. Please try again or contact me directly at Ayushkumar.chaudhary2003@gmail.com');
            })
            .finally(function() {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
});

// Display a message if image can't be loaded
document.getElementById('profile-image').addEventListener('error', function() {
    this.src = 'assets/default-profile.jpg';
    console.log('Profile image could not be loaded. Using default image.');
});