import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import { CardHeader, Input } from '@mui/material';
import { border } from '@mui/system';
import TextField from '@mui/material/TextField';

import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Link from '@mui/material/Link';
import DataTable from './DataGrid';
import Autocomplete from '@mui/material/Autocomplete';
import ButtonGroup from '@mui/material/ButtonGroup';
import { blue } from '@mui/material/colors';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'justify',
  color: 'black',
}));

export default function CRDetails() {
  const options = [
    { label: 'One', id: 1 },
    { label: 'Two', id: 2 },
  ];
  const [text, setText] = React.useState("Default Text");
  const name = 'Change Request Details';
  return (
    <Stack>
       <Card sx={{ minWidth: 275}}>
      <Card sx={{ minWidth: 275,marginBottom:3,margin:4}}>
        <Typography sx={{ color:'#808080',textAlign: 'left' }}>Change Request Details</Typography>
        
        <CardContent />
        <Stack>
          <Stack direction="row">
            <Grid direction="row" container xs={12} sx={{ spacing: 1,marginBottom:2,marginLeft:2}}>
              <Grid xs={5.5} >
                
                <Grid direction="row" container xs={12} >
                  <Grid xs={4} sx={{ fontWeight: 'bold', textAlign: 'left', mt: 1}}>CRID</Grid>
                  <Grid  sx={{ textAlign: 'left', mt: 1,fontSize:15}}>:&nbsp;&nbsp;&nbsp;&nbsp;Ap/Fop(Districts)/2023</Grid>
                </Grid>
                
                <Grid direction="row" container xs={12} >
                  <Grid xs={4} sx={{ fontWeight: 'bold', textAlign: 'left', mt: 1 }}>Application Type</Grid>
                  <Grid sx={{ textAlign: 'left', mt: 1 }}>:&nbsp;&nbsp;&nbsp;&nbsp;Dr. YSR Arogyasri Portal </Grid>
                </Grid>
                <Grid direction="row" container xs={12}>
                  <Grid xs={4} sx={{ fontWeight: 'bold', textAlign: 'left', mt: 1 }}>Source Department</Grid>
                  <Grid sx={{ textAlign: 'left', mt: 1 }}>:&nbsp;&nbsp;&nbsp;&nbsp;Field Operations Districts</Grid>
                </Grid>
                <Grid direction="row" container xs={12} >
                  <Grid xs={4} sx={{ fontWeight: 'bold', textAlign: 'left', mt: 1 }}>CR Module</Grid>
                  <Grid sx={{ textAlign: 'left', mt: 1 }}>:&nbsp;&nbsp;&nbsp;&nbsp;Operations</Grid>
                </Grid>
                <Grid direction="row" container xs={12} >
                  <Grid xs={4} sx={{ fontWeight: 'bold', textAlign: 'left', mt: 1 }}>CR Title</Grid>
                  <Grid sx={{ textAlign: 'left', mt: 1 }}>:&nbsp;&nbsp;&nbsp;&nbsp;
                  <TextField
                      type="text"
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      sx={{width:200}}
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                    /></Grid>
                </Grid>
                <Grid direction="row" container xs={12} >
                  <Grid xs={4} sx={{ fontWeight: 'bold', textAlign: 'left', mt: 1 }}>Type of Change</Grid>
                  <Grid sx={{ textAlign: 'left', mt: 1 }}>:&nbsp;&nbsp;&nbsp;&nbsp;Work flow Changes</Grid>
                </Grid>
                <Grid direction="row" container xs={12}>
                  <Grid xs={4} sx={{ fontWeight: 'bold', textAlign: 'left', mt: 1 }}>Supporting Document</Grid>
                  <Grid sx={{ textAlign: 'left', mt: 1 }}>:&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/#/newPage">View/Add attachments</Link></Grid>
                </Grid>
                <Grid direction="row" container xs={12}>
                  <Grid xs={4} sx={{ fontWeight: 'bold', textAlign: 'left', mt: 1 }}>Case Number</Grid>
                  <Grid sx={{ textAlign: 'left', mt: 1 }}>:&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/#/newPage">Case/80/AP3825492</Link></Grid>
                </Grid>
                <Grid direction="row" container xs={12} >
                  <Grid xs={4} sx={{ fontWeight: 'bold', textAlign: 'left', mt: 1 }}>CR Description</Grid>
                  <Grid sx={{ textAlign: 'left', mt: 1 }}>:&nbsp;&nbsp;&nbsp;&nbsp;
                  <TextField
                      type="text"
                      id="outlined-basic"
                      sx={{width:200}}
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                    /></Grid>
                </Grid>

              </Grid>
             
              <Grid xs={6.5} >

                <Grid direction="row" container xs={12} >
                  <Grid xs={3.5} sx={{ fontWeight: 'bold', textAlign: 'left', mt: 1 }}>Parent Organization</Grid>
                  <Grid sx={{ textAlign: 'left', mt: 1 }}>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dr. YSR Arogyasri Health Care Trust</Grid>
                </Grid>
                <Grid direction="row" container xs={12} >
                  <Grid xs={3.5} sx={{ fontWeight: 'bold', textAlign: 'left', mt: 1 }}>Change Request type</Grid>
                  <Grid sx={{ textAlign: 'left', mt: 1 }}>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NEW </Grid>
                </Grid>
                <Grid direction="row" container xs={12} >
                  <Grid xs={3.5} sx={{ fontWeight: 'bold', textAlign: 'left', mt: 1 }}>WorkFlow Category</Grid>
                  <Grid sx={{ textAlign: 'left', mt: 1 }}>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <TextField
                      type="text"
                      id="outlined-basic"
       
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                    />
          
                  </Grid>
                </Grid>
                <Grid direction="row" container xs={12} >
                  <Grid xs={3.5} sx={{ fontWeight: 'bold', textAlign: 'left', mt: 1 }}>NWH Name</Grid>
                  <Grid sx={{ textAlign: 'left', mt: 1 }}>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TextField
                      type="text"
                      id="outlined-basic"
       
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                    /></Grid>
                </Grid>
              </Grid>

            </Grid>
          </Stack>
          </Stack>
      </Card>
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justifyContent="center"
            textAlign='left'
          >
            <Grid item sx={{ mt: 2 }}> <Typography>Remarks: </Typography></Grid>
            <Grid item ><TextareaAutosize
              aria-label="minimum height"
              minRows={3}

              style={{ width: 'auto' }}
            /></Grid>
          </Grid>
          <Stack
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justifyContent="center"
            alignItems="center"
          >

            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100 }}>Save Remarks</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100 }}>Approve</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100 }}>Reject</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100 }}>Revert</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100 }}>Previous Remarks</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100 }}><Link href="/page2" sx={{textDecorationColor:'none',color:'white',":hover":{textDecorationLine:'none'}}}>close</Link></Button>
          </Stack>
       </Card>
       
      <Card sx={{ mt: 3 }}>
        <Typography sx={{color:'white', textAlign: 'center', bgcolor: '#3E00B3' }}>Remark Details</Typography>
        <Grid sx={{ marginTop: 2, marginLeft: 4, marginRight: 4, marginBottom: 2 }}>
          <DataTable />
        </Grid>
      </Card>
    </Stack>
  );
}


