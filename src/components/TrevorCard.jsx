import Image from "next/image";
import tattoocardstyles from "../styles/richtats.module.css";
/**
 *
 * @TattooCard holds each individual tattoo to be mapped through for the thumbnail gallery and is imported into tattoo artist gallery components. There are currenty two differnt cards to account for differt image sizing of each gallery.
 */

export default function trevorCard({ tattoo, onClick, photos }) {
  const imageUrl = tattoo.image;

  return (
    <Image
      className={tattoocardstyles.indicator}
      src={imageUrl}
      alt="Tattoo"
      quality={75}
      width={3185}
      height={4247}
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 100%"
      onClick={() => onClick(photos.indexOf(tattoo))}
    />
  );
}
