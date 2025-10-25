// smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getattribute('href')).
        scrollintoview({
            behavior: 'smooth'
        });
    });
});

//product hover animations
const productcards = document.querySelectorAll('.product-card');
productcards.forEach(card => {
    card.addEventListener('mousenter', function() {
        this.style.transform = 'translatey(-15px)';
    });

card.addEventListener('mouseleave', function() {
    this.style.transform = 'translatey(0)';
});
});