import About from './_about';
import Hero from './_hero';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between font-sans">
      {/* hero */}
      <Hero />
      {/* rest of sections */}
      <About />
      {/* footer */}
    </main>
  );
}
