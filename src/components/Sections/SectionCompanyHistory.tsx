import styles from '@/components/Sections/Sections.module.scss';
import { IconAward } from '@/icons/IconAward';
import { IconConverge } from '@/icons/IconConverge';
import { IconHierarchy } from '@/icons/IconHierarchy';
import { IconHome } from '@/icons/IconHome';
import { IconSettings } from '@/icons/IconSettings';

export const SectionCompanyHistory = () => (
  <section class={styles.section}>
    <h2>Company History</h2>
    <ul class={styles.history}>
      <li>
        <h3>FOUNDERS</h3>
        <p>Co-Founders Dan Winkelman and Sam Patel meet on the Eaton HR Project</p>
        <div>
          <IconHome />
        </div>
        <small>1997</small>
      </li>
      <li>
        <h3>HCMS PARTNERS</h3>
        <p>Company is founded and focuses exclusively on Oracle HCM</p>
        <div>
          <IconAward />
        </div>
        <small>2006</small>
      </li>
      <li>
        <h3>TOOLS</h3>
        <p>Built out repository of tools</p>
        <div>
          <IconSettings />
        </div>
        <small>2007</small>
      </li>
      <li>
        <h3>R12</h3>
        <p>First R12 Implementation</p>
        <div>
          <IconConverge />
        </div>
        <small>2010</small>
      </li>
      <li>
        <h3>ORACLE CLOUD PRACTICE</h3>
        <p>Created our Oracle HCM Cloud Practice</p>
        <div>
          <IconHierarchy />
        </div>
        <small>2014</small>
      </li>
    </ul>
  </section>
);
