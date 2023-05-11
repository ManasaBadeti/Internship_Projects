import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const EditableCell = ({value, onEdit}) => {
    const [date, setDate] = useState(false);
    const [newValue, setNewValue] = useState(value);

    const handleEdit = () => {
        setDate(true);
    }
    const handleSave =() => {
        onEdit(newValue);
        setDate(false);
    }
    const handleCancel = () => {
        setNewValue(value);
        setDate(false);
    }
  return (
    <>
      {
        date ? (
            <TextField
                value={newValue}
                onChange= {(e) => setNewValue(e.target.value)}
                onBlur = {handleSave}
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        handleSave();
                    }
                    else if(e.key === "Escape"){
                        handleCancel();
                    }
                }}
                autoFocus
                sx={{width: '100%'}}
                />
        ):(
            <Typography sx={{cursor: "pointer"}} onClick={handleEdit}>
                {value}
            </Typography>
        )
      }
    </>
  )
}

export default EditableCell
