const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const renk = ayarlar.renk
const online = ayarlar.online
exports.run = async (client, message, args, db, ayarlar) => { //AntiCode
  try {
    let wen = await client.shard.broadcastEval(
      `[this.guilds.cache.size,this.id,this.ws.ping]`
    );
    const embed = new Discord.MessageEmbed()
      .setColor(`${renk}`)
      .setDescription(`> **Bu sunucunun shardı: ${message.guild.shard.id + 1}**`);
    var i = 1;
    wen.forEach(shard => {
      embed
        .addField(`${online} **Shard:**`, i, true)
        .addField("**Sunucu Sayısı:**", shard[0], true)
        .addField("**Ping:**", shard[2], true); //AntiCode
      i++;
    });
    message.channel.send(embed);
  } catch (err) {
    console.error(err);
    message.channel.send("Bir hata oluştu!");
  }
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ["shard"],
  permLevel: 0
};
exports.help = {
  name: "shardinfo",
  description: "AntiCode",
  usage: "shard"
};