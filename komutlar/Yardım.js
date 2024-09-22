const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`Keyblade`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(client.user.avatarURL())
   .setImage('https://cdn.discordapp.com/attachments/1093387607632785438/1221015362208792606/standard_2.gif?ex=66ea91ab&is=66e9402b&hm=32bf79dbfbdab0050a254b311bbba8c4728337e611fcdc4d8c73fe368fa82d7d&')
    .setDescription(
      `🎧 Keyblade Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Genel Komutlar__`,
      `💬 \`${prefix}genel\``,
      true
    )
    .addField(
      `__Ayarlar Komutlar__`,
      `⚙️  \`${prefix}ayarlar\` `,
      true
    )
    .addField(
      `__Öneri__`,
      `🔰 \`${prefix}öneri-sistem\`  `,
      true
    )
    .addField(
      `__seviye__`,
      `⚙️ \`${prefix}seviye-sistem\` `,
      true
    )
    .addField(
      `__Kullanıcı Komutlar__`,
      `🌀 \`${prefix}kullanıcı\` `,
      true
    )
    .addField(
      `__Oto rol__`,
      ` 🎮 \`${prefix}otorol-sistem\` `,
      true
    )
    .addField(
      `__Ticket__`,
      `🎉 \`${prefix}ticket-sistem\` `,
      true
    )
    .addField(
      `__Sistemler__`,
      `🎏 \`${prefix}eklenti\``,
      true
    )
    .addField(
      `__Eğlence Komutlar__`,
      `🎲 \`${prefix}eğlence\``,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🔱  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔱 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
    );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
