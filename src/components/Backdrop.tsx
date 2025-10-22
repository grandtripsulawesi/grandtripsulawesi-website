import { cn } from '@/lib/utils';

const Backdrop = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'absolute z-30 w-full h-full overflow-hidden bg-gradient-to-b from-gray-600 opacity-30',
        className
      )}
    ></div>
  );
};

export default Backdrop;
