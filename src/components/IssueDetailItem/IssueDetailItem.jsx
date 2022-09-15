import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import ReactMarkdown from 'react-markdown';
import Loading from '@/components/common/Loading/Loading';
import useIssueDetailsStore from '@/hooks/useIssueDetailStore';
import useIssueDetailsActions from '@/hooks/useIssueDetailActions';
import * as Styled from '@/components/IssueDetailItem/IssueDetailItem.styled';

const IssueDetailItem = () => {
  const { issueId } = useParams();

  const issueDetails = useIssueDetailsStore();
  const { fetchIssueDetail } = useIssueDetailsActions();

  const currentIssueDetail = issueDetails.find(({ number }) => {
    return number === +issueId;
  });

  useEffect(() => {
    if (currentIssueDetail) return;

    fetchIssueDetail({ issueNumber: issueId });
  }, [currentIssueDetail, fetchIssueDetail, issueId]);

  const UpdatedAt = () => {
    return currentIssueDetail.updated_at.split('T')[0];
  };

  if (!currentIssueDetail) return <Loading />;

  return (
    <Styled.ListWrap>
      <ListItem>
        <ListItemAvatar>
          <Styled.ImageWrap
            src={`${currentIssueDetail.user.avatar_url}`}
            alt={currentIssueDetail.user.login}
          />
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h6">{currentIssueDetail.title}</Typography>
          <Styled.Text variant="body2">
            <AccountCircleOutlinedIcon />
            {currentIssueDetail.user.login}
          </Styled.Text>
          <Styled.Text variant="body2">
            <ScheduleOutlinedIcon />
            <UpdatedAt />
          </Styled.Text>
          <Styled.Text variant="body2">
            <ChatBubbleOutlineOutlinedIcon />
            {currentIssueDetail.comments}
          </Styled.Text>
        </ListItemText>
      </ListItem>
      <Styled.Contents>
        <ReactMarkdown>{currentIssueDetail.body}</ReactMarkdown>
      </Styled.Contents>
    </Styled.ListWrap>
  );
};

export default IssueDetailItem;
