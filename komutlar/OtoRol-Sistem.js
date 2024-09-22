const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`Keyblade | OtoRol Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1093387607632785438/1221015362208792606/standard_2.gif?ex=66ea91ab&is=66e9402b&hm=32bf79dbfbdab0050a254b311bbba8c4728337e611fcdc4d8c73fe368fa82d7d&"
    )
    .setDescription(
      `🟣 Keyblade Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__OtoRol__**`,
      `💝 \`${prefix}otorol\` \n OtoRolü Nasıl Ayarlayacagınız Hakkında Bilgi Tablosu.`,
        true
    )
  .addField(
      `**__OtoRol Msg__**`,
      `💝 \`${prefix}otorol-msg\` \n Sunucunuza Özel Otorol Msg Ayarlarsınız.`,
        true
    )
   .addField(
      `**__OtoRol Ayarla__**`,
      `💝 \`${prefix}oto-rol-ayarla\` \n OtoRol Mesaji Gidecegi Kanalı Ve Rölü Ayarlarsınız.`,
        true
    )
   .addField(
      `**__OtoRol Kapat__**`,
      `💝 \`${prefix}otorol-kapat\` \n Tüm OtoRol Ayalarını Sıfırlarsınız.`,
        true
    )
    .addField(
      `__Bilgilendirme__`,
      `©️  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n ©️ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
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
  name:"otorol-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
