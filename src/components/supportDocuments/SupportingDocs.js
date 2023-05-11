import { Alert, AlertTitle, Button, FormLabel, Grid, Typography } from '@mui/material';
import React, { useRef, useState } from 'react'
import SimpleBackdrop from '../../pages/ViewCR/BackDrop';
import CloseIcon from '@mui/icons-material/Close';
import {Tiny} from '../typography/Typography'
import Swal from 'sweetalert2';

const SupportingDocs = () => {
    const aRef = useRef(null);

    const [files, setFiles] = useState([]);
    const handlePreview = (file) => {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank', 'noreferrer')
    }
    
    const handleFileRemove =(index) =>{
      const newFiles = [...files];
      newFiles.splice(index,1);
      setFiles(newFiles);
      aRef.current.value = '';
    }
  const handleFileSelect = (e) =>{
    const selectedFile = e.target.files[0];
    if(selectedFile.size > 100000){
      Swal.fire({
        title: 'Error!',
        text: 'File size is large.',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
      aRef.current.value = '';
      return;
    }
    setFiles([...files, selectedFile]);
    aRef.current.value = '';
  }

  // const handleFileUpload = async() => {
  //   console.log('files before upload', files);
  //   //TODO (upload files to database) Logic 
  //   const formData = new FormData();
  //   files.forEach((file) => {
  //     formData.append('files', file);
  //   });
  //   formData.append(
  //     'ehfm cr attachments mapping dto',
  //     JSON.stringify([{crReqId:'3'}])
  //   );
  //   formData.append(
  //     'crdto',
  //     JSON.stringify({crReqId:'3'})
  //   )
  //   const response = await fetch('http://10.48.19.62:8087/cmsapi/supporting-docs', {
  //     method: 'POST',
  //     body: formData,
  //   });
  //   const responseData = await response.json();
  //   console.log(responseData);
  //   if(response.ok){
  //     alert('Documents Saved');
  //     console.log('req id:- ', responseData.result);
  //   }else{
  //     console.log('Error Occured', response.status)
  //   }
  //   setFiles([]);
  // }

  
  return (
    <>
        <Grid item xs={12}  sm={6} md={6} lg={6} mt={0.5}>
            <Grid item xs={12} sm={6} md={6} lg={6} >
            <FormLabel id="demo-row-radio-buttons-group-label"  sx={{mb:"8px"}}>
                Supporting Documents:
                <Tiny fontWeight='500' mt={0.2}>&nbsp;pdf/xlsx/doc/docx</Tiny>
            </FormLabel>
            </Grid>
            {files.map((file, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6}>
                  {file.size > 100000 ? 
                  (  
                    <>
                      <div>
                        <Tiny color='red'>File Size Too Large</Tiny>
                        <Button  sx={{marginRight:'5px'}} onClick={() => handleFileRemove(index)} >Remove File</Button>
                      </div>
                    </>
                  ): (
                    <>
                      <Typography variant='body2'>File {index+1}: {file.name}</Typography>
                      <Button onClick={() => handlePreview(file)} >Preview</Button> 
                      <Button  sx={{marginRight:'5px'}} onClick={() => handleFileRemove(index)} >Remove File</Button>
                    </>
                  )}
                
                {/* file !== '' <Button onClick={() => handlePreview(file)} >Preview</Button>?<SimpleBackdrop imageURL ={file} /> : <></> */}
                {/* { */}
                 {/* file !== '' ? <><Button onClick={() => handlePreview(file)} >Preview</Button> <Button  sx={{marginRight:'5px'}} onClick={() => handleFileRemove(index)} >Remove File</Button></>:'' } */}
                </Grid>
             ))}
            <input type="file" ref={aRef} accept=".doc,.docx,.xml, .pdf"onChange={handleFileSelect} />
            {/* <Grid item sx={{mt:0.5}}> */}
                
                {/* <Button  variant='contained' sx={{marginRight:'5px'}} size='small' onClick={handleFileUpload}>Add</Button> */}
                {/* <Button  variant='contained' size='small' onClick={removeFileUpload}>Delete</Button> */}
            {/* </Grid> */}
        </Grid> 
    </>
  )
}

export default SupportingDocs;
