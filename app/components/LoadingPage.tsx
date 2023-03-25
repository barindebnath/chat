import React from 'react';
import { Loader, Paper } from '@mantine/core';

const LoadingPage = () => {
  return (
    <Paper p="lg" h='100vh'>
      <Loader size="md" />
    </Paper>
  )
}

export default LoadingPage;