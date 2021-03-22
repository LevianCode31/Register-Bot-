const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
require("./util/eventLoader")(client);

///Sunucu Ssayısı
///Sunucu Ssayısı
///Sunucu Ssayısı
const AutoPoster = require('topgg-autoposter')

const ap = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc5NTY1NDQwNzcwMTUyODU5NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE1NDE1ODA4fQ.tBiYrJ18Z2LHSQG6MqFY-ll8_SrDKSD3dKS6MSxjKNo', client)

ap.on('posted', () => {

})



///Sunucu Ssayısı
///Sunucu Ssayısı
///Sunucu Ssayısı

//Data Baseeeee
//Data Baseeeee
//Data Baseeeee
const { Database } = require("wio.db")
const db = new Database("./DataBase/Database");
const kayıtverileri = new Database("./DataBase/Kayıt Veri");
const modverileri = new Database("./DataBase/Mod Veri");
const korumaverileri = new Database("./DataBase/Koruma Veri");
const davetverileri = new Database("./DataBase/Davet Veri");
//Data Baseeeee
//Data Baseeeee
//Data Baseeeee
//------------------Renkler-Emojiler
//------------------Renkler-Emojiler
//------------------Renkler-Emojiler
const renk = ayarlar.renk
const botadi = ayarlar.botadi
const desteksunucum = ayarlar.desteksunucum
const kirmizi = ayarlar.kirmizi
const yesil = ayarlar.yesil
const kalpsiyah = ayarlar.kalpsiyah
//------------------Renkler-Emojiler
//------------------Renkler-Emojiler
//------------------Renkler-Emojiler
const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token).then(c => console.log(`${client.user.tag} olarak giriş yapıldı!`)).catch(err => console.error("Bota giriş yapılırken başarısız olundu!"));

// Levian Kayit
client.on("guildMemberAdd", member => {
  let guild = member.guild;
  let kanal = kayıtverileri.fetch(`kayıthg.${member.guild.id}`);
  let kayıtçı = kayıtverileri.fetch(`kayıtçırol.${member.guild.id}`);
  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;

  let user = client.users.cache.get(member.id);
  require("moment-duration-format");

var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
            '0': `<a:sfr:811501823457230848>`,
            '1': `<a:bir:811501872065675284>`,
            '2': `<a:iki:811501984196591647>`,
            '3': `<a:uc:811501991783170059>`,
            '4': `<a:dort:811501984540655646>`,
            '5': `<a:bes:811501991448674315>`,
            '6': `<a:alti:811501993067413534>`,
            '7': `<a:yedi:811501987244933140>`,
            '8': `<a:sekiz:811501998825799680>`,
            '9': `<a:dokuz:811501993121415168>`}[d];})}
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const ayyy = moment.duration(kurulus).format("M");
  var kontrol = [];


let olumlu = ayarlar.olumlu
let olumsuz = ayarlar.olumsuz
  if (ayyy < 1) {
    kontrol = `**Şüpheli!** ${olumsuz}`;
  }
  if (ayyy > 1) {
    kontrol = `**Güvenilir!** ${olumlu}`;
  }

  if (!kanal) return;

  ///////////////////////

let loading = ayarlar.loading






  let randomgif = [ 
             "https://cdn.discordapp.com/attachments/811414430898323496/811419397209718834/Baslksz-1_kopya.png"];

  ///////////////////
  client.channels.cache.get(kanal).send(`<@&${kayıtçı}> ${member} <a:Zil:811515248833724426>`);
  const embed = new Discord.MessageEmbed()
    .setTitle(`Levian | Kayıt Sistemi <a:Levian:811515307864358922>`)
    .setColor(`${renk}`)
    .setImage(randomgif[Math.floor(Math.random() * randomgif.length)])
    .setThumbnail(

    )

    .setDescription(
      `${loading} **Sunucumuza hoşgeldin** ${member.user} \n **Hesap oluşturulma tarihi:** ${moment(
        user.createdAt
      ).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(
        user.createdAt
      ).format(
        "YYYY HH:mm:ss"
       )} \n  **Güvenilirlik durumu:** ${kontrol} \n <a:Levian:811515307864358922> **Seninle birlikte ${üyesayısı} kişiyiz** \n <a:Loading2:811515252268072960> **Kayıt olmak için yetkilileri beklemen yeterlidir.
Yetkililer sizinle ilgilenecektir.**

  `
    );

  
  client.channels.cache.get(kanal).send(embed);
});
//Levian Kayit Son

