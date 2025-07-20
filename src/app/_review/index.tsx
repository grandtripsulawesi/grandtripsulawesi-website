'use client';
import { Button } from '@/components';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@/icons';
import reviewData from './data.json';
import { useRef } from 'react';

const dummyReview = reviewData;

const generateStar = (rating: number) =>
  Array(rating)
    .fill(0)
    .map((_, index) => <StarIcon key={index} className="text-amber-300" />);

const Review = () => {
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
      <div className="width__wrapper mx-auto h-[40vh] my-24 flex flex-col items-center justify-center">
        <div className="text-white text-center">
          <p>Ulasan</p>
          <h1 className="font-heading leading-tight font-semibold">
            Apa Kata Pelanggan Kami?
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <Button
            variant="ghost"
            className="text-white"
            onClick={handleClickPrevious}
          >
            <ChevronLeftIcon className="size-10" />
          </Button>
          <div
            ref={reviewContainerRef}
            id="comment__container"
            className="flex w-4/5 h-auto overflow-x-scroll scroll-smooth"
          >
            {dummyReview.map((review) => (
              <article
                key={review.name}
                className="w-full shrink-0 flex flex-col justify-center items-center text-white my-4 px-6"
              >
                <p className="flex space-x-1">{generateStar(review.rating)}</p>
                <p className="w-4/5 text-center">{review.comment}</p>
                <span>{review.name}</span>
              </article>
            ))}
          </div>
          <Button
            variant="ghost"
            className="text-white"
            onClick={handleClickNext}
          >
            <ChevronRightIcon className="size-10" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Review;
