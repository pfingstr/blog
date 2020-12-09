const remark = require('remark')
const html = require('remark-html')

remark()
  .use(html)
  .process('_Hello_.', function (err, file) {
    console.log(String(file))
  })