const discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
exports.run = async(client, message, args) => {

if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Bu Komutu Kullanabilmek İçin **Yönetici** Yetkisine Sahip Olmalısın.`).then(msg => msg.delete({timeout:10000}));
  
let levian = message.mentions.members.first()
if (!levian) return message.channel.send(`${red} Bir kullanıcı etiketlemelisin.`)

let isim = args.slice(1).join(' ')
if (!levian) return message.channel.send(`${red} Değiştirilicek ismi girin.`)

levian.setNickname(isim)
message.channel.send(`${onay} ${levian} Adlı Kullanıcının Yeni İsmi **${isim}\** Olarak Ayarlandı!`)
}

exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'isimdeğiştir',
  usage: 'levian Code & Only V12',
  description: 'isim-değiştir'
}
