const discord = require('discord.js')
const { Database } = require("wio.db")
const modverileri = new Database("./DataBase/Mod Veri");
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
.setTitle(`${client.user.username} - Mod-Log Kanal Sıfırla`)
.setColor(`${renk}`)
.setDescription(`${onay} Mod-Log Kanal Başarıyla Sıfırlandı !`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı !`)
message.channel.send(sıfırlandı)
modverileri.delete(`modloglevian.${message.guild.id}`)
return;
}
//Ayarlanmadi
let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Mod-Log Kanal Ayarla `)
.setColor(`${renk}`)
.setDescription(`${red} Mod-Log Kanalı Belirtiniz !`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı !`)
message.channel.send(ayarlanmadı)
}
//Ayarlanmadi
//Ayarlandi
modverileri.set(`modloglevian.${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Mod-Log Kanal Ayarlandı `)
.setColor(`${renk}`)
.setDescription(`${onay} Mod-Log Kanal ${kanal} Olarak Ayarlandı | \`${prefix}mod-log sıfırla\` `)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
}
//Ayarlandi+
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['Mog-log', 'Mod-Log', 'mod-Log'],
  permlevel: 0
}
exports.help = {
  name: 'mod-log',
}