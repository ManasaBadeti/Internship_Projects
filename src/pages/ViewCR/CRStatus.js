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

import Autocomplete from '@mui/material/Autocomplete';
import ButtonGroup from '@mui/material/ButtonGroup';
import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import DataTable2 from './DataGrid';
import { ThemeProvider } from '@emotion/react';
import PageTitle from '../../layouts/PageTitle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { useDownloadExcel } from 'react-export-table-to-excel';
import {CSVLink} from 'react-csv';
import 'jspdf-autotable';
import { useReactToPrint } from 'react-to-print';
import { useRef } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Modal from '../../components/modal/Modal';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { saveAs } from 'file-saver';
import VirtualizedTable from '../../components/table/VirtualizedTable';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useLocation} from 'react-router-dom';



    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const generatePDF= () => {
        const tableRows = [];
        rows.forEach((row) =>{
            const rowData = [];
            columns.forEach((columns) => {
                rowData.push(row[columns.dataKey]);
            });
            tableRows.push(rowData);
        });
        const columnWidth = (500/columns.length);
        const docDefinition = {
            content: [
                {
                    text: 'Change Request Details Table',
                    fontSize: 16,
                    bold: true,
                    margin: [0, 0, 0, 2],
                },{
                    layout: 'lightHorizontalLines',
                    table:{
                        headerRows:1,
                        widths: columns.map((column) => columnWidth),
                        body: [columns.map((column) => ({text: column.label, fontSize: 6})), 
                          ...tableRows.map((row) => row.map((cell) => ({text: cell, fontSize: 6})))
                        ],
                        fontSize: 10,
                    },
                },
                
            ],
        };

        const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfDocGenerator.getBlob((blob) => {
            saveAs(blob, "ChangeRequestDetails-table.pdf");
        });
    };
const sample = [
  ['AP_C278', 'Mahesh', 'Developer', '8484848484', 'Approve', '23-04-2023','Approved','-NA-', ],
  // ['T AP/FMPNL/2022/AP C439/CRM29581', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
  // ['T AP/FMPNL/2022/AP C439/CRM29582', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
  // ['T AP/FMPNL/2022/AP C439/CRM29583', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
  // ['T AP/FMPNL/2022/AP C439/CRM29584', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
];

function createData(id, CRID, actionBy, designation, phone, remarks, timeTaken, actionTaken, viewAttach) {
  return {  id, CRID, actionBy, designation, phone, remarks, timeTaken, actionTaken, viewAttach};
}

const columns = [
  {
    width: 100,
    label: 'Sl No.',
    dataKey: 'id',
  },
  {
    width: 150,
    label: 'Employee Code',
    dataKey: 'CRID',
  },
  {
    width: 160,
    label: 'Action Taken By',
    dataKey: 'actionBy',
    // numeric: true,
  },
  {
    width: 160,
    label: 'Designation',
    dataKey: 'designation',
    // numeric: true,
  },
  {
    width: 180,
    label: 'Phone Number',
    dataKey: 'phone',
    // numeric: true,
  },
  {
    width: 160,
    label: 'Remarks Given',
    dataKey: 'remarks',
    // numeric: true,
  },
  {
    width: 180,
    label: 'Action Time Taken',
    dataKey: 'timeTaken',
    // numeric: true,
  },
  {
    width: 120,
    label: 'Action Taken',
    dataKey: 'actionTaken',
    // numeric: true,
  },
  {
    width: 150,
    label: 'View Attachment',
    dataKey: 'viewAttach',
    // numeric: true,
  },
  
  
];

const rows = Array.from({ length: 10 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index+1, ...randomSelection);
});

