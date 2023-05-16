// ** MUI Imports
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

import Stack from "@mui/material/Stack";
import { Switch } from "@mui/material";

const LoadingSkeleton = (props) => {
  const { type, count } = props;
  var objhtml = [];
  //const objhtml1=[]  ;
  var list = []
  var list1 = []
  var list2 = []
  var list3 = []
  var list4 = []
  console.log(type);
  console.log(count);

  switch (type) {
    case "summarycount":
      for (let i = 0; i < count; i++) {
        list.push(<Skeleton variant="circular" width={60} height={60} />)
      }
      objhtml.push(<Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}> {list} </Grid>);
      break;

    case "listfaq":
      for (let i = 0; i < count; i++) {
        list.push(<Skeleton variant="text" sx={{ fontSize: "2rem" }} />)
      }
      objhtml.push(<Grid sx={{ display: "flex", flexDirection: "column" }}> {list} </Grid>);
      break;

    case "chatlist":
      list2.push(<Skeleton variant="circular" width={40} height={40} />);
      for (let i = 0; i < 3; i++) {
        list.push(<Skeleton variant="text" sx={{ fontSize: "1rem" }} />)
      }
      list1.push(<Stack sx={{ pl: 2, pr: 5, display: "flex", flexDirection: "column", width: '100%' }}>{list}</Stack>);
      list2.push(<Grid sx={{ width: '100%' }}>{list1}</Grid>);
      for (let i = 0; i < count; i++) {
        objhtml.push(<Stack sx={{ pl: 3, display: "flex", flexDirection: "row", width: '100%', marginTop: 6, marginBottom: 6 }}>{list2}</Stack>)
      }
      break;

    case "message":
      list2.push(<Skeleton variant="circular" width={40} height={40} />);
      for (let i = 0; i < 3; i++) {
        list.push(<Skeleton variant="text" sx={{ fontSize: "1rem" }} />)
      }
      list1.push(<Stack sx={{ pl: 2, pr: 5, display: "flex", flexDirection: "column", width: '100%' }}>{list}</Stack>);
      list2.push(<Grid sx={{ width: '100%' }}>{list1}</Grid>);

      list4.push(<Skeleton variant="circular" width={40} height={40} />);
      list3.push(<Stack sx={{ display: "flex", flexDirection: "column", width: '100%' }}>{list}</Stack>);
      list3.push(<Stack sx={{ display: "flex", flexDirection: "row" }}>{list4}</Stack>);
      for (let i = 0; i < count; i++) {
        objhtml.push(<Stack sx={{ pl: 3, display: "flex", flexDirection: "row", width: '100%', marginTop: 6, marginBottom: 6 }}>{list2}</Stack>)
        objhtml.push(<Stack sx={{ pr: 3, display: "flex", flexDirection: "row", width: '100%' }}>{list3}</Stack>)
      }
      break;
  }

  return (
    <Grid sx={{ width: '100%' }} >
      {objhtml}
    </Grid>
  );
};

export default LoadingSkeleton;
