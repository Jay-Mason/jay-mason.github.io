import type { PropsWithChildren } from 'react';

type IconLinkProps = PropsWithChildren<{
  href: string;
  className?: string;
  ariaLabel: string;
}>;

export function IconLink({ href, className, ariaLabel, children }: IconLinkProps) {
  const classes = ["portfolio-icon-link", className];

  return (
    <a
      className={classes.join(' ')}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

