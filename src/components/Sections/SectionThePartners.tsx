import avatarDan from '@/assets/avatars/dan_winkelman.jpg';
import avatarSam from '@/assets/avatars/sam_patel.webp';
import styles from '@/components/Sections/Sections.module.scss';

export const SectionThePartners = () => (
  <section class={`${styles.section} ${styles.sectionDim}`}>
    <h2>The Partners</h2>
    <div class={styles.founders}>
      <div>
        <img prop:src={avatarDan} alt="Dan Winkelman portrait" />
        <h4>Dan Winkelman</h4>
        <h5>MANAGING PARTNER</h5>
        <p>Dan is an IT professional with 30+ years IT experience, working exclusively in Oracle HCM since 1997.</p>
      </div>
      <div>
        <img prop:src={avatarSam} alt="Sam Patel portrait" />
        <h4>Sam Patel</h4>
        <h5>MANAGING PARTNER</h5>
        <p>
          Sam has been implementing and supporting Oracle Payroll since 1995. He was part of the implementation that
          took one of the first ever payroll customers live in the US.
        </p>
      </div>
    </div>
  </section>
);
