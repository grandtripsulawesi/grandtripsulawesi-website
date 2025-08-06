import Image from 'next/image';

export const Icon = ({
  url,
  alt = 'Icon',
  width,
  height,
  className,
}: {
  url: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}) => {
  const iconWidth = width;
  const iconHeight = height;

  return (
    <Image
      src={url}
      alt={alt}
      width={iconWidth}
      height={iconHeight}
      className={className}
    />
  );
};

export default Icon;
