function scrollAjustado(event) {
    event.preventDefault();

    let targetId = this.getAttribute('href').substring(1);
    let targetElement = document.getElementById(targetId);

    let offsetPosition = targetElement.offsetTop - 24;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        let navbarToggler = document.querySelector('.navbar-collapse');
        let bsCollapse = new bootstrap.Collapse(navbarToggler, { toggle: false });
        bsCollapse.hide();
    });

    link.addEventListener('click', scrollAjustado);
});

document.getElementById("btnHero").addEventListener('click', scrollAjustado);