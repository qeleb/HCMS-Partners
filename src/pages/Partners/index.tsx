import bannerSP from '@/assets/banners/bannerSP.jpg';
import { LabeledBanner } from '@/components/LabeledBanner';
import { SectionClientsSample } from '@/components/Sections/SectionClientsSample';
import { SectionOurPartners } from '@/components/Sections/SectionOurPartners';
import { SectionQuestions } from '@/components/Sections/SectionQuestions';
import { setPageTitle } from '@/utils/pageTitle';

export const Partners = () => {
  setPageTitle('Our Clients & Partners');

  return (
    <>
      <LabeledBanner bannerImgUrl={bannerSP} label="SINGAPORE" />
      <SectionOurPartners />
      <SectionClientsSample />
      <SectionQuestions />
    </>
  );
};
