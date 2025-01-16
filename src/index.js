document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".text-slide");
  
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("show");
      slide.classList.add("hide");
    });
    slides[index].classList.remove("hide");
    slides[index].classList.add("show");
  }
  function nextSlide() {
    slides[currentIndex].classList.remove("show"); 
    slides[currentIndex].classList.add("hide");
   
    setTimeout(() => {
        
        currentIndex = (currentIndex + 1) % slides.length; 
        slides[currentIndex].style.display = "block"; 
        slides[currentIndex].classList.remove("hide"); 
        slides[currentIndex].classList.add("show");
  }, 2000);
}
  showSlide(currentIndex);
  setInterval(nextSlide, 3000);
});

window.addEventListener("scroll", () => {
  const scrollButton = document.getElementById("scrollButton");
  const descriptionContainer = document.querySelector(".description-container");
  const firstSection = document.querySelector(".home-container");
  const rect = descriptionContainer.getBoundingClientRect();
  const firstSectionRect = firstSection.getBoundingClientRect();

  const containerHeight = rect.height;
  const halfwayPoint = rect.top + containerHeight / 2;
  const endPoint = rect.bottom;

  if (
    (halfwayPoint <= window.innerHeight && halfwayPoint >= 0) ||
    (endPoint <= window.innerHeight && endPoint >= 0)
  ) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
  if (firstSectionRect.top <= 0 && firstSectionRect.bottom >= 0) {
    scrollButton.style.display = "none";
  }
});

window.dispatchEvent(new Event("scroll"));

document.querySelectorAll(".menu__link").forEach((link) => {
  link.addEventListener("mouseover", () => {
    document.querySelectorAll(".menu__link").forEach((otherLink) => {
      otherLink.style.opacity = "0.5";
    });
    link.style.opacity = "1";
  });
  link.addEventListener("mouseout", () => {
    document.querySelectorAll(".menu__link").forEach((otherLink) => {
      otherLink.style.opacity = "1";
    });
  });
});
