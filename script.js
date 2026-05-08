window.addEventListener('scroll', () => {

    const nav = document.querySelector('nav');

    if (window.scrollY > 50) {

        nav.classList.add('bg-[#1e293b]', 'shadow-lg');
        nav.classList.remove('glass-panel');

    } else {

        nav.classList.add('glass-panel');
        nav.classList.remove('bg-[#1e293b]', 'shadow-lg');
    }

});
