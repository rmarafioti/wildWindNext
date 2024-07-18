import Image from "next/image";
import tattoocardstyles from "../styles/richtats.module.css";
/**
 *
 * @TattooCard holds each individual tattoo to be mapped through for the thumbnail gallery and is imported into tattoo artist gallery components
 */
export default function TattooCard({ tattoo, onClick, photos }) {
  /*const imageUrl = new URL(tattoo.image, import.meta.url).href;*/
  const imageUrl = tattoo.image;

  return (
    <Image
      className={tattoocardstyles.indicator}
      src={imageUrl}
      alt="Tattoo"
      quality={75}
      width={1350}
      height={1800}
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 100%"
      onClick={() => onClick(photos.indexOf(tattoo))}
    />
  );
}
