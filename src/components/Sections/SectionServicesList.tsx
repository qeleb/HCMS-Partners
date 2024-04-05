import styles from '@/components/Sections/Sections.module.scss';

export const SectionServicesList = () => (
  <section class={`${styles.section} ${styles.sectionServicesList}`}>
    <h2 id="hcm-and-ebs">Oracle HCM Cloud & EBS Services</h2>
    <div class={`${styles.grid} ${styles.gridServices}`}>
      <div>Implementations & Upgrades</div>
      <div>Optimization</div>
      <div>Health Checks</div>
      <div>Functional & Technical Training</div>
      <div>Continuation Services (Managed Services)</div>
      <div>Production & Year End Support</div>
    </div>
    <h2 id="dev-and-integration">Development & Integration Services</h2>
    <div class={`${styles.grid} ${styles.gridServices}`}>
      <div>Conversion</div>
      <div>Reporting & Analytics</div>
      <div>EBS Smartloader</div>
      <div>Integrations</div>
      <div>Apex Development</div>
      <div>Java Development</div>
    </div>
    <h2 id="strategic-hr">Strategic HR Services</h2>
    <div class={`${styles.grid} ${styles.gridServices}`}>
      <div>Advisory Services</div>
      <div>Process Re-engineering</div>
      <div>Aquisition Planning</div>
    </div>
  </section>
);
