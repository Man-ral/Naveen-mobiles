import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site, directionsUrl } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero-sec relative overflow-hidden px-5 pb-20 pt-32 md:pt-40">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--icon-bg)] opacity-25 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="rise d1 pill inline-block rounded-full px-4 py-1.5 text-sm font-medium">Near I ❤ Chaukhutiya</p>
            <h1 className="font-display rise d2 mt-5 text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Your phone, sorted. Right here in Chaukhutiya.
            </h1>
            <p className="rise d3 mt-5 max-w-lg text-lg opacity-85">Buy new mobiles, pick up accessories, or get a broken phone repaired at Naveen Mobile Shop.</p>
            <div className="rise d4 mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={directionsUrl} target="_blank" rel="noopener" className="btn btn-main">📍 Take me to shop</a>
              <a href={`tel:${site.phone}`} className="btn btn-ghost">Call the shop</a>
            </div>
          </div>
          <div className="rise d3 relative mx-auto w-64 md:w-80">
            <span className="ring absolute inset-0 rounded-[2.5rem] border-2 border-[var(--icon-bg)]" />
            <div className="floaty relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-[6px] border-[var(--nav-bg)] bg-[var(--nav-bg)] shadow-2xl">
              <Image src={`/shop/${site.images[0]}`} alt="Naveen Mobile Shop storefront in Chaukhutiya" fill priority sizes="(max-width:768px) 256px, 320px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">Everything for your phone, under one roof</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {site.services.map((s) => (
            <Reveal key={s.title}>
              <div className="card h-full rounded-3xl bg-[var(--card-bg)] p-7">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--icon-bg)] text-3xl">{s.icon}</div>
                <h3 className="font-display mt-5 text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 opacity-75">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[var(--card-bg)] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-extrabold md:text-5xl">Come say hello</h2>
              <Link href="/gallery" className="btn btn-main">See all photos</Link>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {site.images.slice(1, 7).map((img, i) => (
              <Reveal key={img}>
                <div className="zoom relative aspect-square overflow-hidden rounded-3xl">
                  <Image src={`/shop/${img}`} alt={`Naveen Mobile Shop photo ${i + 1}`} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-20 md:grid-cols-2">
        <Reveal>
          <a href={site.instagram} target="_blank" rel="noopener" className="card block h-full rounded-3xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] p-8 text-white">
            <p className="text-4xl">📸</p>
            <h3 className="font-display mt-4 text-3xl font-extrabold">New arrivals on Instagram</h3>
            <p className="mt-2 text-white/90">See new phones and offers first. Follow {site.instagramHandle}.</p>
            <span className="btn mt-6 bg-white !text-ink">Open Instagram</span>
          </a>
        </Reveal>
        <Reveal>
          <div className="card h-full rounded-3xl bg-[var(--card-bg)] p-8">
            <p className="text-4xl">📍</p>
            <h3 className="font-display mt-4 text-3xl font-extrabold">Find the shop</h3>
            <p className="mt-2 opacity-75">{site.address}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={directionsUrl} target="_blank" rel="noopener" className="btn btn-main">Take me to shop</a>
              <Link href="/location" className="btn bg-[var(--foot-bg)] text-[var(--foot-text)]">View map</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
