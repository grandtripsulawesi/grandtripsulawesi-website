import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const smoothScrollToElement = (
  elementId: string,
  duration: number = 1200,
  offset: number = -80
) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const startY = window.scrollY || window.pageYOffset;
  const targetY = element.getBoundingClientRect().top + startY + offset;
  const distance = targetY - startY;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);
    if (elapsed < duration) window.requestAnimationFrame(step);
  };

  window.requestAnimationFrame(step);
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};
