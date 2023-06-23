const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const app = express()
const _path = path.join(__dirname, '/')
app.use(express.static(_path))
app.use(logger('tiny'))

/*POST 해석*/
app.use(express.json()) //post 방식으로 할때 필수
app.use(express.urlencoded({ extended: true }))

app.post('/data', (req, res) => {
  const obj = req.body
  console.log(obj.name)
  console.log(obj.content)
  console.log(obj.date)
  fs.writeFile(_path + '/' + obj.name + '.txt', obj.content + obj.date, (e) => {
    if (e) console.log(e)
    console.log('파일 작성이 완료 되었습니다.')
    res.send(
      `<script>alert('${obj.name}파일로 저장합니다.');history.go(-1)</script>`
    )
  })
})
// app.get('/data', (req, res) => {
//   const name = req.query.name
//   const content = req.query.content
//   fs.writeFile(_path + name + '.txt', content, (e) => {
//     if (e) console.log(e)
//     console.log('파일 작성이 완료되었습니다.')
//     res.send(
//       `<script>alert('${name}파일로 저장합니다.',history.go(-1))</script>`
//     )
//   })
// })

app.listen(3000, () => {
  console.log('listening on port 3000')
})
