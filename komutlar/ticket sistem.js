const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;


exports.run = async (bot, msg, args) => {
  const çekiliş = new Discord.MessageEmbed()
    .setAuthor(`Keyblade  | Ticket Sistem`)
    .setTitle(``)
   .setImage('https://cdn.discordapp.com/attachments/1093387607632785438/1221015362208792606/standard_2.gif?ex=66ea91ab&is=66e9402b&hm=32bf79dbfbdab0050a254b311bbba8c4728337e611fcdc4d8c73fe368fa82d7d&')
    .setColor(`#ee7621`)
     
    .setDescription(
      `🎫 Keyblade Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Ticket__** `,
      `🎫  \`${prefix}bilet\` \nTicketi tekrar açar. Ticketi siler `,
      true
    )
    .addField(
      `**__Ticket Kapat__**`,
      `🎫  \`${prefix}kapat\` \nTicketi 5 saniyede siler`,
      true
    )
    .addField(
      `**__Ticket Kanal__**`,
      `🎫  \`${prefix}ticket-kanal\` \nTicket Gittiği Kanalı Ayarlar`,
      true
    )
    .addField(
      `**__Ticket Kaldır__**`,
      `🎫  \`${prefix}ticket-kaldır\` \nTicket Kanalını Kaldırır`,
      true
    )
    .addField(
      `**__Ticket Ekle__**`,
      ` 🎫 \`${prefix}ticket-ekle\` \nTicket Ekler`,

      true
    )
    .addField(
      `**__Ticket Aç__**`,
      ` 🎫  \`${prefix}ticket-aç\` \nTicket Açar`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🎯  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🎯 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
    );
  msg.channel.send(çekiliş);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bilet-sistem"],
  kategori: "yardım",
  permLevel: 0
};
exports.help = {
  name: "ticket-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: ""
};
 