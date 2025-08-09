'use client';
import { Button } from '@/components';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@/icons';
import reviewData from './data.json';
import { useRef } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';

const dummyReview = reviewData;

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
    <section className="w-full relative bg-black">
      <div className="width__wrapper mx-auto h-dvh sm:h-[40vh] my-0 sm:my-24 flex flex-col items-center justify-center">
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
            className="flex lg:w-4/5 h-auto overflow-x-scroll scroll-smooth"
          >
            {dummyReview.map((review) => (
              <article
                key={review.name}
                className="w-full space-y-2 shrink-0 flex flex-col justify-center items-center text-white my-4 px-3 lg:px-6"
              >
                <p className="flex space-x-1">{generateStar(review.rating)}</p>
                <p className="w-full lg:w-4/5 text-center">{review.comment}</p>
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
                className="text-white border rounded-full"
                onClick={handleClickPrevious}
              >
                <ChevronLeftIcon className="size-10" />
              </Button>
              <Button
                variant="ghost"
                className="text-white border rounded-full"
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
