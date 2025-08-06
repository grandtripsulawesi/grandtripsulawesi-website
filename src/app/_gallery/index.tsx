import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="w-full mt-24">
      <div className="width__wrapper mx-auto">
        <div className="text-center">
          <p>Mengapa memilih kami?</p>
          <h1 className="font-semibold font-heading">
            Berkomitmen Untuk Kualitas Terbaik
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Image
                key={'gallery-' + index}
                alt="gallery collection"
                src={'/images/gallery/gallery_illustration.webp'}
                width={367}
                height={377}
                className="rounded-xl w-full min-h-full lg:h-80 object-cover"
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
