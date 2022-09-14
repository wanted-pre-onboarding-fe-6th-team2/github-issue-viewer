import { useContext } from 'react';
import { IssuesStoreContext } from '@/context/IssuesProvider';

const useIssuesStore = () => {
  const issues = useContext(IssuesStoreContext);
  if (issues === null) {
    throw new Error('useIssuesStore should be used within IssuesProvider');
  }
  return issues;
};

export default useIssuesStore;
