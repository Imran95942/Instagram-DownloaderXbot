const { Telegraf, Markup } = require('telegraf');
const axios = require('axios')

const bot = new Telegraf(process.env.token)

let pais = 'Tester'

bot.command('start', (ctx) => {
  return ctx.replyWithPhoto({ url: 'https://telegra.ph/file/c3f19e89e109e1534b02a.jpg' },
    {
      caption: 'привет '+ctx.from.first_name+'я умею скачивать всевозможные медиа из Instagram, тебе достаточно отправить мне ссылку, а я выдам тебе готовый фото или видео файл..',
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([
        Markup.button.url('Developer📲', 't.me/isIam07'),
      ])
    }
  )
})

bot.action('help', ctx => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    ctx.reply('/igdl -> untuk mendownload foto/video dari instagram\n')
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

bot.command('igdl', async (ctx) => {
    let input = ctx.message.text
    let inputArray = input.split(" ")
    let message = "";
    
    if(inputArray.length == 1){
        message = "Sertakan Link!" 
        ctx.reply(message)
    } else{
        inputArray.shift();
        messager = inputArray.join(" ")
        // console.log(messager)
        // try{
        const link = await axios.get(`https://pencarikode.xyz/api/ig?url=`+messager+`&apikey=`+pais)
        const result = link.data.result.data
        // const hasill = result
        // console.log(result)
        result.forEach((res) => {
            
        // console.log(hasil)
        if(res.type == 'image'){
        ctx.replyWithPhoto({url: res.data})

        } else {
            console.log('video')
            ctx.replyWithVideo({url: res.data})
        }
        
        })
        // }catch(e){
        // ctx.reply(`Link not found / wrong link!`)
        // }
    }
})

console.log('Bot Running')
console.log('Happy Using! Dont Forget To Subs @isIam07!!')

//ctx.reply(`err`)
bot.launch()
