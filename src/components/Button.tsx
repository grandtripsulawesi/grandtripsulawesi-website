import { Button as UIButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

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

const Button = ({
  className,
  variant,
  children,
  onClick,
  ...rest
}: ButtonType & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <UIButton
      {...rest}
      className={cn('hover:cursor-pointer', className)}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </UIButton>
  );
};

export default Button;
