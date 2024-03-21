import bannerMA from '@/assets/bannerMA.jpg';
import { LabeledBanner } from '@/components/LabeledBanner';
import styles from '@/pages/Services/Services.module.scss';
import { setPageTitle } from '@/utils/pageTitle';

export const Services = () => {
  setPageTitle('Services');

  return (
    <div class={styles.Services}>
      <LabeledBanner bannerImgUrl={bannerMA} label="KUALA LUMPUR, MALAYSIA" />
    </div>
  );
};
