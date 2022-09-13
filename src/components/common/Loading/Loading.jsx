import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

const Loading = () => {
  return (
    <Grid width="100%" margin="0" container alignItems="center">
      <Grid item xs={9}>
        <Skeleton sx={{ bgcolor: 'grey.300' }} width="95%" height={50} animation="wave" />
        <Skeleton sx={{ bgcolor: 'grey.300' }} width="95%" height={30} animation="wave" />
      </Grid>
      <Grid item xs>
        <Skeleton sx={{ bgcolor: 'grey.300' }} width="95%" height={40} animation="wave" />
      </Grid>
      <Grid item xs={9}>
        <Skeleton sx={{ bgcolor: 'grey.300' }} width="95%" height={50} animation="wave" />
        <Skeleton sx={{ bgcolor: 'grey.300' }} width="95%" height={30} animation="wave" />
      </Grid>
      <Grid item xs>
        <Skeleton sx={{ bgcolor: 'grey.300' }} width="95%" height={40} animation="wave" />
      </Grid>
      <Grid item xs={9}>
        <Skeleton sx={{ bgcolor: 'grey.300' }} width="95%" height={50} animation="wave" />
        <Skeleton sx={{ bgcolor: 'grey.300' }} width="95%" height={30} animation="wave" />
      </Grid>
      <Grid item xs>
        <Skeleton sx={{ bgcolor: 'grey.300' }} width="95%" height={40} animation="wave" />
      </Grid>
      <Grid item xs={9}>
        <Skeleton sx={{ bgcolor: 'grey.300' }} width="95%" height={50} animation="wave" />
        <Skeleton sx={{ bgcolor: 'grey.300' }} width="95%" height={30} animation="wave" />
      </Grid>
      <Grid item xs>
        <Skeleton sx={{ bgcolor: 'grey.300' }} width="95%" height={40} animation="wave" />
      </Grid>
    </Grid>
  );
};

export default Loading;
