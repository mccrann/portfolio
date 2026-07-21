class PortfolioReturn extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" })

    shadow.innerHTML = `
      <style>
        a {
          position: fixed;
          top: 0.85rem;
          left: 0.85rem;
          z-index: 1000;

          display: inline-flex;
          align-items: center;
          gap: 0.45rem;

          padding: 0.55rem 0.85rem;
          border: 1px solid #222;
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.92);
          color: #222;
          font: 600 0.8rem/1 sans-serif;
          text-decoration: none;

          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(8px);

          transition:
            transform 150ms ease,
            background 150ms ease,
            color 150ms ease;
        }

        a:hover {
          transform: translateY(-2px);
          background: #234f3f;
          color: white;
        }

        a:focus-visible {
          outline: 3px solid #9fcdb8;
          outline-offset: 3px;
        }
      </style>

      <a
        href="https://karenmccrann.xyz"
        aria-label="Back to Karen McCrann’s portfolio"
      >
        <span aria-hidden="true">←</span>
        Karen McCrann
      </a>
    `
  }
}

if (!customElements.get("portfolio-return")) {
  customElements.define("portfolio-return", PortfolioReturn)
}