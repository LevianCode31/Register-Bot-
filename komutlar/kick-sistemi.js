const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
let renk = ayarlar.renk
let mortac = ayarlar.mortac



exports.run = function(client, message) {
	
const embed = new Discord.MessageEmbed()
.setColor(`${renk}`)
.setAuthor(`${client.user.username} Kick Sistemi`)
.setTimestamp()
.setDescription(`

> \`${prefix}kick\` -> **Etiketlenen Kullanıcıyı Atarsınız.**

> \`${prefix}kick-log\` -> **Atılan Kişinin Ve Atan Kişinin Bilgilerinin Gideceği Kanal.**

> \`${prefix}kick-yetkili\` -> **Kick Yetkilisi Ayarlarsınız.**

> \`${prefix}kick-sistem sıfırla\` -> **Ayarladığınız Ayarları Sıfırlar.**

> \`Komutu yalnış ayarladıysanız ${prefix}komutismi sıfırla yazmaniz yeterlidir\`

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
  name: 'kick-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};