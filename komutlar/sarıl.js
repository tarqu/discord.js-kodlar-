const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.delete();
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply(' :x: Olmayan kişiye sarılamıyorsun aga be :x: ');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("RANDOM")
    .setDescription(message.author.username + ` ${mesaj}'a ` + ' Sarıldın. Hadi yine iyisin ha 🤗')
    .setImage("https://78.media.tumblr.com/ae268b72dbcc55689c7476387dde6e2a/tumblr_oxd46lKBMK1v791ndo1_400.gif");
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sarıl'],
  permLevel: 0
};

exports.help = {
  name: 'sarıl',
  description: 'İstediğiniz Kişiye sarılırsınız.',
  usage: 'sarıl'
};