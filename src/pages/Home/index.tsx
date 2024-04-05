import bannerNY from '@/assets/banners/bannerNY.jpg';
import { LabeledBanner } from '@/components/LabeledBanner';
import { SectionAboutUs } from '@/components/Sections/SectionAboutUs';
import { SectionGoldPartner } from '@/components/Sections/SectionGoldPartner';
import { SectionQuestions } from '@/components/Sections/SectionQuestions';
import { SectionServices } from '@/components/Sections/SectionServices';
import { setPageTitle } from '@/utils/pageTitle';

export const Home = () => {
  setPageTitle('Home');

  return (
    <>
      <LabeledBanner bannerImgUrl={bannerNY} label="NEW YORK CITY, USA" />
      <SectionAboutUs />
      <SectionServices />
      <SectionGoldPartner />
      <SectionQuestions />
    </>
  );
};
