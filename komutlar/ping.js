const Discord = require('discord.js');
const { Database } = require("wio.db")
const db = new Database("./DataBase/Database");
const ayarlar = require("../ayarlar.json")
let red = ayarlar.red
let onay = ayarlar.onay
let renk = ayarlar.renk
let prefix = ayarlar.prefix
exports.run = async (app, message, client) => {
  
  const embed = new Discord.MessageEmbed()
  
  .setColor(`${renk}`)
  .setDescription('Ping Hesaplanıyor...')
  
   let start = Date.now(); 
   let mesaj = await message.channel.send(embed)
   let diff = (Date.now() - start); 
   let API = (app.ws.ping).toFixed(2)
    
    setInterval(() => {
        
   const only = new Discord.MessageEmbed()
   
   .setDescription(`\nMesaj Gecikme Süresi ; **${diff}Ms** \n\nBot Gecikme Süresi ; **${API}Ms**`)
   .setColor(`${renk}`)
   
    mesaj.edit(only);
      
    }, 5000)
  
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ms'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'levian Code & Only V12.',
  usage: 'ping'
};