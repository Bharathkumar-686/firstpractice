import React from 'react'
import { Stack, TextField } from '@mui/material'

export default function TextFeild() {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextFeild lable='Name'/>
        </Stack>
    </Stack>
  )
}
