const Discord = require(`discord.js`);
const ayarlar = require(`../ayarlar.json`);
const { Database } = require("wio.db")
const ms = require("parse-ms");
const db = new Database("./DataBase/Database");
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk

exports.run = async (client, message, args) => {
let cooldown = 10000, 
amount = Math.floor(Math.random() * 10) + 200;      
let bekleme = db.fetch(`bekleme.${message.author.id})`);
    if (bekleme !== null && cooldown - (Date.now() - bekleme) > 0) {
        let timeObj = ms(cooldown - (Date.now() - bekleme));
        const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
 		.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
 		.setColor(`${renk}`)
        .setDescription(`${red} Komutu Kullanmak İçin; \`${timeObj.hours}\` Saat \`${timeObj.minutes}\` Dakika \`${timeObj.seconds}\` Saniye Beklemelisin!`)
        message.channel.send(embed).then(m => m.delete({timeout: 11000}));
        return
    } else {

db.set(`bekleme.${message.author.id})`, Date.now());
if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`${red} Bu Komutu Kullanabilmek \`Mesajları Yönet\` Yekisine İhtiyacım Var!`).then(msg => msg.delete({timeout:10000}));
if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`${red} Bu Komutu Kullanabilmek \`Kanalları Yönet\` Yekisine İhtiyacım Var!`).then(msg => msg.delete({timeout:10000}));
if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send(`${red} Bu Komutu Kullanabilmek \`Bağlantı Yerleştir\` Yekisine İhtiyacım Var!`).then(msg => msg.delete({timeout:10000}));
if (!message.guild.me.hasPermission('ATTACH_FILES')) return message.channel.send(`${red} Bu Komutu Kullanabilmek \`Dosya Ekle\` Yekisine İhtiyacım Var!`).then(msg => msg.delete({timeout:10000}));
if (!message.guild.me.hasPermission('VIEW_CHANNEL')) return message.channel.send(`${red} Bu Komutu Kullanabilmek \`Kanalı Görüntüleme\` Yekisine İhtiyacım Var!`).then(msg => msg.delete({timeout:10000}));

if(!message.member.permissions.has(`MANAGE_MESSAGES`)) return message.channel.send(new Discord.MessageEmbed().setTitle(`${red} Bu komutu kullanabilmek için \`Mesajlari Yönet\` yetkisine sahip olmalısın`));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle(`${red} Silinecek miktar giriniz.`));
if(args[0] > 100) return message.channel.send(new Discord.MessageEmbed().setTitle(`${red} Mesaj silme limiti \`100\` üzeri mesajı aynı anda silemem.`));
message.channel.bulkDelete(args[0]);
return message.channel.send(new Discord.MessageEmbed().setTitle(`İşte bu kadar! `+`${args[0]}`+` adet mesaj silindi. ${onay}`)).then(m => m.delete({timeout: 5000}));
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["temizle"],
  permLevel: 0
}

exports.help = {
  name: `sil`
};