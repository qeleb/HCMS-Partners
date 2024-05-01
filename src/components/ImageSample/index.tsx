export const ImageSample = ([ImgUrl, label, aspectRatio]: [string, string, string]) => (
  <img prop:src={ImgUrl} prop:alt={label} style={{ 'aspect-ratio': aspectRatio }} />
);
