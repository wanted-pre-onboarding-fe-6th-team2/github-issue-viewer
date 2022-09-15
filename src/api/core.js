import { Octokit } from '@octokit/core';

class OctokitApiService {
  constructor() {
    this.octokit = new Octokit();
  }

  async request(url, option = {}) {
    try {
      const result = await this.octokit.request(url, option);
      return result.data;
    } catch (error) {
      Error(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
      return false;
    }
  }
}

export default OctokitApiService;
