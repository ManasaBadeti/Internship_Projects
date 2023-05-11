import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import VirtualizedTable from '../../../components/table/VirtualizedTable';
import { Grid, Tooltip, Typography} from '@mui/material';
import { CSVLink } from 'react-csv';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import { useState } from 'react';
import Modal1 from '../../../components/modal/Modal1'
import { generatePDF } from '../../../components/pdfDownload/PdfDownload';
import LinearProgress from '@mui/material/LinearProgress';
import Link from '@mui/material/Link';
import { Navigate, useNavigate } from "react-router-dom";
import SearchTable from "../../../components/table/SearchTable";


const DisplayData=()=>{
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const date = `${day}/${month}/${year}`;

  const [openModal, setOpenModal] = useState(false);
  // const [titleValue, setTitleValue] = useState('')
  const [rows, setRows] = useState([]);
  const [sendData, setSendData] = useState('')
  const fetchData = async() => {
    const payload = {
      "fromDate": "2023-03-17",
      "toDate": "2023-04-25",
      "appInType":"Dr. YSR Aarogyasri Portal",
      "orgName": "TRUST",
      "deptName": "Admin"
    };
    try{
    const response = await fetch('http://10.48.158.197:8087/cmsapi/manage-request',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const res = await response.json();
    const data = JSON.parse(res.result);
    const formattedRows = data.map((value, index) => {
      setSendData(value);
      // setTitleValue(value[1])
      return createData(
        // index +1,
        // <Button onClick={() => handleRedirect(data)}>{value[1]}</Button>,
        value[1],
        value[2],
        value[9],
        value[0],
        value[3],
        value[6],
        // value[5],
        // (value[6] && value[6].length > 12 ?
        //   <Tooltip title={value[6]} arrow> 
        //     <Typography variant='subtitle2'> {value[6]?.slice(0, 12)}...</Typography>
        //   </Tooltip> 
        //   : 
        //   <Typography variant='subtitle2'> {value[6]}</Typography>
        //  ),
        value[7],
        value[8],
        value[4],
        value[10], 
        )
    })
      setRows(formattedRows);
      // setSendData(response);
    }catch(error){
      console.log('Error Loading Data', error)
    }
  };
  React.useEffect(() => {
    fetchData();
  }, [])
  // navigate to Change Request Page
  const navigate = useNavigate()
  // const handleRedirect  =(rowData) => {
  //   // const rowData = data[index]
  //   navigate("/crStatus", {state: {rowData}})
  //   console.log(rowData);
  // }
  // const handleRedirect  =(params) => {
  //     // const rowData = data[index]
  //     navigate("/crStatus", {state: {params}})
  //     console.log(params);
  //   }
    // const CountButton = () => {
      //   const [count, setCount] = React.useState(0);
      
      //   return (
        //     <Button onClick={() => setCount((prev) => prev + 1)}>{count} click(s)</Button>
  //   );
  // };
  // const sample = [
    //   [<Link href='cms/#/crStatus'>T AP/FMPNL/2022/AP C439/CRM29580</Link>, 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)','NA','Low','Others','-NA-', '-NA-','B Kalpavalli', 'Normal Change Request',<Grid display={'flex'}><Button size='small' sx={{pr:4}}><BorderColorOutlinedIcon sx={{ color:'purple'}}/></Button>  <Button size='small' sx={{pr:4}} onClick={() => setOpenModal(true)}><FolderOpenOutlinedIcon sx={{color:'green'}} /></Button>  </Grid>],
    //   // ['T AP/FMPNL/2022/AP C439/CRM29581', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
    //   // ['T AP/FMPNL/2022/AP C439/CRM29582', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
    //   // ['T AP/FMPNL/2022/AP C439/CRM29583', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
    //   // ['T AP/FMPNL/2022/AP C439/CRM29584', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
    // ];
    // const samplePrint = [
      //   ['T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)','NA','Low','Others','-NA-', '-NA-','B Kalpavalli', 'Normal Change Request',  <Grid display={'flex'}><Button size='small' sx={{pr:4}}><BorderColorOutlinedIcon sx={{ color:'purple'}}/></Button>  <Button size='small' sx={{pr:4}} onClick={() => setOpenModal(true)}><FolderOpenOutlinedIcon sx={{color:'green'}} /></Button>  </Grid>],
      //   // ['T AP/FMPNL/2022/AP C439/CRM29581', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
      // ];
      
      
      // function createData(id, empCode, actionTakenBy, Designation, phone, remarksGiven, actionTime,actionTaken, viewAttach) {
        //   return {  id, empCode, actionTakenBy, Designation, phone, remarksGiven, actionTime, actionTaken, viewAttach};
  // }
  function createData( crTitle, crDesc, crRaiseBY,crID, crRaisedDept, crStatus,severe, changeType,crDate,workFlow,viewAttach) {
    return {  crTitle, crDesc, crRaiseBY,crID, crRaisedDept, crStatus,severe, changeType,crDate,workFlow,viewAttach};
  }
  
  // const columns = [
    //   {
      //     width: 100,
      //     label: 'Sl No.',
      //     dataKey: 'id',
      //   },
      //   {
        //     width: 200,
        //     label: 'Employee Code',
        //     dataKey: 'empCode',
  //   },
  //   {
    //     width: 160,
    //     label: 'Action Taken By',
    //     dataKey: 'actionTakenBy',
    //     // numeric: true,
    //   },
    //   {
      //     width: 160,
      //     label: 'Designation',
      //     dataKey: 'Designation',
      //     // numeric: true,
      //   },
      //   {
        //     width: 200,
        //     label: 'Phone Number',
        //     dataKey: 'phone',
        //     // numeric: true,
        //   },
        //   {
          //     width: 160,
          //     label: 'Remarks Given',
          //     dataKey: 'remarksGiven',
          //     // numeric: true,
          //   },
          //   {
            //     width: 180,
            //     label: 'Action Taken Time',
            //     dataKey: 'actionTime',
            //     // numeric: true,
            //   },
            //   {
              //     width: 160,
              //     label: 'Action Taken',
              //     dataKey: 'actionTaken',
              //     // numeric: true,
              //   },
              //   {
  //     width: 160,
  //     label: 'View Attachment',
  //     dataKey: 'viewAttach',
  //     // numeric: true,
  //   },
  // ];
  
  
  const columns = window.columns = [
    {
      width: 160,
      headerName: 'CR Title',
      field: 'crTitle',
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        
      const handleRedirect  =(rowData) => {
        // const rowData = data[index]
        navigate("/crStatus", {state: {rowData}})
        console.log(rowData);
      } 
      return(
        <Link onClick={() => handleRedirect(params.row)}>{params.value}</Link>
      )
      }
      
      // numeric: true,
    },
    {
      width: 160,
      headerName: 'CR Description',
      field: 'crDesc',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 160,
      headerName: 'CR Raised By',
      field: 'crRaiseBY',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    
    {
      width: 150,
      headerName: 'Change Request ID',
      field: 'crID',
      headerClassName: 'super-app-theme--header',
    },
    {
      width: 180,
      headerName: 'CR Raised Department',
      field: 'crRaisedDept',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 130,
      headerName: 'CR Status',
      field: 'crStatus',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 120,
      headerName: 'Severity',
      field: 'severe',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 160,
      headerName: 'Type of Change',
      field: 'changeType',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 160,
      headerName: 'CR Raised Date',
      field: 'crDate',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 200,
      headerName: 'CR Workflow Category',
      field: 'workFlow',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 160,
      headerName: 'View Attachment',
      field:'viewAttach',
      headerClassName: 'super-app-theme--header',
      sortable: false,
      
      disableClickEventBubbling: true,
      
      
      
      renderCell: (params) => {
      
      const onClick = (e) => {
      
      const currentRow = params.row;
      
      return alert(JSON.stringify(currentRow,null,4));
      
      };
      
      
      
      return (
      
        <Grid display={'flex'}>
            <Tooltip title='Edit' arrow>
            <Button size='small' sx={{pr:4}} onClick={() => console.log(rows)}>
              <BorderColorOutlinedIcon sx={{ color:'purple'}}/>
            </Button>
            </Tooltip> 
            <Tooltip title='View Attachment' arrow> 
            <Button size='small' sx={{pr:4}} onClick={() => setOpenModal(true)}>
              <FolderOpenOutlinedIcon sx={{color:'green'}} />
            </Button>
            </Tooltip>  
          </Grid>
        
      
      );
      
      },
      // renderCell:(rows) =>(
      // <Grid display={'flex'}>
      //   <Button size='small' sx={{pr:4}} onClick={() => console.log(rows)}>
      //     <BorderColorOutlinedIcon sx={{ color:'purple'}}/>
      //   </Button>  
      //   <Button size='small' sx={{pr:4}} onClick={() => setOpenModal(true)}>
      //     <FolderOpenOutlinedIcon sx={{color:'green'}} />
      //     </Button>  
      // </Grid>
      // )
      // renderCell: <CountButton/>,
    },
  ];
  // const rowsCount = tableData.map((item, index) => {
  //   return createData(index+1, item[0][4], item[0][5]);
  // });
  // const rows = tableData.map((item, index) => {
  //   return createData(index+1, item[1], item[2]);
  // });

  const header = 'Manage Request Table';
  const subheader= `For Dept: ${rows[0]?.crDesc}`;
  const filename = 'Manage-Request Table.pdf'
  const empName = `${rows[1]?.changeType}`
  const props = {
    rows,columns, date, header, subheader, filename, empName
  }
  //   const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card>
      {/* <Box sx={{ pr: 3, float:'right' }}>

          <Button
            variant="outlined"
            startIcon={<DownloadForOfflineIcon />}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            mb={2}
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
              "aria-labelledby": "basic-button",
              
            }}
            
          >
            <CSVLink data={rows} filename={"userData.csv"}>
                <MenuItem> <Button onClick={handleClose}>Excel Export</Button></MenuItem>
            </CSVLink>
            <MenuItem> <Button sx={{textDecoration:"underline"}} onClick={() => generatePDF(props)}>Pdf Export</Button></MenuItem>
          </Menu>
          </Box> */}
          {openModal && <Modal1 closeModal ={setOpenModal}/>}
        <CardContent>
          {rows.length ? (
            <Grid mt={3}>
              {/* <VirtualizedTable columns={columns} rows={rows}/> */}
              <SearchTable
            columns={columns}
            isCheckbox={false}
            isHideDensity={false}
            isHideExport={true}
            isHideFilter={true}
            isHideColumn={true}
            isHidePaging={false}
            data={rows}
            name="abc"
            id="hjjh"
          />
            </Grid>
          ) : (
            <Box sx={{width: '100%'}} textAlign={'center'} mt={3}>
              <LinearProgress />
            </Box>
          )}
          
        </CardContent>
      </Card>
    </>
  )
}

export default DisplayData
