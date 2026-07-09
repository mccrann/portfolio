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
      <h1>Karen McCrann</h1>
      <nav aria-label="Primary">
        ${navMarkup}
      </nav>
    </div>
  `;
}

window.renderNavbar = renderNavbar;
