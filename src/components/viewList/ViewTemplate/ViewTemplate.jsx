import React from 'react';
import { Box, List } from '@mui/material';
import ViewListItem from '@/components/viewList/ViewListItem/ViewListItem';

const ViewTemplate = () => {
  const issues = [
    {
      id: 1,
      user: 'Tony',
      number: 13147,
      state: 'close',
      title: 'IssueTitle1',
      body: 'Hello! World!!!',
      create_at: '2011-04-22',
      comments: 2,
    },
    {
      id: 2,
      user: 'Tony',
      number: 13247,
      state: 'close',
      title: 'IssueTitle2',
      body: 'Hello! World!!!',
      create_at: '2011-04-22',
      comments: 9,
    },
    {
      id: 3,
      user: 'Tony',
      number: 13447,
      state: 'open',
      title: 'IssueTitle3',
      body: 'Hello! World!!!',
      create_at: '2011-04-22',
      comments: 8,
    },
    {
      id: 4,
      user: 'Tony',
      number: 13457,
      state: 'open',
      title: 'IssueTitle4',
      body: 'Hello! World!!!',
      create_at: '2011-04-22',
      comments: 5,
    },
    {
      id: 5,
      user: 'Tony',
      number: 13647,
      state: 'close',
      title: 'IssueTitle5',
      body: 'Hello! World!!!',
      create_at: '2011-04-22',
      comments: 15,
    },
    {
      id: 6,
      user: 'Tony',
      number: 1347,
      state: 'close',
      title: 'IssueTitle',
      body: 'Hello! World!!!',
      create_at: '2011-04-22',
      comments: 5,
    },
  ];

  return (
    <Box sx={{ border: '4px dashed grey' }}>
      <List sx={{ width: '100%', maxWidth: 768, bgcolor: 'background.paper' }}>
        {issues.map((issueInfo, id) => {
          return <ViewListItem issueInfo={issueInfo} key={id} />;
        })}
      </List>
    </Box>
  );
};

export default ViewTemplate;
