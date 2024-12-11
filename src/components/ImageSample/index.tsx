export const ImageSample = (ImgUrl: string, label: string, aspectRatio: string) => (
  <img prop:src={ImgUrl} prop:alt={label} style={{ 'aspect-ratio': aspectRatio }} />
);
