const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`Keyblade | Öneri Sistem`)
    .setTitle(``)
    .setImage('https://cdn.discordapp.com/attachments/1093387607632785438/1221015362208792606/standard_2.gif?ex=66ea91ab&is=66e9402b&hm=32bf79dbfbdab0050a254b311bbba8c4728337e611fcdc4d8c73fe368fa82d7d&')
    .setColor("#00ff00")
    
    .setDescription(
      `Ⓜ️ Keyblade Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__ÖneriLog Ayarla__**`,
      `🔸 \`${prefix}önerilog ayarla\` \n Discord Sunucuza Öneri Log Kanal Ayarlarsınız.`,
      true
    )
    .addField(
      `**__ÖneriLog Sıfırla__**`,
      `🔸 \`${prefix}önerilog sıfırla\` \n Discord Sunucuza Öneri Log Kanalı Sıfırlarsınız.`,
      true
    )
    .addField(
      `**__Öneri Yap__**`,
      `🔸 \`${prefix}öneri-yap\` \n Discord Sunucuza Ayarladınız Öneri Loga Mesaj Atar.`,
      true
    )
    .addField(
      `**__Özel Öneri__**`,
      `<a:green:822530401301954632> \`${prefix}öneri\` \n Discord Sunucumuza Bota Veya MCSunucumuza Öneri Yapabilirsiniz..`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `⚜️  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n ⚜️ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "öneri-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
