function renderNavbar(containerId = 'site-header') {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  const path = window.location.pathname.replace(/\/$/, '');
  const normalizedPath = path === '' ? '/' : path.replace(/\.html$/i, '');
  const currentPage = normalizedPath === '' ? '/' : normalizedPath;

  const links = [
    { href: '/', label: 'Home' },
    { href: '/writing', label: 'Writing' },
    { href: '/apps', label: 'Apps' },
    { href: '/workbench', label: 'Workbench' },
    { href: '/creative', label: 'Creative' }
  ];

  const navMarkup = links.map((link) => {
    const isActive = currentPage === link.href;
    const activeClass = isActive ? ' class="active"' : '';
    return `<a href="${link.href}"${activeClass}>${link.label}</a>`;
  }).join('');

  container.innerHTML = `
    <div class="navbar">
      <a href="/" class="navbar__brand" aria-label="Karen McCrann - Home">
        Karen <span>McCrann</span>
      </a>
      <button
        class="navbar__toggle"
        aria-label="Toggle navigation"
        aria-expanded="false"
        aria-controls="primary-nav"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="primary-nav" aria-label="Primary">
        ${navMarkup}
      </nav>
    </div>
  `;

  const toggle = container.querySelector('.navbar__toggle');
  const nav = container.querySelector('#primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
}

window.renderNavbar = renderNavbar;
