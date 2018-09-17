const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot,message,args) => {
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);
  let köpek = new Discord.RichEmbed()
  .setColor(0xFFFFFF)
  .setTitle(`${message.author.username}, bir dost;`)
  .setImage(body.url);
  message.channel.send(köpek)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['köpek'],
  permLevel: 0
};

exports.help = {
  name: 'köpek',
  description: '-',
  usage: 'köpek'
};