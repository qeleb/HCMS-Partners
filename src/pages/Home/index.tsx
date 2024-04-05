import bannerNY from '@/assets/bannerNY.jpg';
import { LabeledBanner } from '@/components/LabeledBanner';
import { SectionAboutUs } from '@/components/Sections/SectionAboutUs';
import { SectionGoldPartner } from '@/components/Sections/SectionGoldPartner';
import { SectionQuestions } from '@/components/Sections/SectionQuestions';
import { SectionServices } from '@/components/Sections/SectionServices';
import styles from '@/pages/Home/Home.module.scss';
import { setPageTitle } from '@/utils/pageTitle';

export const Home = () => {
  setPageTitle('Home');

  return (
    <div class={styles.Home}>
      <LabeledBanner bannerImgUrl={bannerNY} label="NEW YORK CITY, USA" />
      <SectionAboutUs />
      <SectionServices />
      <SectionGoldPartner />
      <SectionQuestions />
    </div>
  );
};
