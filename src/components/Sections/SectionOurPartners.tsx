import iconAppsTek from '@/assets/logos_partners/apps-tek.png';
import iconEIS from '@/assets/logos_partners/eis.png';
import iconOracle from '@/assets/logos_partners/oracle.png';
import iconSmartDog from '@/assets/logos_partners/smart-dog-services.png';
import iconSyntax from '@/assets/logos_partners/syntax.png';
import iconTRS from '@/assets/logos_partners/technology-resource-services.png';
import styles from '@/components/Sections/Sections.module.scss';

export const SectionOurPartners = () => (
  <section class={styles.section}>
    <h2>Our Partners</h2>
    <p>We have established partnerships with key players in the HCM and Oracle markets including:</p>
    <div class={`${styles.grid} ${styles.gridPartners}`}>
      <img prop:src={iconOracle} alt="Oracle Gold Partner" />
      <img prop:src={iconSyntax} alt="Syntax Enterprise Cloud" />
      <img prop:src={iconTRS} alt="Technology Resource Services" />
      <img prop:src={iconSmartDog} alt="Smart Dog Services" />
      <img prop:src={iconEIS} alt="Enterprise Integration Solutions" />
      <img prop:src={iconAppsTek} alt="Apps Tek" />
    </div>
  </section>
);
