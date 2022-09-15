import { createContext, useMemo, useState } from 'react';
import issueApiService from '@/api/issue';

export const IssueDetailsStoreContext = createContext(null);
export const IssueDetailsActionsContext = createContext(null);

const IssueDetailsProvider = ({ children }) => {
  const [issueDetails, setIssueDetails] = useState([]);

  const actions = useMemo(
    () => ({
      async fetchIssueDetail({ issueNumber } = {}) {
        try {
          const issueDetailResponse = await issueApiService.getIssueDetail({
            owner: 'angular',
            repo: 'angular-cli',
            issueNumber,
          });
          setIssueDetails(prevIssueDetails => [...prevIssueDetails, issueDetailResponse]);
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    []
  );

  return (
    <IssueDetailsActionsContext.Provider value={actions}>
      <IssueDetailsStoreContext.Provider value={issueDetails}>
        {children}
      </IssueDetailsStoreContext.Provider>
    </IssueDetailsActionsContext.Provider>
  );
};

export default IssueDetailsProvider;
