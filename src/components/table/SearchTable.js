import * as React from "react";
import { DataGrid, GridToolbar,GridRowIdGetter  } from "@mui/x-data-grid";
import { Typography,Box,Link, Card, CardContent } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
export default function DataTable({  columns, data,isCheckbox,isHideDensity,isHideExport,isHideFilter,isHideColumn,isHidePaging }) {
  const flag = isCheckbox;
  const flagDen = isHideDensity;
  const flagExp = isHideExport;
  const flagFilter = isHideFilter;
  const flagColumn = isHideColumn;
  console.log(isCheckbox);
  console.log(flagColumn);
  function CustomToolbar() {
    return (
      
      <GridToolbarContainer>
        {flagColumn ? (
        <GridToolbarColumnsButton />
        ) : (null)}
        {flagFilter ? (
        <GridToolbarFilterButton />
        ) : (null)}
        {flagDen ? (
                    <GridToolbarDensitySelector />
                ) : (null)}
       {flagExp ? (
        <GridToolbarExport />
        ) : (null)}
      </GridToolbarContainer>
    );
  }

  let newData = [];
  data.map((item, index) => {
      newData.push({SNo: index + 1, ...item});
  });

  return (
    
      <Box sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", height: 400,  display: "table", tableLayout: "fixed" }}>
        
        <DataGrid 
          rows={newData}
          columns={columns }
           
          getRowId={(rows) => rows.SNo}
          hideFooter={isHidePaging}
          //pagination={false}
          //pageSizeOptions={[5,10]}
          //  rowsPerPageOptions={[5]}
          initialState={isHidePaging ? null : {
            pagination: { paginationModel: { pageSize: 5 } },
            
              
            
          }}
          
          slots={{ toolbar: CustomToolbar }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection={flag}
           sx={{ 
            width: '100%',
            '& .super-app-theme--header': {fontFamily:"Franklin Gothic Medium", fontSize: "15px", 
            backgroundColor: '#F5FAFF'
             
            },
         }}
 /> 
      
    </Box>
        </Box>
      
  );
}
