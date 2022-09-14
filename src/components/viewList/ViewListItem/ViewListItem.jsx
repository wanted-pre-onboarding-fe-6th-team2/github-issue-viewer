import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
// import { ListItem, ListItemText, Typography } from '@mui/material';

const ViewListItem = ({ issueInfo }) => {
  console.log(issueInfo);
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={issueInfo.user.avatar_url} />
      </ListItemAvatar>
      <ListItemText
        primary={`${issueInfo.number} - ${issueInfo.title}`}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              작성자: {issueInfo.user.login},
            </Typography>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              &nbsp; 작성일 : {issueInfo.created_at}
            </Typography>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              &nbsp; 커멘트수 : {issueInfo.comments}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default ViewListItem;
