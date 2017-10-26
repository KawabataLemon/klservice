const { Article } = require('../models/Article')
const GitHubApi = require("github");

class Github {
  static getArticles(articleCallback) {
    const github = new GitHubApi({ debug: false })
    github.authenticate({
      type: "oauth",
      token: process.env.GITHUB_AUTH_TOKEN
    });
    
    github.repos.getAll({
      visibility: 'public',
      per_page: 50
    }, (err, res) => {
      if (err) {
        articleCallback(null)
      } else {
        articleCallback(res.data.map(repo => new Article(repo.full_name, repo.owner.login, repo.description, repo.html_url)))
      }
    })
  }
}

module.exports.Github = Github