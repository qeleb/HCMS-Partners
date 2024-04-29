import { ImageSample } from '@/components/ImageSample';
import styles from '@/components/LabeledBanner/LabeledBanner.module.scss';

const enum PROPS { IMG_URL, LABEL, ASPECT_RATIO } //prettier-ignore

export const LabeledBanner = (props: [ImgUrl: string, label: string, aspectRatio: string]) => (
  <div class={styles.LabeledBanner}>
    <span>{/* @once */ props[PROPS.LABEL]}</span>
    <ImageSample {...[props[PROPS.IMG_URL], props[PROPS.LABEL], props[PROPS.ASPECT_RATIO]]} />
  </div>
);
