// 記事の情報を取り扱うモデル
class Article {
  constructor (title, author, text, link) {
    this.title = title
    this.author = author
    this.text = text
    this.link = link
  }

  // TODO: ラベル用に自動で文字をtruncateするような仕組み
  // TODO: 記事の情報のSummary
  titleLabel () {
    if (this.title.length > 32) {
      return this.title.substring(0, 30) + '...'
    } else {
      return this.title
    }
  }

  summary () {
    return this.text.substring(0, 130) + '...'
  }
}

module.exports.Article = Article