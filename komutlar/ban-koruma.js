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
.setTitle(`${client.user.username} - Ban Koruma Kanal Sıfırla `)
.setColor(`${renk}`)
.setDescription(`${onay} Ban Koruma Kanal Başarıyla Sıfırlandı ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sıfırlandı)
korumaverileri.delete(`bankoruma.${message.guild.id}`)
return;
}
//Ayarlanmadi
let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Ban Koruma Kanal Ayarla`)
.setColor(`${renk}`)
.setDescription(`${red} Ban Koruma Kanalı Belirtiniz ! \`${prefix}ban-koruma #kanal\``)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlanmadı)
}
//Ayarlanmadi
//Ayarlandi
korumaverileri.set(`bankoruma.${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Ban Koruma Kanal Ayarlandı `)
.setColor(`${renk}`)
.setDescription(`${onay} Ban Koruma Kanal ${kanal} Olarak Ayarlandı ! | \`${prefix}ban-koruma sıfırla\``)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
}
//Ayarlandi+
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'ban-koruma',
}