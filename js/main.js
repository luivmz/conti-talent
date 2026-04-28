/* =========================================================
   main.js — Entry point: header dinámico, sesión, navegación
   Se ejecuta en TODAS las páginas.
   ========================================================= */

(() => {
  const init = () => {
    if (window.Seed) Seed.run();
    renderHeaderSession();
    highlightActiveNav();
    bindLogoutLinks();
  };

  const renderHeaderSession = () => {
    const slot = document.getElementById('session-area');
    if (!slot) return;

    const session = Auth.getSession();
    UI.clear(slot);

    if (!session) {
      slot.appendChild(UI.el('a', { href: 'login.html', class: 'btn btn--ghost btn--sm', text: 'Iniciar sesión' }));
      slot.appendChild(UI.el('a', { href: 'registro.html', class: 'btn btn--primary btn--sm', text: 'Crear cuenta' }));
      return;
    }

    const initials = (session.nombre?.[0] || '') + (session.apellido?.[0] || '');
    const avatar = UI.el('div', { class: 'avatar', text: initials.toUpperCase() });
    const name   = UI.el('span', { class: 'muted', text: `${session.nombre} ${session.apellido}` });

    if (session.rol === 'admin') {
      slot.appendChild(UI.el('a', { href: 'admin/dashboard.html', class: 'btn btn--ghost btn--sm', text: 'Panel admin' }));
    } else {
      slot.appendChild(UI.el('a', { href: 'mi-estado.html', class: 'btn btn--ghost btn--sm', text: 'Mi estado' }));
    }
    slot.appendChild(avatar);
    slot.appendChild(name);
    slot.appendChild(UI.el('button', {
      class: 'icon-btn',
      title: 'Cerrar sesión',
      'aria-label': 'Cerrar sesión',
      html: '⎋',
      onClick: () => { Auth.logout(); window.location.href = 'index.html'; }
    }));
  };

  const highlightActiveNav = () => {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    UI.$$('[data-nav]').forEach((node) => {
      if (node.dataset.nav === path) node.classList.add('is-active');
    });
  };

  const bindLogoutLinks = () => {
    UI.$$('[data-action="logout"]').forEach((node) => {
      node.addEventListener('click', (e) => {
        e.preventDefault();
        Auth.logout();
        window.location.href = 'index.html';
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
