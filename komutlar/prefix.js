const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  db.fetch(`guildPrefix_${message.guild.id}`).then(i => {

  let prefix;

  if (i) {
    prefix = i
  } else {
    prefix = 'KENDI PREFIXIN KARDESIM';

  }
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Yetkin yok!').setColor("RED"));

  if (!args.join(' ')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Kullanmak istediğin prefixi yaz. Örneğin: ${prefix}prefix ÖRNEK BİR PREFİX KARDEŞİM`).setColor("RED"));
  db.set(`guildPrefix_${message.guild.id}`, args.join().trim()).then(i => {
    message.channel.sendEmbed(new Discord.RichEmbed().addField(`Prefix başarıyla değiştirildi! Yeni Prefix`, `${i}`).setColor("GREEN"));
})})};

module.exports.help = {
  name: 'prefix-ayarla'
};
 
