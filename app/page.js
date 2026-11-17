import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button, buttonVariants } from "@/components/ui/button";
import { site, directionsUrl } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero-sec hero-section relative overflow-hidden px-5 pb-20 pt-32 md:pt-40">
        <Image
          src="/shop/i2.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content mx-auto w-full max-w-6xl">
          <div className="max-w-2xl">
            <p className="rise d1 pill inline-block rounded-full px-4 py-1.5 text-sm font-medium">Near I ❤ Chaukhutiya</p>
            <h1 className="hero-title font-display rise d2 mt-5 text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Your phone, sorted. Right here in Chaukhutiya.
            </h1>
            <p className="hero-copy rise d3 mt-5 max-w-lg text-lg opacity-85">Buy new mobiles, pick up accessories, or get a broken phone repaired at Naveen Mobile Shop.</p>
            <div className="hero-actions rise d4 mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={directionsUrl} target="_blank" rel="noopener"><MapPin size={18} aria-hidden="true" />Take me to shop</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${site.phone}`}><Phone size={17} aria-hidden="true" />Call the shop</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <h2 className="section-title font-display text-3xl font-extrabold md:text-5xl">Everything for your phone, under one roof</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {site.services.map((s) => (
            <Reveal key={s.title}>
              <div className="service-card card h-full rounded-3xl bg-[var(--card-bg)] p-7">
                <div className="service-icon grid h-14 w-14 place-items-center rounded-2xl bg-[var(--icon-bg)] text-3xl">{s.icon}</div>
                <h3 className="font-display mt-5 text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 opacity-75">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="gallery-section px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-extrabold md:text-5xl">Come say hello</h2>
              <Button asChild>
                <Link href="/gallery">See all photos<ArrowUpRight size={17} aria-hidden="true" /></Link>
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {site.images.slice(1, 7).map((img, i) => (
              <Reveal key={img}>
                <div className="photo-card zoom relative aspect-square overflow-hidden rounded-3xl">
                  <Image src={`/shop/${img}`} alt={`Naveen Mobile Shop photo ${i + 1}`} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact mx-auto grid max-w-6xl gap-5 px-5 py-20 md:grid-cols-2">
        <Reveal>
          <a href={site.instagram} target="_blank" rel="noopener" className="contact-card instagram-card card block h-full rounded-3xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] p-8 text-white">
            <p className="text-4xl">📸</p>
            <h3 className="font-display mt-4 text-3xl font-extrabold">New arrivals on Instagram</h3>
            <p className="mt-2 text-white/90">See new phones and offers first. Follow {site.instagramHandle}.</p>
            <span className={buttonVariants({ variant: "contrast", className: "mt-6 pointer-events-none" })}>Open Instagram<ArrowUpRight size={17} aria-hidden="true" /></span>
          </a>
        </Reveal>
        <Reveal>
          <div className="contact-card card h-full rounded-3xl bg-[var(--card-bg)] p-8">
            <p className="text-4xl">📍</p>
            <h3 className="font-display mt-4 text-3xl font-extrabold">Find the shop</h3>
            <p className="mt-2 opacity-75">{site.address}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild><a href={directionsUrl} target="_blank" rel="noopener"><MapPin size={17} aria-hidden="true" />Take me to shop</a></Button>
              <Button asChild variant="contrast"><Link href="/location">View map</Link></Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
