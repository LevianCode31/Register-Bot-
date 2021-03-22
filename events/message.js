const ayarlar = require('../ayarlar.json');
const Discord = require("discord.js");
const { Database } = require("wio.db");
const db = new Database("./DataBase/Database");
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
const prefix = ayarlar.prefix
const desteksunucum = ayarlar.desteksunucum
let talkedRecently = new Set();
module.exports = async message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, );

  let client = message.client;
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);

  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {

let kural =  db.fetch(`kural`);

    let csd = db.get(`leviankurallar.${message.author.id}`);
    if (!csd) {
      let dcs15 = new Discord.MessageEmbed()
.setTitle(`${client.user.username} Kullanmadan Önce Lütfen Oku!`)
.setColor(`${renk}`)
.setDescription(`


  > **Botun Çalışması İçin Levian Rolünü En Üste Çekin!**

  > **Levian Bota Yönetici İzni Vermelisiniz!**

  > **Lütfen Botun Komutlarını Spam Şeklinde Yazmayın!**

  > \`Aşşağıdakı ✅ Emoji'ye Basınız!\`

  > **Prefixim: \`${prefix}\` Destek Sunucum: [Tikla](${desteksunucum})**
  
  > **Senden Önce Okuyan Kişi Sayısı:** \`${kural}\``)

        
        
      
   return   message.channel.send(dcs15).then(sunucu => {
        sunucu.react("✅")

        let levian1 = (reaction, user) =>
          reaction.emoji.name === "✅" && user.id === message.author.id;

        let client2 = sunucu.createReactionCollector(levian1, { time: 0 });

   
        client2.on("collect", async r => {
          message
            .reply('**Okuduğun İçin Teşekkür Ederiz İyi Kullanmalar!**').then(msg => msg.delete({timeout:3000}));
          message.delete();
          sunucu.delete();
          db.set(`leviankurallar.${message.author.id}`, "Kural Onaylandı");
    db.add(`kural`,1)
        });

        client.on("collect", async r => {
          message.reply("**Kuralları Kabul Etmediğiniz İçin Malesef Botu Kullanamazsınız!**").then(msg => msg.delete({timeout:3000}));
          message.delete();
          sunucu.delete();
        });
      });  
}
    if (perms < cmd.conf.permLevel) return;

    cmd.run(client, message, params, perms);
  }
};


