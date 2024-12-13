import styles from '@/components/Sections/Sections.module.scss';

export const SectionVision = () => (
  <section class={`${styles.section} ${styles.sectionDim}`}>
    <h2>Our Vision & Values</h2>
    <div class={styles.vision}>
      <ul>
        <li>
          <h3>LEADERSHIP</h3>
          <p>
            We provide a team of senior-level practitioners that are recognized leaders within specific modules of the
            Oracle HCM suite.
          </p>
        </li>
        <li>
          <h3>VALUE</h3>
          <p>
            We deliver “Best in Class” services that exceed those of the Big 4 and boutique firms at mid-market pricing.
          </p>
        </li>
        <li>
          <h3>EXPERIENCE</h3>
          <p>
            We recognize that the knowledge and experience a consultant brings to a project makes the difference between
            a marginal effort and a truly successful one.
          </p>
        </li>
        <li>
          <h3>RELATIONSHIPS</h3>
          <p>We are committed to long-term relationships with both our clients and consulting team members.</p>
        </li>
      </ul>
    </div>
  </section>
);
