import { ReactNode } from 'react';
import {
  Card as UICard,
  CardAction as UICardAction,
  CardContent as UICardContent,
  CardFooter as UICardFooter,
  CardHeader as UICardHeader,
  CardTitle as UICardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export type CardType<T = unknown> = {
  className?: string;
  title: string;
  action: ReactNode;
  content: ReactNode | string;
  footer: (data: T) => ReactNode;
  footerData: T;
};

const Card = <T,>({
  className,
  title,
  action,
  content,
  footer,
  footerData,
}: CardType<T>) => {
  return (
    <UICard
      className={cn(
        'w-[259px] h-[281px] bg-slate-400/10 border-0 shadow-none',
        className
      )}
    >
      <UICardHeader className="flex items-center justify-between">
        <UICardTitle className="font-heading capitalize">{title}</UICardTitle>
        <UICardAction className="flex items-center justify-center">
          {action}
        </UICardAction>
      </UICardHeader>
      <UICardContent>{content}</UICardContent>
      <UICardFooter className="mt-auto">{footer(footerData)}</UICardFooter>
    </UICard>
  );
};

export default Card;
