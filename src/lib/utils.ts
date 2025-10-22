import { ArmadaType, ExtractParamsValue } from '@/types';
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

export const extractParamsToArmadaType = (
  params: URLSearchParams
): ExtractParamsValue | null => {
  const modal = params.get('modal');
  if (modal !== 'true') return null;

  let armada = {} as ArmadaType | {};
  let armadaDetail = {
    person: 0,
    rental: { allin: 0, basic: 0 },
    transmission: '',
  } as ArmadaType['armadaDetail'];

  params.forEach((value, key) => {
    if (!value) return null;

    if (key === 'person')
      return (armadaDetail = { ...armadaDetail, person: parseInt(value, 10) });

    if (key === 'transmission')
      return (armadaDetail = { ...armadaDetail, transmission: value });

    if (key === 'basicFee') {
      return (armadaDetail = {
        ...armadaDetail,
        rental: { ...armadaDetail.rental, basic: parseInt(value, 10) },
      });
    }

    if (key === 'allinFee') {
      return (armadaDetail = {
        ...armadaDetail,
        rental: { ...armadaDetail.rental, allin: parseInt(value, 10) },
      });
    }

    armada = { ...armada, [key]: value };
  });

  return { ...armada, armadaDetail };
};

export const clearDialogParams = (params: URLSearchParams) => {
  let clearedObject = {};
  params.forEach((value, key) => {
    clearedObject = { ...clearedObject, [key]: '' };
  });

  return clearedObject;
};

export const chatToWhatsapp = (whatsappMessage: string) => {
  // const whatsappUrl = `https://wa.me/6281337873707?text=${encodeURIComponent(
  //   whatsappMessage
  // )}`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=6281337873707&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, '_blank');
};
