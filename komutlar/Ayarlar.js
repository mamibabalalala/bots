const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {

  const embedayarlar = new Discord.MessageEmbed()
    .setAuthor(`Keyblade | Ayarlar`)
    .setTitle(``)
    .setColor("#00ff00")
    .setImage('https://cdn.discordapp.com/attachments/1093387607632785438/1221015362208792606/standard_2.gif?ex=66ea91ab&is=66e9402b&hm=32bf79dbfbdab0050a254b311bbba8c4728337e611fcdc4d8c73fe368fa82d7d&')
    .setDescription(
      `🔰 Keyblade  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__ModLog__`,
      `⚙️ \`${prefix}modlog\` Komutla Discord Sunucuza ModLog Kanalını Ayarlarsınız.`,
      true
    )
    .addField(
      `__KüfürEngel__`,
      `⚙️ \`${prefix}küfürengel\` Discord Sunucuna Küfür Etmeye Çalışanları Durdurursun.`,
      true
    )
    .addField(
      `__Küfür Log__`,
      `⚙️ \`${prefix}küfürlog\` Discord Sunucuna Küfür Edenlerin Mesaji Silinir Ve Log Kanalına Gider.`,
      true
    )
    .addField(
      `__Reklam Engel__`,
      `⚙️ \`${prefix}reklamengel\` Discord Sunucuna Reklam Yapmaya Çalışanları Durdurursun.`,
      true
    )
    .addField(
      `__Reklam Log__`,
      `⚙️ \`${prefix}reklamlog\` Discord Sunucuna Reklam Yapmayı Mesaji Silinir Ve Log Kanalına Gider.`,
      true
    )
    .addField(
      `__BanSay__`,
      `⚙️ \`${prefix}bansay\` Discord Sunucunuzda Toplam Kaç Banlanmış Kişi Var Onu Gösterir.`,
      true
    )
    .addField(
      `__Sohbet AÇ__`,
      `⚙️ \`${prefix}sohbet-aç\` Komutu Kullandıgınız Kanalda Sohbeti Açar.`,
      true
    )
    .addField(
      `__Sohbet Kapat__`,
      `⚙️ \`${prefix}sohbet-kapat\` Komutu Kullandıgınız Kanalda Sohbeti Kapat.`,
      true
    )
    .addField(
      `__İsim Değiştir__`,
      `⚙️ \`${prefix}isimdeğiştir\` Discord Sunucunuzda Etiketlediginiz Kişinin İsmini Değiştir.`,
      true
    )
    .addField(
      `__Sil__`,
      `⚙️ \`${prefix}sil\` Yazdıgınız Sayı Kadar Discord Botta O Kadar Mesaj Siler.`,
      true
    )
    .addField(
      `__Mute__`,
      `⚙️ \`${prefix}mute\` Discord Sunucunuzda Birisini Susturursunz.`,
      true
    )
    .addField(
      `__Güvenlik__`,
      `⚙️ \`${prefix}güvenlik\` Güvenlik Kanalını Ayarlarsın.`,
      true
    )
    .addField(
      `__Güvenlik Sıfırla__`,
      `⚙️ \`${prefix}güvenlik-sıfırla\` Güvenlik Kanalını Sıfırlarsın.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `⏳  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n ⏳ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz.`
    );
  return message.channel.send(embedayarlar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ayarlar",
  description: "Ayarlar Menüsü",
  usage: "ayarlar"
};
