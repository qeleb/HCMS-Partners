import styles from '@/components/Sections/Sections.module.scss';

export const SectionTheNumbers = () => (
  <section class={`${styles.section} ${styles.sectionDim}`}>
    <h2>The Numbers Don't Lie...</h2>
    <div>{/* TODO: Numbers don't lie graphic here */}</div>
  </section>
);
