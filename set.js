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
  'session': process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0w2YUtSUllwKzQrOHJjanQra2QraXgxdWF3RklGbnI1UDgvVWNLdWFIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXpCYkVJSHlzd20yOVpwU0ExTllhMitJck9BbnpBM3dEQUw2SmhKcU1Wcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSmwzSU9Obk1NSzVOQ1JhNnhaUGxGb2p4ai9SekZIRkhxZEx4aXpVL2tVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkSys1T0NmYURHUVlBYk4vLy81U3U5QTB1NjRLWHU1U0ZKN1BROFpzMjFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGV1VJTGlOMVVadElMWVEyL0NlT2tBZmRXcW5aL0RFN0daWDZ1amtwbVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVzbm5jdW5vUEZwM1VmamhYbWxpaUNZNHFKMy81YlBmMEphanlIVjMxem89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEhkY2swajU5eXVVSWdCV040d0R0MTVMOXh1NlZzZW14YUM5dVVUaTFHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0M3bThZNElsOUxib3phQUVrN3I0ajd4YTJvNUJCM253SktvdzQ4YjRrRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJRWkU2RVptVjdmcUlzMkFRTlB3Y2tqTHVWalBsbTlqWWo1bEVJbXM5TmxHSlIrazM5ZEJXVzVSais1SnhTa2xqN3Y5aHlveVgySW52Sm5NcEtSWEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiIxS2VMZkU0aTE0V0FZOVFrTm5lQy9TR0VhSWR3ZmlFMWxuWElBTllZMzJBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxODUxODAyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2OEQ1QUI4NUY2MDJCMzVFNTIzMkNEQkNCRjVCNUVEMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwNDAwOTEzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MTg1MTgwMjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0MzRUM5QjNBMEQ5NEZBM0IzQkQ1RDFDMTNBQzcwQTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDQwMDkxM30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzE4NTE4MDI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRFREJBMDRGOUE3RTE0Njg4QTg0MkQwOEU4RTU1QUI3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA0MDA5MTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1ByMjVxWUZFSVAvMDhJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZMUllXYVprRlpvcU13YmJQQWticDFUaVJxMTFqbzRmYUNSM1M2dkxwems9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkxwWk93T1NuUXBaL1E2NXdVTnc4WTlTbzVOR2o3QjFNc1JxOWF6N21RZDdaL3NYaDZTa0N4ZjVtV1dJNElWci93OXRsNlBUdllYRkpHN2Z0bllpK0J3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiTjJmZXNpV1QzSGpwVGw1Qk5VNzJlaVJOZzFCeWlNUjhMbjFsNDNxSmdpQm1LQi9UVTVZUTZtUmdieHBKZXJjRDVwSVlWeEEyWHZ0eE1acEIxb1hCdz09In0sIm1lIjp7ImlkIjoiMjU0NzE4NTE4MDI5OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQnJpYW5pdGhvIiwibGlkIjoiMjE5MDc4Mzc5NzA0NDkwOjJAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxODUxODAyOToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVpMFdGbW1aQldhS2pNRzJ6d0pHNmRVNGthdGRZNk9IMmdrZDB1cnk2YzUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDQwMDkxMiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdOVSJ9",
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
