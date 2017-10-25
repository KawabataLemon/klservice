const  Twit  = require('twit')
const { Article } = require('../models/Article')

// json から
class Tweet {

  static getArticles (articleCallback) {
    // アクセスヘッダー
    new Twit({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    }).get('statuses/user_timeline', { screen_name: 'kawabata_lemon' }, (err, data, response) => {
      if (err) {
        articleCallback(null)
      } else {
        articleCallback(data.filter(el => (el.in_reply_to_user_id == null)).map(el => new Article(el.text, el.user.name, el.text, `http://twitter.com/statuses/${el.id_str}`)))
      }
    })
  }
}

module.exports.Tweet = Tweet
