const Discord = require(`discord.js`);
const { Database } = require("wio.db")
const korumaverileri = new Database("./DataBase/Koruma Veri");
const client = new Discord.Client();
const ayarlar = require(`../ayarlar.json`)
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.has(korumaverileri.fetch(`kickyetkilisi.${message.guild.id}`))) {
    return message.channel.send(`${red} Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!`).then(msg => msg.delete({timeout:10000}));
   }
  
   const levian = await korumaverileri.fetch(`kicklog.${message.guild.id}`)
   if(levian == null) return message.channel.send(`${red} Lütfen Kicklog Kanalı Ayarla!`);
  
  let member = message.member
  let guild = message.guild
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  let kicklogkanalı = await korumaverileri.fetch(`kicklog.${member.guild.id}`);
  let kicklog = member.guild.channels.cache.find(name => kicklogkanalı);
  if (message.mentions.users.size < 1) return message.reply(`${red} Kimi kickleyeceğimi yazmalısın.`);
  if (reason.length < 1) return message.reply(`${red} Kick sebebini yazmalısın.`);

  if (!message.guild.member(user).kickable) return message.reply(`${red} Yetkili Kişileri Kickleyemem.`);
  message.guild.member(user).kick();
  message.channel.send(`${message.author} Kick İşlemi Başarılı! ${onay}`)

  const embed = new Discord.MessageEmbed()
    .setColor(`${renk}`)
    .setTimestamp()
    .addField(`Yapılan İşlem:`,`Kick`)
    .addField(`Kicklenen:`, `${user.username}#${user.discriminator} (${user.id})`)
    .addField(`Kickleyen:`, `${message.author.username}#${message.author.discriminator}`)
    .addField(`Kick Sebebi`, reason);
  message.guild.channels.cache.get(korumaverileri.fetch(`kicklog.${message.guild.id}`)).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: `kick`,
  description: `İstediğiniz kişiyi banlar.`,
  usage: `kullanıcı [kullanıcı] [sebep]`
};