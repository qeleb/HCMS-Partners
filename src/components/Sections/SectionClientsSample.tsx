import iconAllscripts from '@/assets/logos_clients/allscripts.png';
import iconAtrium from '@/assets/logos_clients/atrium.png';
import iconBlackKnight from '@/assets/logos_clients/black-knight.png';
import iconDealerTire from '@/assets/logos_clients/dealer-tire.png';
import iconDresser from '@/assets/logos_clients/dresser-rand.png';
import iconETrade from '@/assets/logos_clients/e-trade.png';
import iconFidelity from '@/assets/logos_clients/fidelity.png';
import iconFIS from '@/assets/logos_clients/fis.png';
import iconGevity from '@/assets/logos_clients/gevity.png';
import iconISS from '@/assets/logos_clients/iss.png';
import iconLafayette from '@/assets/logos_clients/lafayette-general-medical-center.png';
import iconLaitram from '@/assets/logos_clients/laitram.png';
import iconLincoln from '@/assets/logos_clients/lincoln.png';
import iconLPS from '@/assets/logos_clients/lps.png';
import iconOhioHealth from '@/assets/logos_clients/ohio-health.png';
import iconServiceLink from '@/assets/logos_clients/servicelink.png';
import iconSourceFire from '@/assets/logos_clients/source-fire.png';
import iconStPetersburg from '@/assets/logos_clients/st-petersburg.png';
import iconStuller from '@/assets/logos_clients/stuller.png';
import iconUniversityHospitals from '@/assets/logos_clients/university-hospitals.png';
import styles from '@/components/Sections/Sections.module.scss';

export const SectionClientsSample = () => (
  <section class={`${styles.section} ${styles.sectionClientsSample}`}>
    <h2>A Sample of Our Clients</h2>
    <span>
      HCMS Partners has successfully implemented Oracle solutions for over 50 clients including several Fortune 500
      companies. The hands-on experience gained through these implementations allows them to provide an exceptional
      level of expertise that few can match.
    </span>
    <div class={`${styles.grid} ${styles.gridClients}`}>
      <img prop:src={iconDresser} alt="Dresser-Rand" />
      <img prop:src={iconISS} alt="ISS" style={{ padding: '1.75rem' }} />
      <img prop:src={iconGevity} alt="Gevity" />
      <img prop:src={iconLPS} alt="Lender Processing Services" />
      <img prop:src={iconSourceFire} alt="Source Fire" />
      <img prop:src={iconFIS} alt="Fidelity National Information Services" />
      <img prop:src={iconUniversityHospitals} alt="University Hospitals" />
      <img prop:src={iconDealerTire} alt="Dealer Tire" />
      <img prop:src={iconBlackKnight} alt="Black Knight" />
      <img prop:src={iconAllscripts} alt="Allscripts" />
      <img prop:src={iconETrade} alt="E-Trade Financial" />
      <img prop:src={iconFidelity} alt="Fidelity National Financial" />
      <img prop:src={iconServiceLink} alt="Service Link" />
      <img prop:src={iconLincoln} alt="Lincoln Financial Group" />
      <img prop:src={iconLaitram} alt="Laitram" />
      <img prop:src={iconLafayette} alt="Lafayette General Medical Center" />
      <img prop:src={iconStPetersburg} alt="St. Petersburg" style={{ padding: '1.5rem' }} />
      <img prop:src={iconAtrium} alt="Atrium Windows and Doors" />
      <img prop:src={iconOhioHealth} alt="Ohio Health" />
      <img prop:src={iconStuller} alt="Stuller" />
    </div>
  </section>
);
