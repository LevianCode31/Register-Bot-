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
.setTitle(`${client.user.username} - Kick Yetkili Rol Sıfırla `)
.setColor(`${renk}`)
.setDescription(`${onay} Sunucu İçin Ayarladığınız Kick Yetkili Rolü Başarıyla Sıfırlandı !`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sıfırlandı)
korumaverileri.delete(`kickyetkilisi.${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Kick Yetkili Rol Ayarla `)
.setColor(`${renk}`)
.setDescription(`${red} Ayarlayacağınız Kick Yetkili Rolünü Belirtiniz ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlanmadı)
}
korumaverileri.set(`kickyetkilisi.${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Kick Yetkili Rol Ayarlandı `)
.setColor(`${renk}`)
.setDescription(`${onay} Kick Yetkili Rolü Başarıyla ${rol} Olarak Ayarlandı ! \`${prefix}kick-yetkili sıfırla\``)
.setThumbnail(client.user.avatarURL)
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
  name: 'kick-yetkili',
  description: 'Kick Yetkili rolünü ayarlar',
  usage: '!Kick Yetkili-rol @rol'
}