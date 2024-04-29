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
      <LabeledBanner {...[bannerNY, 'NEW YORK CITY, USA', '512/253']} />
      <SectionAboutUs />
      <SectionServices />
      <SectionGoldPartner />
      <SectionQuestions />
    </>
  );
};
