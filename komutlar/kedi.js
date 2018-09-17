const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot,message,args) => {
  let {body} = await superagent
  .get(`aws.random.cat/meow`);
  let kedi = new Discord.RichEmbed()
  .setColor(0xFFFFFF)
  .setTitle(`${message.author.username}, Ah şu uzaylılar;`)
  .setImage(body.file);
  message.channel.send(kedi)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kedi'],
  permLevel: 0
};

exports.help = {
  name: 'kedi',
  description: '-',
  usage: 'kedi'
};