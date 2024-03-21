import bannerUK from '@/assets/bannerUK.jpg';
import { LabeledBanner } from '@/components/LabeledBanner';
import styles from '@/pages/WhyChooseUs/WhyChooseUs.module.scss';
import { setPageTitle } from '@/utils/pageTitle';

export const WhyChooseUs = () => {
  setPageTitle('Why Choose Us');

  return (
    <div class={styles.WhyChooseUs}>
      <LabeledBanner bannerImgUrl={bannerUK} label="LONDON, UK" />
    </div>
  );
};
