import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};

export function PrimaryButton({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = ["btn"];

  if (variant === 'primary') {
    classes.push('btn-primary');
  } else {
    classes.push('btn-outline-primary');
  }

  if (size === 'lg') {
    classes.push('btn-lg');
  } else if (size === 'sm') {
    classes.push('btn-sm');
  }

  if (className) {
    classes.push(className);
  }

  return (
    <button
      type={type}
      className={classes.join(' ')}
      {...props}
    />
  );
}

