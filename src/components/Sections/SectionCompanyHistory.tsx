import styles from '@/components/Sections/Sections.module.scss';

export const SectionCompanyHistory = () => (
  <section class={styles.section}>
    <h2>Company History</h2>
    <ul class={styles.history}>
      <li>
        <h3>FOUNDERS</h3>
        <p>Co-Founders Dan Winkelman and Sam Patel meet on the Eaton HR Project</p>
        {/*TODO: Add icon here */}
        <div>1997</div>
      </li>
      <li>
        <h3>HCMS PARTNERS</h3>
        <p>Company is founded and focuses exclusively on Oracle HCM</p>
        {/*TODO: Add icon here */}
        <div>2006</div>
      </li>
      <li>
        <h3>TOOLS</h3>
        <p>Built out repository of tools</p>
        {/*TODO: Add icon here */}
        <div>2007</div>
      </li>
      <li>
        <h3>R12</h3>
        <p>First R12 Implementation</p>
        {/*TODO: Add icon here */}
        <div>2010</div>
      </li>
      <li>
        <h3>ORACLE CLOUD PRACTICE</h3>
        <p>Created our Oracle HCM Cloud Practice</p>
        {/*TODO: Add icon here */}
        <div>2014</div>
      </li>
    </ul>
  </section>
);
