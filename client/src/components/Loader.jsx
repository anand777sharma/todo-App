import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () =>  (
  <Box minHeight="50px">
    <Stack direction='row' justifyContent='center' alignItems='center' height='10px' >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
