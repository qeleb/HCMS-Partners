import { A } from '@solidjs/router';
import styles from '@/components/Sections/Sections.module.scss';

export const SectionQuestions = () => (
  <section class={`${styles.section} ${styles.sectionQuestions}`}>
    <div>
      <h2>Questions? Reach out to us and we can answer them.</h2>
      <A href="/contact">CONTACT US</A>
    </div>
  </section>
);
