import React, { useEffect, useRef, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PageTitle from '../../layouts/PageTitle';
import VirtualizedTable from '../../components/table/VirtualizedTable';
import { Button, Grid, Stack, TextField, Tooltip, Typography } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import Modal1 from '../../components/modal/Modal1'
import SkeletonForInboxSentbox from '../../components/skeleton/Skeleton';
import NoDataFound from '../../components/noDataFound/NoDataFound';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { startOfDay } from 'date-fns';
import SearchTable from "../../components/table/SearchTable";


const Inbox = () => {
  const [inbox, setInbox] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState('');
  const [isInitialDataLoaded, setInitialDataLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredRows, setFilteredRows] = useState(inbox)
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = useState(null)
  
  
  useEffect(()=>{
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://10.48.158.197:8087/cmsapi/inbox');
        const data = await response.json();

        setInbox(data.result.Inbox);
        setFilteredRows(data.result.Inbox);
      } catch(err) {
        console.error(err);
      } finally {
        setIsLoading(false);
        setInitialDataLoaded(true);
      }
    }

    fetchData();
  }, []);

  function createData( crTitle, crDesc, deptName, CRDate, crReqId, CRStatus,CRPriority, CRTypeOfChange, CREDD, CRRaisedBy, CRCategory, actions) {
    return {  crTitle, crDesc, deptName, CRDate, crReqId, CRStatus, CRPriority, CRTypeOfChange, CREDD, CRRaisedBy, CRCategory, actions};
  }
  const handleSearchChange =(e) => {
    setSearch(e.target.value);
  }
  const handleSearchSubmit =(e) => {
    if (!search.length) {
      setFilteredRows(inbox);
      return;
    }
    const newFilteredRows = inbox.filter(
      item => 
      item.crTitle.toLowerCase().includes(search.toLowerCase()) || (`${item.crReqId}`).toLowerCase().includes(search.toLowerCase())
    )
    setFilteredRows(newFilteredRows);
  }
  
  
  const rows = filteredRows.map((item,index) => {
    return createData(
      // index+1,
      item.crTitle,
      item.crDesc,
      // (item.crDesc && item.crDesc.length > 20 ?
      //   <Tooltip title={item.crDesc} arrow> 
      //     <Typography variant='subtitle2'>{item.crDesc?.slice(0, 20)}...</Typography>
      //   </Tooltip> 
      //   : 
      //   <Typography variant='subtitle2'> {item.crDesc}</Typography>
      //  ),
      item.deptName,
      item.crtOn,
      `${item.crReqId}`,
      item.status,
      item.typeName,
      item.typeNames,
      item.edt,
      item.username,
      item.workflowName,
      // (
      //   <Grid display={'flex'}>
      //     <Tooltip title='Alert Again' arrow>
      //       <Button size='small' sx={{pr:2}} onClick={() => console.log(rows)}>
      //         <CampaignIcon sx={{ color:'purple'}}/>
      //       </Button>
      //     </Tooltip>  
      //   </Grid>
      // )
    )
  });
    const name='Inbox'
    const columns = [
      // {
      //   width: 100,
      //   label: 'Sl No.',
      //   dataKey: 'id',
      //   // numeric: true,
      // },
      
      {
        width: 180,
        headerName: 'CR Title',
        field: 'crTitle',
        headerClassName: 'super-app-theme--header',
        // numeric: true,
      },
      {
        width: 200,
        headerName: 'CR Description',
        field: 'crDesc',
        headerClassName: 'super-app-theme--header',
        // numeric: true,
      },
      {
        width: 200,
        headerName: 'CR Raised Department',
        field: 'deptName',
        headerClassName: 'super-app-theme--header',
        // numeric: true,
      },
      {
        width: 160,
        headerName: 'Request ID',
        field: 'crReqId',
        headerClassName: 'super-app-theme--header',
        // (
        //   <Grid container display={'flex'} alignItems='center'>
        //     <Grid >
        //       Request ID
        //     </Grid>
        //     <Button size='small' sx={{minWidth:0}} onClick={handleSortClick}>
        //       {sortOrder === 'critical' ? <ArrowUpward fontSize='small'/> : <ArrowDownward fontSize='small'/>}
        //     </Button>
        //   </Grid>
        // ),
        // numeric: true,
      },
      {
        width: 150,
        headerName: 'CR Raised Date',
        field: 'CRDate',
        headerClassName: 'super-app-theme--header',
        // numeric: true,
      },
      {
        width: 200,
        headerName: 'Current Status',
        field: 'CRStatus',
        headerClassName: 'super-app-theme--header',
        // numeric: true,
      },
      // {
      //   width: 120,
      //   label: 'Parent CR ID',
      //   dataKey: 'CRParentID',
      //   // numeric: true,
      // },
      {
        width: 150,
        headerName: 'Priority',
        field: 'CRPriority',
        headerClassName: 'super-app-theme--header',
      },
      {
        width: 160,
        headerName: 'Type Of Change',
        field: 'CRTypeOfChange',
        headerClassName: 'super-app-theme--header',
        // numeric: true,
      },
      {
        width: 150,
        headerName: 'Due Date',
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
      // {
      //   width: 90,
      //   headerName: 'Actions',
      //   field: 'actions',
      //   headerClassName: 'super-app-theme--header',
      //   // numeric: true,
      // },
      {

        field:'actions',
        
        headerName:'Actions',
        headerClassName: 'super-app-theme--header',
         width: 200,
        
        sortable: false,
        
        disableClickEventBubbling: true,
        
        
        
        renderCell: (params) => {
        
        const onClick = (e) => {
        
        const currentRow = params.row;
        
        return alert(JSON.stringify(currentRow,null,4));
        
        };
        
        
        
        return (
        
          (
            <Grid display={'flex'}>
              <Tooltip title='Alert Again' arrow>
                <Button size='small' sx={{pr:2}} onClick={() => console.log(rows)}>
                  <CampaignIcon sx={{ color:'purple'}}/>
                </Button>
              </Tooltip>  
            </Grid>
          )
        
        );
        
        },
        
        }
      
    ];

    return (
      <Card>
        <CardContent>
          <PageTitle name={name} />
           {isInitialDataLoaded ? (
            <>
              {openModal && <Modal1 closeModal={setOpenModal} />}
              {/*<Grid 
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
                </Grid>*/}
                {rows.length ? (
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
                ) : (
                  <NoDataFound search={search} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit} />
                )}
              {/* </Grid> */}
            </>
          ) : (
            <SkeletonForInboxSentbox />
          )} 

        </CardContent>
      </Card>
    );
  // return (
    
  //   <>
  //     {isLoading ? (
  //       <>
  //         {inbox.length <= 0 ? (
  //           <Card>
  //             <CardContent>
  //               <PageTitle name={name} />
  //               {openModal && <Modal1 closeModal={setOpenModal} />}
  //               <Grid 
  //                   container 
  //                   alignItems='center' 
  //                   display={'flex'}
  //                   justify='center'
  //                   direction="row"
  //                   columnSpacing={2}>
  //                   <Grid width='100%'item xs={12} sm={3} md={3} lg={3} >
  //                     <TextField 
  //                       label="Search for CR Title or ID"
  //                       variant='standard'
  //                       size='small'
  //                       sx={{width:'100%'}}
  //                       value={search}
  //                       onChange={handleSearchChange}
  //                       autoFocus
  //                     />
  //                   </Grid>
  //                   {/* <Grid item xs={12} sm={1} md={1} lg={1}>
  //                   </Grid> */}
  //                   <Grid item xs={12} sm={4} md={4} lg={4}>
  //                     <LocalizationProvider dateAdapter={AdapterDayjs}>
  //                         <DatePicker
  //                           label="From Date"
  //                           inputFormat="DD/MM/YYYY"
  //                           value={fromDate}
  //                           onChange={(dateValue) => {
  //                             setFromDate(dateValue);
  //                           }}
  //                           maxDate={startOfDay(new Date())}
  //                           renderInput={(params) => (
  //                             <TextField
  //                             size="small"
  //                             variant='standard'
  //                             sx={{ width: "100%" }}
  //                             fullWidth
  //                               {...params}
  //                             />
  //                             )}
  //                             />
  //                       </LocalizationProvider>
  //                     </Grid>
  //                     <Grid item xs={12} sm={4} md={4} lg={4}>
  //                     <LocalizationProvider dateAdapter={AdapterDayjs}>
  //                         <DatePicker
  //                           label="To Date"
  //                           inputFormat="DD/MM/YYYY"
  //                           value={toDate}
  //                           onChange={(dateValue) => {
  //                             setToDate(dateValue);
  //                           }}
  //                           maxDate={startOfDay(new Date())}
  //                           renderInput={(params) => (
  //                             <TextField
  //                             size="small"
  //                             // maxDate={startOfDay(new Date())}
  //                             variant='standard'
  //                             sx={{ width: "100%" }}
  //                             fullWidth
  //                             {...params}
  //                             />
  //                             )}
  //                             />
  //                     </LocalizationProvider>
  //                     </Grid>
  //                     <Grid ml={2}>
  //                       <Button variant='contained' size='small' type='submit' onClick ={handleSearchSubmit}>Search</Button>
  //                     </Grid>
  //                   </Grid>
  //                   {filteredRows &&
  //                   <VirtualizedTable 
  //                   columns={columns} rows={rows}
  //                   />
  //                   }
  //             </CardContent>
  //           </Card>
  //         ):
  //         (
  //           search.length >= 0 && flag ?
  //           (
  //             <NoDataFound search={search} handleSearchChange={handleSearchChange} handleSearchSubmit={handleSearchSubmit}/>
              
  //             ):
  //             (
  //               <>
  //               <Card>
  //             <CardContent>
  //               <PageTitle name={name} />
  //               {openModal && <Modal1 closeModal={setOpenModal} />}
  //               <Grid 
  //                   container 
  //                   alignItems='center' 
  //                   display={'flex'}
  //                   justify='center'
  //                   direction="row"
  //                   columnSpacing={2}>
  //                   <Grid width='100%'item xs={12} sm={3} md={3} lg={3} >
  //                     <TextField 
  //                       label="Search for CR Title or ID"
  //                       variant='standard'
  //                       size='small'
  //                       sx={{width:'100%'}}
  //                       value={search}
  //                       onChange={handleSearchChange}
  //                       autoFocus
  //                     />
  //                   </Grid>
  //                   <Grid item xs={12} sm={4} md={4} lg={4}>
  //                     <LocalizationProvider dateAdapter={AdapterDayjs}>
  //                         <DatePicker
  //                           label="From Date"
  //                           inputFormat="DD/MM/YYYY"
  //                           value={fromDate}
  //                           onChange={(dateValue) => {
  //                             setFromDate(dateValue);
  //                           }}
  //                           maxDate={startOfDay(new Date())}
  //                           renderInput={(params) => (
  //                             <TextField
  //                             size="small"
  //                             variant='standard'
  //                             sx={{ width: "100%" }}
  //                             fullWidth
  //                               {...params}
  //                             />
  //                             )}
  //                             />
  //                       </LocalizationProvider>
  //                     </Grid>
  //                     <Grid item xs={12} sm={4} md={4} lg={4}>
  //                     <LocalizationProvider dateAdapter={AdapterDayjs}>
  //                         <DatePicker
  //                           label="To Date"
  //                           inputFormat="DD/MM/YYYY"
  //                           value={toDate}
  //                           onChange={(dateValue) => {
  //                             setToDate(dateValue);
  //                           }}
  //                           maxDate={startOfDay(new Date())}
  //                           renderInput={(params) => (
  //                             <TextField
  //                             size="small"
  //                             // maxDate={startOfDay(new Date())}
  //                             variant='standard'
  //                             sx={{ width: "100%" }}
  //                             fullWidth
  //                             {...params}
  //                             />
  //                             )}
  //                             />
  //                     </LocalizationProvider>
  //                     </Grid>
  //                     <Grid ml={2}>
  //                       <Button variant='contained' size='small' type='submit' onClick ={handleSearchSubmit}>Search</Button>
  //                     </Grid>
  //                   </Grid>
  //                   {filteredRows &&
  //                   <VirtualizedTable 
  //                   columns={columns} rows={rows}
  //                   />
  //                   }
  //             </CardContent>
  //           </Card>
  //             </>
  //           ))}
  //       </>
  //     ):(
  //       <SkeletonForInboxSentbox />
  //     )}
  //   </>
  // )
}

export default Inbox

//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
//     const handleChangePage = (event, newPage) => {
//       setPage(newPage);
//     };
  
//     const handleChangeRowsPerPage = (event) => {
//       setRowsPerPage(parseInt(event.target.value, 10));
//       setPage(0);
//     };

//inside return
// {/* <TablePagination
//          rowsPerPageOptions={[5, 10, 25]}
//          component="div"
//          count={rows.length}
//          rowsPerPage={rowsPerPage}
//          page={page}
//          onPageChange={handleChangePage}
//          onRowsPerPageChange={handleChangeRowsPerPage}
//        /> */} 


