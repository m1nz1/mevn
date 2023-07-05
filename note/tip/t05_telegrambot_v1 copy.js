require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const cheerio = require('cheerio');
const token = process.env.bottk;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/^안녕/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = '반가워요~';
  console.log(resp);
  bot.sendMessage(chatId, resp);
});

bot.onText(/^이름이뭐야?/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = '저는 민지봇이에오';
  console.log(resp);
  bot.sendMessage(chatId, resp);
});

bot.onText(/잘가/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = '또 만나요~';
  console.log(resp);
  bot.sendMessage(chatId, resp);
});

bot.onText(/^이재욱/, (msg, match) => {
  const chatId = msg.chat.id
  const resp =
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjZfMTQ5%2FMDAxNjcyMDM4NTM4NDM2.XQcaBafVsFtiJCLWz9NrhCZVK2_1V5GudnXVsQRrQNIg.6ndgX9WqRHBQcCh4ExzLU8OU9QI-0WUgyZobF_zx3-kg.JPEG.angelk12%2FIMG_8315.jpg&type=sc960_832'
  bot.sendPhoto(chatId, resp)
})
bot.onText(/^안보현/, (msg, match) => {
  const chatId = msg.chat.id
  const resp =
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MTRfMTk0%2FMDAxNjU3NzY1NzcxNzY5.scMmQwIiMAL7Tb1qc0J4WO3qpp27BMk9fKYgJlK1DWog.Uq6A9y_H-0aySbGSO6-buL62fecn9n4EnXMgc6uwZQcg.JPEG.qmfosej%2FImage.jpg&type=sc960_832'
  bot.sendPhoto(chatId, resp)
})
bot.onText(/^오킹/, (msg, match) => {
  const chatId = msg.chat.id
  const resp =
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA1MThfMTU5%2FMDAxNTg5NzI3OTc0ODMz.Yuvx0_Z95yBs1_nk_69B5Eq1TnGKchNbtE-PMbwv9-gg.im0V50dxQZYJ04i6Apl46ue3mmr8eyu8zus9Fp7FQXUg.JPEG%2FexternalFile.jpg&type=sc960_832'
  bot.sendPhoto(chatId, resp)
})
bot.onText(/^무릎춤/, (msg, match) => {
  const chatId = msg.chat.id
  const resp =
    'https://postfiles.pstatic.net/MjAyMTAxMDJfMTk4/MDAxNjA5NTI1ODQ3OTQ2.o__fQLqIhP-qCpzXA_4B9Gnea0zH0Xl8BB_w7sIItcMg.V2nmYM1RTtQeFF6L68ZAGxFpt38ZiHJGbiyhmvbZf50g.GIF.jhw1027/%EB%85%B9%ED%99%94_2021_01_02_03_26_30_477.mp4_000001266.gif?type=w580'
    bot.sendAnimation(chatId, resp)
})
bot.onText(/^안뇽/, (msg, match) => {
  const chatId = msg.chat.id
  const resp =
    'https://media.tenor.com/urH68KAMnAIAAAAM/%EC%98%A4%ED%82%B9.gif'
    bot.sendAnimation(chatId, resp)
})

bot.onText(/^\/음악차트/, (msg, match) => {
  const chatId = msg.chat.id;

  axios.get('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=음악순위')
    .then((res) => {
      const $ = cheerio.load(res.data);
      const song = [];
      $('.tit_area').each(function () {
        song.push($(this).text());
      });

      const chart = song.map((v, i) => `${i + 1}위: ${v}`).join('\n');
      console.log(chart);
      bot.sendMessage(chatId, chart);
    });
});

bot.onText(/^\/로또당첨번호/, (msg, match) => {
  const chatId = msg.chat.id;

  axios.get('https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q=%EB%A1%9C%EB%98%90')
    .then((response) => {
      const $ = cheerio.load(response.data);
      const date = $('.date').text();
      const num = $('.lottonum').text();
      const result = `${date}\n${num}`;
      console.log(result);
      bot.sendMessage(chatId, result);
    });
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '음악차트보여줘') {
    bot.sendMessage(chatId, '네이버 음악 차트를 가져오는 중입니다...');
    axios.get('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=음악순위')
      .then((res) => {
        const $ = cheerio.load(res.data);
        const song = [];
        $('.tit_area').each(function () {
          song.push($(this).text());
        });

        const chart = song.map((v, i) => `${i + 1}위: ${v}`).join('\n');
        console.log(chart);
        bot.sendMessage(chatId, chart);
      });
  } else if (messageText === '로또번호알려줘') {
    bot.sendMessage(chatId, '로또 번호를 가져오는 중입니다...');
    axios.get('https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q=%EB%A1%9C%EB%98%90')
      .then((response) => {
        const $ = cheerio.load(response.data);
        const date = $('.date').text();
        const num = $('.lottonum').text();
        const result = `${date}\n${num}`;
        console.log(result);
        bot.sendMessage(chatId, result);
      });
  }
});
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(msg)
  // bot.sendMessage(chatId, '뭐래?');
});
