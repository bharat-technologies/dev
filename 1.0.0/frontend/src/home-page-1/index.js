document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.image-gallery img');
    let currentIndex = 0;
http://127.0.0.1:5500/dev/1.0.0/frontend/src/home-page-1/index.html#    
    function showImage(index) {
        images.forEach(img => img.classList.remove('visible'));
        images[index].classList.add('visible');
    }

    showImage(currentIndex);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);

    // Smooth scrolling to sections
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionID = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionID);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
});


var mainNav = document.getElementById("main-nav"); // Corrected variable name

function togglebtn() {
    mainNav.classList.toggle("hidemenu"); // Using the correct variable
}


