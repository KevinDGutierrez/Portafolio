document.addEventListener('DOMContentLoaded', () => {
    function animateProficiencyBars() {
        document.querySelectorAll('.proficiency-level').forEach(level => {
            const percentage = level.getAttribute('data-percentage');
            level.style.width = percentage + '%';
        });
        document.querySelectorAll('.proficiency-text').forEach(percentageElement => {
            const targetLevel = percentageElement.closest('.skill-card').querySelector('.proficiency-level');
            const percentage = targetLevel.getAttribute('data-percentage');
            let currentPercentage = 0;
            const targetPercentage = parseInt(percentage);
            const duration = 1000;
            const stepTime = 10;
            const steps = duration / stepTime;
            const increment = targetPercentage / steps;

            const animate = () => {
                currentPercentage += increment;
                if (currentPercentage < targetPercentage) {
                    percentageElement.textContent = Math.round(currentPercentage) + '%';
                    requestAnimationFrame(animate);
                } else {
                    percentageElement.textContent = targetPercentage + '%';
                }
            };
            requestAnimationFrame(animate);
        });
    }

    const proficiencySection = document.getElementById('skills-section');
    if (proficiencySection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProficiencyBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(proficiencySection);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links .nav-link');

    const updateNavLinkState = () => {
        let currentActive = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentActive = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentActive)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateNavLinkState);
    updateNavLinkState();

    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carouselContainer => {
        const carouselImages = carouselContainer.querySelectorAll('.carousel-image');
        const prevButton = carouselContainer.querySelector('.carousel-button.prev');
        const nextButton = carouselContainer.querySelector('.carousel-button.next');
        const dotsContainer = carouselContainer.querySelector('.carousel-dots');

        let currentIndex = 0;
        let autoSlideInterval;

        function showSlide(index) {
            if (index >= carouselImages.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = carouselImages.length - 1;
            } else {
                currentIndex = index;
            }

            carouselImages.forEach(img => {
                img.classList.remove('active');
            });

            carouselImages[currentIndex].classList.add('active');
            updateDots();
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        function createDots() {
            dotsContainer.innerHTML = '';
            carouselImages.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (index === currentIndex) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    showSlide(index);
                    resetAutoSlide();
                });
                dotsContainer.appendChild(dot);
            });
        }

        function updateDots() {
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function startAutoSlide() {
            stopAutoSlide();
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        function resetAutoSlide() {
            stopAutoSlide();
            startAutoSlide();
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide();
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide();
            });
        }

        if (carouselImages.length > 0) {
            showSlide(currentIndex);
            createDots();
            if (carouselImages.length > 1) {
                startAutoSlide();
            }
        }
    });
});