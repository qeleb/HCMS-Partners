import bannerUK from '@/assets/banners/bannerUK.jpg';
import { LabeledBanner } from '@/components/LabeledBanner';
import { SectionQuestions } from '@/components/Sections/SectionQuestions';
import styles from '@/pages/WhyChooseUs/WhyChooseUs.module.scss';
import { setPageTitle } from '@/utils/pageTitle';

export const WhyChooseUs = () => {
  setPageTitle('Why Choose Us');

  return (
    <div class={styles.WhyChooseUs}>
      <LabeledBanner bannerImgUrl={bannerUK} label="LONDON, UK" />
      <SectionQuestions />
    </div>
  );
};
