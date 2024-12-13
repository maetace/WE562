const pages = document.querySelectorAll('.page');
const links = document.querySelectorAll('.menu a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.id.replace('Link', 'Page');

        // Toggle active page
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(targetPage).classList.add('active');

        // Toggle active link
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});