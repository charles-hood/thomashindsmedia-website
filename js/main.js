/**
 * Thomas Hinds Media - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    }

    // Header scroll effect
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    const handleScroll = () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for sophisticated scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.15
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered delay based on element index within its parent
                const parent = entry.target.parentElement;
                const siblings = parent ? Array.from(parent.children).filter(
                    child => child.classList.contains('animate-on-scroll')
                ) : [];
                const index = siblings.indexOf(entry.target);
                const delay = index * 0.1; // 100ms stagger

                entry.target.style.transitionDelay = `${delay}s`;
                entry.target.classList.add('revealed');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe elements for animation with staggered reveals
    const animatedElements = document.querySelectorAll(
        '.album-card, .tour-item, .epk-card, .quote-card, .video-card, .stat'
    );

    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Section title animations
    const sectionTitles = document.querySelectorAll('.section-title, .section-intro');
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('title-revealed');
            }
        });
    }, { threshold: 0.2, rootMargin: '-30px' });

    sectionTitles.forEach(el => {
        el.classList.add('animate-title');
        titleObserver.observe(el);
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    const highlightNav = () => {
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });

    // Contact form handling (basic client-side)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            // Here you would typically send to a backend or service
            // For now, construct mailto link as fallback
            const subject = encodeURIComponent(`[${data.subject}] Contact from ${data.name}`);
            const body = encodeURIComponent(
                `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`
            );

            window.location.href = `mailto:thomashindsschedule@gmail.com?subject=${subject}&body=${body}`;

            // Optional: Show success message
            // alert('Redirecting to email client...');
        });
    }

    // Newsletter form - handled by MailerLite, no JS override needed

    // Lazy loading for images (native + fallback)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Parallax effect for hero (subtle)
    const hero = document.querySelector('.hero');
    if (hero && window.matchMedia('(min-width: 768px)').matches) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
            }
        }, { passive: true });
    }

    // Year in copyright
    const yearEl = document.querySelector('.footer-bottom p');
    if (yearEl) {
        const currentYear = new Date().getFullYear();
        yearEl.innerHTML = yearEl.innerHTML.replace('2025', currentYear);
    }

    // Gallery Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox?.querySelector('.lightbox-img');
    const lightboxClose = lightbox?.querySelector('.lightbox-close');
    const lightboxPrev = lightbox?.querySelector('.lightbox-prev');
    const lightboxNext = lightbox?.querySelector('.lightbox-next');
    const galleryTrigger = document.getElementById('gallery-trigger');

    // Gallery images array
    const galleryImages = [
        { src: 'images/gallery/honky-tonk.jpg', alt: 'Thomas Hinds honky-tonk performance' },
        { src: 'images/gallery/brick-wall-bw.jpg', alt: 'Thomas Hinds leaning against brick wall' },
        { src: 'images/gallery/th-stage.jpg', alt: 'Thomas Hinds on stage with logo' },
        { src: 'images/gallery/seated-bw.jpg', alt: 'Thomas Hinds seated with guitar' },
        { src: 'images/gallery/purple-closeup.jpg', alt: 'Thomas Hinds purple stage lighting' },
        { src: 'images/gallery/cowboy-bw.jpg', alt: 'Thomas Hinds black and white with cowboy hat' },
        { src: 'images/gallery/downshift.jpg', alt: 'Thomas Hinds at Downshift Brewing' },
        { src: 'images/gallery/singing-bw.jpg', alt: 'Thomas Hinds singing close-up' },
        { src: 'images/gallery/christmas-moody.jpg', alt: 'Thomas Hinds moody performance' },
        { src: 'images/gallery/desert-spot.jpg', alt: 'Thomas Hinds at Desert 5 Spot' },
        { src: 'images/gallery/white-hat.jpg', alt: 'Thomas Hinds profile with white hat' },
        { src: 'images/gallery/psychedelic.jpg', alt: 'Thomas Hinds artistic portrait' },
        { src: 'images/gallery/purple-vest.jpg', alt: 'Thomas Hinds purple stage with vest' }
    ];

    let currentIndex = 0;

    const openLightbox = (index) => {
        currentIndex = index;
        lightboxImg.src = galleryImages[index].src;
        lightboxImg.alt = galleryImages[index].alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentIndex].src;
        lightboxImg.alt = galleryImages[currentIndex].alt;
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentIndex].src;
        lightboxImg.alt = galleryImages[currentIndex].alt;
    };

    if (lightbox && galleryTrigger) {
        galleryTrigger.addEventListener('click', () => openLightbox(0));

        lightboxClose?.addEventListener('click', closeLightbox);
        lightboxPrev?.addEventListener('click', showPrev);
        lightboxNext?.addEventListener('click', showNext);

        // Close on background click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        });
    }
});

// Prevent body scroll when mobile nav is open
document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
});
