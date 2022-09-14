import { useContext } from 'react';
import { IssueDetailsActionsContext } from '@/context/IssueDetailsProvider';

const useIssueDetailsActions = () => {
  const actions = useContext(IssueDetailsActionsContext);
  if (actions === null) {
    throw new Error('useIssuesActions should be used within IssueDetailsProvider');
  }
  return actions;
};

export default useIssueDetailsActions;
