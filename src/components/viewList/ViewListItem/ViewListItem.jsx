import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';

const ViewListItem = ({ issueInfo }) => {
  const navigator = useNavigate();
  const onMoveDetail = () => {
    const issueId = issueInfo.number;
    navigator(`/detail/${issueId}`);
  };

  return (
    <ListItem
      alignItems="flex-start"
      onClick={() => {
        onMoveDetail();
      }}
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={issueInfo.user.avatar_url} />
      </ListItemAvatar>
      <ListItemText
        primary={`${issueInfo.number}_ ${issueInfo.title}`}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              <AccountCircleOutlinedIcon fontSize="inherit" /> {issueInfo.user.login}
            </Typography>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              &nbsp; <ScheduleOutlinedIcon fontSize="inherit" /> {issueInfo.created_at}
            </Typography>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              &nbsp; <ChatBubbleOutlineOutlinedIcon fontSize="inherit" /> {issueInfo.comments}
            </Typography>
          </>
        }
      />
      <br />
    </ListItem>
  );
};

export default ViewListItem;