//Levian OtoRol 
client.on("guildMemberAdd", async member => {
  let rol = await kayıtverileri.fetch(`otomatikrol.${member.guild.id}`);
  let mesaj = kayıtverileri.fetch(`otoRM.${member.guild.id}`);
  if (!rol) return;

  if (!mesaj) {
    return member.roles.add(rol);
  }

});
//Levian Otorol Son 




//tag etkket
client.on('message', message => {
  let tag = kayıtverileri.get(`tag.${message.guild.id}`)
  if (message.content === `tag`) {
    message.channel.send(`\`${tag}\``).then(msg => msg.delete({timeout:30000}));
  }
});
client.on('message', message => {
  let tag = kayıtverileri.get(`tag.${message.guild.id}`)
  if (message.content === `.tag`) {
    message.channel.send(`\`${tag}\``).then(msg => msg.delete({timeout:30000}));
  }
})
/*client.on('message', message => {
  let tag = db.get(`tag_${message.guild.id}`)
  if (message.content === `!tag`) {
    message.channel.send(`\`${tag}\``).then(msg => msg.delete({timeout:10000}));
  }
});
client.on('message', message => {
  let tag = db.get(`tag_${message.guild.id}`)
  if (message.content === `-tag`) {
    message.channel.send(`\`${tag}\``).then(msg => msg.delete({timeout:10000}));
  }
});*/
//tag son
//koruma 
client.on('message', async msg => {
  let prefix = await db.fetch(`prefix.${msg.guild.id}`) || ayarlar.prefix 
  if(msg.content == `<@!795654407701528597>`) return msg.channel.send(`> **Prefixim:** \`${prefix}\`\n> **Eğer yardım istiyorsan:** ${desteksunucum} \n> \`Bu Mesaj 10 Saniye Sonra Otomatik Silinicektir!\``).then(msg => msg.delete({timeout:10000}));
});



//KOMUTLAR

client.on("roleDelete", async role => {
  let rolko = await korumaverileri.fetch(`rolkoruma.${role.guild.id}`);
  if (rolko) { 
         const entry = await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.guild.roles.create({ data: {
          name: role.name,
          color: role.color,
          hoist: role.hoist,
          permissions: role.permissions,
          mentionable: role.mentionable,
          position: role.position
}, reason: 'Silinen Roller Tekrar Açıldı.'})
  }
})

//

