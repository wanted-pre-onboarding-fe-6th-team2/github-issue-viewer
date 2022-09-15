import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import thingsflowLogo from '@/assets/images/thingsflowLogo.png';
import logoDesc from '@/assets/images/logoDesc.png';

const ViewAd = () => {
  return (
    <ListItem alignItems="center">
      <ListItemText>
        <a href="https://thingsflow.com/ko/home">
          <img src={thingsflowLogo} alt="things flow Logo" width="80" height="80" />
          <img src={logoDesc} alt="things flow Logo" width="300" height="80" />
        </a>
      </ListItemText>
    </ListItem>
  );
};

export default ViewAd;
