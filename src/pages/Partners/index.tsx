import bannerSP from '@/assets/banners/bannerSP.jpg';
import { LabeledBanner } from '@/components/LabeledBanner';
import { SectionClientsSample } from '@/components/Sections/SectionClientsSample';
import { SectionPartnersSample } from '@/components/Sections/SectionPartnersSample';
import { SectionQuestions } from '@/components/Sections/SectionQuestions';
import { setPageTitle } from '@/utils/pageTitle';

export const Partners = () => {
  setPageTitle('Our Clients & Partners');

  return (
    <>
      <LabeledBanner bannerImgUrl={bannerSP} bannerLabel="SINGAPORE" aspectRatio="1024/467" />
      <SectionPartnersSample />
      <SectionClientsSample />
      <SectionQuestions />
    </>
  );
};
