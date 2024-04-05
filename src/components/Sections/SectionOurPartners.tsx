import iconOracle from '@/assets/oracle.png';
import styles from '@/components/Sections/Sections.module.scss';

export const SectionOurPartners = () => (
  <section class={styles.section}>
    <h2>Our Partners</h2>
    <p>We have established partnerships with key players in the HCM and Oracle markets including:</p>
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
