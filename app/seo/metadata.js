export const metadataConfig = {
  metadataBase: new URL("https://merge-as4e.vercel.app"),

  title: {
    default: "MERGE Premium Chocolate",
    template: "%s | MERGE Chocolate",
  },

  description:
    "Luxury handcrafted premium chocolates with cinematic presentation and rich flavors.",

  keywords: [
    "premium chocolate",
    "luxury chocolate",
    "dark chocolate",
    "artisan chocolate",
    "MERGE chocolate",
    "cinematic chocolate brand",
    "luxury dessert",
  ],

  authors: [
    {
      name: "MERGE Chocolate",
    },
  ],

  creator: "MERGE Chocolate",

  openGraph: {
    title: "MERGE Premium Chocolate",
    description:
      "Luxury handcrafted premium chocolates with cinematic presentation and rich flavors.",

    url: "https://merge-as4e.vercel.app/",
    siteName: "MERGE Chocolate",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MERGE Premium Chocolate",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MERGE Premium Chocolate",
    description:
      "Luxury handcrafted premium chocolates with cinematic presentation and rich flavors.",

    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};