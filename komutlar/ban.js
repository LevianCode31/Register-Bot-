const Discord = require(`discord.js`);
const { Database } = require("wio.db")
const korumaverileri = new Database("./DataBase/Koruma Veri");
const client = new Discord.Client();
const ayarlar = require(`../ayarlar.json`)
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
exports.run = async (client, message, args) => {

  if(!message.member.roles.cache.has(korumaverileri.fetch(`banyetkilisi.${message.guild.id}`))) {
    return message.channel.send(`${red} Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!`).then(msg => msg.delete({timeout:10000}));
   }
   if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(`${red} Bu Komutu Kullanabilmek Üyeleri Engelle Yekisine İhtiyacım Var!`).then(msg => msg.delete({timeout:10000}));
  
   const levian = await korumaverileri.fetch(`banlog.${message.guild.id}`)
   if(levian == null) return message.channel.send(`${red} Lütfen BanLog Kanalı Ayarla!`);
  
  let member = message.member
  let guild = message.guild
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  let banlogkanalı = await korumaverileri.fetch(`banlog.${member.guild.id}`);
  let banlog = member.guild.channels.cache.find(name => banlogkanalı);
  if (message.mentions.users.size < 1) return message.reply(`${red} Kimi Banleyeceğimi yazmalısın.`);
  if (reason.length < 1) return message.reply(`${red} Ban sebebini yazmalısın.`);

  if (!message.guild.member(user).Banable) return message.reply(`${red} Yetkili Kişileri Banleyemem.`);
  message.guild.member(user).Ban();
  message.channel.send(`${message.author} Ban İşlemi Başarılı! ${onay}`)

  const embed = new Discord.MessageEmbed()
    .setColor(`${renk}`)
    .setTimestamp()
    .addField(`Yapılan İşlem:`,`Ban`)
    .addField(`Banlanan:`, `${user.username}#${user.discriminator} (${user.id})`)
    .addField(`Banlayan:`, `${message.author.username}#${message.author.discriminator}`)
    .addField(`Ban Sebebi`, reason);
  message.guild.channels.cache.get(korumaverileri.fetch(`banlog.${message.guild.id}`)).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: `ban`,
  description: `İstediğiniz kişiyi banlar.`,
  usage: `kullanıcı [kullanıcı] [sebep]`
};