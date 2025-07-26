function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected section
  const target = document.getElementById(sectionId);
  if (target) {
    target.style.display = sectionId === 'hero-section' ? 'flex' : 'block';
  }

  // Remove 'active' class from all nav links
  document.querySelectorAll('.nav a').forEach(link => {
    link.classList.remove('active');
  });

  // Add 'active' class to the clicked nav link
  const currentLink = document.querySelector(`.nav a[href="#${sectionId.replace('-section', '')}"]`);
  if (currentLink) {
    currentLink.classList.add('active');
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

console.log("Portfolio with nav highlight is ready.");
