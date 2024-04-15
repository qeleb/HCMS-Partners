import iconAppsTek from '@/assets/logos_partners/apps-tek.webp';
import iconEIS from '@/assets/logos_partners/eis.webp';
import iconOracle from '@/assets/logos_partners/oracle.webp';
import iconSmartDog from '@/assets/logos_partners/smart-dog-services.webp';
import iconSyntax from '@/assets/logos_partners/syntax.webp';
import iconTRS from '@/assets/logos_partners/technology-resource-services.webp';
import styles from '@/components/Sections/Sections.module.scss';

export const SectionPartnersSample = () => (
  <section class={styles.section}>
    <h2>Our Partners</h2>
    <p>We have established partnerships with key players in the HCM and Oracle markets including:</p>
    <div class={`${styles.grid} ${styles.gridPartners}`}>
      <img prop:src={iconOracle} alt="Oracle Gold Partner" style={{ 'aspect-ratio': '44/17' }} />
      <img prop:src={iconSyntax} alt="Syntax Enterprise Cloud" style={{ 'aspect-ratio': '213/62' }} />
      <img prop:src={iconTRS} alt="Technology Resource Services" style={{ 'aspect-ratio': '253/74' }} />
      <img prop:src={iconSmartDog} alt="Smart Dog Services" style={{ 'aspect-ratio': '49/17' }} />
      <img prop:src={iconEIS} alt="Enterprise Integration Solutions" style={{ 'aspect-ratio': '88/87' }} />
      <img prop:src={iconAppsTek} alt="Apps Tek" style={{ 'aspect-ratio': '77/47' }} />
    </div>
  </section>
);
