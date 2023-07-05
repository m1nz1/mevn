require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.bottk;
const bot = new TelegramBot(token, {polling: true});

bot.onText(/^안녕/, (msg, match) => {
  const chatId = msg.chat.id;
//   const resp = match.input; //메아리
const resp = '반가워요~'
  console.log(resp)
  bot.sendMessage(chatId, resp);
});
bot.onText(/^이름이뭐야?/, (msg, match) => {
  const chatId = msg.chat.id;
//   const resp = match.input; //메아리
const resp = '저는 봇이에오'
  console.log(resp)
  bot.sendMessage(chatId, resp);
});
bot.onText(/잘가/, (msg, match) => {
  const chatId = msg.chat.id;
//   const resp = match.input; //메아리
const resp = '또 만나요~'
  console.log(resp)
  bot.sendMessage(chatId, resp);
});

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, '뭐래?');
// });