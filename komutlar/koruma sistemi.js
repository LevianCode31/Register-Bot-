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

> \`${prefix}mod-log #kanal\` -> **Sunucuda Olup Bitenleri Belirtilan Kanala Atar.**

> \`${prefix}ban-koruma #kanal\` -> **Sunucuda Ban Atılmasını Engeller Ban Atan Kişi Sunucudan Atılır.**

> \`${prefix}rol-koruma aç\` -> **Rollerin Açılıp Silinmesini Engeller.**

> \`${prefix}kanal-koruma aç\` -> **Kanalların Açılıp Silinmesini Engeler.**

> \`Komutları Kapatmak İçin ${prefix}komutismi sıfırla Yazmanız Yeterlidir\`
	`)
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'koruma-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};