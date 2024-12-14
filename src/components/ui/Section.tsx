import { ReactNode } from 'react';
import { cn } from '../../libs/util';

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
    <section className={cn('mt-24', classNames)} id={id}>
      {children}
    </section>
  );
};

export default Section;
