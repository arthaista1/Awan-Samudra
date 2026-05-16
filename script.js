document.addEventListener('DOMContentLoaded', () => {
            const nav = document.getElementById('main-nav');
            
            // Handle Scroll Effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 60) {
                    nav.classList.add('nav-scrolled');
                    nav.classList.remove('py-4');
                } else {
                    nav.classList.remove('nav-scrolled');
                    nav.classList.add('py-4');
                }
            });

            // Smooth Scroll for Internal Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
