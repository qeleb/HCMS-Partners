import bannerUK from '@/assets/banners/bannerUK.jpg';
import { LabeledBanner } from '@/components/LabeledBanner';
import { SectionCompanyHistory } from '@/components/Sections/SectionCompanyHistory';
import { SectionQuestions } from '@/components/Sections/SectionQuestions';
import { SectionThePartners } from '@/components/Sections/SectionThePartners';
import { SectionVision } from '@/components/Sections/SectionVision';
import { SectionWeProvide } from '@/components/Sections/SectionWeProvide';
import { setPageTitle } from '@/utils/pageTitle';

export const WhyChooseUs = () => {
  setPageTitle('Why Choose Us');

  return (
    <>
      <LabeledBanner bannerImgUrl={bannerUK} bannerLabel="LONDON, UK" />
      <SectionThePartners />
      <SectionCompanyHistory />
      <SectionVision />
      <SectionWeProvide />
      <SectionQuestions />
    </>
  );
};
