// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});


const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.testimonial-nav .prev');
const nextBtn = document.querySelector('.testimonial-nav .next');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    testimonials[index].classList.add('active');
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = testimonials.length - 1;
        }
        showTestimonial(currentIndex);
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= testimonials.length) {
            currentIndex = 0;
        }
        showTestimonial(currentIndex);
    });
}

if (testimonials && testimonials.length > 0) {

    // Auto rotate testimonials
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= testimonials.length) {
            currentIndex = 0;
        }
        showTestimonial(currentIndex);
    }, 5000);
    showTestimonial(currentIndex);
}


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});



// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');

        header.addEventListener('click', () => {
            // If it's already active, just collapse it
            if (accordion.classList.contains('active')) {
                accordion.classList.remove('active');
            } else {
                // Collapse all other accordions
                accordions.forEach(acc => {
                    acc.classList.remove('active');
                });

                // Expand the clicked one
                accordion.classList.add('active');
                const content = accordion.querySelector('.accordion-content');
            }
        });

        // If already active on load, expand it
        if (accordion.classList.contains('active')) {
            const content = accordion.querySelector('.accordion-content');
        }
    });
});
