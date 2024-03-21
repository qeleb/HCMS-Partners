import styles from '@/components/LabeledBanner/LabeledBanner.module.scss';

export const LabeledBanner = (props: { bannerImgUrl: string; label: string }) => (
  <div class={styles.LabeledBanner}>
    <span>{/* @once */ props.label}</span>
    <img prop:src={/* @once */ props.bannerImgUrl} alt={/* @once */ props.label} />
  </div>
);
