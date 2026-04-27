import type { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  title?: string;
  eyebrow?: string;
}>;

export function Section({ id, className, title, eyebrow, children }: SectionProps) {
  const classes = ["portfolio-section"];

  if (className) {
    classes.push(className);
  }

  return (
    <section id={id} className={classes.join(' ')}>
      <div className="container-fluid">
        {(title || eyebrow) && (
          <div className="mb-4">
            {eyebrow && <div className="portfolio-eyebrow">{eyebrow}</div>}
            {title && <h2 className="section-title m-0">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

