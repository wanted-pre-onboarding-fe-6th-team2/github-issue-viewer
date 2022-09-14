import { useContext } from 'react';
import { IssuesActionsContext } from '@/context/IssuesProvider';

const useIssuesActions = () => {
  const actions = useContext(IssuesActionsContext);
  if (actions === null) {
    throw new Error('useIssuesActions should be used within IssuesProvider');
  }
  return actions;
};

export default useIssuesActions;
