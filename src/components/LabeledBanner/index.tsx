import styles from '@/components/LabeledBanner/LabeledBanner.module.scss';

export const LabeledBanner = (props: { bannerImgUrl: string; bannerLabel: string }) => (
  <div class={styles.LabeledBanner}>
    <span>{/* @once */ props.bannerLabel}</span>
    <img prop:src={/* @once */ props.bannerImgUrl} alt={/* @once */ props.bannerLabel} />
  </div>
);
