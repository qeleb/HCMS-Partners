import iconOracle from '@/assets/oracle.png';
import styles from '@/components/Sections/Sections.module.scss';

export const SectionClientsSample = () => (
  <section class={`${styles.section} ${styles.sectionClientsSample}`}>
    <h2>A Sample of Our Clients</h2>
    <div>
      HCMS Partners has successfully implemented Oracle solutions for over 50 clients including several Fortune 500
      companies. The hands-on experience gained through these implementations allows them to provide an exceptional
      level of expertise that few can match.
    </div>
    <div class={styles.partnerGrid}>
      <img prop:src={iconOracle} alt="Oracle Gold Partner" />
      <img prop:src={iconOracle} alt="Oracle Gold Partner" />
      <img prop:src={iconOracle} alt="Oracle Gold Partner" />
      <img prop:src={iconOracle} alt="Oracle Gold Partner" />
      <img prop:src={iconOracle} alt="Oracle Gold Partner" />
      <img prop:src={iconOracle} alt="Oracle Gold Partner" />
    </div>
  </section>
);
