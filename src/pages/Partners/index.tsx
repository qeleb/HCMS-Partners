import bannerSP from '@/assets/bannerSP.jpg';
import { LabeledBanner } from '@/components/LabeledBanner';
import { SectionClientsSample } from '@/components/Sections/SectionClientsSample';
import { SectionOurPartners } from '@/components/Sections/SectionOurPartners';
import { SectionQuestions } from '@/components/Sections/SectionQuestions';
import styles from '@/pages/Partners/Partners.module.scss';
import { setPageTitle } from '@/utils/pageTitle';

export const Partners = () => {
  setPageTitle('Our Clients & Partners');

  return (
    <div class={styles.Partners}>
      <LabeledBanner bannerImgUrl={bannerSP} label="SINGAPORE" />
      <SectionOurPartners />
      <SectionClientsSample />
      <SectionQuestions />
    </div>
  );
};
