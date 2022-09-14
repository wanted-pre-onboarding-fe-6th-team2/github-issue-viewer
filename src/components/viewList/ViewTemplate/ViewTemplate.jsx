import React, { useEffect } from 'react';
import { Box, List } from '@mui/material';
import useIssuesActions from '@/hooks/useIssuesActions';
import useIssuesStore from '@/hooks/useIssuesStore';
import ViewListItem from '@/components/viewList/ViewListItem/ViewListItem';

const ViewTemplate = () => {
  const { fetchIssues } = useIssuesActions();
  const issues = useIssuesStore();

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);
  return (
    <Box sx={{ border: '4px dashed grey' }}>
      <List sx={{ width: '100%', minWidth: 545, bgcolor: 'background.paper' }}>
        {issues.map((issueInfo, number) => {
          return <ViewListItem issueInfo={issueInfo} key={number} />;
        })}
      </List>
    </Box>
  );
};

export default ViewTemplate;

// import React, { useEffect, useRef } from 'react';
// import { Box, List } from '@mui/material';
// import useIssuesActions from '@/hooks/useIssuesActions';
// import useIssuesStore from '@/hooks/useIssuesStore';
// import useInfiniteScroll from '@/hooks/useInfiniteScroll';
// import ViewListItem from '@/components/viewList/ViewListItem/ViewListItem';

// const ViewTemplate = () => {
//   const { fetchIssues } = useIssuesActions();
//   const issues = useIssuesStore();

//   const targetRef = useRef(null);
//   const fetchMoreItemsFunc = () => fetchIssues();

//   const [isFetching, setIsFetching] = useInfiniteScroll(targetRef, fetchMoreItemsFunc);

//   useEffect(() => {
//     fetchIssues();

//     if (!isFetching) return;

//     fetchMoreItemsFunc();
//   }, [fetchIssues]);
//   return (
//     <>
//       <Box sx={{ border: '4px dashed grey' }}>
//         <List sx={{ width: '100%', minWidth: 545, bgcolor: 'background.paper' }}>
//           {issues.map((issueInfo, number) => {
//             return <ViewListItem issueInfo={issueInfo} key={number} />;
//           })}
//         </List>
//       </Box>
//       <div ref={targetRef} />
//     </>
//   );
// };

// export default ViewTemplate;
