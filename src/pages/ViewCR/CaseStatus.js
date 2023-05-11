import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Autocomplete from '@mui/material/Autocomplete';

import noImage from "../../assets/images/noImage.jpg";


function CaseStatus() {

  const options = [
    { label: 'One', id: 1 },
    { label: 'Two', id: 2 },
  ];
  const [text, setText] = React.useState("Default Text");
  const [value, setValue] = React.useState(null);
  return (
    
   
     
     <div>
      <Card>
        <CardContent>
        <Card sx={{border:'none',boxShadow:'none'}}>
        <Grid container direction="row" rowSpacing={0} columnSpacing={2} justify="flex-end" alignItems="center" >
            <Grid item xs={12} sm={9} md={9} lg={9} >
              <Grid container direction="row" rowSpacing={1} columnSpacing={2} justify="flex-end" alignItems="center" >
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                         Mandal
                     </Grid>
                    <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                         Card No
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                         District
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                       Case No
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                        Village
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                        Contact No
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                        NWH Name
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                        UHID No
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                        Claim No
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                       Category
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                      IP No
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>
                    
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                      Registration Dt
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                       Case Status
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2} sx={{fontWeight:'bold'}}>
                      Procedure
                     </Grid>
                     <Grid item xs={12} sm={4} md={2} lg={2}>
                        <TextField
                      type="text"
                      id="outlined-basic"
                      size='small'
                      variant="outlined"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      InputProps={{
                          readOnly: true
                        }}
                            />
                     </Grid>

              
        </Grid>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} >
            <Typography sx={{bgcolor:'#3F51B5',color:'white',fontWeight:'bold',mb:2,textAlign:'center'}}>IP</Typography>
              <img src={noImage} width="200px" />
            </Grid>
        </Grid>
        </Card>
        <Card sx={{mt:3}}>
        <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justifyContent="center"
            justifyItems="center"
            alignItems="center"
           
            
          >


            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100,bgcolor:'#3F51B5',":hover":{bgcolor:'#3F51B5'}}}>IP</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100,bgcolor:'#3F51B5',":hover":{bgcolor:'#3F51B5'} }}>Past History</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100,bgcolor:'#3F51B5' ,":hover":{bgcolor:'#3F51B5'}}}>Attachments</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100,bgcolor:'#3F51B5',":hover":{bgcolor:'#3F51B5'} }}>Clinical Notes</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100 ,bgcolor:'#3F51B5',":hover":{bgcolor:'#3F51B5'}}}>Pre Auth Details</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100,bgcolor:'#3F51B5',":hover":{bgcolor:'#3F51B5'}}}>Claim</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100,bgcolor:'#3F51B5',":hover":{bgcolor:'#3F51B5'}}}>Fraud/CR</Button>
            <Button variant="contained" size='small' sx={{ m: 1, minWidth: 100,bgcolor:'#3F51B5',":hover":{bgcolor:'#3F51B5'}}}>Case Sheet</Button>
          </Grid>
        
        </Card>
     </CardContent>
     </Card>
    </div>

    
  );
}

export default CaseStatus;
