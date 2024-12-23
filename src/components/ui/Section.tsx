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
    <section className={cn('mt-20 md:mt-24', classNames)} id={id}>
      {children}
    </section>
  );
};

export default Section;
