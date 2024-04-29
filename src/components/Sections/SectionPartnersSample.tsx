import iconAppsTek from '@/assets/logos_partners/apps-tek.webp';
import iconEIS from '@/assets/logos_partners/eis.webp';
import iconOracle from '@/assets/logos_partners/oracle.webp';
import iconSmartDog from '@/assets/logos_partners/smart-dog-services.webp';
import iconSyntax from '@/assets/logos_partners/syntax.webp';
import iconTRS from '@/assets/logos_partners/technology-resource-services.webp';
import { ImageSample } from '@/components/ImageSample';
import styles from '@/components/Sections/Sections.module.scss';

export const SectionPartnersSample = () => (
  <section class={styles.section}>
    <h2>Our Partners</h2>
    <p>We have established partnerships with key players in the HCM and Oracle markets including:</p>
    <div class={`${styles.grid} ${styles.gridPartners}`}>
      <ImageSample {...[iconOracle, 'Oracle Gold Partner', '44/17']} />
      <ImageSample {...[iconSyntax, 'Syntax Enterprise Cloud', '213/62']} />
      <ImageSample {...[iconTRS, 'Technology Resource Services', '253/74']} />
      <ImageSample {...[iconSmartDog, 'Smart Dog Services', '49/17']} />
      <ImageSample {...[iconEIS, 'Enterprise Integration Solutions', '88/87']} />
      <ImageSample {...[iconAppsTek, 'Apps Tek', '77/47']} />
    </div>
  </section>
);
