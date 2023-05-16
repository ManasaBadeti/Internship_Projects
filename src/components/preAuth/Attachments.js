import React from 'react'
import {
    Box,
    CardContent,
    Grid,
    Autocomplete,
    TextField,
    Button,
    Typography,
    styled 
  } from "@mui/material";
import PropTypes from 'prop-types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import TablePagination from '@mui/material/TablePagination';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import FileUpload from "../../components/FileUpload";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      width:500
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
      width:500
    },
  }));
  
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

const columns = [
    { id: 'PatientNumber', label: 'Document Type', minWidth: 170 },
    { id: 'PatientName', label: 'File Name', minWidth: 100 },
  ];
  
  function createData(PatientNumber, PatientName) {
    return { PatientNumber, PatientName};
  }
  const rows = [
    createData('Blood Transfusion','abcd.pdf'),
    createData('DTRS','xyz.pdf'),
  ];

const Attachments = props => {
    const { isDisabled, data} = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    const options = [
        { label: "Blood Transfusion", id: 1 },
        { label: "Consent Documents ", id: 2 },
        { label: "DTRS", id: 3 },
        { label: "Medical/Cardiology Clearance", id: 4 },
      ];

    return (
      <>
        <Grid
          container
          direction="row"
          rowSpacing={0}
          columnSpacing={2}
          justify="flex-end"
          alignItems="center"
        >
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Autocomplete
              disablePortal
              onChange={(event, value) => console.log(value)}
              margin="normal"
              fullWidth
              size="small"
              id="combo-box-demo"
              options={options}
              sx={{ width: "100%", mt: 1 }}
              renderInput={(params) => (
                <TextField {...params} label="Document Type" />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Button sx={{ minWidth: 100 }} fullWidth variant="outlined" onClick={handleClickOpen}>
              Attachment
            </Button>
          </Grid>
          <Grid item xs={12} sm={2} md={2} lg={2}>
            <Button sx={{ minWidth: 100 }} fullWidth variant="contained">
              Add
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ overflow: "auto", mt: 3 }}>
          <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    //   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <>
                                {column.id == "PatientNumber" ? (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    <Link
                                      underline="hover"
                                      color="inherit"
                                      to="/preauthApproval"
                                    >
                                      {row.PatientNumber}
                                    </Link>
                                  </TableCell>
                                ) : (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                )}
                              </>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          {/* <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Modal title
          </BootstrapDialogTitle> */}
          <DialogContent >
            <FileUpload/>
          </DialogContent>
          {/* <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions> */}
        </BootstrapDialog>
      </>
    );
}

export default Attachments