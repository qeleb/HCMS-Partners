import { ImageSample } from '@/components/ImageSample';
import styles from '@/components/LabeledBanner/LabeledBanner.module.scss';

export const LabeledBanner = ([ImgUrl, label, aspectRatio]: [string, string, string]) => (
  <div class={styles.LabeledBanner}>
    <div>{label}</div>
    {ImageSample(ImgUrl, label, aspectRatio)}
  </div>
);
