import { ResponsiveBar } from '@nivo/bar';
import Typography from '@mui/material/Typography';
import {
    Card,
    useTheme,
    CardContent
  } from "@mui/material";

const BarChart = ({ title, data, keys}) => {
    const theme = useTheme();
    return (
      <Card elevation={1} sx={{ width: "100%", height: "100%", borderBottom: "3px solid blue" }}>
        <CardContent sx={{ width: "100%", height: "100%" }}>
          <Typography variant="h1">{title}</Typography>
          <ResponsiveBar
            data={data}
            // keys={["degress", "degress1", "degress2"]}
            keys={keys}
            indexBy="day"
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            padding={0.4}
            valueScale={{ type: "linear" }}
            //   colors="#3182CE,#382CE"
            colors={{ scheme: "dark2" }}
            animate={true}
            enableLabel={false}
            axisTop={null}
            axisRight={null}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Cases",
              legendPosition: "middle",
              legendOffset: -40,
            }}
          />
        </CardContent>
      </Card>
    );
}

export default BarChart;
