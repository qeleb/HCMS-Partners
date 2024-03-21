import bannerSP from '@/assets/bannerSP.jpg';
import { LabeledBanner } from '@/components/LabeledBanner';
import styles from '@/pages/Partners/Partners.module.scss';
import { setPageTitle } from '@/utils/pageTitle';

export const Partners = () => {
  setPageTitle('Our Clients & Partners');

  return (
    <div class={styles.Partners}>
      <LabeledBanner bannerImgUrl={bannerSP} label="SINGAPORE" />
    </div>
  );
};
