var express = require('express');
var app = express();
const cors = require('cors')
require('dotenv').config()

const { Qiita } = require('./apis/qiita')
const { Hatena } = require('./apis/hatena')
const { Tweet } = require('./apis/tweet')

app.use(cors())

app.get('/article/:type', function (req, res) {

  if (req.params.type) {

    switch (req.params.type) {

      case 'qiita':
        Qiita.getArticles(articles => {
          res.send({instances: articles})
        })
      break
      case 'tweet':
        Tweet.getArticles(articles => {
          res.send({instances: articles})
        })
        break
      case 'github':
        res.send('ぎふはぶの記事を取得します')
        break
      case 'blog':
        Hatena.getArticles(articles => {
          res.send({instances: articles})
        })
        break

      default:
        res.send('不正なパラメータです')
      break;
    }
    return    
  } 
 
  res.send('不正なパラメータです')
});

app.get('/article', (req, res) => {
  res.send('パラメータを指定してください')
});
  

app.listen(3000, () => {});
