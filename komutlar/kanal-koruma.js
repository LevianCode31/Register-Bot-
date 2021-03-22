const Discord = require('discord.js')
const { Database } = require("wio.db")
const korumaverileri = new Database("./DataBase/Koruma Veri");
const ayarlar = require('../ayarlar.json')
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk

exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${red} Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın`).then(msg => msg.delete({timeout:10000}));
  if (!args[0]) {
    const Valak = new Discord.MessageEmbed()
    .setDescription(`${red} ${prefix}kanal-koruma aç/sıfırla`)
    .setTimestamp()
    return message.channel.send(Valak)
  }
  if (args[0] === 'aç') {
    
    korumaverileri.set(`kanalkoruma.${message.guild.id}`, `Açık Sunucu: (${message.guild.name})`)
       const Valak2 = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} Kanal Koruma Ayarlandı `)
    .setColor(`${renk}`)
    .setDescription(`${onay} Kanal Koruma Başarıyla Açıldı! | \`${prefix}kanal-koruma sıfırla\` `)
    .setThumbnail(client.user.avatarURL())
    .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
    return message.channel.send(Valak2)
  }
   if (args[0] === 'sıfırla') {
    
    korumaverileri.delete(`kanalkoruma.${message.guild.id}`)
       const Valak1 = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} Kanal Koruma Ayarlandı `)
    .setDescription(`${onay} Kanal Koruma Başarıyla Sıfırlandı!`)
    .setThumbnail(client.user.avatarURL())
    .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
    return message.channel.send(Valak1)
     
  }
};
exports.conf = {
  aliases: ['kanalkoruma'],
  permLevel: 0
};
exports.help = {
  name: 'kanal-koruma'
}; 