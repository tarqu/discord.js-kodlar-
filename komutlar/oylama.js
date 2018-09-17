const Discord = require('discord.js');

 exports.run = (client, message, args) => {
    message.delete();
    let question = args.join(' ');
    let user = message.author.username

    const hata = new Discord.RichEmbed()
        .setDescription("Lütfen yapacağınız oylama ismini yazın!")
        .setTimestamp()
        .setColor("RANDOM")

    if (!question) return message.channel.send({hata}).then(m => m.delete(5000));

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        .addField('**Oylama**', `**${question}**`)

    message.channel.send({embed}).then(function(message) {
    message.react('✅');
    message.react('❌');
});

};

     exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['vote'],
    permLevel: 2
};

exports.help = {
    name: 'oylama',
    description: 'Oylama yapmanızı sağlar.',
    usage: 'oylama <oylamaismi>'
};