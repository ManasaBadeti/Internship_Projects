import { Button, Card, CardContent, Grid } from '@mui/material';
import React, { useState } from 'react'
// import TableModal from '../../components/modal/TableModal';
import VirtualizedTable from '../../components/table/VirtualizedTable';
import { Stack } from '@mui/system';
import { generatePDF } from '../../components/pdfDownload/PdfDownload';
import SearchTable from "../../components/table/SearchTable";


const ReportTable = () => {
  
  //for PDF
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
    ['Field Operations(Districts)',  '25687' , '786', '5', '11','15795','4273',],
      // ['T AP/FMPNL/2022/AP C439/CRM29581', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
      // ['T AP/FMPNL/2022/AP C439/CRM29582', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
      // ['T AP/FMPNL/2022/AP C439/CRM29583', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
      // ['T AP/FMPNL/2022/AP C439/CRM29584', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
    ];
      
function createData(id, dept, crRaised, crRaisedwithAppTeam, underDev, UAT, Closed, Rejected,) {
  return {  id, dept, crRaised, crRaisedwithAppTeam, underDev, UAT, Closed, Rejected,};
}
      
const columns = [
 
{
  width: 69,
  headerName: 'Sl No.',
  field: 'id',
  headerClassName: 'super-app-theme--header',
},
{
  width: 180,
  headerName: 'Department',
  field:'dept',
  headerClassName: 'super-app-theme--header',
},
{
  width: 145,
  headerName: 'No. of CRs Raised',
  field: 'crRaised',
  headerClassName: 'super-app-theme--header',
  // numeric: true,
},
{
  width: 220,
  headerName: 'No. of CRs with Approval Team',
  field: 'crRaisedwithAppTeam',
  headerClassName: 'super-app-theme--header',
  // numeric: true,
},
{
  width: 220,
  headerName: 'No. of CRs under development',
  field: 'underDev',
  headerClassName: 'super-app-theme--header',
  // numeric: true,
},
{
  width: 170,
  headerName: 'No. of CRs under UAT',
  field: 'UAT',
  headerClassName: 'super-app-theme--header',
  // numeric: true,
},
{
  width: 110,
  headerName: 'Closed CRs',
  field: 'Closed',
  headerClassName: 'super-app-theme--header',
  // numeric: true,
},
{
  width: 120,
  headerName: 'Rejected CRs',
  field: 'Rejected',
  headerClassName: 'super-app-theme--header',
  // numeric: true,
},
];
      
const rows = Array.from({ length: 50 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index+1, ...randomSelection);
});
const header = 'Report Table';
const subheader= `For Dept: ${sample[0][0]}`;
const filename = 'Report Table.pdf'
const props = {
  rows, columns, date, header, subheader, filename
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
          {/* {openModal && <TableModal closeModal ={setOpenModal} modalDetail={modalDetail} title={title}/>} */}
        </CardContent>
      </Card>
    </div>
  )
}

export default ReportTable;
