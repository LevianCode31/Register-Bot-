const chalk = require('chalk')
const moment = require('moment')

const ayarlar = require('../ayarlar.json')
const log = message => {
  
    console.log(`${chalk.white(moment().format('YYYY-MM h:mm:ss'))} ${message}`)
}
let prefix = ayarlar.prefix
module.exports = async client => {
    client.user.setPresence({activity:{name:`+yardım | +davet`},status: 'online'})

  } //açıldı mı bot yeeee açıldı babaaa pro xd hadi iyi videolar sana teşekkürler <3 adamsın! bunları silekte millet okumasın ya da hatıra olsun xd kalsın
//video başlıyor xd