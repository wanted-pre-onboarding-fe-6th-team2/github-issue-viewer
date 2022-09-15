import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import thingsflowLogo from '@/assets/images/thingsflowLogo.png';
import logoDesc from '@/assets/images/logoDesc.png';

const ViewAd = () => {
  return (
    <ListItem alignItems="center">
      <ListItemText>
        <a href="https://thingsflow.com/ko/home">
          <img src={thingsflowLogo} alt="things flow Logo" width="100" height="100" />
          <img src={logoDesc} alt="things flow Logo" width="400" height="100" />
        </a>
      </ListItemText>
    </ListItem>
  );
};

export default ViewAd;
