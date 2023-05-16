import { Line } from "react-chartjs-2";
import Typography from '@mui/material/Typography';
import {
    Card,
    CardContent
  } from "@mui/material";

export const LineChart = ({ chartData, title }) => {
  console.log(chartData);
  return (
    <Card elevation={1} sx={{ width: "100%", height: "100%"}}>
      <Typography sx={{p:2, fontSize:18, fontWeight:500}}>{title}</Typography>
      <CardContent sx={{width:'100%',height: "100%"}}>
        <Line
          data={chartData}
          options={{
            plugins: {
              // title: {
              //   display: false,
              //   text: "Users Gained between 2016-2020"
              // },
              legend: {
                display: true
              }
            }
          }}
        />
      </CardContent>
    </Card>
  );
};

