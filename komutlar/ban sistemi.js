const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
let renk = ayarlar.renk
let mortac = ayarlar.mortac



exports.run = function(client, message) {
	
const embed = new Discord.MessageEmbed()
.setColor(`${renk}`)
.setAuthor(`${client.user.username} Ban Sistemi`)
.setTimestamp()
.setDescription(`

> \`${prefix}ban\` -> **Etiketlenen Kullanıcıyı Banlarsınız.**

> \`${prefix}ban-log\` -> **Banlanan Kişinin Ve Banlayan Kişinin Bilgilerinin Gideceği Kanal.**

> \`${prefix}ban-yetkili\` -> **Ban Yetkilisi Ayarlarsınız.**

> \`${prefix}ban-say\` -> **Sunucuda Kaç Kişinin Banlı Olduğunu Atar.**

> \`${prefix}ban-sistem sıfırla\` -> **Ayarladığınız Ayarları Sıfırlar.**

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
  name: 'ban-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};