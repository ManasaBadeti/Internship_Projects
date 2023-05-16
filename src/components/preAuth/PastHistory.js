import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import { useFormik } from "formik";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Autocomplete from '@mui/material/Autocomplete';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import TablePagination from '@mui/material/TablePagination';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

import SearchParams from '../../components/SearchParams';

function createData(PatientNumber, PatientName, CardNumber, District, Gender, Age, RegistrationDate) {
  return { PatientNumber, PatientName, CardNumber, District, Gender,Age,RegistrationDate };
}

const columns = [
  { id: 'PatientNumber', label: 'Case ID', minWidth: 170 },
  { id: 'PatientName', label: 'Patient Name', minWidth: 100 },
  {
    id: 'CardNumber',
    label: 'Hospital Name',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'District',
    label: 'Case Type',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'Gender',
    label: 'Case Status',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'Age',
    label: 'Registered Date',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'RegistrationDate',
    label: 'PreAuth Amount',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'RegistrationDate',
    label: 'Claim Amount',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'RegistrationDate',
    label: 'Procedure',
    minWidth: 170,
    align: 'left',
  },
];


const rows = [
//   createData(1111111,'A', 159, 'test', 'Male',34,'01/02/2023'),
//   createData(2111111,'B', 237,'test', 'Male',45,'01/02/2023'),
//   createData(3111111,'C', 262, 'test', 'Male',33,'01/02/2023'),
//   createData(4111111,'D', 305, 'test', 'Male',34,'01/02/2023'),
//   createData(5111111,'E', 356, 'test', 'Male',34,'01/02/2023'),
//   createData(3111111,'C', 262, 'test', 'Male',33,'01/02/2023'),
//   createData(4111111,'D', 305, 'test', 'Male',34,'01/02/2023'),
//   createData(5111111,'E', 356, 'test', 'Male',34,'01/02/2023'),
];


const PastHistory = props => {
    const { isDisabled, data} = props;


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleSearch(event) {
    // showSnackbar('This is a snackbar message', 'success');
  }

  const options = [
    { label: 'One', id: 1 },
    { label: 'Two', id: 2 },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [value, setValue] = React.useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <SearchParams isCaseId={true} onClick={handleSearch}/>
      {/* <Card sx={{ mt: 2 }}>
        <CardContent> */}
        <Box sx={{ overflow: "auto" }}>
            <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <TableContainer >
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
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                            {column.id=='PatientNumber' ? 
                              <TableCell key={column.id} align={column.align}>
                              <Link underline="hover" color="inherit" to="/preauthApproval">
                                {row.PatientNumber}
                              </Link>
                             </TableCell>
                              :
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            }
                            </>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          </Box>
          </Box>
        {/* </CardContent>
      </Card> */}
    </>
  );
}

export default PastHistory;
