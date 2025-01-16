document.addEventListener('DOMContentLoaded', () => { 
    const slides = document.querySelectorAll('.text-slide'); 
    let currentIndex = 0; 

    function showSlide(index) { 
        slides.forEach((slide, i) => {
            slide.classList.remove('show');
            slide.classList.add('hide'); 
           
            }); 
            slides[index].classList.remove('hide'); 
            slides[index].classList.add('show'); 
        } 
        function nextSlide() { 
            slides[currentIndex].classList.add('hide');
            slides[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % slides.length; 
            slides[currentIndex].style.display = 'block';
            slides[currentIndex].classList.remove('hide');
            slides[currentIndex].classList.add('show');
        } 
        showSlide(currentIndex);
        setInterval(nextSlide, 2000); 
    });