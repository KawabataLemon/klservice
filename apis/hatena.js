const { Article } = require('../models/Article')
const { Blog } = require('hatena-blog-api2')

// json から
class Hatena {
  static getArticles (articleCallback) {
    new Blog({
      type: 'wsse',
      userName: 'Kawabata_Lemon',
      blogId: 'kawabatalemon.hatenablog.jp',
      apiKey: process.env.HATENA_API_KEY
    }).getEntries().then(res => {
      let entries = res.res.feed.entry
      articleCallback(entries.map(entry => new Article(entry.title._, 'kawabata_lemon', entry.summary._, entry.link[1].$.href)))
    })
  }
}

module.exports.Hatena = Hatena