import { Button, Card, CardContent, Grid } from '@mui/material';
import React, { useState } from 'react'
import TableModal from '../../components/modal/TableModal';
import VirtualizedTable from '../../components/table/VirtualizedTable';
import { Stack } from '@mui/system';
import { generatePDF } from '../../components/pdfDownload/PdfDownload';
import SearchTable from "../../components/table/SearchTable";

const StatsTable = () => {

  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const date = `${day}/${month}/${year}`;

    // const modalDetail = "K Bhavani Shankar";
    // const crDesc = "CR Description";
    // const crTitle = "CR Title";
    // const [title, setTitle] = useState();
    // const [openModal, setOpenModal] = useState(false);
    // const clickModal=(itemId) =>{
    //     if(itemId === crDesc){
    //       setTitle(crTitle)
    //       setOpenModal(true)
    //     }
    //     if(itemId === crTitle){
    //       setTitle(crDesc);
    //       setOpenModal(true)
    //     }
    //   }
    //   <span style={{textDecoration:'underline', color:'blue', cursor:'pointer',}} onClick={() => clickModal(crDesc)}>{modalDetail}</span>,
const sample = [
    ['AP_D110_CD215','K Bhavani Shankar',  'Deputy General Manager' , 'AAROGYASRI', 'T AP/FMPNL/2022/AP C439/CRM26750', 'Test Desc','Approved','Approved', '02/02/2022 04:42:21 pm',],
      // ['T AP/FMPNL/2022/AP C439/CRM29581', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
      // ['T AP/FMPNL/2022/AP C439/CRM29582', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
      // ['T AP/FMPNL/2022/AP C439/CRM29583', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
      // ['T AP/FMPNL/2022/AP C439/CRM29584', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
    ];
      
function createData(id, EmpId, EmpName, designation, App_name, CRid, CRDesc, Remarks, Action, ActionTime) {
  return {  id, EmpId, EmpName, designation, App_name, CRid, CRDesc, Remarks, Action, ActionTime};
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
    headerName: 'Employee Code',
    field: 'EmpId',
    headerClassName: 'super-app-theme--header',
  },
  {
    width: 160,
    headerName: 'Employee Name',
    field: 'EmpName',
    headerClassName: 'super-app-theme--header',
    // numeric: true,
  },
  {
    width: 160,
    headerName: 'Designation Name',
    field: 'designation',
    headerClassName: 'super-app-theme--header',
    // numeric: true,
  },
  {
    width: 200,
    headerName: 'Application Name',
    field: 'App_name',
    headerClassName: 'super-app-theme--header',
    // numeric: true,
  },
  {
    width: 160,
    headerName: 'Change Request ID',
    field: 'CRid',
    headerClassName: 'super-app-theme--header',
    // numeric: true,
  },
  {
    width: 180,
    headerName: 'CR Desc',
    field: 'CRDesc',
    headerClassName: 'super-app-theme--header',
    // numeric: true,
  },
  {
    width: 160,
    headerName: 'Remarks Given',
    field: 'Remarks',
    headerClassName: 'super-app-theme--header',
    // numeric: true,
  },
  {
    width: 160,
    headerName: 'Action Taken',
    field: 'Action',
    headerClassName: 'super-app-theme--header',
    // numeric: true,
  },
  {
    width: 140,
    headerName: 'Action Taken Time',
    field: 'ActionTime',
    headerClassName: 'super-app-theme--header',
    // numeric: true,
  },
];

const rows = Array.from({ length: 50 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index+1, ...randomSelection);
});
const header = 'Statistics Table';
const subheader= `For Dept: ${sample[0][0]}`;
const empName = 'K Bhavani Shankar'
const filename = 'Statistics Table.pdf';
const props = {
  rows,columns, date, header, subheader, filename, empName
}
  return (
    <div>
      <Card>
        <CardContent>
            
            {/* <Stack direction="row" justifyContent="right" alignItems="center" mb={2}>
                <Grid item xs={12} sm={12} >
                    <Button variant='contained' onClick={() => generatePDF(props)}>Download PDF</Button>
                </Grid>
            
            </Stack>
          <VirtualizedTable columns={columns} rows={rows}/> */}
          {/* {openModal && <TableModal closeModal ={setOpenModal} modalDetail={modalDetail} title={title}/>} */}
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
        
        </CardContent>
      </Card>
    </div>
  )
}

export default StatsTable;
