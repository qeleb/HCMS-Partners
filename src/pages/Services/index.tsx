import bannerMA from '@/assets/banners/bannerMA.jpg';
import { LabeledBanner } from '@/components/LabeledBanner';
import { SectionQuestions } from '@/components/Sections/SectionQuestions';
import { SectionServices } from '@/components/Sections/SectionServices';
import { SectionServicesList } from '@/components/Sections/SectionServicesList';
import { setPageTitle } from '@/utils/pageTitle';

export const Services = () => {
  setPageTitle('Services');

  return (
    <>
      <LabeledBanner bannerImgUrl={bannerMA} bannerLabel="KUALA LUMPUR, MALAYSIA" />
      <SectionServices />
      <SectionServicesList />
      <SectionQuestions />
    </>
  );
};
