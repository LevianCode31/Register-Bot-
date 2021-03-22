const discord = require('discord.js')
const { Database } = require("wio.db")
const korumaverileri = new Database("./DataBase/Koruma Veri");
const ayarlar = require('../ayarlar.json')
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
let prefix = ayarlar.prefix
exports.run = async(client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${red} Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın`).then(msg => msg.delete({timeout:10000}));
  
if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setColor(`${renk}`)
.setDescription(`${onay} Kick Sistemi Sıfırlandı`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sıfırlandı)
korumaverileri.delete(`kicklog.${message.guild.id}`)
korumaverileri.delete(`kickyetkilisi.${message.guild.id}`) 
return;
}
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'kick-sistem',
  description: 'erkek rolünü ayarlar',
  usage: '!erkek-rol @rol'
}