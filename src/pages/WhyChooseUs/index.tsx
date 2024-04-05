import bannerUK from '@/assets/banners/bannerUK.jpg';
import { LabeledBanner } from '@/components/LabeledBanner';
import { SectionQuestions } from '@/components/Sections/SectionQuestions';
import { setPageTitle } from '@/utils/pageTitle';

export const WhyChooseUs = () => {
  setPageTitle('Why Choose Us');

  return (
    <>
      <LabeledBanner bannerImgUrl={bannerUK} label="LONDON, UK" />
      <SectionQuestions />
    </>
  );
};
