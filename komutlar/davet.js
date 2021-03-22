const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const desteksunucum = ayarlar.desteksunucum
const botdavetlink = ayarlar.botdavetlink
const renk = ayarlar.renk
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()


    .setTitle(`${client.user.username} Davet Menüsü <a:Levian:811515307864358922>`)
    .setDescription(`**Botun Davet Linki İçin** [Tıkla](${botdavetlink})\n\n **Destek Sunucusu İçin** [Tıkla](${desteksunucum})`)
    .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    .setColor(`${renk}`)
    return message.channel.send(embed);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};