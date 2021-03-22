const discord = require('discord.js')
const { Database } = require("wio.db")
const davetverileri = new Database("./DataBase/Davet Veri");
const ayarlar = require("../ayarlar.json");
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
exports.run = async(client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${red} Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın`).then(msg => msg.delete({timeout:10000}));
	
if (args[0] === 'sıfırla') {
  let seviyelog = davetverileri.fetch(`davetlog.${message.guild.id}`)
  if (!seviyelog) return message.channel.send(`${red} Davet Logu Zaten Ayarlanmadığı İçin Sıfırlanamaz!`)
  message.channel.send(`${onay} Davet Log Kanalı Başarıyla Sıfırlandı! `)
  davetverileri.delete(`davetlog.${message.guild.id}`)
  return;
}

let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(`${red} Davet Logu Belirtmelisin! `)

davetverileri.set(`davetlog.${message.guild.id}`, kanal.id)

message.channel.send(`${onay} Davet Logunu ${kanal} Olarak Ayarladım!`)
  
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'davet-log'
}