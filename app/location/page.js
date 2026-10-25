import Image from "next/image";
import { site, directionsUrl, embedUrl } from "@/lib/site";
export const metadata = { title: "Find us in Chaukhutiya", description: "Naveen Mobile Shop is near I ❤ Chaukhutiya. Open the map, get directions or call us.", alternates: { canonical: "/location" } };
export default function Location() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 pt-32">
      <h1 className="font-display text-4xl font-extrabold md:text-6xl">Find us in Chaukhutiya</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-5 rounded-3xl bg-[var(--card-bg)] p-7">
          <div><p className="font-bold">Address</p><p className="opacity-75">{site.address}</p></div>
          <div><p className="font-bold">Opening hours</p><p className="opacity-75">{site.hours}</p></div>
          <div className="flex flex-col gap-3 pt-2">
            <a href={directionsUrl} target="_blank" rel="noopener" className="btn btn-main">📍 Take me to shop</a>
            <a href={`tel:${site.phone}`} className="btn bg-ink text-white">📞 Call the shop</a>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener" className="btn bg-[#25d366] text-white">WhatsApp us</a>
          </div>
        </div>
        <div className="min-h-[360px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/10">
          <iframe title="Naveen Mobile Shop on Google Maps" src={embedUrl} className="h-full min-h-[360px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </div>
      <div className="mt-6 grid items-center gap-6 rounded-3xl bg-[var(--card-bg)] p-5 md:grid-cols-[1fr_1.2fr] md:p-7">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image src={`/shop/${site.landmark}`} alt="I Love Chaukhutiya sign by the river" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-extrabold md:text-3xl">Look for the I ❤ Chaukhutiya sign</h2>
          <p className="mt-2 opacity-75">Our shop is close to this landmark. If you get lost, call us and we will guide you.</p>
        </div>
      </div>
    </section>
  );
}
