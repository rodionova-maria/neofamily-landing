export const scrollToSection = (sectionId, e) => {
  if (e) {
    e.preventDefault()
  }

  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
