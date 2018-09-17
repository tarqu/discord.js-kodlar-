const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setAuthor('Buyrun Efenim Menü')
  .setThumbnail(client.user.avatarURL) 
  .addField('!gsustur[@kişi][süre]', 'Etiketlenen kişiyi geçici olarak susturur \n 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün  ')
  .addField('!ban [kullanıcı] [sebep]', 'Etiketlenen kişi banlanır.')
  .addField('!kick [kullanıcı] [sebep]', 'Etiketlenen kişi kicklenir.')
  .addField('!load <komut adı>', 'Yeni eklenen komutu yükler.')
  .addField('!unban [kullanıcı] [sebep]', 'Banlanan kişinin banını açar.')
  .addField('uyar [kullanıcı] [sebep]', 'Etiketlenen kişiyi uyarır.')
  .addField('kilit <süre>','Kanalı istediğiniz kadar süreyle kitler.')
.addField('!gsustur[@kişi] [Süre]', 'Etiketlenen kişiye geçici susturma verir.[1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün] ')
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
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + 'yetkili');
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili'],
  permLevel: 2
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili [komut]'
};