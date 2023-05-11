import React from 'react'
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CMSReport from './CMSReport';

const Page1 = () => {
    return (
        <div>
            <CMSReport></CMSReport>
            {/* <Card spacing={4}>
                <CardContent> */}
                    {/* <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Divider variant="middle" align='center' style={{ background: 'black', width: '500px' }} />
                    </Grid>
                     <Typography sx={{ fontSize: 14, textAlign: 'center', color: 'black' }} color="text.secondary" gutterBottom>
                        Please select Search Criteria to get the Result.
                    </Typography> 
                    <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Divider variant="middle" align='center' style={{ background: 'black', width: '500px' }} />
                    </Grid> */}
                    <Alert  severity="warning" sx={{mt:4}}>
                                Please Select Search Criteria to get the result
                    </Alert>
                {/* </CardContent>
            </Card> */}
        </div>
    )
}

export default Page1
