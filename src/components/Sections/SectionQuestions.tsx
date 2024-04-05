import { A } from '@solidjs/router';
import ctaBG from '@/assets/cta_bg.jpg';
import styles from '@/components/Sections/Sections.module.scss';

export const SectionQuestions = () => (
  <section class={`${styles.section} ${styles.sectionQuestions}`} style={{ 'background-image': `url(${ctaBG})` }}>
    <div>
      <h2>Questions? Reach out to us and we can answer them.</h2>
      <A href="/contact">CONTACT US</A>
    </div>
  </section>
);
