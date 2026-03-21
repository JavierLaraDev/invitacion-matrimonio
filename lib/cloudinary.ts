export const cld = (img: string, w: number, q: string = "auto") =>
  `https://res.cloudinary.com/dncrzrttk/image/upload/f_auto,q_${q},w_${w}/${img}`;

export const cldIcon = (img: string) => cld(img, 150);
export const cldFlower = (img: string) => cld(img, 250);
export const cldPhoto = (img: string) => cld(img, 900);