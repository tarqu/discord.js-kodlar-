const Discord = require("discord.js");
const moment = require('moment');
require('moment-duration-format');

module.exports.run = async (client, message, args) => {
 
 const aksuresi = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

var owner = "<@361896269410467840>"

const embed = new Discord.RichEmbed()
.setTitle("Bilgi 🛠️")
.addField("Geliştirici",`${owner}`,true)
.addField("Sunucu Sayısı",`${client.guilds.size}`,true)
.addField("Kullanıcı Sayısı",`${client.users.size}`,true)
.addField("Kanal Sayısı",`${client.channels.size}`,true)
.addField("Ne Zamandır Açık?",`${aksuresi}`,true)
.addField("Davet Linki","[Tıkla!](https://discordapp.com/oauth2/authorize?client_id=288310817810546699&scope=bot&permissions=401812495)",true)
.setColor("RANDOM")
message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
