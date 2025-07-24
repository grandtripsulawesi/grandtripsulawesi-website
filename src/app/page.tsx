import About from './_about';
import Benefit from './_benefit';
import Faq from './_faq';
import Fleet from './_fleet';
import Gallery from './_gallery';
import Hero from './_hero';
import Review from './_review';
import Service from './_service';
import Blog from './blog';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between font-sans">
      <Hero />
      <About />
      <Benefit />
      <Fleet />
      <Service />
      <Review />
      <Gallery />
      <Blog />
      <Faq />
    </main>
  );
}
