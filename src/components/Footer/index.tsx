import { A } from '@solidjs/router';
import { EmailAddress, PhoneNumber, StreetAddress } from '@/components/ContactInfo';
import styles from '@/components/Footer/Footer.module.scss';

export const Footer = () => (
  <footer>
    <div class={styles.connect}>
      <div>
        <strong>HCMS PARTNERS</strong>
        The oracle HCM Experts
      </div>
      <span>
        CONNECT WITH US
        <a href="https://x.com/HCMExperts">
          <svg viewBox="0 0 300 300.3">
            <path d="M179 127 290 0h-26l-97 110L89 0H0l117 167L0 300h26l103-116 82 116h89M36 20h41l187 262h-41" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/hcms-partners">
          <svg viewBox="0 0 256 256">
            <path d="M5.6 85.5H58V254H5.6V85.5zM31.8 1.6a30.4 30.4 0 1 1 0 60.8 30.4 30.4 0 0 1 0-60.8m59.1 83.9H141v23h.8a55 55 0 0 1 49.5-27.2c53.1 0 63 34.9 63 80.3v92.5h-52.5v-82c0-19.6-.3-44.7-27.2-44.7-27.3 0-31.5 21.3-31.5 43.3V254H91V85.5z" />
          </svg>
        </a>
      </span>
    </div>
    <div class={styles.main}>
      <div>
        <h6>HCMS PARTNERS</h6>
        <A href="/">HOME</A>
        <A href="/why-choose-us">WHY CHOOSE US</A>
        <A href="/services">SERVICES</A>
        <A href="/partners">CLIENTS & PARTNERS</A>
        <A href="/contact">CONTACT US</A>
      </div>
      <div>
        <h6>SERVICES</h6> {/*TODO: Fix services # doc links */}
        <A href="/services">ORACLE HCM CLOUD & EBS SERVICES</A>
        <A href="/services">DEVELOPMENT & INTEGRATION SERVICES</A>
        <A href="/services">STRATEGIC HR SERVICES</A>
      </div>
      <div>
        <h6>ADDRESS</h6>
        <StreetAddress />
      </div>
      <div>
        <h6>CONTACT US</h6>
        <PhoneNumber />
        <EmailAddress />
      </div>
    </div>
    <div class={styles.copyright}>
      HCMS PARTNERS © 2010 - 2024 • <A href="/privacy-policy">PRIVACY POLICY</A>
    </div>
  </footer>
);
