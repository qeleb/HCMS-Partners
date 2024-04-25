import styles from '@/components/LabeledBanner/LabeledBanner.module.scss';

export const LabeledBanner = (props: { bannerImgUrl: string; bannerLabel: string; aspectRatio: string }) => (
  <div class={styles.LabeledBanner}>
    <span>{/* @once */ props.bannerLabel}</span>
    <img
      prop:src={/* @once */ props.bannerImgUrl}
      prop:alt={/* @once */ props.bannerLabel}
      style={/* @once */ { 'aspect-ratio': props.aspectRatio }}
    />
  </div>
);
