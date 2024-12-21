import Heading from './ui/Heading';
import Section from './ui/Section';
import GridCell from './ui/GridCell';

const gridContent = [
  {
    cellHeader: '8 weeks',
    cellDescription: 'the average time to complete a project',
  },
  {
    cellHeader: '25%',
    cellDescription: 'of the candidates we present get the offer',
    primary: false,
  },
  {
    cellHeader: '8',
    cellDescription: 'candidates are presented on average to fill a role',
  },
  {
    cellHeader: '90%',
    cellDescription: 'of the candidates we placed are still with our clients',
    primary: false,
  },
  {
    cellHeader: '18',
    cellDescription:
      'years of headhunting expertise from founder Kacper Hołdys, including projects for Microsoft and other global brands',
  },
  {
    cellHeader: '1',
    cellDescription: "guarantee call in four years of our company's history",
    primary: false,
  },
];

const OurNumbers = () => {
  return (
    <Section>
      <Heading text="OUR NUMBERS" />
      <div className="grid grid-cols-1 justify-items-center gap-1 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
        {gridContent.map((cell) => (
          <GridCell
            cellHeader={cell.cellHeader}
            cellDescription={cell.cellDescription}
            primary={cell.primary}
            key={cell.cellDescription}
          />
        ))}
      </div>
    </Section>
  );
};

export default OurNumbers;
