import iconAllscripts from '@/assets/logos_clients/allscripts.webp';
import iconAtrium from '@/assets/logos_clients/atrium.webp';
import iconBlackKnight from '@/assets/logos_clients/black-knight.webp';
import iconDealerTire from '@/assets/logos_clients/dealer-tire.webp';
import iconDresser from '@/assets/logos_clients/dresser-rand.webp';
import iconETrade from '@/assets/logos_clients/e-trade.svg?url';
import iconFidelity from '@/assets/logos_clients/fidelity.webp';
import iconFIS from '@/assets/logos_clients/fis.webp';
import iconGevity from '@/assets/logos_clients/gevity.webp';
import iconISS from '@/assets/logos_clients/iss.webp';
import iconLafayette from '@/assets/logos_clients/lafayette-general-medical-center.webp';
import iconLaitram from '@/assets/logos_clients/laitram.webp';
import iconLincoln from '@/assets/logos_clients/lincoln.webp';
import iconLPS from '@/assets/logos_clients/lps.webp';
import iconOhioHealth from '@/assets/logos_clients/ohio-health.webp';
import iconServiceLink from '@/assets/logos_clients/servicelink.webp';
import iconSourceFire from '@/assets/logos_clients/source-fire.webp';
import iconStPetersburg from '@/assets/logos_clients/st-petersburg.webp';
import iconStuller from '@/assets/logos_clients/stuller.webp';
import iconUniversityHospitals from '@/assets/logos_clients/university-hospitals.webp';
import { ImageSample } from '@/components/ImageSample';
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
      {ImageSample(iconDresser, 'Dresser-Rand', '31/4')}
      {ImageSample(iconISS, 'ISS', '8/7')}
      {ImageSample(iconGevity, 'Gevity', '127/58')}
      {ImageSample(iconLPS, 'Lender Processing Services', '141/80')}
      {ImageSample(iconSourceFire, 'Source Fire', '155/56')}
      {ImageSample(iconFIS, 'Fidelity National Information Services', '63/31')}
      {ImageSample(iconUniversityHospitals, 'University Hospitals', '31/14')}
      {ImageSample(iconDealerTire, 'Dealer Tire', '155/29')}
      {ImageSample(iconBlackKnight, 'Black Knight', '31/8')}
      {ImageSample(iconAllscripts, 'Allscripts', '155/34')}
      {ImageSample(iconETrade, 'E-Trade Financial', '300/79')}
      {ImageSample(iconFidelity, 'Fidelity National Financial', '129/46')}
      {ImageSample(iconServiceLink, 'Service Link', '152/43')}
      {ImageSample(iconLincoln, 'Lincoln Financial Group', '155/56')}
      {ImageSample(iconLaitram, 'Laitram', '145/44')}
      {ImageSample(iconLafayette, 'Lafayette General Medical Center', '143/80')}
      {ImageSample(iconStPetersburg, 'St. Petersburg', '145/119')}
      {ImageSample(iconAtrium, 'Atrium Windows and Doors', '70/27')}
      {ImageSample(iconOhioHealth, 'Ohio Health', '155/36')}
      {ImageSample(iconStuller, 'Stuller', '155/58')}
    </div>
  </section>
);
