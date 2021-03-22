const discord = require('discord.js')
const { Database } = require("wio.db")
const  kayıtverileri = new Database("./DataBase/Kayıt Veri");
const ayarlar = require('../ayarlar.json')
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
let prefix = ayarlar.prefix
exports.run = async(client, message, args) => {
	let kayıtlogkanal = await kayıtverileri.fetch(`kayıtlogkanal.${message.guild.id}`)
  if(!kayıtlogkanal) return message.channel.send(`${red} **\`Kayıt log kanalı\`** rolü ayarlı olmadığı için **\`${prefix} sıfırla\`** kullanılamıyor.`).then(msg => msg.delete({timeout:10000}));


if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${red} Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın`).then(msg => msg.delete({timeout:10000}));

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kayıt Log Sıfırla `)
.setColor(`${renk}`)
.setDescription(`${onay} Kayıt Olunacak Kanal Başarıyla Sıfırlandı ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sıfırlandı)
kayıtverileri.delete(`kayıtlogkanal.${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Kayıt Log Ayarla `)
.setColor(`${renk}`)
.setDescription(`${red} Kayıt Log Olucak Kanalı Belirtiniz !  `)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlanmadı)
}
kayıtverileri.set(`kayıtlogkanal.${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Kayıt Log Ayarlandı `)
.setColor(`${renk}`)
.setDescription(`${onay} Kayıt Olunacak Kanal ${kanal} Olarak Ayarlandı | \`${prefix}kayıt-log sıfırla\` `)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-log',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: 'dr!kayıt-kanal #kanal'
}