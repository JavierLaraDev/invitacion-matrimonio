export const cld = (
  img: string,
  width: number,
  quality: number = 80
) => {
  return `https://res.cloudinary.com/dncrzrttk/image/upload/f_auto,q_${quality},dpr_auto,c_limit,w_${width}/${img}`;
};

/* ICONOS */
export const cldIcon = (img: string) => cld(img, 120);

/* FLORES */
export const cldFlower = (img: string) => cld(img, 200);

/* FOTOS ALBUM */
export const cldPhoto = (img: string) => cld(img, 600);

/* HERO */
export const cldHero = (img: string) => cld(img, 1200);

/* FULL WIDTH */
export const cldFull = (img: string) => cld(img, 1600);