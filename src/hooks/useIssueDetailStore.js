import { useContext } from 'react';
import { IssueDetailsStoreContext } from '@/context/IssueDetailsProvider';

const useIssueDetailsStore = () => {
  const issueDetails = useContext(IssueDetailsStoreContext);
  if (issueDetails === null) {
    throw new Error('useIssueDetailsStore should be used within IssueDetailsProvider');
  }
  return issueDetails;
};

export default useIssueDetailsStore;
