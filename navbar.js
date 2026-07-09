function renderNavbar(containerId = 'site-header') {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  container.innerHTML = `
    <div class="navbar">
      <h1>My Portfolio</h1>
      <nav aria-label="Primary">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  `;
}

window.renderNavbar = renderNavbar;
