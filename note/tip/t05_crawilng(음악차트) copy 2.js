const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
const port = 3000;

const url =
  'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%8C%EC%95%85%EC%88%9C%EC%9C%84';

app.get('/', (req, res) => {
  axios.get(url).then((response) => {
    const $ = cheerio.load(response.data);
    const song = [];
    const artist = [];
    $('.tit_area').each(function () {
      song.push($(this).text());
    });
    $('.name:last-child').each(function () {
      artist.push($(this).text());
    });

    let html = '<html><body>';
    song.forEach((v, i) => {
      html += `<p>${i + 1}위 ${v}</p>`;
    });
    html += '</body></html>';

    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
