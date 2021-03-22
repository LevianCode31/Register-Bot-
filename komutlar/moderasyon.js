const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
let renk = ayarlar.renk
let mortac = ayarlar.mortac



exports.run = function(client, message) {
	
const embed = new Discord.MessageEmbed()
.setColor(`${renk}`)
.setAuthor(`${client.user.username} Koruma Sistemi`)
.setTimestamp()
.setDescription(`

> \`${prefix}ban-sistemi\` -> **Ban Sistemini Ayarlamanız İçin Gereken Komutlar.**

> \`${prefix}kick-sistemi\` -> **Kick Sistemini Ayarlamanız İçin Gereken Komutlar.**
	`)
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    .setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};