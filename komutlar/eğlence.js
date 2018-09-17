const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setAuthor('Buyrun Efenim Eğlence Menüsü')
  .setThumbnail(client.user.avatarURL) //client user botun kendisi oluyor biliyorum.
  .addField('!emojiyazı[yazı]','Bir yazıyı emojilerle yazmanızı sağlar.',true)
  .addField('!yaz[yazı]', 'Bota yazı yazdırmanızı sağlar.',true)
  .addField('!sor[soru]', 'Bot sorularınıza cevap verir.',true)
  .addField('!sarıl[@kişi]', 'Etiketlenen kişiye sarılırsınız : )',true)
  .addField('!öldür[@kişi]', 'Etiketlediğiniz kişinin avatarını öldürür.',true)
  .addField('!ördek','Rastgele ördek resmi atar.',true)
  .addField('!kedi','Rastgele kedi resmi gönderir',true)
  .addField('!köpek','Rastgele köpek resmi gönderir',true)
  .addField('!meme','Rastgele meme gönderir. FESATLAŞMA GARDAŞIIIM',true)
  .addField('!zıtrenk [@kişi]', 'Etiketlediğiniz kişiye zıtrenk efekti uygularsınız.',true)
  .addField('!kasaaç', 'Bir CS:GO kasası açarsınız.',true)
  .addField('!kgif', 'Rastgele bir gif gönderir',true)
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
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + 'eğlence');
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence [komut]'
};