import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const Loading = () => {
  return (
    <>
      <Skeleton sx={{ bgcolor: 'grey.300' }} height={50} animation="wave" />
      <Skeleton sx={{ bgcolor: 'grey.300' }} height={30} animation="wave" />
      <Skeleton sx={{ bgcolor: 'grey.300' }} height={25} animation="wave" />
    </>
  );
};

export default Loading;
