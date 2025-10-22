'use client';
import { Button } from '@/components';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@/icons';
import reviewData from './data.json';
import { useRef } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';

const generateStar = (rating: number) =>
  Array(rating)
    .fill(0)
    .map((_, index) => <StarIcon key={index} className="text-amber-300" />);

const Review = () => {
  const { isMobile } = useMediaQuery();
  const reviewContainerRef = useRef<HTMLDivElement>(null);

  const handleClickPrevious = () => {
    const reviewContainer = reviewContainerRef.current;

    if (reviewContainer) {
      const scrollAmount = reviewContainer.clientWidth;
      reviewContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleClickNext = () => {
    const reviewContainer = reviewContainerRef.current;

    if (reviewContainer) {
      const scrollAmount = reviewContainer.clientWidth;
      reviewContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="review" className="w-full relative bg-black overflow-x-hidden">
      <div className="width__wrapper mx-auto h-auto sm:h-[40vh] my-0 sm:my-24 py-12 flex flex-col items-center justify-center">
        <div className="text-white text-center">
          <p>Ulasan</p>
          <h1 className="font-heading leading-tight font-semibold">
            Apa Kata Pelanggan Kami?
          </h1>
        </div>
        <div className="lg:flex lg:items-center lg:justify-center">
          {!isMobile && (
            <Button
              variant="ghost"
              className="text-white"
              onClick={handleClickPrevious}
            >
              <ChevronLeftIcon className="size-10" />
            </Button>
          )}
          <div
            ref={reviewContainerRef}
            id="comment__container"
            className="flex w-full lg:w-4/5 h-auto overflow-x-scroll scroll-smooth"
          >
            {reviewData.map((review) => (
              <article
                key={review.name}
                className="w-full space-y-2 shrink-0 flex flex-col justify-center items-center text-white my-4 px-3 lg:px-6"
              >
                <p className="flex space-x-1">{generateStar(review.rating)}</p>
                <p className="w-2/5 lg:w-4/5 text-center px-4 sm:px-0 break-words hyphens-auto">
                  {review.comment}
                </p>
                <span className="text-xl lg:text-base">{review.name}</span>
              </article>
            ))}
          </div>
          {!isMobile && (
            <Button
              variant="ghost"
              className="text-white"
              onClick={handleClickNext}
            >
              <ChevronRightIcon className="size-10" />
            </Button>
          )}

          {isMobile && (
            <div className="mx-auto mt-12 flex justify-center items-center space-x-4">
              <Button
                variant="ghost"
                aria-label="Sebelumnya"
                className="text-white border border-white/30 rounded-full h-12 w-12 transition duration-150 ease-out hover:bg-white/10 active:scale-95 active:bg-amber-600 active:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
                onClick={handleClickPrevious}
              >
                <ChevronLeftIcon className="size-10" />
              </Button>
              <Button
                variant="ghost"
                aria-label="Berikutnya"
                className="text-white border border-white/30 rounded-full h-12 w-12 transition duration-150 ease-out hover:bg-white/10 active:scale-95 active:bg-amber-600 active:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
                onClick={handleClickNext}
              >
                <ChevronRightIcon className="size-10" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Review;
