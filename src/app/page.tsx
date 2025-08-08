import About from './_about';
import Benefit from './_benefit';
import Fleet from './_fleet';
import Gallery from './_gallery';
import Hero from './_hero';
import Review from './_review';
import Service from './_service';
import Blog from './blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GrandTrip Sulawesi',
};

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between font-sans">
      <Hero />
      <About />
      <Benefit />
      {/* <Fleet /> */}
      {/* <Service /> */}
      {/* <Review /> */}
      {/* <Gallery /> */}
      {/* <Blog /> */}
    </main>
  );
}
