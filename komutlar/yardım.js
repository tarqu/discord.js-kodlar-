const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setAuthor('Buyrun Efenim Menü')
.setThumbnail(client.user.avatarURL) 
.addField("!eğlence", 'Eğlence komutları için buyrun efenim.',true)
.addField("!anakomutlar", 'Ana komutlar için buyrun efenim.',true)
.addField("!yetkili", 'Yetkili komutları için buyrun efenim',true)
.addField("!müzik", 'Müzik komutları için buyrun efenim',true)
.setFooter('Bu bot tarqu tarafından yapılmışıtır.')
.setTimestamp()
.setColor("RANDOM")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};