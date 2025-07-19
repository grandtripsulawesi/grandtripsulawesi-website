import About from './_about';
import Benefit from './_benefit';
import Fleet from './_fleet';
import Hero from './_hero';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between font-sans">
      <Hero />
      <About />
      <Benefit />
      <Fleet />
    </main>
  );
}
