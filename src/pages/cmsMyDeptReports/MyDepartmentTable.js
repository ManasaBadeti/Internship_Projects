import { Button, Card, CardContent, Grid, Stack } from '@mui/material';
import React, { useState } from 'react'
import TableModal from '../../components/modal/TableModal';
import { generatePDF } from '../../components/pdfDownload/PdfDownload';
import VirtualizedTable from '../../components/table/VirtualizedTable';
import SearchTable from "../../components/table/SearchTable";

const MyDepartmentTable = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const date = `${day}/${month}/${year}`;
  const modalDetail = "With the approval copy";
  const crDesc = "CR Description";
  const crTitle = "CR Title";
  const [title, setTitle] = useState();
  const [openModal, setOpenModal] = useState(false);
  const clickModal=(itemId) =>{
      if(itemId === crDesc){
        setTitle(crTitle)
        setOpenModal(true)
      }
      if(itemId === crTitle){
        setTitle(crDesc);
        setOpenModal(true)
      }
    }
  const sample = [
      ['T AP/FMPNL/2022/AP C439/CRM29580', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)','NA','PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change', ],
        // ['T AP/FMPNL/2022/AP C439/CRM29581', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
        // ['T AP/FMPNL/2022/AP C439/CRM29582', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
        // ['T AP/FMPNL/2022/AP C439/CRM29583', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
        // ['T AP/FMPNL/2022/AP C439/CRM29584', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
      ];
  const samplePrint = [
    ['T AP/FMPNL/2022/AP C439/CRM29580', 'With the approval copy' ,'With the approval copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)','NA','PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change', ],
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
      width: 70,
      headerName: 'Sl No.',
      field: 'id',
      headerClassName: 'super-app-theme--header',
    },
    {
      width: 160,
      headerName: 'Change Request Id',
      field: 'CRID',
      headerClassName: 'super-app-theme--header',
    },
    // {
    //   width: 160,
    //   headerName: 'CR Title',
    //   field: 'CRTitle',
    //   headerClassName: 'super-app-theme--header',
    //   // numeric: true,
    // },
    {

      width: 160,
      headerName: 'CR Title',
      field: 'CRTitle',
      headerClassName: 'super-app-theme--header',
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
    // {
    //   width: 160,
    //   headerName: 'CR Description',
    //   field: 'CRDesc',
    //   headerClassName: 'super-app-theme--header',
    //   // numeric: true,
    // },
    {

        width: 160,
      headerName: 'CR Description',
      field: 'CRDesc',
      headerClassName: 'super-app-theme--header',
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
      width: 220,
      headerName: 'CR Raised Department',
      field: 'CRDept',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 120,
      headerName: 'CR Raised Date',
      field: 'CRDate',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 130,
      headerName: 'Current Status',
      field: 'CRStatus',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 120,
      headerName: 'Internal Status',
      field: 'CRInternalStatus',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 130,
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
      width: 80,
      headerName: 'Severity',
      field: 'CRSeverity',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 80,
      headerName: 'Priority',
      field: 'CRPriority',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 150,
      headerName: 'Type Of Change',
      field: 'CRTypeOfChange',
      headerClassName: 'super-app-theme--header',
      // numeric: true,
    },
    {
      width: 80,
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
      width: 180,
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
    
  const rowsCount = Array.from({ length: 50 }, (_, index) => {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    return createData(index+1, ...randomSelection);
  });
  const rows = Array.from({ length: 50 }, (_, index) => {
    const randomSelection = samplePrint[Math.floor(Math.random() * sample.length)];
    return createData(index+1, ...randomSelection);
  });
  const header = 'Department Table';
  const subheader= `For Dept: ${samplePrint[0][0]}`;
  const filename = 'Department Table.pdf';
  const empName = `${samplePrint[0][14]}`
  const props = {
    rows, columns, date, header, subheader, filename, empName
  }
  return (
    <div>
      <Card>
        <CardContent>
          {/* <Stack direction="row" justifyContent="right" alignItems="center" mb={2}>
              <Grid item xs={12} sm={12} >
                  <Button variant='contained' onClick={() => generatePDF(props)}>Download PDF</Button>
              </Grid>
          
          </Stack> */}
          {/* <VirtualizedTable columns={columns} rows={rowsCount}/> */}
          <SearchTable
            columns={columns}
            isCheckbox={false}
            isHideDensity={true}
            isHideExport={true}
            isHideFilter={true}
            isHideColumn={true}
            isHidePaging={false}
            data={rowsCount}
            name="abc"
            id="hjjh"
          ></SearchTable>
          {openModal && <TableModal closeModal ={setOpenModal} modalDetail={modalDetail} title={title}/>}
        </CardContent>
      </Card>
    </div>
  )
}

export default MyDepartmentTable
