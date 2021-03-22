const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
let oylamalink = ayarlar.oylamalink
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc5NTY1NDQwNzcwMTUyODU5NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE1NDE1ODA4fQ.tBiYrJ18Z2LHSQG6MqFY-ll8_SrDKSD3dKS6MSxjKNo', client);
exports.run = (client, message) => {
    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
             message.channel.send(new Discord.MessageEmbed()
                .setAuthor(client.user.username, client.user.avatarURL())
                .setThumbnail(client.user.avatarURL())
                .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
                .setColor(`${renk}`)
                .setDescription(`**Bu komutu kullanabilmek için DBL üzerinden oy vermen gerekiyor.** \n**(Eğer oy verdiyseniz bi kaç dakika bekleyin)** \n**Oy vermek için: [Tıkla](${oylamalink})** \n\n**Mesaj 100 saniye sonra silinicektir.**`)).then(m => m.delete({timeout: 100000}));

        } else {
         message.channel.send(new Discord.MessageEmbed()
              .setAuthor(client.user.username, client.user.avatarURL())
              .setThumbnail(client.user.avatarURL())
              .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
              .setColor(`${renk}`)
              .setDescription(`**Botumuza oy verdiğin için teşekkürler.** \n**<@&819323701631647864> rolün verildi.**${onay}`)).then(m => m.delete({timeout: 30000}));
               message.member.roles.add("819323701631647864")

        }
    })
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['upvote'],
    permLevel: 0
};

exports.help = {
    name: 'oyverdim',
    description: '',
    usage: 'upvote'
};