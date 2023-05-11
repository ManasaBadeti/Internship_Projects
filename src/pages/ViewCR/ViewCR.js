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
import { CardHeader, FormLabel, Input } from '@mui/material';
import { border } from '@mui/system';
import TextField from '@mui/material/TextField';

import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Link from '@mui/material/Link';
// /import DataTable from './DataGrid';
import Autocomplete from '@mui/material/Autocomplete';
import ButtonGroup from '@mui/material/ButtonGroup';
import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import DataTable from './DataGrid';
import { ThemeProvider } from '@emotion/react';
import PageTitle from '../../layouts/PageTitle';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'justify',
  color: 'black',
}));
const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "red",
          "&$error": {
            color: "#db3131",
          },
          
        },
      },
    },
  },
});


export default function CRDetails() {
  const name = "Change Request Details"
  const options = [
    { label: 'One', id: 1 },
    { label: 'Two', id: 2 },
  ];
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [nwh, setNwh] = React.useState('');
  const [desc, setDesc] = React.useState('');
  return (
    <>
        {/* <Typography sx={{color:'#808080',textAlign:'left'}} py={2} px={2}>Change Request Details</Typography> */}
        <PageTitle name={name}/>
        <Box mt={2}>
    <Card sx={{width:"100%"}} >
        {/* <ThemeProvider theme={theme}> */}
       
        <Card  >
       
        <Grid
            container
            direction="row"
            rowSpacing={1}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
           
            
          >
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>CRID</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>AP/Trust Operations/2021</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Parent Organization</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>Dr. YSR Arogyasri Health Care Trust</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Application Type</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>Dr. YSR Arogyasri Portal</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Change Request Type</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>NEW</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Source Department</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>Field Operations(Districts)</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>CR Module</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>Operations</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>CR Title</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}><TextField
                      type="text"
                      id="outlined-basic"
       
                      variant="outlined"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                      // InputProps={{
                      //     readOnly: true
                      //   }}
                    /></Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Type of Change</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}>Work Flow Changes</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Supporting Document</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}><Link href="/cms/#/newPage">View/Add attachments</Link></Grid>
           
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Work Flow Category</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}><TextField
                      type="text"
                      id="outlined-basic"
       
                      variant="outlined"
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                      // InputProps={{
                      //     readOnly: true
                      //   }}
                    /></Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>Case Number</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}><Link href="/cms/#/caseStatus">Case/80/AP3825492</Link></Grid>
     
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>NWH Name</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left"}}><TextField
                      type="text"
                      id="outlined-basic"
       
                      variant="outlined"
                      onChange={(e) => setNwh(e.target.value)}
                      value={nwh}
                      // InputProps={{
                      //     readOnly: true
                      //   }}
                    /></Grid>
            
           
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>CR Description</Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}  sx={{textAlign:"left",fontWeight:"bold"}}>
              <TextField
                      type="text"
                      id="outlined-basic"
       
                      variant="outlined"
                      onChange={(e) => setDesc(e.target.value)}
                      value={desc}
                      // InputProps={{
                      //     readOnly: true
                      //   }}
                    /></Grid>
            </Grid>
        </Card>
        
        <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            // justifyContent="center"
            // justifyItems="center"
            alignItems="left"
            px={3.2}
          >
            
            
            <Grid item  fontWeight='bold' xs={12} sm={3}>Remarks</Grid>
            <Grid item ><TextareaAutosize
              aria-label="minimum height"
              minRows={3}

              style={{ width: 210 }}
            /></Grid>
        </Grid>
            <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justifyContent="center"
            justifyItems="center"
            alignItems="center"
            py={2}
           >


            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100,bgcolor:'#3F51B5' }}>Save Remarks</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100,bgcolor:'#3F51B5' }}>Approve</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100,bgcolor:'#3F51B5' }}>Reject</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100,bgcolor:'#3F51B5' }}>Revert</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100 ,bgcolor:'#3F51B5'}}>Previous Remarks</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100,bgcolor:'#3F51B5'}}><Link href="/#/newPage" sx={{textDecorationColor:'none',color:'white',":hover":{textDecorationLine:'none'}}}>close</Link></Button>
          </Grid>
        
        </Card>
       
        <Typography sx={{color:'#808080' ,textAlign:'left'}} px={2} my={3}>Remark Details</Typography>
        <Card sx={{mt:2}}>
        <Grid sx={{ marginTop: 2, marginLeft: 4, marginRight: 4, marginBottom: 2 }}>
          <DataTable/>
          </Grid>
        </Card>
        </Box>
        {/* </ThemeProvider> */}
        </>
    );
  }