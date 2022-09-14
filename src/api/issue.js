import OctokitApiService from '@/api/core';

class IssueService {
  constructor() {
    this.octokitApiService = new OctokitApiService();
  }

  getIssueDetail = (option = {}) => {
    return this.octokitApiService.request(
      'GET /repos/{owner}/{repo}/issues/{issue_number}',
      option
    );
  };

  getIssues = (option = {}) => {
    return this.octokitApiService.request('GET /repos/{owner}/{repo}/issues', option);
  };
}

export default new IssueService();
