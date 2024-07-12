import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table"
  

const schedule = [
  { day: "Måndag", time: "–", activity: "–" },
  { day: "Tisdag", time: "19:00 - 21:00", activity: "Boxning" },
  { day: "Onsdag", time: "–", activity: "–" },
  { day: "Torsdag", time: "19:00 - 21:00", activity: "Boxning" },
  { day: "Fredag", time: "–", activity: "–" },
  { day: "Lördag", time: "–", activity: "–" },
  { day: "Söndag", time: "13:00 - 15:00	", activity: "Boxning" },
];

const TrainingSchedule = () => {
  return (
    <>
    <h1>Träningsschema</h1>
    <Table>
      <TableCaption>Träningsschema</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >Dag</TableHead>
          <TableHead>Tid</TableHead>
          <TableHead >Aktivitet</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {schedule.map((row, index) => 
          <TableRow key={index}>
            <TableCell className="font-medium">{row.day}</TableCell>
            <TableCell>{row.time}</TableCell>
            <TableCell >{row.activity}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
    </>

  );
};

export default TrainingSchedule;
