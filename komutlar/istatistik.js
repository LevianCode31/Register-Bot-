const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const ayarlar = require(`../ayarlar.json`)

exports.run = async (client, message, args) => {
if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`Bu Komutu Kullanabilmek \`Bağlantı Yerleştir\` Yekisine İhtiyacım Var!`).then(msg => msg.delete({timeout:10000}));

const seksizaman = moment
.duration(client.uptime)
.format(" D [gün], H [saat], m [dakika], s [saniye]");

let botdavetlink = "Bot Davet Linki"
let desteksunucum = "Destek Sunucusu Linki"
let oylamalink = "Oylama Linki"

let i = message.guild.shardID
const Embed = new Discord.MessageEmbed()
.setColor(`BLACK`)
.setAuthor(client.user.username, client.user.avatarURL())
.addField("• | **Sunucu Sayısı**",client.guilds.cache.size.toLocaleString(), true)
.addField("• | **Kullanıcı Sayısı**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField("• | **Shard Bilgi**", i+1, true)
.addField("• | **Ping**", client.ws.ping, true)
.addField("• | **Çalışma süresi**", seksizaman, true)
.addField("• | **Bellek Kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + 'MB', true)
.addField("• | **Botun Sahipler:**", `<@451474544255959071><@557374490644840458>`)
.addField("• | Linkler:", `[Botu Davet Et](${botdavetlink}) | [Destek Sunucusu](${desteksunucum}) | [Oy Ver](${oylamalink})`)
.setImage("https://cdn.discordapp.com/attachments/811414430898323496/811425709665812531/standard_3.gif")
return message.channel.send(Embed);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [ 'i'],
permLevel: 0
};

exports.help = {
name: "istatistik",
description: "Bot i",
usage: "istatistik"
};
