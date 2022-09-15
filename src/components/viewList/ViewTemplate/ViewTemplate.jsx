import React, { useEffect } from 'react';
import { Box, List } from '@mui/material';
import useIssuesActions from '@/hooks/useIssuesActions';
import useIssuesStore from '@/hooks/useIssuesStore';
import ViewListItem from '@/components/viewList/ViewListItem/ViewListItem';
import ViewAd from '@/components/viewList/ViewAd/ViewAd';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

const ViewTemplate = () => {
  const { fetchIssues } = useIssuesActions();
  const issues = useIssuesStore();

  const infiniteScrollTargetRef = useInfiniteScroll(fetchIssues);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <Box sx={{ border: '4px dashed grey' }}>
      <List sx={{ width: '100%', minWidth: 300, bgcolor: 'background.paper' }}>
        {issues.map((issueInfo, number) => {
          if (number === 4) {
            return <ViewAd key={number} />;
          }
          return <ViewListItem issueInfo={issueInfo} key={number} />;
        })}
      </List>
      <div ref={infiniteScrollTargetRef} />
    </Box>
  );
};

export default ViewTemplate;
