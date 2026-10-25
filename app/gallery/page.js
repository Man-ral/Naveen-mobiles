import Image from "next/image";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
export const metadata = { title: "Shop photos", description: "Photos of Naveen Mobile Shop in Chaukhutiya: mobiles, accessories and repair counter.", alternates: { canonical: "/gallery" } };
export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 pt-32">
      <h1 className="font-display text-4xl font-extrabold md:text-6xl">Inside Naveen Mobile Shop</h1>
      <p className="mt-3 max-w-xl opacity-70">Drop in and see our latest phones and accessories.</p>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {site.images.map((img, i) => (
          <Reveal key={img}>
            <div className="zoom relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image src={`/shop/${img}`} alt={`Naveen Mobile Shop photo ${i + 1}`} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
