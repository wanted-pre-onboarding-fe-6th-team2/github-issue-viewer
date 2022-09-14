import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import resetCss from '@/styles/reset';
import IssueList from '@/pages/IssueList/IssueList';
import IssueDetail from '@/pages/IssueDetail/IssueDetail';
import { ROUTES } from '@/constants/route';

const App = () => (
  <div>
    <Global styles={resetCss} />
    <Routes>
      <Route path={ROUTES.HOME} element={<IssueList />} />
      <Route path={`${ROUTES.ISSUE_DETAIL}/:issueId`} element={<IssueDetail />} />
    </Routes>
  </div>
);

export default App;
