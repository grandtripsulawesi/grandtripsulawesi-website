import { Button as UIButton } from '@/components/ui/button';
import { ReactNode } from 'react';

type variantsValue =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

const Button = ({
  className,
  variant,
  children,
}: {
  className?: string;
  variant?: variantsValue;
  children: ReactNode | string;
}) => {
  return (
    <UIButton className={className} variant={variant}>
      {children}
    </UIButton>
  );
};

export default Button;
