import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {InputAdornment, Paper} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormLabel from '@mui/material/FormLabel';
import { useRef, useState , useEffect} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PageTitle from '../layouts/PageTitle';
import SupportingDocs from '../components/supportDocuments/SupportingDocs';
import { startOfDay } from 'date-fns';
import LinearProgress from '@mui/material/LinearProgress';
import LoadingButton from '@mui/lab/LoadingButton';
import Swal from 'sweetalert2';
import {Navigate, Redirect, Route, Routes} from 'react-router-dom';



// import TextField from '@mui/material/TextField';

function CreateRequest1() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;
      
  const [show, setShow] = useState(null);
  const [workflow, setWorkflow] = useState([]);
  const [appType, setAppType] = useState(null);
  const [parentOrg, setParentOrg] = useState(null);
  const [rtn, setRtn] = useState(null);
  const [crTitle, setCrTitle] = useState('');
  const [crDesc, setCrDesc] = useState('');
  const [crModule, setCrModule] = useState(null);
  const [typeChange, setTypeChange] = useState(null);
  const [crSeverity, setCRSeverity] = useState(null);
  const [mobile, setMobile] = useState('');
  const [response, setResponse] = useState(null);
  
  // const [addFile, setAddFile] = useState(false);
  // const handleAddItem =()=>{
  //   // setAddFile(true)
  //   // setAddFile([...addFile,{addItem:""}])
  //   if(addFile == false){
  //     setAddFile(true);
  //   }
    
  // }
  // const handleRemoveItem =() =>{
  //   setAddFile(false);
  // }

  

  // const clearData=()=>{
  //   setBaseFile('')
  //   aRef.current.value = null;
  // }
  
  // const [fileUploadCount, setFileUploadCount] = useState(1);
  // // const addFileUpload = React.useCallback(() => {
  // //   setFileUploadCount(count => count + 1);
  // // });
  // const removeFileUpload = React.useCallback(() => {
  //   setFileUploadCount(count => Math.max(1, count - 1));
  // });
  // const [baseFile,setBaseFile] = useState('');
  // const handleFileChange = React.useCallback((e) => {
  //     var result = URL.createObjectURL(e.target.files[0])
  //     setBaseFile(result)
  //     console("Basefile is",result.size());

      
  //     //   //setFile(URL.createObjectURL(e.target.files[0]));
  //     //   let idCardBase64 = '';
  //     //   (test(e.target.files[0], (result) => {
  //     //     idCardBase64 = result;
  //     //     setBaseFile(result);
        
  //     //     // console.log(idCardBase64);
  //     //     // setFileUrl(idCardBase64);
  //     //     //sendPrivateFile(idCardBase64,event.target.files[0].name, event.target.files[0].type);
  //     // })
  //     // );  
  // }, [setBaseFile, baseFile]);

  // const fileUploadJSX = React.useMemo(() => {
  //   let tempFileUploadJSX = []
  //   for (let i = 0; i < fileUploadCount; i++) {
  //     tempFileUploadJSX.push(
  //       <div key={`fileUpload_${i}`} component="label" sx={{bgcolor: "white", color: "black",textTransform: 'none'}}  >    

  //         <input type="file" ref={aRef} onChange={handleFileSelect} />
  //         { //Check if message failed
  //           (baseFile !== '')
  //             // ? <a target="_blank" href={baseFile}><Button><VisibilityIcon />Preview</Button></a>
  //             ? <SimpleBackdrop imageURL={baseFile}/>
  //             : <></>
  //         }
  //       </div>
  //     );
  //   }
  //   return tempFileUploadJSX;
  // }, [fileUploadCount, handleFileChange, baseFile]);

  // const [files, setFiles] = useState([]);

  // const handleFileSelect = (e) =>{
  //   const selectedFile = e.target.files[0];
  //   setFiles([...files, selectedFile]);
  //   aRef.current.value = '';
  // }

  // const handleFileUpload = (e) => {
  //   console.log(files);
  //   //TODO (upload files to database) Logic 
  // }

  
  // const handlePreview = (file) => {
  //   const fileURL = URL.createObjectURL(file);
  //   window.open(fileURL, '_blank', 'noreferrer')
  // }
  
  // const handleFileRemove =(index) =>{
  //   const newFiles = [...files];
  //   newFiles.splice(index,1);
  //   setFiles(newFiles);
  //   aRef.current.value = '';
  // }
  const [dept1, setDept1] = useState(null);
  const [subDept1, setSubDept1] = useState(null);
  const [value, setValue] = React.useState(null);
  const [select, setSelect] = useState([])
  const [firstOptions, setFirstOptions] = useState([]);
  const [secondOptions, setSecondOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  

  const handleChange=(e, value) =>{
    setShow(value);
  }
  useEffect(() => {
  const fetchData = async() => {
    const response = await fetch('http://10.48.158.197:8087/cmsapi/initiate-application');
    const data = await response.json();
    const applicationOptions = data.result["application type"].map((type) => ({
      value: type.valueName,
      id: type.valueId,
    }));
    const parentOrgOptions = data.result.ParentOrganisation.map((item) => ({
      value: item.valueName,
      id: item.valueId,
    }));

    const departmentOptions = data.result.Department.map((item) => ({
      value: item.valueName,
      id: item.valueId,
    }));
    const selectedDeptValue = dept1?.value;
    let deptMatchFound = false;

    const subDepartmentOptions = data.result.SubDepartment
      .filter((item) => {
        if (item.valueName === selectedDeptValue) {
          deptMatchFound = true;
          return false; 
        }
        return deptMatchFound;
      })
      .map((item) => ({
        value: item.valueName,
        id: item.valueId,
      }))
      .filter((item, idx, arr) => {
        if (idx === 0) return true;
        const prevItem = arr[idx - 1];
        if (prevItem.value === selectedDeptValue && item.value === selectedDeptValue) {
          return false;
        }
        return true;
      });


    const crModuleOptions = data.result.CRModule.map((item) => ({
      value: item.valueName,
      id: item.valueId
    }));

    const changeType = data.result.Typeofchange.map((item) => ({
      value: item.valueName,
      id: item.valueId
    }))

    const severity = data.result["severity type"].map((item) => ({
      value: item.valueName,
      id: item.valueId
    }))
    setSelect({appType: applicationOptions, parentOrg: parentOrgOptions,  crModule: crModuleOptions, typeChange: changeType, crSeverity: severity})
    if(applicationOptions.length > 0){
      setAppType(applicationOptions[0]);
    }
    if(parentOrgOptions.length > 0){
      setParentOrg(parentOrgOptions[0])
    }
    setFirstOptions(departmentOptions)
    setSecondOptions(subDepartmentOptions)
    const category = data.result.WorkflowCategory.map((item) => ({
      label: item.valueName,
      id: item.valueId
    }))
    setWorkflow(category)
  };
  fetchData();
 } ,[dept1],[])

 const handleDeptChange = (event, value) => {
  setDept1(value);
  setSubDept1(null);
};

  const resetForm = () =>{
    setAppType(null)
    setParentOrg(null)
    setDept1(null)
    setSubDept1(null)
    setRtn(null)
    // setRte(null)
    setCrTitle("")
    setCrDesc("")
    setCrModule(null)
    setTypeChange(null)
    // setWfc("")
    setShow("")
    setCRSeverity(null)
    setMobile("")
    
    // aRef.current.value = null;
  }
  
  const handleRequest= () => {
    const payload= {
      "applnType":"12",
      "parntOrgId":"1",
      "subDeptId":"1",
      "changeReqType":"1",
      "crTitle":"test",
      "crDesc":"test",
      "crModule":"1",
      "typeOfChange":"1",
      "workflowCat":"1",
      "crSeverity":"1",
      "mobileNo":"9874316578",
      "crtBy":"105",
      "updBy":"105",
      "crStatusId":"1",
      "crReqCode":"test"
    };
    setLoading(true);
    fetch('http://10.48.158.197:8087/cmsapi/save-request-details', {
          method: 'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify(payload),
        })
        .then((response)=> response.json())
        .then((data) => {
          setResponse(data);
          if(data.status){
            // alert('Details Saved Successfully')
            Swal.fire({
              title: 'Success',
              text: 'Details Saved Successfully',
              icon: 'success',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
              confirmButtonText: 'Done'
            })
            resetForm()
            //navigateTo from Login file
            console.log('Success',data)
            console.log(data.message)
            // (
            //   <Link to='/sentbox'></Link>
            // )
          }else{
            Swal.fire({
              title: 'Failed',
              text: 'Failed to save Details',
              icon: 'error',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
              confirmButtonText: 'Yikes'
            })
            console.log('Fail',data)
            console.log(data.message)
          }
        })
        .catch((err) => {
          console.error('Error:', err)
        })
  }
  useEffect(() => {
  if(response){
    setLoading(false);
  }
})
     
  const name = 'Application Details'

  return(
    <>  
        {/* <Box py={1}>
          <PageTitle heading={heading}/>
        </Box> */}
        {/* {loading ?
          <Box sx={{width: '100%'}} textAlign={'center'} mt={3}>
            <Typography variant='h4'>Loading...</Typography>
            <LinearProgress />
          </Box>
          :
        } */}
        <Card>
          <CardContent>
            <PageTitle name={name}/>
            {/* <Card>   
              <CardContent> */}
                {/* <Paper variant='elevation' elevation={2} sx={{width:'50%', height:'auto'}}>          */}
                <Grid
                  container
                  // direction="row"
                  rowSpacing={0}
                  // columnSpacing={2}
                  display='flex'
                  justifyContent="center"
                  alignItems="center" 
                  mb={2}
                  sx={{
                    backgroundColor: '#baddf7cc',
                    // backgroundColor: 'white',
                    // borderBottom: '2px solid #e0e0e0',
                    // borderLeft: '2px solid #e0e0e0',
                    borderRadius:'4px',
                    // boxShadow: '0px -4px 3px rgba(186, 221, 247, 1)',
                    // boxShadow: '0px -4px 3px #baddf7cc',
                    // transform: 'skewX(-20deg)',
                    // boxShadow: '2px -4px 3px rgba(25,137,220,0.5)',
                    padding:'8px 12px'
                  }}
                  >
                    <Grid item mr={2} >
                      <FormLabel sx={{fontWeight:'bold'}} id="demo-row-radio-buttons-group-label" >
                        New Requirement
                      </FormLabel>
                    </Grid>
                  {/* <Grid item>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                    
                    </FormLabel>
                  </Grid> */}
                </Grid>
                {/* </Paper> */}
              {/* </CardContent>
            </Card> */}
        <Grid
          component='form'
          container
          direction="row"
          rowSpacing={0}
          columnSpacing={2}
          justify="flex-end"
          alignItems="center"
        >
              {/* <Grid component='form' item xs={12} sm={4} md={3} lg={3}> */}
              {/* <TextField
                size='small'
                // type='text'
                sx={{width: 210}}
                disabled
                variant='outlined'
                id="outlined-disabled"
                label="Application Type"
                value= {select?.appType?.[0].value}
                // value= 'CD201'
              /> */}
               
               {/* <Autocomplete
                  disablePortal
                  // onChange={(event, value)=>{
                  //   setAppType(value);
                  // }}
                  readOnly
                  // defaultValue={select?.appType?.[0].value}
                  value={appType}
                  margin="normal"
                  fullWidth
                  size="small"
                  id="application-type-combo-box-demo"
                  options={select.appType}
                  getOptionLabel={(item) => item.value}
                  renderInput={(params) => <TextField {...params} label="Application Type"/>}
                />
              </Grid> */}
              {/* <Grid component='form' item xs={12} sm={6} md={3} lg={3}> */}
                {/* <TextField
                  size='small'
                  // type='text'
                  disabled
                  // sx={{width: 210}}
                  variant='outlined'
                  id="outlined-disabled"
                  label="Parent Organization"
                  value= {select?.parentOrg?.[0].value}
                  // value= 'CD201'
                /> */}
                {/* <Autocomplete
                    disablePortal                 
                    // onChange={(event, value)=>{
                    //   setParentOrg(value);
                    // }}                
                    readOnly    
                    value={parentOrg}
                    margin="normal"
                    fullWidth
                    size="small"
                    id="parent-org-combo-box-demo"
                    options={select.parentOrg}
                    getOptionLabel = {(item) => item.value}
                    renderInput={(params) => <TextField {...params} label="Parent Organisation"/>}
                  />
              </Grid> */}
              <Grid component='form' item xs={12} sm={6} md={6} lg={6}>
                <Autocomplete
                    disablePortal
                    onChange={handleDeptChange}
                    value={dept1}
                    margin="normal"
                    fullWidth
                    size="small"
                    id="department-combo-box-demo"
                    options={firstOptions}
                    getOptionLabel ={(item) => item.value}
                    renderInput={(params) => <TextField {...params} label="Department" required/>}
                  />
              </Grid>
              <Grid component='form' item xs={12} sm={6} md={6} lg={6}>
                <Autocomplete
                    disablePortal              
                    value={subDept1}
                    onChange={(event, value)=>{
                      setSubDept1(value);
                    }}      
                    margin="normal"
                    fullWidth
                    size="small"
                    id="sub-department-combo-box-demo"
                    options={secondOptions}
                    getOptionLabel = {(item) => item.value}
                    renderInput={(params) => <TextField {...params} label="Sub Department" required/>}
                  />
              </Grid>
            </Grid>  
            
            <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
               value={crTitle}
               onChange={(newValue) => setCrTitle(newValue.target.value)}
                multiline
                required
                fullWidth
                id="email"
                label="CR Title(maximum of 50 characters)"
                name="email"
                autoComplete="email"
                size="small"
                rows={4}
                inputProps={{maxLength: 50}}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                value={crDesc}
                onChange={(newValue) => setCrDesc(newValue.target.value)}
                multiline
                required
                fullWidth
                id="email"
                label="CR Description(maximum of 100 characters)"
                name="email"
                autoComplete="email"
                size="small"
                rows={4}
                inputProps={{maxLength: 100}}
              />
            </Grid>
          </Grid>
          
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center">
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <Autocomplete
                  disablePortal
                  onChange={(event,value) => {setCrModule(value)}}
                  value={crModule}
                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={select.crModule}
                  getOptionLabel = {(item) => item.value}
                  renderInput={(params) => <TextField {...params} label="CR Module" required/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <Autocomplete
                  disablePortal
                  value={typeChange}
                    onChange={(event,value) => {setTypeChange(value)}}
                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  options={select.typeChange}
                  getOptionLabel = {(item) => item.value}
                  renderInput={(params) => <TextField {...params} label="Type of change" required/>}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <TextField
                margin="normal"
                type="number"
                fullWidth
                value={mobile}
                onChange={(newValue) => setMobile(newValue.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">
                     +91
                     </InputAdornment>,
                }}
                  onKeyPress={(e) => {
                    if (e?.key === '-' || e?.key === '+' ) {
                      e.preventDefault();
                    }
                  }}
                label="Mobile Number"
                id="combo-box-demo"
                name="email"
                autoComplete="email"
                size="small"
                sx={{ mt:0 }}
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
          >
            <Grid item style={{display: 'none'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="CR From Date"
                  readOnly
                  inputFormat="DD/MM/YYYY"
                  defaultValue ={date}
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
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="CR Due Date"
                  inputFormat="DD/MM/YYYY"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  minDate={startOfDay(new Date())}
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
            {/* <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"> */}
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Autocomplete
                  disablePortal
                  margin="normal"
                  fullWidth
                  size="small"
                  id="combo-box-demo"
                  onChange={handleChange}
                  options={workflow}
                  value={show}
                  // sx={{ width: "100%"}}
                  
                  renderInput={(params) => (
                    <TextField {...params} label="Workflow Category"  required/>
                  )}
              />
            </Grid>
            {
              show?.label === 'USER ISSUES' && (
                <Grid item xs={12} sm={4} md={4} lg={4}>
              
                <Autocomplete
                      disablePortal
                      value={crSeverity}
                        onChange={(event,value) => {setCRSeverity(value)}}
    
                      margin="normal"
                      fullWidth
                      size="small"
                      id="combo-box-demo"
                      options={select.crSeverity}
                      getOptionLabel ={(item) => item.value}
                      renderInput={(params) => <TextField {...params} label="CR Severity" required/>}
                    />
                </Grid>
              )
            }
          </Grid>
          {/* </Grid> */}
          
          <Grid item xs={12}  sm={6} md={6} lg={6} mt={0.5}>
              <SupportingDocs />
          </Grid>
          </CardContent>
        </Card>
        <Box sx={{   float: "right" }}>
          <Button onClick={() => resetForm() } variant="outlined" sx={{mr:2}}>
            Reset
          </Button>
          {loading ? <LoadingButton loading loadingIndicator="Saving…" variant="contained"> Create Change Request</LoadingButton>
          : 
          <Button  variant="contained" onClick={handleRequest} >
            Create Change Request
          </Button>
          }
          
          
        </Box>
      </>
      
    )
}
export default CreateRequest1;
