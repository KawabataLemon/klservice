const axios = require('axios')
const { Article } = require('../models/Article')
class Qiita {
  static getArticles (articleCallback) {
    axios.get(`https://qiita.com/api/v2/users/kawabatalemon/items?format=json`)
    .then(res => {
      console.log(res)
      articleCallback(res.data.map(json => new Article(json.title, json.user.id, json.body, json.url)))
    })
    .catch((_) => {
      articleCallback(null)
    })
  }
}

module.exports.Qiita = Qiita