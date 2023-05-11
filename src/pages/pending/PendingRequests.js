import React, { useEffect, useState } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PageTitle from '../../layouts/PageTitle';
import VirtualizedTable from '../../components/table/VirtualizedTable';


const PendingRequests = () => {
    const name = 'Pending Requests'
  return (
    <>
        <Card>
            <CardContent>
                <PageTitle name={name}/>
                
            </CardContent>
        </Card>
    </>
  )
}

export default PendingRequests
