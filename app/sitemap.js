import { site } from "@/lib/site";
export default function sitemap() {
  return ["", "/gallery", "/location"].map((p) => ({ url: `${site.url}${p}` }));
}
