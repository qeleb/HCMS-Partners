import iconOracle from '@/assets/logos_partners/oracle.webp';
import styles from '@/components/Sections/Sections.module.scss';

export const SectionGoldPartner = () => (
  <section class={`${styles.section} ${styles.sectionGoldPartner}`}>
    <div>
      <img prop:src={iconOracle} alt="Oracle Gold Partner" />
      As an Oracle Gold Partner, HCMS Partners commitment to clients is absolute – Our pledge is “Availability is not a
      skill set, bring the right resources to every project”. The knowledge and experience a consultant brings to a
      project makes the difference between a marginal effort and a truly successful one. These traits directly correlate
      to HCMS Partners ability to deliver project results on an on-time, on-budget basis with “no surprises”.
    </div>
  </section>
);
