import { describe, expect, it } from "vitest";
import { directionsUrl, embedUrl, site } from "./site.js";

describe("shop contact and location links", () => {
  it("uses the configured shop coordinates for directions and the map", () => {
    const directions = new URL(directionsUrl);
    const map = new URL(embedUrl);

    expect(directions.searchParams.get("destination")).toBe(site.mapQuery);
    expect(map.searchParams.get("q")).toBe(site.mapQuery);
    expect(map.searchParams.get("output")).toBe("embed");
  });

  it("keeps phone and WhatsApp actions pointed at the same shop number", () => {
    expect(site.phone.replace(/\D/g, "")).toBe(site.whatsapp);
  });

  it("includes the landmark photo in the shop gallery", () => {
    expect(site.images).toContain(site.landmark);
  });
});
