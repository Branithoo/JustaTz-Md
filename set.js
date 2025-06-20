const fs = require("fs-extra");
if (fs.existsSync("set.env")) {
  require("dotenv").config({
    'path': __dirname + "/set.env"
  });
}
const path = require("path");
const databasePath = path.join(__dirname, "./database.db");
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;
module.exports = {
  'session': process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxKVVJMMUVOQ3R1bHZ6L3BaMmgzVEtXU1VUU0labXF6N2w2b0FQSXNHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGZRVWNVM1JyS1JiOVRpdmZTVEVFaHY1a0x0SlNCYTVNbjhESHRTK2xSVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Q2thd3BLeTk4UkNITlc1UExha25LQTZ0RDhkVDUvalFNOFhwZTFudGxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6eHdYMjl5UXdEd3dmTGVaTWV0UUpIeUp3VEtTeVdIQlBlVDRGU3hVcEZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklHRUd3Ym82V3krK1JjZGs4MWdmT0JxQStYTFcyYmdoY1VtSWFReEJ4MGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJMY0E3Ny8zTzBiN0NBQXZMZDJEQXNXUDM4bnh4bEFCaE9RYVkwQzdjQlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU13YWt6WnJZQTNrQmNWWWo4Wnp1cEFLL2pCMFZHT1huTCtIMzFKU0ZsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkpYMzlzMnQ2T0dJUmhXRGpRUWNkRDBiTFZkeG9PTjRlcUEyUEd4Z3R5QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ4MWNPZGhUUDNoc1FNdm11MFQraElOOWhUUE1GOHNkNk9HaktJb2hoa2RsdFQzNkk2VFp4RkoyYTFzQ3BnNUxJTk5TVGN2N2I4eGhiRGhTRFUxcWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6IjliL3lBVEpHVW9oZWFrblIwaytVSmwyUFo0RkpHbkVRQTk5Y2c2a2wxaFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzE4NTE4MDI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIxMzY3MjQwRkUxQzk4RDcxRTI1RTU2NjhBNENFMEUzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA0MDgzMDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxODUxODAyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5MTY3RjBCMUM4RDZBNzJFRTg3QzM1MThGQTE4OEFDQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwNDA4MzAzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MTg1MTgwMjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzZDRDYyMkM5Qzc0MjI4QzhEODc2MjdFNTdBNTNEQTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDQwODMwNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOmZhbHNlLCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHYyNXFZRkVOKzQxTUlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNkxSWVdhWmtGWm9xTXdiYlBBa2JwMVRpUnExMWpvNGZhQ1IzUzZ2THB6az0iLCJhY2NvdW50U2lnbmF0dXJlIjoidVgrb2JhTGVlWTJQd0R2b3pFNFV6Sm0rZVlNNVU5clprNjNCNWhrd2hVd1k2ay9CdittMlo5Q1ZqbWFSRG5SUitpcjk2QTRQNG5Xb2lsZkxMdzB5REE9PSIsImRldmljZVNpZ25hdHVyZSI6IjJkYWpWUDV2cUxRQVJaNW9pVEJjUzQwYzFEVlVaRjRHOE5mRU1VVys2bnJ0dlFwb1RIcUxxUWl2cTJTZDhKOVAvU2QveFNLYTNnelh4cU1QUnV6Z2h3PT0ifSwibWUiOnsiaWQiOiIyNTQ3MTg1MTgwMjk6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCcmlhbml0aG8iLCJsaWQiOiIyMTkwNzgzNzk3MDQ0OTA6M0BsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzE4NTE4MDI5OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWkwV0ZtbVpCV2FLak1HMnp3Skc2ZFU0a2F0ZFk2T0gyZ2tkMHVyeTZjNSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNDA4MzAxLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR05XIn0=",
  'PREFIXE': process.env.PREFIX || '+',
  'OWNER_NAME': process.env.OWNER_NAME || "J𝖀𝗦𝐓Λ𝗧𝙕-MD",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || "255719442240",
  'AUTO_READ_STATUS': process.env.AUTO_READ_STATUS || "yes",
  'AUTO_DOWNLOAD_STATUS': process.env.AUTO_DOWNLOAD_STATUS || "non",
  'BOT': process.env.BOT_NAME || "J𝖀𝗦𝐓Λ𝗧𝙕-MD",
  'URL': process.env.BOT_MENU_LINKS || "https://files.catbox.moe/s326s2.jpg",
  'MODE': process.env.PUBLIC_MODE || 'no',
  'PM_PERMIT': process.env.PM_PERMIT || 'no',
  'HEROKU_APP_NAME': process.env.HEROKU_APP_NAME,
  'HEROKU_APY_KEY': process.env.HEROKU_APY_KEY,
  'WARN_COUNT': process.env.WARN_COUNT || '3',
  'ETAT': process.env.PRESENCE || '',
  'CHATBOT': process.env.PM_CHATBOT || 'no',
  'ANTICALL': process.env.ANTICALL || "non",
  'AUTO_REACT_STATUS': process.env.AUTO_REACT_STATUS || "no",
  'DP': process.env.STARTING_BOT_MESSAGE || "yes",
  'ADM': process.env.ANTI_DELETE_MESSAGE || "yes",
  'DATABASE_URL': DATABASE_URL,
  'DATABASE': DATABASE_URL === databasePath ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
  fs.unwatchFile(fichier);
  console.log("mise à jour " + __filename);
  delete require.cache[fichier];
  require(fichier);
});
