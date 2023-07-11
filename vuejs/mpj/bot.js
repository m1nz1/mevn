const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const TelegramBot = require('node-telegram-bot-api')
const token = process.env.TELBOT_TOKEN

const bot = new TelegramBot(token, { polling: true })

bot.onText(/^사진/, (msg, match) => {
  const chatId = msg.chat.id
  const resp =
    'https://postfiles.pstatic.net/MjAyMTAxMDJfMTk4/MDAxNjA5NTI1ODQ3OTQ2.o__fQLqIhP-qCpzXA_4B9Gnea0zH0Xl8BB_w7sIItcMg.V2nmYM1RTtQeFF6L68ZAGxFpt38ZiHJGbiyhmvbZf50g.GIF.jhw1027/%EB%85%B9%ED%99%94_2021_01_02_03_26_30_477.mp4_000001266.gif?type=w580'
  bot.sendPhoto(chatId, resp)
})
