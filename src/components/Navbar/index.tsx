import { A, useBeforeLeave } from '@solidjs/router';
import { createSignal } from 'solid-js';
import iconLogo from '@/assets/logo.svg?url';
import styles from '@/components/Navbar/Navbar.module.scss';

export const NavbarItems = () => (
  <>
    <A href="/" end>
      HOME
    </A>
    <A href="/why-choose-us">WHY CHOOSE US</A>
    <A href="/services">SERVICES</A>
    <A href="/partners">CLIENTS & PARTNERS</A>
    <A href="/contact">CONTACT US</A>
  </>
);

export const Navbar = () => {
  const [showMenu, setShowMenu] = createSignal(false);

  useBeforeLeave(() => setShowMenu(false));

  return (
    <nav class={showMenu() ? styles.show : ''}>
      <div class={styles['nav-main']}>
        <A href="/" end>
          <img prop:src={iconLogo} alt="HCMS Partners" />
        </A>

        {/* Mobile Only */}
        <button aria-label="Toggle navigation" onClick={() => setShowMenu(p => !p)}>
          <svg viewBox="0 0 8 8">
            <path d="M1 2h6M1 4h6M1 6h6" />
          </svg>
        </button>

        {/* Desktop Only */}
        <div>
          <NavbarItems />
        </div>
      </div>
      <div class={styles['nav-extension']}>
        <NavbarItems />
      </div>
    </nav>
  );
};
