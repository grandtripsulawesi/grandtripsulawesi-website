import type { Metadata } from 'next';
import { Noto_Sans, Tomorrow } from 'next/font/google';
import './globals.css';
import { Footer, Topbar } from '@/components';
import Faq from './_faq';
import {
  homepageMetadata,
  homepageSchema,
  localBusinessSchema,
} from '@/lib/seoConfig';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

const tomorrow = Tomorrow({
  variable: '--font-tomorrow',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  ...homepageMetadata,
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homepageSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${notoSans.variable} ${tomorrow.variable} antialiased relative`}
      >
        <GoogleAnalytics />
        <Topbar />
        {children}
        <Faq />
        <Footer />
      </body>
    </html>
  );
}
