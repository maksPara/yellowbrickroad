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
    <div className="w-11/12 md:w-72">
      <p
        className={cn(
          primary ? 'bg-primary text-amber-50' : 'bg-secondary text-primary',
          'p-2 text-center text-2xl font-bold',
        )}
      >
        {cellHeader}
      </p>
      <p className="text-center text-base">{cellDescription}</p>
    </div>
  );
};

export default GridCell;
