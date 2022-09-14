import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
// import { ListItem, ListItemText, Typography } from '@mui/material';

const ViewListItem = ({ issueInfo }) => {
  console.log(issueInfo);
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={`No.${issueInfo.number} - ${issueInfo.title}`}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              작성자: {issueInfo.user},
            </Typography>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              &nbsp; 작성일 : {issueInfo.create_at}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default ViewListItem;
