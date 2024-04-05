import bannerMA from '@/assets/banners/bannerMA.jpg';
import { LabeledBanner } from '@/components/LabeledBanner';
import { SectionQuestions } from '@/components/Sections/SectionQuestions';
import { SectionServices } from '@/components/Sections/SectionServices';
import { SectionServicesList } from '@/components/Sections/SectionServicesList';
import styles from '@/pages/Services/Services.module.scss';
import { setPageTitle } from '@/utils/pageTitle';

export const Services = () => {
  setPageTitle('Services');

  return (
    <div class={styles.Services}>
      <LabeledBanner bannerImgUrl={bannerMA} label="KUALA LUMPUR, MALAYSIA" />
      <SectionServices />
      <SectionServicesList />
      <SectionQuestions />
    </div>
  );
};
