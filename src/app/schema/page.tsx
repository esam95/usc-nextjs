import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/table';

const schedule = [
  { day: 'Måndag', time: '–', activity: '–' },
  { day: 'Tisdag', time: '19:00 - 21:00', activity: 'Boxning' },
  { day: 'Lördag', time: '19:00 – 20:30', activity: 'Fys' },
  { day: 'Torsdag', time: '19:00 - 21:00', activity: 'Boxning' },
  { day: 'Fredag', time: '–', activity: '–' },
  { day: 'Lördag', time: '13:30 – 15:00', activity: 'Fys' },
  { day: 'Söndag', time: '13:00 - 15:00	', activity: 'Boxning' },
];

const TrainingSchedule = () => {
  return (
    <main className='pt-36 flex flex-col items-center min-w-full py-8 px-4 mt-0 sm:px-6 lg:px-8 min-h-screen'>
      <h1 className='font-extrabold tracking-tight text-secondary-foreground lg:text-5xl mb-8'>
        Träningstider
      </h1>
      <Card className='w-full max-w-3xl shadow-xl rounded-lg'>
        <CardHeader className='bg-secondary text-secondary-foreground rounded-t-lg p-6'>
          <CardTitle className='text-3xl font-bold'>Veckoschema</CardTitle>
          <CardDescription className='mt-2'>
            Här är vårt nuvarande träningsschema för veckan. (OBS, tider kan variera!)<br/>
            <strong>Plats: Kvarnbacka BP (Jyllandsgatan 3, 164 47 Kista)</strong>
            </CardDescription>
        </CardHeader>
        <CardContent className='p-6'>
          <Table className='min-w-full'>
            <TableHeader>
              <TableRow className='border-b-2 border-gray-200'>
                <TableHead className='py-3 px-6 text-left'>Dag</TableHead>
                <TableHead className='py-3 px-6 text-left'>Tid</TableHead>
                <TableHead className='py-3 px-6 text-left'>Aktivitet</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((row, index) => (
                <TableRow key={index} className='border-b last:border-0'>
                  <TableCell className='py-4 px-6 font-medium text-muted-foreground'>{row.day}</TableCell>
                  <TableCell className='py-4 px-6'>{row.time}</TableCell>
                  <TableCell className='py-4 px-6'>{row.activity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
};

export default TrainingSchedule;
