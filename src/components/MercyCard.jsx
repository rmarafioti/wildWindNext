import Image from "next/image";
import tattoocardstyles from "../styles/mercytats.module.css";

export default function mercyCard({ tattoo, onClick, photos }) {
  const imageUrl = tattoo.image;

  return (
    <Image
      className={tattoocardstyles.indicator}
      src={imageUrl}
      alt="Tattoo"
      quality={75}
      width={1650}
      height={1627}
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 100%"
      onClick={() => onClick(photos.indexOf(tattoo))}
    />
  );
}
