const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setAuthor('Buyrun Efenim Ana Komutlar Menüsü')
.setThumbnail(client.user.avatarURL) //client user botun kendisi oluyor biliyorum.
.addField('!temizle[sayı]', 'Belirlediğiniz kadar mesajı silmenizi sağlar.',true)
.addField('!kullanıcıbilgi', 'Kendi bilgilerinizi görmenizi sağlar.',true)
.addField('!sunucuresmi', 'Şuanda bulunduğunuz sunucunun resmini görmenizi sağlar.',true)
.addField('!tavsiye', 'Yapımcıya tavsiye göderirsiniz.',true)
.addField('!davet', 'Botun davet linkini yollar : )',true)
.addField('!hesapla[işlem]', 'Bota bir matematik işlemi yaptırmanızı sağlar. ',true )
.addField('!istatistik', 'Botun istatistiklerini gösterir.',true)
.addField('!ping', 'Botun pingini ölçer.',true)
.addField('!oylama <oylamaismi>', 'Bir oylama yapmanızı sağlar.',true)
.addField('!sunucubilgi', 'Sunucu hakkında bilgi verir.',true)
.setFooter('Bu bot tarqu tarafından yapılmışıtır.',true)
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
  aliases: ['a','genel'],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: 'Tüm komutları gösterir.',
  usage: 'anakomutlar [komut]'
};