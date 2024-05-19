document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.testimonial-carousel')
  const items = document.querySelectorAll('.testimonial-card')
  const totalItems = items.length
  let currentIndex = 0
  const itemsPerSlide = 2.5
  //   const itemsPerSlide = 3

  const prevButton = document.querySelector('.prev')
  const nextButton = document.querySelector('.next')
  const dots = document.querySelectorAll('.pagination-dot')

  prevButton.addEventListener('click', () => {
    currentIndex =
      currentIndex > 0
        ? currentIndex - 1
        : Math.floor((totalItems - 1) / itemsPerSlide) * itemsPerSlide
    updateCarousel()
  })

  nextButton.addEventListener('click', () => {
    currentIndex =
      currentIndex < totalItems - itemsPerSlide ? currentIndex + 1 : 0
    updateCarousel()
  })

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index * itemsPerSlide
      updateCarousel()
    })
  })

  function updateCarousel() {
    const itemWidth = carouselContainer.clientWidth / itemsPerSlide
    const offset = -currentIndex * itemWidth
    // const offset =
    //   -currentIndex * (carouselContainer.clientWidth / itemsPerSlide)
    carouselContainer.style.transform = `translateX(${offset}px)`
    dots.forEach((dot, index) => {
      dot.classList.toggle(
        'active',
        index === Math.floor(currentIndex / itemsPerSlide)
      )
    })
  }

  // Initial update to set the correct state
  updateCarousel()
})
