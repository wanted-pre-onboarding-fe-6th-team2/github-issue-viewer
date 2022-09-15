import OctokitApiService from '@/api/core';

class IssueService {
  constructor() {
    this.octokitApiService = new OctokitApiService();
  }

  getIssueDetail = (option = {}) => {
    const { owner, repo, issueNumber } = option;
    return this.octokitApiService.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
      owner,
      repo,
      issue_number: issueNumber,
    });
  };

  getIssues = (option = {}) => {
    const { owner, repo, page } = option;
    return this.octokitApiService.request(
      'GET /repos/{owner}/{repo}/issues?sort=comments&page={page}',
      { owner, repo, page }
    );
  };
}

export default new IssueService();
