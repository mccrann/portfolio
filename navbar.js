function renderNavbar(headerId) {
  const header = document.getElementById(headerId)

  if (!header) {
    return
  }

  const currentPath =
    window.location.pathname.replace(/\/$/, '') || '/'

  const links = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/workbench',
      label: 'Workbench',
    },
    {
      href: '/kb-docbot',
      label: 'KB DocBot',
    },
    {
      href: '/tips',
      label: 'Tips',
    },
  ]

  const navLinks = links
    .map(({ href, label }) => {
      const normalizedHref =
        href.replace(/\/$/, '') || '/'

      const isActive =
        currentPath === normalizedHref ||
        (
          normalizedHref !== '/' &&
          currentPath.startsWith(normalizedHref)
        )

      return `
        <a
          href="${href}"
          class="nav-link${isActive ? ' active' : ''}"
          ${isActive ? 'aria-current="page"' : ''}
        >
          ${label}
        </a>
      `
    })
    .join('')

  header.innerHTML = `
    <div class="nav-shell">
      <a class="nav-brand" href="/" aria-label="Karen McCrann home">
        <span class="brand-mark" aria-hidden="true">KM</span>

        <span class="brand-copy">
          <strong>Karen McCrann</strong>
          <small>Support · Engineering · Documentation</small>
        </span>
      </a>

      <nav class="nav-links" aria-label="Main navigation">
        ${navLinks}
      </nav>

      <a
        class="nav-contact"
        href="mailto:karen.mccrann@gmail.com"
      >
        Let’s talk
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  `
}

window.renderNavbar = renderNavbar
