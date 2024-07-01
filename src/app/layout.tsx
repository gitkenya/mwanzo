import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.scss";

const inter = Inter({ subsets: ["latin"] });

const meta: any = {
  title: "Mwanzo Place | Tigoni Limuru Road",
  description: "3228 Tigoni - Limuru Road - hello@mwanzo.co.ke",
  type: "website",
  card: "summary_large_image",
  site: "@mwanzo",
  creator: "@mwanzo",
  images: "/assets/img/meta/icon.png",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
};
export const metadata: Metadata = {
  metadataBase: new URL(meta.url),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  title: {
    template: "%s - Mwanzo Place",
    default: "Mwanzo Place Tigoni - Limuru Road",
  },
  description: meta.description,

  openGraph: {
    title: {
      template: "%s - Mwanzo Place",
      default: "Mwanzo Place Tigoni - Limuru Road",
    },
    description: meta.description,
    type: meta.type,
    images: meta.images,
    url: `${meta.url}`,
    locale: "en_US",
  },
  twitter: {
    title: {
      template: "%s - Mwanzo Place",
      default: "Mwanzo Place Tigoni - Limuru Road",
    },
    description: meta.description,
    card: meta.card,
    site: meta.site,
    creator: meta.creator,
    images: meta.images,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
