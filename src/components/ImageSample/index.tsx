const enum PROPS { IMG_URL, LABEL, ASPECT_RATIO } //prettier-ignore

export const ImageSample = (props: [ImgUrl: string, label: string, aspectRatio: string]) => (
  <img
    prop:src={/* @once*/ props[PROPS.IMG_URL]}
    alt={/* @once*/ props[PROPS.LABEL]}
    style={/* @once*/ { 'aspect-ratio': props[PROPS.ASPECT_RATIO] }}
  />
);
