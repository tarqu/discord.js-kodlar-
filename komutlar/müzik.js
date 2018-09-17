const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
.setAuthor('Buyrun Efenim Müzik Komutları')
.setThumbnail(client.user.avatarURL) //client user botun kendisi oluyor biliyorum.
.addField('!çal[Müzik ismi]', 'Müzik açmanızı sağlar.')
.addField('!geç', 'Diğer müziğe geçmenizi sağlar.')
.addField('!kapat', 'Müzik botunu kapatır.')
.addField('!ses[1-10]', 'Ses seviyesini ayarlar.')
.addField('!çalınan', 'Çalınan müziğin bilgilerini gösterir.')
.addField('!kuyruk', 'Müzik kuyruğunu gösterir.')
.addField('!durdur', 'Çalınan müziği durdurur.')
.addField('!devam', 'Durdurulan müzik devam eder.')
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
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + 'müzik');
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['music'],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik [komut]'
};