// ✏️ EDIT YOUR DETAILS HERE – the whole website reads from this one file.
export const site = {
  name: "Naveen Mobile Shop",
  url: "https://YOUR-SITE.vercel.app", // change after deploying
  phone: "+919760669030",              // from your shop signboard (2nd number: 7579065659)
  whatsapp: "919760669030",            // number with 91, no + sign
  instagram: "https://www.instagram.com/negi_telecom?psln=MWRqMnI1eWx5YmtjdQ==", // TODO
  instagramHandle: "@negi_telecom",       // TODO
  address: "Near I ❤ Chaukhutiya, Chaukhutiya, Uttarakhand", // TODO: verify
  hours: "Every day, 9:00 AM – 9:00 PM", // TODO
  mapQuery: "29.885015,79.351228",
  services: [
    { icon: "📱", title: "New mobiles", text: "Latest smartphones and keypad phones from trusted brands at fair prices." },
    { icon: "🎧", title: "Accessories", text: "Chargers, cables, earphones, covers, tempered glass and power banks." },
    { icon: "🛠️", title: "Phone repair", text: "Broken screen, battery, charging port or software issue? We fix it fast." },
    { icon: "🔁", title: "Recharge & SIM port", text: "Jio, Airtel, Vi and BSNL recharge, plus port your SIM to any network (MNP)." },
  ],
  images: Array.from({ length: 11 }, (_, i) => `i${i + 1}.jpg`),
  landmark: "i11.jpg", // the I ❤ Chaukhutiya sign
};
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapQuery)}`;
export const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;


