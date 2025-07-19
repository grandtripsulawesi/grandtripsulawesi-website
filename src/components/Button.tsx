import { Button as UIButton } from '@/components/ui/button';
import { MouseEventHandler, ReactNode } from 'react';

type variantsValue =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

interface ButtonType {
  className?: string;
  variant?: variantsValue;
  children: ReactNode | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ className, variant, children, onClick }: ButtonType) => {
  return (
    <UIButton className={className} variant={variant} onClick={onClick}>
      {children}
    </UIButton>
  );
};

export default Button;
