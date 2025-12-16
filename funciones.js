document.addEventListener("DOMContentLoaded", () => {
  const hoverImg = document.getElementById("hover-img")

  if (hoverImg) {
    const originalSrc = hoverImg.src
    const hoverSrc = "imagenes/mueble-antes.jpeg"

    hoverImg.addEventListener("mouseenter", () => {
      hoverImg.src = hoverSrc
    })

    hoverImg.addEventListener("mouseleave", () => {
      hoverImg.src = originalSrc
    })
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const sections = document.querySelectorAll(".fade-in")
  sections.forEach((section) => observer.observe(section))
})
