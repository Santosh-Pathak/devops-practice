// Typewriter effect for hero title
class TypeWriter {
    constructor(textElement, options = {}) {
        this.textElement = textElement;
        this.fullText = 'Santosh Pathak';
        this.currentIndex = 0;
        this.isDeleting = false;
        this.typingSpeed = options.typingSpeed || 100;
        this.deletingSpeed = options.deletingSpeed || 50;
        this.pauseTime = options.pauseTime || 2000;
        this.init();
    }

    init() {
        this.textElement.textContent = '';
        this.type();
    }

    type() {
        const currentText = this.fullText.substring(0, this.currentIndex);
        this.textElement.textContent = currentText + (this.isDeleting ? '' : '|');

        if (!this.isDeleting && this.currentIndex < this.fullText.length) {
            this.currentIndex++;
            setTimeout(() => this.type(), this.typingSpeed);
        } else if (this.isDeleting && this.currentIndex > 0) {
            this.currentIndex--;
            setTimeout(() => this.type(), this.deletingSpeed);
        } else if (!this.isDeleting && this.currentIndex === this.fullText.length) {
            setTimeout(() => {
                this.isDeleting = true;
                this.type();
            }, this.pauseTime);
        } else if (this.isDeleting && this.currentIndex === 0) {
            this.isDeleting = false;
            this.type();
        }
    }
}

// Terminal typewriter effect
class TerminalTypeWriter {
    constructor(elementId, options = {}) {
        this.element = document.getElementById(elementId);
        this.commands = options.commands || [];
        this.currentCommandIndex = 0;
        this.currentIndex = 0;
        this.isDeleting = false;
        this.typingSpeed = options.typingSpeed || 80;
        this.deletingSpeed = options.deletingSpeed || 30;
        this.pauseTime = options.pauseTime || 2000;

        if (this.commands.length > 0) {
            this.type();
        }
    }

    type() {
        const currentCommand = this.commands[this.currentCommandIndex];
        const currentText = currentCommand.substring(0, this.currentIndex);
        this.element.textContent = currentText + (this.isDeleting ? '' : '▮');

        if (!this.isDeleting && this.currentIndex < currentCommand.length) {
            this.currentIndex++;
            setTimeout(() => this.type(), this.typingSpeed);
        } else if (this.isDeleting && this.currentIndex > 0) {
            this.currentIndex--;
            setTimeout(() => this.type(), this.deletingSpeed);
        } else if (!this.isDeleting && this.currentIndex === currentCommand.length) {
            setTimeout(() => {
                this.isDeleting = true;
                this.type();
            }, this.pauseTime);
        } else if (this.isDeleting && this.currentIndex === 0) {
            this.isDeleting = false;
            this.currentCommandIndex = (this.currentCommandIndex + 1) % this.commands.length;
            this.type();
        }
    }
}

// Navigation functionality
class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
        this.navItems = document.getElementById('navItems');
        this.navLinks = document.querySelectorAll('.nav-link');

        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.handleNavClick(link));
        });
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    toggleMobileMenu() {
        this.navItems.classList.toggle('active');
    }

    handleNavClick(link) {
        this.navItems.classList.remove('active');
    }
}

// Smooth scroll functionality
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
        });
    }

    handleClick(e, anchor) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Intersection Observer for animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe skill bars for animation
        document.querySelectorAll('.skill-fill').forEach(elem => {
            elem.style.opacity = '0';
            elem.style.transform = 'scaleX(0)';
            elem.style.transformOrigin = 'left';
            elem.style.transition = 'all 1s ease-out';
            observer.observe(elem);
        });
    }
}

// Form handling
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.form.reset();
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typewriter effects
    const typingTextElement = document.getElementById('typingText');
    if (typingTextElement) {
        new TypeWriter(typingTextElement, {
            typingSpeed: 100,
            deletingSpeed: 50,
            pauseTime: 2000
        });
    }

    // Initialize terminal typewriters
    const terminalCommands = [
        'npm install react',
        'git commit -m "feat: add new feature"',
        'docker build -t myapp .',
        'kubectl apply -f deployment.yaml',
        'npm run build',
        'git push origin main',
        'npm test',
        'docker-compose up',
        'terraform apply',
        'npm start'
    ];

    new TerminalTypeWriter('terminal1', {
        commands: terminalCommands.slice(0, 3),
        typingSpeed: 80,
        deletingSpeed: 30,
        pauseTime: 2000
    });

    new TerminalTypeWriter('terminal2', {
        commands: terminalCommands.slice(3, 6),
        typingSpeed: 80,
        deletingSpeed: 30,
        pauseTime: 2000
    });

    new TerminalTypeWriter('terminal3', {
        commands: terminalCommands.slice(6, 9),
        typingSpeed: 80,
        deletingSpeed: 30,
        pauseTime: 2000
    });

    // Initialize navigation
    new Navigation();

    // Initialize smooth scroll
    new SmoothScroll();

    // Initialize scroll animations
    new ScrollAnimations();

    // Initialize contact form
    new ContactForm();

    // Add intersection observer for general fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.about-card, .experience-card, .project-card, .achievement-card, .skill-category').forEach(elem => {
        elem.style.opacity = '0';
        observer.observe(elem);
    });
});

// Add fade-in animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
