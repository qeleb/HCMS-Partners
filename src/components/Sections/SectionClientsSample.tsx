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
      <img prop:src={iconDresser} alt="Dresser-Rand" style={{ 'aspect-ratio': '31/4' }} />
      <img prop:src={iconISS} alt="ISS" style={{ 'aspect-ratio': '8/7', padding: '1.75rem' }} />
      <img prop:src={iconGevity} alt="Gevity" style={{ 'aspect-ratio': '127/58' }} />
      <img prop:src={iconLPS} alt="Lender Processing Services" style={{ 'aspect-ratio': '141/80' }} />
      <img prop:src={iconSourceFire} alt="Source Fire" style={{ 'aspect-ratio': '155/56' }} />
      <img prop:src={iconFIS} alt="Fidelity National Information Services" style={{ 'aspect-ratio': '63/31' }} />
      <img prop:src={iconUniversityHospitals} alt="University Hospitals" style={{ 'aspect-ratio': '31/14' }} />
      <img prop:src={iconDealerTire} alt="Dealer Tire" style={{ 'aspect-ratio': '155/29' }} />
      <img prop:src={iconBlackKnight} alt="Black Knight" style={{ 'aspect-ratio': '31/8' }} />
      <img prop:src={iconAllscripts} alt="Allscripts" style={{ 'aspect-ratio': '155/34' }} />
      <img prop:src={iconETrade} alt="E-Trade Financial" style={{ 'aspect-ratio': '300/79' }} />
      <img prop:src={iconFidelity} alt="Fidelity National Financial" style={{ 'aspect-ratio': '129/46' }} />
      <img prop:src={iconServiceLink} alt="Service Link" style={{ 'aspect-ratio': '152/43' }} />
      <img prop:src={iconLincoln} alt="Lincoln Financial Group" style={{ 'aspect-ratio': '155/56' }} />
      <img prop:src={iconLaitram} alt="Laitram" style={{ 'aspect-ratio': '145/44' }} />
      <img prop:src={iconLafayette} alt="Lafayette General Medical Center" style={{ 'aspect-ratio': '143/80' }} />
      <img prop:src={iconStPetersburg} alt="St. Petersburg" style={{ 'aspect-ratio': '95/78', padding: '1.5rem' }} />
      <img prop:src={iconAtrium} alt="Atrium Windows and Doors" style={{ 'aspect-ratio': '70/27' }} />
      <img prop:src={iconOhioHealth} alt="Ohio Health" style={{ 'aspect-ratio': '155/36' }} />
      <img prop:src={iconStuller} alt="Stuller" style={{ 'aspect-ratio': '155/58' }} />
    </div>
  </section>
);
