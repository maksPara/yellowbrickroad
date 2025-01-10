import { ReactNode } from 'react';
import { cn } from '../../utils/util';

const Section = ({
  children,
  classNames,
  id,
}: {
  children?: ReactNode;
  classNames?: string;
  id?: string;
}) => {
  return (
    <section
      className={cn(
        'mt-16 shrink-0 snap-start snap-always md:mt-20',
        classNames,
      )}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
