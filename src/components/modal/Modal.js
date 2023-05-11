import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { FormLabel, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SimpleBackdrop from '../../pages/ViewCR/BackDrop';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SupportingDocs from '../supportDocuments/SupportingDocs';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({closeModal}) {
  const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpen(closeModal);
  };

  
  const name='AP/ADMN/2022/AP_C278/CRM26685';

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Verify Image
      </Button> */}
      <Dialog
        open={closeModal}
        TransitionComponent={Transition}
        fullScreen={fullScreen}
        keepMounted
        onClose={open}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Attachment List for Change Request  "}<b variant='body2' textAlign={"center"} textDecoration='underline'>{name}</b></DialogTitle>
        <DialogContent>
        <Grid item display={'flex'} justifyContent={'center'} mt={2}>
                <TableContainer sx={{ width: 650 }} >
                <Table  aria-aria-label='simple table'>
                    <TableHead>
                        <TableRow >
                            <TableCell>Attachment Name</TableCell>
                            <TableCell>Created By</TableCell>
                            <TableCell>Created Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell><Link to='/'>wqewqt.jpg</Link></TableCell>
                            <TableCell>K MUDDU SWAMY</TableCell>
                            <TableCell>27/04/2022 02:32:12 PM</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
                </Grid>

                <Grid item xs={12} sm={2} md={2} lg={2}  mt={2}>
                    <FormLabel id="demo-row-radio-buttons-group-label"  >
                        <Typography variant='body2'>  Remarks </Typography>
                    </FormLabel>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    multiline
                    rows={3}
                    name="email"
                    autoComplete="email"
                    size="small"
                    autoFocus
                    />
                    
                </Grid>
            

            {/* <Grid item xs={12}  sm={6} md={6} lg={6} mt={0.5}>
              <Grid item xs={12} sm={6} md={6} lg={6} >
                <FormLabel id="demo-row-radio-buttons-group-label"  required  sx={{mb:"8px"}}>
                  Supporting Documents:
                </FormLabel>
            </Grid>
              {fileUploadJSX}
              
            <Grid item sx={{mt:0.5}}>
                <Button disabled={baseFile<=1}  variant='contained' sx={{marginRight:'5px'}} size='small' onClick={clearData}>Remove Image</Button>
                <Button  variant='contained' sx={{marginRight:'5px'}} size='small' onClick={addFileUpload}>Add</Button>
                <Button disabled={fileUploadCount <= 1} variant='contained' size='small' onClick={removeFileUpload}>Delete</Button> 
            </Grid>
            </Grid> */}
            <SupportingDocs />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={closeModal}>Upload</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}