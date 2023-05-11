import React, { useEffect,useRef, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TablePagination from '@mui/material/TablePagination';
import LinearProgress from '@mui/material/LinearProgress';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PageTitle from '../../layouts/PageTitle';
import VirtualizedTable from '../../components/table/VirtualizedTable';
import { Box } from '@mui/system';
import { Button, Grid, TextField, Tooltip, Typography } from '@mui/material';
import SkeletonForInboxSentbox from '../../components/skeleton/Skeleton';
import CampaignIcon from '@mui/icons-material/Campaign';
// import Swal from 'sweetalert2';
import {H4} from '../../components/typography/Typography'
import CircularProgress from '@mui/material/CircularProgress';
import NoDataFound from '../../components/noDataFound/NoDataFound';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { startOfDay } from 'date-fns';

// import {Tiny} from '../../components/typography/Typography'

const Sentbox = () => {
  const [sentBox, setSentBox] = useState([]);
  const [search, setSearch] = useState('');
  const [isInitialDataLoaded, setInitialDataLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredRows, setFilteredRows] = useState(sentBox)
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = useState(null)
  
  // const searchInputRef = useRef(null);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;
  useEffect(()=>{
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://10.48.158.197:8087/cmsapi/sentbox');
        const data = await response.json();

        setSentBox(data.result.Sentbox);
        setFilteredRows(data.result.Sentbox);
      } catch(err) {
        console.error(err);
      } finally {
        setIsLoading(false);
        setInitialDataLoaded(true);
      }
    }

    fetchData();
  }, []);


  
  
  function createData(requestId, crTitle, crDesc, deptName, CRDate, CRStatus, CRPriority, CRTypeOfChange,  CREDD, CRRaisedBy, CRCategory,actions) {
    return {  requestId, crTitle, crDesc, deptName, CRDate, CRStatus,CRPriority, CRTypeOfChange,  CREDD, CRRaisedBy, CRCategory, actions};
  }
  
  const columns = [
    // {
    //   width: 100,
    //   label: 'Sl No.',
    //   dataKey: 'id',
    // },
    {
      width: 160,
      label: 'Change Request Id',
      dataKey: 'requestId',
    },
    {
      width: 160,
      label: 'CR Title',
      dataKey: 'crTitle',
      // numeric: true,
    },
    {
      width: 180,
      label: 'CR Description',
      dataKey: 'crDesc',
      // numeric: true,
    },
    {
      width: 200,
      label: 'CR Raised Department',
      dataKey: 'deptName',
      // numeric: true,
    },
    {
      width: 150,
      label: 'CR Raised Date',
      dataKey: 'CRDate',
      // numeric: true,
    },
    {
      width: 180,
      label: 'Current Status',
      dataKey: 'CRStatus',
      // numeric: true,
    },
    // {
    //   width: 120,
    //   label: 'Parent CR ID',
    //   dataKey: 'CRParentID',
    //   // numeric: true,
    // },
    {
      width: 120,
      label: 'Priority',
      dataKey: 'CRPriority',
      // numeric: true,
    },
    {
      width: 160,
      label: 'Type Of Change',
      dataKey: 'CRTypeOfChange',
      // numeric: true,
    },
    {
      width: 150,
      label: 'Due Date',
      dataKey: 'CREDD',
      // numeric: true,
    },
    {
      width: 200,
      label: 'CR Raised By',
      dataKey: 'CRRaisedBy',
      // numeric: true,
    },
    {
      width: 160,
      label: 'CR Category',
      dataKey: 'CRCategory',
      // numeric: true,
    },
    {
      width: 90,
      label: 'Actions',
      dataKey: 'actions',
      // numeric: true,
    },
  ];
  // const filteredRows = sentBox.filter(
  //   item => 
  //   item.crTitle.toLowerCase().includes(search.toLowerCase()) || (`${item.crReqId}`).toLowerCase().includes(search.toLowerCase())
  // )
  

  const handleSearchChange =(e) => {
    setSearch(e.target.value);
  }
  const handleSearchSubmit =(e) => {
    if (!search.length) {
      setFilteredRows(sentBox);
      return;
    }
    const newFilteredRows = sentBox.filter(
      item => 
      item.crTitle.toLowerCase().includes(search.toLowerCase()) || (`${item.crReqId}`).toLowerCase().includes(search.toLowerCase())
    )
    setFilteredRows(newFilteredRows);
  }


  const rows = filteredRows.map((item, index) => {
    return createData(
      // index+1,
      `${item.crReqId}`,
      item.crTitle,
      // `${item.crDesc.slice(0,25)}...`,
      (item.crDesc && item.crDesc.length > 20 ?
        <Tooltip title={item.crDesc} arrow> 
          <Typography variant='subtitle2'>{item.crDesc?.slice(0, 20)}...</Typography>
        </Tooltip> 
        : 
        <Typography variant='subtitle2'> {item.crDesc}</Typography>
       ),
      item.deptName,
      item.crtOn,
     (item.status && item.status.length > 20 ?
      <Tooltip title={item.status} arrow> 
        <Typography variant='subtitle2'> {item.status?.slice(0, 20)}...</Typography>
      </Tooltip> 
      : 
      <Typography variant='subtitle2'> {item.status}</Typography>
     ),
      item.typeName,
      item.typeNames,
      item.edt,
      item.username,
      item.workflowName,
      (
        <Grid display={'flex'}>
          <Tooltip title='Alert Again' arrow>
            <Button size='small' sx={{pr:2}} onClick={() => console.log(rows)}>
              <CampaignIcon sx={{ color:'purple'}}/>
            </Button>
          </Tooltip>  
        {/* <Button size='small' sx={{pr:4}} onClick={() => setOpenModal(true)}>
          <FolderOpenOutlinedIcon sx={{color:'green'}} />
          </Button>   */}
        </Grid>
      )
    )
  });
    
    const name='Sentbox'
    return (
      <Card>
        <CardContent>
          <PageTitle name={name} />
          {isInitialDataLoaded ? (
            <>
              {/* {openModal && <Modal1 closeModal={setOpenModal} />} */}
              <Grid 
                container 
                alignItems='center' 
                display={'flex'}
                justify='center'
                direction="row"
                columnSpacing={2}
              >
                <Grid width='100%'item xs={12} sm={3} md={3} lg={3} >
                  <TextField 
                    label="Search for CR Title or ID"
                    variant='standard'
                    size='small'
                    sx={{width:'100%'}}
                    value={search}
                    onChange={handleSearchChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="From Date"
                        inputFormat="DD/MM/YYYY"
                        value={fromDate}
                        onChange={(dateValue) => {
                          setFromDate(dateValue);
                          // logic to filter
                        }}
                        maxDate={startOfDay(new Date())}
                        renderInput={(params) => (
                          <TextField
                          size="small"
                          variant='standard'
                          sx={{ width: "100%" }}
                          fullWidth
                            {...params}
                          />
                          )}
                          />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="To Date"
                        inputFormat="DD/MM/YYYY"
                        value={toDate}
                        onChange={(dateValue) => {
                          setToDate(dateValue);
                        }}
                        maxDate={startOfDay(new Date())}
                        renderInput={(params) => (
                          <TextField
                          size="small"
                          // maxDate={startOfDay(new Date())}
                          variant='standard'
                          sx={{ width: "100%" }}
                          fullWidth
                          {...params}
                          />
                          )}
                          />
                  </LocalizationProvider>
                </Grid>
                <Grid ml={2}>
                  <Button variant='contained' size='small' type='submit' onClick ={handleSearchSubmit}>Search</Button>
                </Grid>
                {rows.length ? (
                  <VirtualizedTable 
                    columns={columns} rows={rows}
                  />
                ) : (
                  <NoDataFound search={search} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit} />
                )}
              </Grid>
            </>
          ) : (
            <SkeletonForInboxSentbox />
          )}
        </CardContent>
      </Card>
    );
  // return (
  //   <>
  //   {rows.length > 0 ? (
  //    <Card>
  //    <CardContent>
  //      <PageTitle name={name}/>
         
         
  //      {/* {openModal && <Modal1 closeModal ={setOpenModal}/>} */}
  //      <Grid 
  //         container 
  //         alignItems='center' 
  //         display={'flex'}
  //         justify='center'
  //         direction="row"
  //         columnSpacing={2}>
  //       <Grid width='100%'item xs={12} sm={3} md={3} lg={3} >
  //         <TextField 
  //           label="Search for CR Title or ID"
  //           variant='standard'
  //           size='small'
  //           sx={{width:'100%'}}
  //           value={search}
  //           onChange={handleSearchChange}
  //           autoFocus
  //         />
  //       </Grid>
  //       {/* <Grid item xs={12} sm={1} md={1} lg={1}>
  //       </Grid> */}
  //       <Grid item xs={12} sm={4} md={4} lg={4}>
  //         <LocalizationProvider dateAdapter={AdapterDayjs}>
  //             <DatePicker
  //               label="From Date"
  //               inputFormat="DD/MM/YYYY"
  //               value={fromDate}
  //               onChange={(dateValue) => {
  //                 setFromDate(dateValue);
  //               }}
  //               maxDate={startOfDay(new Date())}
  //               renderInput={(params) => (
  //                 <TextField
  //                 size="small"
  //                 variant='standard'
  //                 sx={{ width: "100%" }}
  //                 fullWidth
  //                   {...params}
  //                 />
  //                 )}
  //                 />
  //           </LocalizationProvider>
  //         </Grid>
  //         <Grid item xs={12} sm={4} md={4} lg={4}>
  //         <LocalizationProvider dateAdapter={AdapterDayjs}>
  //             <DatePicker
  //               label="To Date"
  //               inputFormat="DD/MM/YYYY"
  //               value={toDate}
  //               onChange={(dateValue) => {
  //                 setToDate(dateValue);
  //               }}
  //               maxDate={startOfDay(new Date())}
  //               renderInput={(params) => (
  //                 <TextField
  //                 size="small"
  //                 // maxDate={startOfDay(new Date())}
  //                 variant='standard'
  //                 sx={{ width: "100%" }}
  //                 fullWidth
  //                 {...params}
  //                 />
  //                 )}
  //                 />
  //         </LocalizationProvider>
  //       </Grid>
  //        <Grid ml={2}>
  //           <Button variant='contained' size='small' type='submit' onClick ={handleSearchSubmit}>Search</Button>
  //         </Grid>
  //       </Grid>
  //      {filteredRows &&
  //      <VirtualizedTable 
  //      columns={columns} rows={rows}
  //      />
  //      }
  //     {/* {
  //       inbox && search &&
  //       <VirtualizedTable 
  //       columns={columns} rows={rows}
  //       />
  //     } */}
  //    </CardContent>
  //  </Card>
  //   )
  //   :
  //   (
  //     isLoading ? 
  //     (
  //       <>
  //         <Card >
  //           <CardContent>
  //           <PageTitle name={name}/>
  //           <Grid 
  //               container 
  //               alignItems='center' 
  //               display={'flex'}
  //               justify='center'
  //               direction="row"
  //               columnSpacing={2}>
  //             <Grid width='100%'item xs={12} sm={3} md={3} lg={3} >
  //               <TextField 
  //                 label="Search for CR Title or ID"
  //                 variant='standard'
  //                 size='small'
  //                 sx={{width:'100%'}}
  //                 value={search}
  //                 onChange={handleSearchChange}
                  
  //               />
  //             </Grid>
  //             {/* <Grid item xs={12} sm={1} md={1} lg={1}>
  //             </Grid> */}
  //             <Grid item xs={12} sm={4} md={4} lg={4}>
  //               <LocalizationProvider dateAdapter={AdapterDayjs}>
  //                   <DatePicker
  //                     label="From Date"
  //                     inputFormat="DD/MM/YYYY"
  //                     value={fromDate}
  //                     onChange={(dateValue) => {
  //                       setFromDate(dateValue);
  //                     }}
  //                     // minDate={startOfDay(new Date())}
  //                     renderInput={(params) => (
  //                       <TextField
  //                       size="small"
  //                       variant='standard'
  //                       sx={{ width: "100%" }}
  //                       fullWidth
  //                         {...params}
  //                       />
  //                       )}
  //                       />
  //                 </LocalizationProvider>
  //               </Grid>
  //               <Grid item xs={12} sm={4} md={4} lg={4}>
  //               <LocalizationProvider dateAdapter={AdapterDayjs}>
  //                   <DatePicker
  //                     label="To Date"
  //                     inputFormat="DD/MM/YYYY"
  //                     value={toDate}
  //                     onChange={(dateValue) => {
  //                       setToDate(dateValue);
  //                     }}
  //                     minDate={startOfDay(new Date())}
  //                     renderInput={(params) => (
  //                       <TextField
  //                       size="small"
  //                       // maxDate={startOfDay(new Date())}
  //                       variant='standard'
  //                       sx={{ width: "100%" }}
  //                       fullWidth
  //                       {...params}
  //                       />
  //                       )}
  //                       />
  //               </LocalizationProvider>
  //             </Grid>
  //             <Grid ml={2}>
  //                 <Button variant='contained' size='small' type='submit' onClick ={handleSearchSubmit}>Search</Button>
  //               </Grid>
  //             </Grid>
  //             <Box sx={{ display: 'flex', justifyContent:'center',mt:10 }} >
  //               <CircularProgress />
  //             </Box>
  //           </CardContent>
  //         </Card>
  //       </>
  //     ) 
  //     : 
  //     (
  //       <>
  //         <Card spacing={1}>
  //           <CardContent>
  //             <PageTitle name={name}/>
  //             {search.length > 0 && isLoading === false? 
  //               (
  //               <>
  //                 <NoDataFound search={search} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit}/>
  //               </>
  //               ):(
  //                 sentBox.length == 0 && search.length <=0 ?
  //                 (
  //                 <>
  //                   <SkeletonForInboxSentbox />
  //                 </>
  //                 ):(
  //                   <NoDataFound search={search} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit}/>
  //                 )
  //             )}
              
          
  //           </CardContent>
  //         </Card>
  //       </>
  //   ))}
      
  // </>
  //   // <>
  //   // {rows.length > 0 ? (
  //   //   <Card>
  //   //   <CardContent>
  //   //     <PageTitle name={name}/>
          
          
  //   //     <Grid>
  //   //     <TextField 
  //   //       label="Search for CR Title or ID"
  //   //       variant='standard'
  //   //       size='small'
  //   //       sx={{width:'33%', bgcolor:''}}
  //   //       value={search}
  //   //       onChange={handleSearchChange}
  //   //       style={{marginBottom: 16}}
  //   //     />
  //   //    </Grid>
  //   //     <VirtualizedTable columns={columns} rows={rows}/>
  //   //   </CardContent>
  //   // </Card>
  //   // )
  //   // :
  //   // (
  //   //   isLoading ? 
  //   //   (
  //   //     <>
  //   //       <Card >
  //   //         <CardContent>
  //   //         <PageTitle name={name}/>
  //   //         <Grid>
  //   //           <TextField 
  //   //             label="Search for CR Title or ID"
  //   //             variant='standard'
  //   //             size='small'
  //   //             sx={{width:'33%', borderRadius:'', bgcolor:''}}
  //   //             value={search}
  //   //             onChange={handleSearchChange}
  //   //             style={{marginBottom: 16}}
  //   //           />
  //   //         </Grid>
  //   //           <Box sx={{ display: 'flex', justifyContent:'center',mt:10 }} >
  //   //             <CircularProgress />
  //   //           </Box>
  //   //         </CardContent>
  //   //       </Card>
  //   //     </>
  //   //   ) 
  //   //   : 
  //   //   (
  //   //     <>
  //   //   <Card spacing={1}>
  //   //     <CardContent>
  //   //       <PageTitle name={name}/>
          
  //   //       {search.length > 0 ? 
  //   //         (
  //   //         <>
  //   //           {/* <Grid>
  //   //             <TextField 
  //   //               label="Search for CR Title or ID"
  //   //               variant='standard'
  //   //               size='small'
  //   //               sx={{width:'33%', borderRadius:'', bgcolor:''}}
  //   //               value={search}
  //   //               onChange={handleSearchChange}
  //   //               style={{marginBottom: 16}}
  //   //             />
  //   //           </Grid>
  //   //           <Grid textAlign={'center'}>
  //   //             <div height={'50vh'}>
  //   //               <img src={noData} alt='noData' style={{width:'100px', height:'100px'}}></img>
  //   //             </div>
  //   //             <H4>No data found. Click below to search again.</H4>
  //   //           </Grid> */}
  //   //           <NoDataFound search={search} handleSearchChange={handleSearchChange}/>
  //   //         </>
  //   //         ):(
  //   //           <>
  //   //             <SkeletonForInboxSentbox />
  //   //           </>
  //   //       )}
      
  //   //     </CardContent>
  //   // </Card>
  //   //   </>
  //   // ))}
      
  //   // </>
  // )
}

export default Sentbox;

// const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    // const handleChangePage = (event, newPage) => {
    //   setPage(newPage);
    // };
  
    // const handleChangeRowsPerPage = (event) => {
    //   setRowsPerPage(parseInt(event.target.value, 10));
    //   setPage(0);
    // };

    //inside return
    {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}

//dummy data
// const sample = [
  //   [<Link href='/cms/#/CRStatusFromSentBox'>T AP/FMPNL/2022/AP C439/CRM29580</Link>, 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm', 'Pending with ALAMURI VIJAY BHASKAR(AP_C214)','NA','PMU Verified', '-NA-', '-NA-', 'High', 'Work Flow Changes', '-NA-', '-NA-', 'ANUPAMA KETHAM REDDY', 'Normal Request', 'Change', ],
  //   // ['T AP/FMPNL/2022/AP C439/CRM29581', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
  //   // ['T AP/FMPNL/2022/AP C439/CRM29582', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
  //   // ['T AP/FMPNL/2022/AP C439/CRM29583', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
  //   // ['T AP/FMPNL/2022/AP C439/CRM29584', 'With the approval Copy', 'With the approval Copy', 'Empanelment and Medical Audit', '02/02/2022 04:42:21 pm'],
  // ];