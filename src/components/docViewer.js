// ** MUI Imports
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

import React, { useState } from "react";

 import { Document, Page,pdfjs  } from "react-pdf/dist/esm/entry.webpack";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
//import 'pdfjs-dist/webpack';
pdfjs.GlobalWorkerOptions.workerSrc =null;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = null;
// pdfjs.GlobalWorkerOptions.workerSrc = '../../node_modules/pdfjs-dist/build/pdf.worker.js';
//import * as pdfjs from 'pdfjs-dist/legacy/build/pdf';

//pdfjs.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/legacy/build/pdf.worker';
// import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DocViewer = props => {
  const { file, fileName, isClosed } = props;

  // console.log(file)
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(.6);
  console.log(numPages);

  function onDocumentLoadSuccess({ numPages }) {
    //setNumPages(null);
    if (numPages!==null)
      {
        try{
          setNumPages(numPages);
        }
        catch (error) {
          console.log(error.message);
        }
      }
    
   
  }

  const handleDialogClose = () => {
    isClosed(true);
   }

   const handleZoomIn = () => {
    setZoom(zoom + 0.2);
   }

   const handleZoomOut = () => {
    setZoom(zoom - 0.2);
   }

  return (
      <Box>
        <AppBar sx={{ position: "fixed" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleDialogClose}
              aria-label="close"
            >
              <CloseIcon sx={{ ml: 2 }} />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {fileName}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleZoomIn}
              aria-label="close"
            >
              <ZoomInIcon sx={{ ml: 2 }} />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleZoomOut}
              aria-label="close"
            >
              <ZoomOutIcon sx={{ ml: 2 }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={{align:'center', mt:15}}>
        {/* <Document file={file} onLoadSuccess={onDocumentLoadSuccess} loading="Please wait!">
        <Page pageNumber={pageNumber} />
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={zoom}/>
          ))}
        </Document> */}
        <Document
        file="https://prod-assignments.s3.ap-south-1.amazonaws.com/student/mgmt11learn156/23558/1633438144000.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <Page pageNumber={pageNumber} />
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            scale={zoom}
          />
        ))}
      </Document>
        </Box>
      </Box>
  );
};

export default DocViewer;