client.on("roleCreate", async role => {
  let rolk = await korumaverileri.fetch(`rolkoruma.${role.guild.id}`);
  if (rolk) { 
       const entry = await role.guild.fetchAuditLogs({ type: "ROLE_CREATE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.delete()
}
})

client.on("channelDelete", async function(Valak) {
    let rol = await korumaverileri.fetch(`kanalkoruma.${Valak.guild.id}`);
  
  if (rol) {
const guild = Valak.guild.cache;
let channelp = Valak.parentID;

  Valak.clone().then(z => {
    let kanal = z.guild.channels.cache.find(c => c.name === z.name);
    kanal.setParent(
      kanal.guild.channels.cache.find(channel => channel.id === channelp)
      
    );
  });
  }
})




//Ban LOG
client.on('guildBanAdd', async (guild, user) => {
  let modlogs = modverileri.get(`modloglevian.${guild.id}`)
  const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.MessageEmbed()
    .setColor(`${renk}`)
    .setAuthor("Bir kişi sunucudan yasaklandı")
    .setThumbnail(user.avatarURL()||user.defaultAvatarURL)
    .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('guildBanRemove', async (guild, user) => {
  let modlogs = modverileri.get(`modloglevian.${guild.id}`)
   const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor(`${renk}`)
     .setAuthor("Bir kişinin yasağı kaldırıldı")
     .setThumbnail(user.avatarURL()||user.defaultAvatarURL)
     .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
     .setFooter(`${botadi} | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });
//Ban LOG
//Kanal LOg
 client.on('channelCreate', async channel => {
  let modlogs = modverileri.get(`modloglevian.${channel.guild.id}`)
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
   const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     if (channel.type === "text") {
       let embed = new Discord.MessageEmbed()
       .setColor(`${renk}`)
       .setAuthor("Bir Kanal Oluşturuldu")
       .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
       .addField(`Oluşturulan Kanalın Türü : `, `Yazı`)
       .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
       .setFooter(`${botadi} | Mod-Log Sistemi`)
       .setTimestamp()
       modlogkanal.send(embed)
     }
       if (channel.type === "voice") {
       
         let embed = new Discord.MessageEmbed()
         .setColor(`${renk}`)
         .setAuthor("Bir Kanal Oluşturuldu")
         .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
         .addField(`Oluşturulan Kanalın Türü : `, `Ses`)
         .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
         .setFooter(`${botadi} | Mod-Log Sistemi`)
         .setTimestamp()
         modlogkanal.send(embed)
 
 
     }
 }});

 client.on('channelDelete', async channel => {
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
let user = client.users.cache.get(entry.executor.id)
let modlogs = modverileri.get(`modloglevian.${channel.guild.id}`)
const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
if(!modlogs) return;
if(modlogs) {
if (channel.type === "text") {
let embed = new Discord.MessageEmbed()
.setColor(`${renk}`)
.setAuthor("Bir Kanal Silindi")
.addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
.addField(`Silinen Kanalın Türü : `, `Yazı`)
.addField(`Kanalı Silen : `, `<@${user.id}>`)
.setFooter(`${botadi} | Mod-Log Sistemi`)
.setTimestamp()
modlogkanal.send(embed)
}
  if (channel.type === "voice") {

    let embed = new Discord.MessageEmbed()
    .setColor(`${renk}`)
    .setAuthor("Bir Kanal Silindi")
    .addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
    .addField(`Silinen Kanalın Türü : `, `Ses`)
    .addField(`Kanalı Silen : `, `<@${user.id}>`)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
   }
  }
});
//Kanal LOg

//rolLog
client.on('roleDelete', async role => {
  let modlogs =  modverileri.get(`modloglevian.${role.guild.id}`)
   let entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
  const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor(`${renk}`)
     .setAuthor("Bir Rol Silindi")
     .addField(`Silinen Rolün İsmi : `, `${role.name}`)
     .addField(`Rolü Silen : `, `<@${user.id}>`)
     .setFooter(`${botadi} | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });
client.on('roleCreate', async role => {
  let modlogs =  modverileri.get(`modloglevian.${role.guild.id}`)
   let entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
  const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor(`${renk}`)
     .setAuthor("Bir Rol Açıldı")
     .addField(`Açılan Rolün İsmi : `, `${role.name}`)
     .addField(`Rolü Açan : `, `<@${user.id}>`)
     .setFooter(`${botadi} | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });



//Rol Log
client.on("messageUpdate", async (oldMessage, newMessage) => {
  let modlogs = await modverileri.get(`modloglevian.${oldMessage.guild.id}`);

  if (!modlogs) return;
   if(modlogs) {
  let embed = new Discord.MessageEmbed()
  .setColor(`${renk}`)
  .setAuthor("Bir Mesaj Düzenlendi")
  .addField("**Eski Mesajı**", `${oldMessage.content}`)
  .addField("**Yeni Mesajı**", `${newMessage.content}`)
  .addField("**Mesajın sahibi**", `<@${oldMessage.author.id}>`)
  .setFooter(`${botadi} | Mod-Log Sistemi`)
   client.channels.cache.get(modlogs).send(embed)
}
});

client.on("messageDelete", async (message) => {
  if (message.author.bot || message.channel.type == "dm") return;
  let modlogkanal = message.guild.channels.cache.get(await db.fetch(`modloglevian.${message.guild.id}`));
  if (!modlogkanal) return;
  const embed = new Discord.MessageEmbed()
    .setColor(`${renk}`)
    .setAuthor("Bir Mesaj Silindi")
    .addField("**Kanal:**", message.channel)
    .addField("**Mesaj:** ", "" + message.content + "")
    .addField("**Mesajın sahibi**", message.author)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
  modlogkanal.send(embed)

})

/*client.on('voiceStateUpdate', async (oldMember, newMember) => {
  var seslog = await db.fetch(`modlogK_${oldMember.guild.id}`)
  if (!seslog) return;
var kanal2 = oldMember.guild.channels.find('loggers-deneme-modsking', seslog) // log kanal ismi
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  if(oldUserChannel === undefined && newUserChannel !== undefined) {
    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`**${newMember.user.tag}** adlı kullanıcı \`${newUserChannel.name}\` isimli sesli kanala giriş yaptı!`)
    kanal2.send(embed);
  } else if(newUserChannel === undefined){
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`**${newMember.user.tag}** adlı kullanıcı bir sesli kanaldan çıkış yaptı!`)
    kanal2.send(embed); 
  }*/
//Ban Koruma

client.on("guildBanAdd", async (guild, user) => {
  let kontrol = await db.fetch(`dil.${guild.id}`);
  let kanal = await db.fetch(`bankoruma.${guild.id}`);
  let rol = await db.fetch(`banrol.${guild.id}`);
  if (!kanal) return;
  if (kontrol == "agayokaga") {
    const entry = await guild
      .fetchAuditLogs({ type: "GUILD_BAN_ADD" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == guild.owner.id) return;
    guild.members.unban(user.id);
    guild.members.cache.get(entry.executor.id).kick();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Biri Yasaklandı!`)
      .setColor(`${renk}`)
      .addField(`Yasaklayan:`, `\`${entry.executor.tag}\``)
      .addField(`Yasaklanan Kişi:`, `\`${user.tag}\``)
      .addField(
        `Sonuç:`,
        `\`Yasaklayan kişi sunucudan atıldı ve yasaklanan kişinin yasağı kalktı!\``
      );
    client.channels.cache.get(kanal).send(embed);
  } else {
    const entry = await guild
      .fetchAuditLogs({ type: "GUILD_BAN_ADD" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == guild.owner.id) return;
    guild.members.unban(user.id);
    guild.members.cache.get(entry.executor.id).kick();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Biri Yasaklandı!`)
      .setColor(`${renk}`)
      .addField(`Yasaklayan:`, `\`${entry.executor.tag}\``)
      .addField(`Yasaklanan Kişi:`, `\`${user.tag}\``)
      .addField(
        `Sonuç:`,
        `\`Yasaklayan kişi sunucudan atıldı ve yasaklanan kişinin yasağı kalktı!\``
      );
    client.channels.cache.get(kanal).send(embed);
  }
});
//tag alana rol
client.on("userUpdate", (oldUser, newUser) => {
  client.guilds.cache.forEach(async guild => {
    if (!guild.members.cache.get(newUser.id)) return;
    const tagFetch = await kayıtverileri.fetch(`tag.${guild.id}`);
    const roleFetch = await kayıtverileri.fetch(`tagrol.${guild.id}`);
    const logFetch = await kayıtverileri.fetch(`taglog.${guild.id}`);
    if (!tagFetch || !roleFetch || !logFetch) return;
    let tag = tagFetch;
    let role = guild.roles.cache.get(roleFetch);
    let log = guild.channels.cache.get(logFetch);
    if (oldUser.username === newUser.username) return;
    if (newUser.username.includes(tag) && !oldUser.username.includes(tag)) {
      log.send(
        new Discord.MessageEmbed()
          .setTitle("Levian - Tag Alındı")
          .setColor(`${yesil}`)
          .setDescription(
            `${newUser} **Aramıza hoşgeldin. \`${tag}\` tagınımızı aldığı için ${role} rolü verildi!**`
          )
      );
      guild.members.cache.get(newUser.id).roles.add(role.id);
    }
    if (oldUser.username.includes(tag) && !newUser.username.includes(tag)) {
      log.send(
        new Discord.MessageEmbed()
          .setTitle("Levian - Tag Çıkarıldı")
          .setColor(`${kirmizi}`)
          .setDescription(
            `${newUser} **Aramızdan ayrıldı. \`${tag}\` tagınımızı çıkardığı için ${role} rolü alındı!**`
          )
      );
      guild.members.cache.get(newUser.id).roles.remove(role.id);
    }
  });
});

//Tag alana rol
//Oto Isım 
client.on("guildMemberAdd", async member => {
  let user = member.user;
  let guild = member.guild;

  const systemTagData = await kayıtverileri.fetch(`tag.${guild.id}`);
  const systemNameData = await kayıtverileri.fetch(`otoisim.${guild.id}`);
  if (!systemNameData) return;

  let systemTag;
  if (systemTagData) systemTag = String(systemTagData);

  let replacedName;
  if (systemTag) {
    replacedName = systemNameData
      .replace("+kullanıcı", user.username)
      .replace("+tag", systemTag);
  } else {
    replacedName = systemNameData.replace("+kullanıcı", user.username);
  }

  member.setNickname(replacedName);
  
});
//Oto Isım 
//Yasakli Tag
client.on('guildMemberAdd', async member => {
let guild = member.guild; 
let user = guild.members.cache.get(member.id);

const tag = await kayıtverileri.fetch(`yasaklı-tag.${guild.id}`)
const sayı = await kayıtverileri.fetch(`atıldın.${guild.id}.${user.id}`)
if(user.user.username.includes(tag)) {
  
if(sayı === null) {
await db.add(`atıldın.${guild.id}.${user.id}`, 1)
user.send(new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(guild.name, guild.iconURL)
.setDescription(`**${guild.name}** unucumuzun yasaklı tagında bulunduğunuz için atıldınız, tekrar giriş yapmayı denerseniz **yasaklanacaksınız**!`))
await user.kick() }

if(sayı === 1) {
await db.delete(`atıldın.${guild.id}.${user.id}`)
user.send(new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(guild.name, guild.iconURL)
.setDescription(`Sunucumuzun yasaklı tagında bulunduğunuz için atılmıştınız, tekrar giriş yapmayı denediğiniz için **${guild.name}** sunucusundan kalıcı olarak **yasaklandınız**!`))
await user.ban() } }
  
})
//Yasakli Tag
const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});


client.on("guildMemberAdd", async member => {
if(member.user.bot) return;
  member.guild.fetchInvites().then(async guildInvites => {
    let kanal = await davetverileri.fetch(`davetlog.${member.guild.id}`);
    if (!kanal) return;
    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;
    const invite = await guildInvites.find(i => (ei.get(i.code) == null ? (i.uses - 1) : ei.get(i.code).uses) < i.uses);
    const daveteden = member.guild.members.cache.get(invite.inviter.id);

    davetverileri.add(`davet.${invite.inviter.id}.${member.guild.id}`, +1);
    davetverileri.set(`bunudavet.${member.id}`, invite.inviter.id);
    let davetsayiv2 = await db.fetch(`davet.${invite.inviter.id}.${member.guild.id}`);

    let davetsayi;
    if (!davetsayiv2) davetsayi = 0;
     else davetsayi = await davetverileri.fetch(`davet.${invite.inviter.id}.${member.guild.id}`);

client.channels.cache.get(kanal).send(`${member} Adlı Kullanıcı Aramıza Katıldı. Kullanıcıyı Davet Eden  ${daveteden}  Toplam **${davetsayi}** Daveti Oldu`)  

      }
    
  );
});

client.on("guildMemberRemove", async member => {
  let kanal = await davetverileri.fetch(`davetlog.${member.guild.id}`);
  if (!kanal) return;
  let davetçi = await davetverileri.fetch(`bunudavet.${member.id}`);
  const daveteden = member.guild.members.cache.get(davetçi);
      let mesaj = davetverileri.fetch(`davetbbmesaj.${member.guild.id}`)
  davetverileri.add(`davet.${davetçi}.${member.guild.id}`, 1);
  let davetsayi = await davetverileri.fetch(`davet.${davetçi}.${member.guild.id}`);
  
  if (!davetçi) {
    return client.channels.cache.get(kanal).send(`${member} Adlı Kullanıcı Aramızdan Ayrıldı Davet Eden Bulunamadı!`);
  } else {
     
client.channels.cache.get(kanal).send(`${member} Adlı Kullanıcı Aramızadan Ayrıldı Kullanıcıyı Davet Eden ${daveteden}  Toplam  **${davetsayi}** Daveti Kaldı`)  
  
      }
    }
);