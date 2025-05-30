const util = require('util');
const fs = require('fs-extra');
const { timoth } = require(__dirname + "/../JustaTz/Tech");
const { format } = require(__dirname + "/../JustaTz/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
timoth({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../JustaTz//Tech");
    var coms = {};
    var mode = "public";
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }
    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });
    moment.tz.setDefault('Etc/GMT');
// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');
const img = 'https://files.catbox.moe/g9tdc3.jpg';
const imgs = 'https://files.catbox.moe/usck5n.jpg';
  let infoMsg =  `
╭▱▰「 *${s.BOT}* 」▱▰❂
┃⊛╭▰▱▰▱▰▱▰▱➻
┃⊛│◆ 𝙾𝚠𝚗𝚎𝚛 : ${s.OWNER_NAME}
┃⊛│◆ 𝙿𝚛𝚎𝚏𝚒𝚡 : [ ${s.PREFIXE} ] 
┃⊛│◆ 𝙼𝚘𝚍𝚎 : *${mode}*
┃⊛│◆ 𝚁𝚊𝚖  : 𝟴/𝟭𝟯𝟮 𝗚𝗕
┃⊛│◆ 𝙳𝚊𝚝𝚎  : *${date}* 
┃⊛│◆ 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃⊛│◆ 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 : JustaTz 
┃⊛│◆ 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 : ${cm.length}
┃⊛│◆ 𝚃𝚑𝚎𝚖𝚎 : JustaTz 
┃⊛└▰▱▰▱▰▱▰▱➻
╰▱▰▱▰▱▰⊷▱▰▱▰▱❂\n${readmore}`;
    let menuMsg = `JustaTz-𝚖𝚍`;
    for (const cat in coms) {
        menuMsg += `
╭▱▱▱✺ *${cat}* ✺▰▰▰⊷ 
┊│┌▰▱▰⊷•∞•⊷▱▰▱⊛
┊│┊
┌┤┊ `;for (const cmd of coms[cat]) {
          menuMsg += `          
┊│┊☆  *${cmd}*`    
        } 
        menuMsg +=`
┊│└▰▱▰⊷•∞•⊷▱▰▱⊛  
╰▰▰▰═⊷✺•∞•✺⊷═▱▱▱⊷`
    }
    menuMsg += `
> Made By JustaTz\n
`;
   try {
        await zk.sendMessage(dest, { 
            image: { url: img },
            caption: infoMsg + menuMsg,
            contextInfo: {
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363332512801418@newsletter",
                    newsletterName: "J𝖀𝗦𝐓Λ-𝗧𝙕-𝚳d",
                    serverMessageId: -1
                },
                forwardingScore: 999,
                externalAdReply: {
                    title: "☢️J𝖀𝗦𝐓Λ-𝗧𝙕-𝚳𝐃☢️",
                    body: "🧃Command List",
                    thumbnailUrl: imgs,
                    sourceUrl: "https://whatsapp.com/channel/0029Vap2lUBJuyA8HLdfho47",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
});
