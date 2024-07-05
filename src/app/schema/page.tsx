import React from "react";
import { 
  Container, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Box } from "@mui/material";

const schedule = [
  { day: "Monday", time: "6:00 PM - 7:30 PM", activity: "Boxing" },
  { day: "Tuesday", time: "6:00 PM - 7:30 PM", activity: "MMA" },
  { day: "Wednesday", time: "6:00 PM - 7:30 PM", activity: "Judo" },
  { day: "Thursday", time: "6:00 PM - 7:30 PM", activity: "Kickboxing" },
  { day: "Friday", time: "6:00 PM - 7:30 PM", activity: "Wrestling" },
  { day: "Saturday", time: "10:00 AM - 12:00 PM", activity: "Open Mat" },
  { day: "Sunday", time: "Closed", activity: "-" },
];

const TrainingSchedule = () => {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Training Schedule
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="training schedule table">
            <TableHead>
              <TableRow>
                <TableCell>Day</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Activity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.day}
                  </TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.activity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default TrainingSchedule;
