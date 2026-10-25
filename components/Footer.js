import Link from "next/link";
import { site, directionsUrl } from "@/lib/site";
export default function Footer() {
  return (
    <>
      <footer className="bg-[var(--foot-bg)] px-5 pb-28 pt-14 text-[var(--foot-text)] md:pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-extrabold">{site.name}</p>
            <p className="mt-3 max-w-xs text-[var(--foot-text)]/70">Mobiles, accessories and phone repair in Chaukhutiya.</p>
          </div>
          <div className="space-y-2 text-[var(--foot-text)]/80">
            <p className="font-bold text-[var(--foot-text)]">Visit us</p>
            <p>{site.address}</p>
            <p>{site.hours}</p>
          </div>
          <div className="space-y-2 text-[var(--foot-text)]/80">
            <p className="font-bold text-[var(--foot-text)]">Get in touch</p>
            <a className="block hover:text-[var(--logo)]" href={`tel:${site.phone}`}>Call {site.phone}</a>
            <a className="block hover:text-[var(--logo)]" href={`https://wa.me/${site.whatsapp}`}>WhatsApp us</a>
            <a className="block hover:text-[var(--logo)]" href={site.instagram} target="_blank" rel="noopener">Instagram {site.instagramHandle}</a>
            <a className="block hover:text-[var(--logo)]" href={directionsUrl} target="_blank" rel="noopener">Get directions</a>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-white/15 pt-6 text-sm text-[var(--foot-text)]/50">© {site.name}. <Link href="/location" className="underline">Find us</Link><br></br>Made with <span className="text-red-500">♥</span> by manral</p>
      </footer>
      <div className="fixed inset-x-3 bottom-3 z-50 flex gap-2 rounded-full bg-white p-2 shadow-2xl ring-1 ring-black/10 md:hidden">
        <a href={`tel:${site.phone}`} className="btn flex-1 !bg-mist !py-3 !text-ink">📞 Call</a>
        <a href={directionsUrl} target="_blank" rel="noopener" className="btn btn-main flex-[1.4] !py-3">📍 Take me to shop</a>
      </div>
    </>
  );
}
