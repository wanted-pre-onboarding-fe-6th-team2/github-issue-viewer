import { createContext, useMemo, useRef, useState } from 'react';
import issueApiService from '@/api/issue';

export const IssuesStoreContext = createContext(null);
export const IssuesActionsContext = createContext(null);

const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const pageRef = useRef(1);

  const actions = useMemo(() => {
    return {
      async fetchIssues() {
        const page = pageRef.current;

        try {
          const issuesResponse = await issueApiService.getIssues({
            owner: 'angular',
            repo: 'angular-cli',
            sort: 'comments',
            page,
          });
          setIssues(prevIssues => [...prevIssues, ...issuesResponse]);
          pageRef.current += 1;
        } catch (error) {
          throw new Error(error);
        }
      },
    };
  }, []);

  return (
    <IssuesActionsContext.Provider value={actions}>
      <IssuesStoreContext.Provider value={issues}>{children}</IssuesStoreContext.Provider>
    </IssuesActionsContext.Provider>
  );
};

export default IssuesProvider;
