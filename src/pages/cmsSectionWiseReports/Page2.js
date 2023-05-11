import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CMSReport from './CMSReport';
import VirtualizedTable from '../../components/table/VirtualizedTable';
import {CSVLink} from 'react-csv';
import { useDownloadExcel } from 'react-export-table-to-excel';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import { Typography, Stack, Box, Grid, TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import TableModal from '../../components/modal/TableModal';
import SearchTable from "../../components/table/SearchTable";

function ReferredPatientView() {
  const options = [
    { label: 'One', id: 1 },
    { label: 'Two', id: 2 },
  ];
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState();
  
  const modalDetail = "With the approval copy";
  const crDesc = "CR Description";
  const crTitle = "CR Title";

  const clickModal=(itemId) =>{
    if(itemId == crDesc){
      setTitle(crTitle)
      setOpenModal(true)
    }
    if(itemId == crTitle){
      setTitle(crDesc);
      setOpenModal(true)
    }
  }
  const sample = [
  ['T AP/FMPNL/2022/AP C439/CRM29580', <span style={{textDecoration:'underline', color:'blue', cursor:'pointer',}} onClick={() => clickModal(crDesc)}>{modalDetail}</span>, <span style={{textDecoration:'underline', color:'blue',cursor:'pointer',}} onClick={() => clickModal(crTitle)}>{modalDetail}</span> , 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)','NA','PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change', ],
    // ['T AP/FMPNL/2022/AP C439/CRM29581', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
    // ['T AP/FMPNL/2022/AP C439/CRM29582', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
    // ['T AP/FMPNL/2022/AP C439/CRM29583', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
    // ['T AP/FMPNL/2022/AP C439/CRM29584', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
  ];

  function createData(id, CRID, CRTitle, CRDesc, CRDept, CRDate, CRStatus, CRInternalStatus, CRExternalStatus, CRParentID, CRSeverity,CRPriority, CRTypeOfChange, CRBuildID, CREDD, CRRaisedBy, CRCategory, CRWorkflow) {
    return {  id, CRID, CRTitle, CRDesc, CRDept, CRDate, CRStatus, CRInternalStatus, CRExternalStatus, CRParentID, CRSeverity,CRPriority, CRTypeOfChange, CRBuildID, CREDD, CRRaisedBy, CRCategory, CRWorkflow };
  }

  const columns = [
    
    {
      width: 100,
      headerName: 'Sl No.',
      field: 'id',
      headerClassName: 'super-app-theme--header',
    },
    {
      width: 200,
      headerName: 'Change Request Id',
      field: 'CRID',
      headerClassName: 'super-app-theme--header',
    },
    {
      width: 160,
      headerName: 'CR Title',
      field: 'CRTitle',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
      sortable: false,
      
      disableClickEventBubbling: true,
      
      
      
      renderCell: (params) => {
      
      const onClick = (e) => {
      
      const currentRow = params.row;
      
      return alert(JSON.stringify(currentRow,null,4));
      
      };
      
      
      
      return (
      
        <span style={{textDecoration:'underline', color:'blue', cursor:'pointer',}} onClick={() => clickModal(crDesc)}>{modalDetail}</span>
        
      
      );
      
      },
    },
    {
      width: 160,
      headerName: 'CR Description',
      field: 'CRDesc',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
      sortable: false,
      
      disableClickEventBubbling: true,
      
      
      
      renderCell: (params) => {
      
      const onClick = (e) => {
      
      const currentRow = params.row;
      
      return alert(JSON.stringify(currentRow,null,4));
      
      };
      
      
      
      return (
      
        
        <span style={{textDecoration:'underline', color:'blue',cursor:'pointer',}} onClick={() => clickModal(crTitle)}>{modalDetail}</span> 
      
      );
      
      },
    },
    {
      width: 200,
      headerName: 'CR Raised Department',
      field: 'CRDept',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 160,
      headerName: 'CR Raised Date',
      field: 'CRDate',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 180,
      headerName: 'Current Status',
      field:'CRStatus',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 160,
      headerName: 'Internal Status',
      field: 'CRInternalStatus',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 160,
      headerName: 'External Status',
      field: 'CRExternalStatus',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 120,
      headerName: 'Parent CR ID',
      field: 'CRParentID',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 120,
      headerName: 'Severity',
      field: 'CRSeverity',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 120,
      headerName: 'Priority',
      field: 'CRPriority',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 160,
      headerName: 'Type Of Change',
      field: 'CRTypeOfChange',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 120,
      headerName: 'Build ID',
      field: 'CRBuildID',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 180,
      headerName: 'Expected Delivery Date',
      field: 'CREDD',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 200,
      headerName: 'CR Raised By',
      field: 'CRRaisedBy',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 160,
      headerName: 'CR Category',
      field: 'CRCategory',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 120,
      headerName: 'Workflow',
      field: 'CRWorkflow',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    
    
  ];

  const rows = Array.from({ length: 50 }, (_, index) => {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    return createData(index+1, ...randomSelection);
  });
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [value, setValue] = useState("")
  const [text, setText] = useState("");
  console.log(value)
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleText = (e) => {
    setText(e.target.value);
  }
  
  // const tableRef = React.useRef(null)

  // const {onDownload} = useDownloadExcel({
  //   currentTableRef: tableRef.current,
  //   filename: 'user_info',
  //   sheet:'UserData'

  // })
  return (
    <>
      <CMSReport></CMSReport>
      <Card>
        {/* <Box sx={{ pr: 3, mb: 1, mt: 1, float: "right" }}>
        
          <Button
            variant="outlined"
            startIcon={<DownloadForOfflineIcon />}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            size="small" sx={{ color: '#3F51B5', border: '1px solid #3F51B5' }}
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
            <MenuItem onClick={handleClose}><CSVLink data={rows}   filename={"userData.csv"}>Excel Export</CSVLink></MenuItem>
            <MenuItem onClick={handleClose}>Pdf Export</MenuItem>
          </Menu>
        </Box> */}

        <CardContent>
          
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
          {openModal && <TableModal closeModal ={setOpenModal} modalDetail={modalDetail} title={title}/>}
          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </CardContent>
      </Card>
    </>
  );
}

export default ReferredPatientView;