export default function CRDetails() {

  //getting data from Manage Request Table
  const location = useLocation();
  const data = location.state?.rowData;
  console.log(data);

  const options = [
    { label: 'One', id: 1 },
    { label: 'Two', id: 2 },
  ];
  const [text, setText] = React.useState("Default Text");
  const name= 'CRID: AP/Trust Operations/2021';

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState(data.crDate);
  // const tableRef = React.useRef(null)

  const cardTitle = 'Remark Details';
  

  const [openModal , setOpenModal] = React.useState(false);

  return (
    <>
    <Box py={1}>
      <Typography variant='h6'>Change Request Details</Typography>
    </Box>
    <Card sx={{width:"100%"}}>
        {/* <ThemeProvider theme={theme}> */}
        {/* <Typography sx={{bgcolor:'#3F51B5',color:'white',textAlign:'center'}}>Change Request Details</Typography> */}
        <CardContent>
        <PageTitle name={name}/>
        {data && (
          <>
          
            <>
            <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            marginBottom={2}
            
          >
            <Grid item xs={12} sm={2} md={2} lg={2}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                <b>
                    Application Type 
                </b>
              </FormLabel>
              
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <Typography ><b>:</b>Dr. YSR Aarogyasri Portal</Typography>
            </Grid>
            
             
              
            <Grid item xs={12} sm={2} md={2} lg={2}  >
              <FormLabel id="demo-row-radio-buttons-group-label">
                <b> CR Module </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} >
              <Typography > <b>:</b> {data.crID}</Typography>  
            </Grid>
          </Grid>
          
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            marginBottom={2}
          >
            
             
              
            <Grid item xs={12} sm={2} md={2} lg={2}  >
              <FormLabel id="demo-row-radio-buttons-group-label">
                 <b>Change Request Type </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <Typography ><b>:</b>  {data.changeType}</Typography>
            </Grid>
            
            <Grid item xs={12} sm={2} md={2} lg={2}  >
              <FormLabel id="demo-row-radio-buttons-group-label"  >
                <b>  Required Date </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} mt={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Required Date"
                  inputFormat="DD/MM/YYYY"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      sx={{ width: "100%" }}
                      fullWidth
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
              </Grid>
          </Grid>  
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            // alignItems="center"
            marginBottom={2}
          >
            <Grid item xs={12} sm={2} md={2} lg={2}  mt={2.7}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                 <b> CR Title</b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                multiline
                rows ={2}
                name="email"
                autoComplete="email"
                size="small"
                defaultValue={data.crTitle}
                autoFocus
              />  
            </Grid>
            
             
              
            <Grid item xs={12} sm={2} md={2} lg={2} mt={2.7} >
              <FormLabel id="demo-row-radio-buttons-group-label">
                 <b> CR Description </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                multiline 
                rows={2}
                name="email"
                autoComplete="email"
                defaultValue={data.crDesc}
                size="small"
                autoFocus
              />
            </Grid>
          </Grid> 
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            marginBottom={2}
          >
            <Grid item xs={12} sm={2} md={2} lg={2} >
              <FormLabel id="demo-row-radio-buttons-group-label">
                 <b> Type of Change</b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <Typography ><b>:</b>  {data[8]}</Typography>  
            </Grid>
            
             
            <Grid item xs={12} sm={2} md={2} lg={2}  >
              <FormLabel id="demo-row-radio-buttons-group-label">
                <b>  CR Priority </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}  >
              <Typography ><b>:</b>  {data.severe}</Typography>
            </Grid>
          </Grid>  
          <Grid
              container
              direction="row"
              rowSpacing={0}
              columnSpacing={2}
              justify="flex-end"
              alignItems="center"
              marginBottom={2}>
                <Grid item xs={12} sm={2} md={2} lg={2}  >
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    <b> Workflow Category</b> 
                  </FormLabel>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}  >
                  <Typography ><b>:</b>  {data.workFlow}</Typography>        
                </Grid>
              
              <Grid item xs={12} sm={2} md={2} lg={2}  >
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <b> Supporting Document </b> 
                  {/* <Typography>:</Typography> */}
                </FormLabel>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}   >
                <Typography ><b>:</b><Link component={Button} size='large' sx={{fontSize: '13px'}}  onClick={() => {setOpenModal(true)}}>View/Add Document</Link> </Typography>
              </Grid>
            </Grid>  
            {openModal && <Modal closeModal ={setOpenModal}/>}
            
            <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            marginBottom={2}
          >
            <Grid item xs={12} sm={2} md={2} lg={2}  >
              <FormLabel id="demo-row-radio-buttons-group-label"  required  >
                <b>  Remarks </b>
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}  >
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
          </Grid>
          </>
          </>
         
            )}
        
            {/* <Button variant="contained" size='small' sx={{   float: "right",mt:2 }}>Back</Button> */}
            </CardContent>
        
        </Card>
        
        <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            
          >
            <Grid item xs={12} sm={12}  display="flex" justifyContent='space-between'>
                <Button variant="contained" size='small' sx={{ml:1}}>Back</Button>
                <Grid item  display='flex' justifyContent='flex-end'>
                {/* <Grid item> */}
                  <Button variant="outlined" size='small' sx={{mx:1}} >Save Remarks</Button>
                {/* </Grid> */}
                {/* <Grid item> */}
                  <Button variant="contained" size='small' sx={{mx:1}}>Approve</Button>
                {/* </Grid> */}
                {/* <Grid item> */}
                  <Button variant="outlined" size='small' sx={{mx:1}} >Reject</Button>
                {/* </Grid> */}
                {/* <Grid item> */}
                  <Button variant="outlined" size='small' sx={{mx:1}} >Revert</Button>
                {/* </Grid> */}
                {/* <Grid item> */}
                  <Button variant="outlined" size='small' sx={{mx:1}} >Preview Remarks</Button>
                {/* </Grid> */}
                {/* <Grid item> */}
                  <Button variant="outlined" size='small' sx={{mx:1}} >Close</Button>
                {/* </Grid> */}
              </Grid>
            </Grid>
              
            
        </Grid>
        
        
        
        <Card>
        <CardContent>
        <PageTitle name={cardTitle}/>
        <Grid container display={'flex'} justifyContent='right'>
          <Grid sx={{ pr: 3 }} mb={1}>

            <Button
              variant="outlined"
              startIcon={<DownloadForOfflineIcon />}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              size="small" sx={{color: '#3F51B5', border: '1px solid #3F51B5' }}
            >
              Export
            </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",}}>
            <CSVLink data={rows} filename={"userData.csv"}>
              <MenuItem> <Button onClick={handleClose}>Excel Export</Button></MenuItem>
              </CSVLink>
            {/* <MenuItem> <Button onClick={()=>downloadPdf()}>Pdf Export</Button></MenuItem> */}
            <MenuItem> <Button sx={{textDecoration:"underline"}} onClick={generatePDF}>Pdf Export</Button></MenuItem>
            
          </Menu>

          
          </Grid>
        </Grid>
        {/* </Stack> */}
        
          <Grid mt={2}>
            <CardContent>
              <VirtualizedTable columns={columns} rows={rows}/> 
            </CardContent>
          </Grid>
          </CardContent>
        </Card>
        
        {/* <Stack
            container
            direction="row"
            spacing={1}
            columnSpacing={2}
            justifyContent="center"
            alignItems="center"
          >


            {/* <Button variant="contained" size='small' >Close</Button>
            <Button variant="contained" size='small' >Previous Remarks</Button> */}
        {/* </Stack> */} 
        
        {/* </ThemeProvider> */}
    </>
    );
  }