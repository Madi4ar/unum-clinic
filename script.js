const imagesAnimate = document.querySelectorAll('.image-animation');

imagesAnimate.forEach(element => {
    element.addEventListener('click', function() {
        const parentElement = this.querySelector('.text-animate'); 
        document.querySelectorAll('.text-animate').forEach(el => {
            if (el !== parentElement) {
                el.classList.remove('text-animation');
            }
        });
        document.querySelectorAll('.image-animation').forEach(el => {
            el.classList.remove('active-animation');
        });
        this.classList.add('active-animation');
        if (parentElement) {
            parentElement.classList.add('text-animation');
        }
    });
});
