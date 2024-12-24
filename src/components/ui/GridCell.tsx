import { cn } from '../../utils/util';

type GridCellProps = {
  cellHeader: string;
  cellDescription: string;
  primary?: boolean;
};

const GridCell = ({
  cellHeader,
  cellDescription,
  primary = true,
}: GridCellProps) => {
  return (
    <div className="md:w-76 w-11/12 sm:w-3/4">
      <p
        className={cn(
          primary ? 'bg-primary text-amber-50' : 'bg-secondary text-primary',
          'rounded p-2 text-center text-2xl font-bold shadow-lg',
        )}
      >
        {cellHeader}
      </p>
      <p className="pt-0.5 text-center text-base">{cellDescription}</p>
    </div>
  );
};

export default GridCell;
