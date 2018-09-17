const Discord = require('discord.js')

exports.run = (client, message, args) => { 
 
 
 var gif = [
       'https://cdn.discordapp.com/attachments/488079123407831062/490548444281176064/Screenshot_20180915-1842012.png',
  'https://cdn.discordapp.com/attachments/488079123407831062/489860512520077312/kakt.jpg',
  'https://cdn.discordapp.com/attachments/488079123407831062/489857521771610144/image0.jpg',
  'https://cdn.discordapp.com/attachments/488079123407831062/489845063086768140/YoshiHammer.gif',
  'https://cdn.discordapp.com/attachments/488079123407831062/489835440208216064/image0.png',
  'https://cdn.discordapp.com/attachments/488079123407831062/489226072626298921/41515102_2570223889682672_2712349191195066368_n.png',
  'https://cdn.discordapp.com/attachments/488079123407831062/489100230801883157/20180911_184737.png',
  'https://cdn.discordapp.com/attachments/488079123407831062/488802093810057236/PhotoFunia-1531960235.jpg',
  'https://cdn.discordapp.com/attachments/488079123407831062/488789562274086923/FIRIT.jpg',
  'https://cdn.discordapp.com/attachments/488079123407831062/488649730646081536/1876012_o4b01.jpg',
  'https://cdn.discordapp.com/attachments/488079123407831062/488492201920430080/image0.jpg',
  'https://cdn.discordapp.com/attachments/488079123407831062/488357945596313617/unknown.png',
  'https://cdn.discordapp.com/attachments/488079123407831062/488244081013686273/images_1.jpg',
  'https://cdn.discordapp.com/attachments/488079123407831062/488079389242949652/Screenshot_20180908-2221232.png',
  'https://cdn.discordapp.com/attachments/488079123407831062/488079319311319056/unknown.png',
  'http://www.imgim.com/558inciq2361973.jpg',
  'http://www.imgim.com/28764695_1549205578534546_4263342790374588416_n.jpg',
  'https://images-ext-2.discordapp.net/external/2cPUZyKIE6x8vCuffwP4SPmh0eWiTsMPadbxrrIdeg4/http/www.imgim.com/33181275_1751591161593341_3794044465698570240_n.jpg?width=473&height=473',
  'http://www.imgim.com/28752718_2066445546706479_8660733150734843904_n.jpg',
  'http://i.imgur.com/D1hMVa3.jpg',
  'http://i.imgur.com/YlBWOUx.jpg',
  'http://i.imgur.com/Hs0bNbm.jpg',
  'http://i.imgur.com/o14goLr.jpg',
  'http://i.imgur.com/TFIA8ds.jpg',
  'http://i.imgur.com/cIiqY8w.jpg',
  'http://i.imgur.com/5dNlLf6.jpg',
  'http://i.imgur.com/ZABeZC8.jpg',
  'http://i.imgur.com/BDvkS64.jpg',
  'https://img.memecdn.com/deal-with-it-gif-2-from-an-awesome-turkish-comedy_webm_3062231.gif',
  'https://img.memecdn.com/turkish-army_c_6543091.webp',
  'https://img.memecdn.com/turkish-special-forces-attemting-at-breaching-a-door_webm_3039827.gif',
  'https://media3.giphy.com/media/oOTTyHRHj0HYY/200.webp',
  'https://media1.giphy.com/media/z7Yx7ShdLDcPu/giphy.webp',
  'https://media0.giphy.com/media/YWf50NNii3r4k/200w.webp',
  'https://media3.giphy.com/media/c2jy2J8z43vhu/200w.webp'
  ];

      var gifler = gif[Math.floor(Math.random() * gif.length)];
      
       const embed = new Discord.RichEmbed()
       .setImage(gifler)
       .setColor("RANDOM")
       message.channel.sendEmbed(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'meme',
  description: 'Tüm komutları gösterir.',
  usage: 'meme [komut]'
};