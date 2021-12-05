/* ------------------------------ AVISO  ------------------------------

Reprodução, edição e outros estão autorizados MAS SEM REMOVER MEUS CRÉDITOS.
Caso remova, resulta na quebra da licença do mesmo, o que é um crime federal.
Plagiar meus comandos não te torna coder, vá estudar, não seja um ladrão miserável.
Levei meses nesse projeto e não paro de me empenhar em deixar todos felizes.
Obrigado a todos que me apoiam, que não roubam isso, que pegam e põem os créditos e... 

(Liberdade N° 0)
A liberdade de executar o programa 
para qualquer propósito.

(Liberdade N° 1)
A liberdade de estudar como o 
programa funciona e adaptá-lo
às suas necessidades.

(Liberdade N° 2)
A liberdade de redistribuir cópias 
de modo que voê possa ajudar
ao seu próximo.

(Liberdade N° 3)
A liberdade de aperfeiçoar o
programa é liberar os seus 
aperfeiçoamentos, de modo que
toda a comunidade se benefecie
deles.

//SE REPORTA ESSE VÍDEO E BOT SEM PERMISSÃO
//EU TOBI VOU ATRAS DE VC, E BANIR SEU NÚMERO DO WHATS
//CUIDADO PARCEIRO!

* ------------------------------  Amo Vc  ------------------------------ */

/********** MÓDULOS NPM **********/
const fs = require('fs');
const imageToBase64 = require('image-to-base64');
const moment = require('moment-timezone');
const { exec, spawn } = require('child_process');
const request = require('request')
const fetc = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const qrcode = require("qrcode-terminal");
const crypto = require('crypto');
const axios = require('axios').default;
const http = require('http');
const util = require('util');
const yts = require('yt-search')
const fetch = require('node-fetch')
const encodeUrl = require('encodeurl')
const googleImage = require('g-i-s')
const os = require('os');
const ggs = require('google-it')
const hx = require("hxz-api");

/********** ARQUIVOS **********/
const Exif = require('./base de dados/data/exif');
const exif = new Exif();
const { addMetadata } = require('./base de dados/lib/exif.js')
const { webp2gifFile } = require("./base de dados/lib/gif.js")
const { fetchJson } = require('./base de dados/lib/fetcher');
const { help } = require('./base de dados/database/help/help')
const { linguagem } = require('./base de dados/datauser/mess')
const { lirikLagu } = require('./base de dados/lib/lirik.js')
const {convertSticker} = require("./base de dados/lib/swm.js") 
const { mediafireDl } = require('./base de dados/lib/mediafire.js')
const {dafontDown,dafontSearch } = require('./base de dados/lib/dafont')
const totalhit = JSON.parse(fs.readFileSync('./base de dados/lib/totalcmd.json'))
const mundohentai = require('./base de dados/lib/mundohentai')

/********** ARQUIVOS NA NUVEM **********/
let sotoy = JSON.parse(fs.readFileSync('./base de dados/data/sotoy.json'))
let daily = JSON.parse(fs.readFileSync('./base de dados/data/diario.json'))
let prem = JSON.parse(fs.readFileSync('./base de dados/datauser/premium.json'));
let uang = JSON.parse(fs.readFileSync('./base de dados/datauser/uang.json'));
let ban = JSON.parse(fs.readFileSync('./base de dados/datauser/banned.json'));
let _level = JSON.parse(fs.readFileSync('./base de dados/datauser/level.json'));
let _registered = JSON.parse(fs.readFileSync('./base de dados/datauser/registered.json'));
let welcome = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/welcome.json'));
let antiflod = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/_antiflod.json'));
let viewchat = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/viewchat.json'));
let _leveling = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/leveling.json'));
let antilink = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/antilink.json'));
let antifaker = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/antifaker.json'));
let palavrão = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/palavrão.json'));
let autconversa = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/autconversa.json'));
let palavra = JSON.parse(fs.readFileSync('./base de dados/lib/palavras.json'))
let _informe = JSON.parse(fs.readFileSync('./base de dados/lib/informe.json'));
let _solicitar = JSON.parse(fs.readFileSync('./base de dados/lib/solicitar.json'));
img2 = fs.readFileSync("./base de dados/lib/bot/fotos/tobi_lolizit.jpg");
img3 = fs.readFileSync("./base de dados/lib/bot/fotos/login.mp4");

/********** CONFIGURAÇÕES **********/
const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, emoji_bot, SeuNome, OwnerNumber, NomeDoBot} = infos

/********** CONST, (N MEXA AQUI) **********/
const blocked = []; 
cdd = "480000" 
ll = "\`\`\`"
crtt = "Juego tictactoe SUM-BOT" 
baterai = 'no detectado'
charging = 'no detectado'
emoji_bot = ";-;"
//_NUMERO DO DONO DO BOT

/********** VCARD DO DONO **********/
const vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `FN:𝓢𝓔𝓜𝓟𝓐𝓘 𝓤𝓝𝓤\n`
+ `ORG:𝓢𝓤𝓜-𝓑𝓞𝓣;\n` 
+ `TEL;type=CELL;type=VOICE;waid=51991489988:+51 99 1489-988\n` 
+ `END:VCARD`

/********** CONST TIC-TAC-TOE **********/
const tictactoe = JSON.parse(fs.readFileSync('./base de dados/ttt/TTTconfig/tictcotacto.json'));
const { ttthelp } = require('./base de dados/ttt/TTTconfig/ttthelp');
const { tttme } = require('./base de dados/ttt/TTTconfig/tttme');
var tttset = require('./base de dados/ttt/TTTconfig/tttset.json');
var esp = require('./base de dados/ttt/TTTconfig/tttframe.json');

/********** WHATSAPP CONEXÃO **********/
const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, GroupSettingChange, MessageOptions, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, waChatKey, mentionedJid, processTime, ChatModification } = require('@adiwajshing/baileys');
const simple = require('./base de dados/lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)

/********** CORES **********/
const { color, bgcolor } = require('./base de dados/lib/color');

/********** ANTI FLOD **********/
const { isFiltered, addFilter } = require('./base de dados/lib/antispam')

/********** LIMIT TTT **********/
const { addLimit, getLimit } = require('./base de dados/lib/limit.js')

/********** FUCTION PLAY **********/
const { y2mateA, y2mateV } = require('./base de dados/lib/y2mate.js')

/********** CONSTS **********/
const { erroCmd, erroOwner, ts, semPremium} = require('./base de dados/lib/bot/arquivos/respon');

/********** FUNÇÕES **********/
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, banner2, start, info, success, close, log } = require('./base de dados/lib/functions');

/********** FUCTION LEVEL **********/
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./base de dados/lib/leveling.js') 

/********** FUCTION TTT **********/
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./base de dados/lib/tictactoe.js')

/********** FUCTION REGISTRO **********/
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./base de dados/lib/register.js')

/********** FUCTION DINHEIRO **********/
const addATM = (sender, pushname) => {
const obj = {id: sender, nome: pushname, uang : 0}
uang.push(obj)
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}

/********** FUCTION DINHEIRO **********/
const getNameDinheiro = (sender) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].nome
}
}

/********** FUCTION DINHEIRO **********/
const addKoinUser = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}
}
   
/********** FUCTION DINHEIRO **********/
const checkATMuser = (sender) => {  
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].uang
}
}

/********** FUCTION DINHEIRO **********/
const confirmATM = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}
}

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
if (
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
) {
return true
} else {
return false
}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
if (
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
) {
return true
} else {
return false
}
}

//TESTE PARA EMPATE
const Tie = () => {
if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
return true
} else {
return false
}
}

const IA = () => {
if (WinnerX() || WinnerO() || Tie()) {
tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
tttset.reActivate1 = "off"
IAmove1()
//JOGADAS PROGRAMADAS ABAIXO
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "??" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "??" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "??" && esp.a3 == "??" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
//PRIORIZAR CANTOS E CENTRO
tttset.reActivate1 = "off"
while (tttset.reActivate3 == "on") {
priorityC()
}
tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "DIFICIL" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//HARD
tttset.reActivate1 = "off"
IAmove1()
} else if (tttset.tttdifficulty == "NORMAL" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="??"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//NORMAL
tttset.reActivate1 = "off"
let randomNORMAL = Math.floor(Math.random() * 3)
if (randomNORMAL == 0 || randomNORMAL == 1) {
IAmove1()
} else {
while (tttset.reActivate2 == "on") {
IAalter()
}
}
tttset.reActivate2 = "on"
} else {
//EASY / RANDOM
let randomALL = Math.floor(Math.random() * 9)
switch (randomALL) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
}
break
}
}
}

const IAmove1 = () => {
//JOGADA PARA VITÓRIA
if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
esp.a1 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
esp.b1 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
esp.a1 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
esp.a2 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
esp.a1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
esp.a3 = "⭕"
//JOGADA PARA BLOQUEIO
} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
esp.a1 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
esp.b1 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
esp.a1 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
esp.a2 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
esp.a1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
esp.a3 = "⭕"
}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
let randomALTER = Math.floor(Math.random() * 9)
switch (randomALTER) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate2 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate2 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate2 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate2 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate2 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate2 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate2 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate2 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate2 = "off"
esp.c3 = "⭕"
}
break
}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
let randomPriC = Math.floor(Math.random() * 5)
switch (randomPriC) {
case 0 :
if (esp.a1 == "🔲") {
tttset.reActivate3 = "off"
esp.a1 = "⭕"
}
break
case 1 :
if (esp.a3 == "🔲") {
tttset.reActivate3 = "off"
esp.a3 = "⭕"
}
break
case 2 :
if (esp.b2 == "🔲") {
tttset.reActivate3 = "off"
esp.b2 = "⭕"
}
break
case 3 :
if (esp.c1 == "🔲") {
tttset.reActivate3 = "off"
esp.c1 = "⭕"
}
break
case 4 :
if (esp.c3 == "??") {
tttset.reActivate3 = "off"
esp.c3 = "⭕"
}
break
}
}

/********** FUCTION TEMPORIZADO **********/ 
function temporizado(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} minutos ${pad(seconds)} Segundos`
}

function horaOn(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas`
}
/********** CONEXÃO DO QR CODE **********/
async function starts() {
const tobi = new WAConnection()
tobi.logger.level = 'warn'
tobi.version = [3, 3234, 9];
console.log(banner.string)
console.log(banner2.string)
tobi.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('escaneie o código qr'))
})
fs.existsSync('./qr.json') && tobi.loadAuthInfo('./qr.json')
tobi.on('connecting', () => {
start('2', ' ')
})
tobi.on('open', () => {
success('2', "Sum-Bot conectado")
})

await tobi.connect({ timeoutMs: 2400 * 1000 });
fs.writeFileSync('./qr.json',JSON.stringify(tobi.base64EncodedAuthInfo(), null, "\t"));

/********** WELCOME (BEM VINDO) **********/
var ase = new Date();
var tempoByTobi = ase.getHours();
switch(tempoByTobi){
case 0: tempoByTobi = `Buenas Noches`; break;
case 1: tempoByTobi = `Buenas Noches`; break;
case 2: tempoByTobi = `Buenas Noches`; break;
case 3: tempoByTobi = `Buenos Dias`; break;
case 4: tempoByTobi = `Buenos Dias`; break;
case 5: tempoByTobi = `Buenos Dias`; break;
case 6: tempoByTobi = `Buenos Dias`; break;
case 7: tempoByTobi = `Buenos Dias`; break;
case 8: tempoByTobi = `Buenos Dias`; break;
case 9: tempoByTobi = `Buenos Dias`; break;
case 10: tempoByTobi = `Buenos Dia`; break;
case 11: tempoByTobi = `Buenas tardes`; break;
case 12: tempoByTobi = `Buenas tardes`; break;
case 13: tempoByTobi = `Buenas tardes`; break;
case 14: tempoByTobi = `Buenas tardes`; break;
case 15: tempoByTobi = `Buenas tardes`; break;
case 16: tempoByTobi = `Buenas tardes`; break;
case 17: tempoByTobi = `Buenas tardes`; break;
case 18: tempoByTobi = `Buenas Noches`; break;
case 19: tempoByTobi = `Buenas Noches`; break;
case 20: tempoByTobi = `Buenas Noches`; break;
case 21: tempoByTobi = `Buenas Noches`; break;
case 22: tempoByTobi = `Buenas Noches`; break;
case 23: tempoByTobi = `Buenas Noches`; break;
}
var tempoByTobi = '' + tempoByTobi;

//WELCOME COM BOTÃO CRIPTOGRAFADO
function _0x3600(){const _0x403b8e=['imageMessage','75TLjXZi','promote','http://hadi-api.herokuapp.com/api/card/promote?nama=Promote\x20Detectado&member=@','6288213840883-1616169743@g.us','「\x20*[❗]\x20GRUPO\x20ABIERTO*\x20」\x0a\x0a_El\x20grupo\x20fue\x20abierto\x20por\x20administrador_\x0a_Ahora\x20todos\x20los\x20miembros\x20pueden\x20enviar\x20mensajes_','「\x20*❗GRUPO\x20ABIERTO❗*\x20」','jid','prepareMessage','remove','\x20Se\x20Fue\x20del\x20grupo\x20bueno\x20bye','Sayonara\x20👋🏻','23093750aGFJYT','「\x20*[❗]\x20GRUPO\x20CERRADO*\x20」\x0a\x0a_El\x20grupo\x20fue\x20cerrado\x20por\x20administrador_\x0a_Ahora,\x20solo\x20administradores\x20pueden\x20enviar\x20mensajes_','subject','includes','Baneado\x20por\x20numero\x20Fake...','&pesan=','0@s.whatsapp.net','ephemeralMessage','@c.us','desc','image','announce','2736016VPgEFT','true','readFileSync','false','sticker','floor','red','mememteeeekkeke','2qLKslD','startsWith','1646349Evlnos','PHOTO','3040KCboEV','.\x0a\x0aBienbenido\x20(a)\x20a\x0a','descOwner','guei','Bueno\x20integrante\x20@','✿\x20*MIEMBRO\x20PROMOTE*\x20✿\x0a\x0aNuevo\x20Admin:*\x20@','participants','log','&bg=https://bit.ly/walpamikel','white','508187FvCNjo','action','2819979gBoPan','3899tdtRru','group-participants-update','.\x0a\x0aBienvenid@\x20👋🏻\x20a\x20:\x20','getProfilePicture','Error\x20:\x20%s','message','./base\x20de\x20dados/database/figurinhas/welcomeByTobi1.webp','⎘\x20VERIFICAR\x20⎗','&pp=','©KitsumyEdit4','demote','split','🎊\x20FELICIDADES\x20🎉','sendMessage','Informa\x20si\x20hay\x20problemas,\x20@','\x0a\x0a🍎\x20𝙍𝙀𝙂𝙇𝘼𝙎 \x20𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇𝙀𝙎\x0a➤\x20𝙉𝙊\x20𝙎𝙋𝘼𝙈\x20𝘿𝙀\x20𝘾𝙐𝘼𝙇𝙌𝙐𝙄𝙀𝙍\x20𝘾𝙊𝙉𝙏𝙀𝙉𝙄𝘿𝙊\x0a➤\x20𝙉𝙊 𝘾𝙊𝙉𝙏𝙀𝙉𝙄𝘿𝙊\x20+18\x0a➤𝙉𝙊\x20𝙑𝙄𝙍𝙏𝙐𝘼𝙇𝙀𝙎\x20𝙊\x20𝙋𝙀𝘿𝙊𝙁𝙄𝙇𝙊𝙎\x0a\x20➤𝙉𝙊\x20𝘾𝙍𝙄𝙏𝙄𝘾𝘼𝙍\x20𝘼𝙋𝙊𝙍𝙏𝙀𝙎\x20𝙊\x20𝘽𝙐𝙍𝙇𝘼𝙎\x0a➤\x20𝙉𝙊\x20𝙈𝙄𝙍𝙊𝙉𝙀𝙎\x0a🗒\x20𝗟𝗲𝗮\x20𝗹𝗮𝘀\x20𝗿𝗲𝗴𝗹𝗮𝘀\x20𝙙𝙚𝙡 \x20𝙜𝙧𝙪𝙥𝙤\x0a\x0a🍓🍓🍓🍓🍓\x20🍓\x20🍓🍓🍓🍓🍓🍓*','Adios\x20@','text',',\x20fue\x20un\x20gusto\x20,que\x20se\x20cuide\x20amiko\x20UnU,\x20dale\x20a\x20chau\x20al\x20miembro.','add','5832aNTizd','.png','「\x20*❗DESCRIPCION\x20CAMBIADA❗*\x20」','groupMetadata','random','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','buttonsMessage','group-update','「\x20*❗GRUPO\x20CERRADO❗*\x20」','length'];_0x3600=function(){return _0x403b8e;};return _0x3600();}function _0x1f42(_0x133b2f,_0x10b014){const _0x360062=_0x3600();return _0x1f42=function(_0x1f42ce,_0x1f0e4d){_0x1f42ce=_0x1f42ce-0x1b5;let _0x402610=_0x360062[_0x1f42ce];return _0x402610;},_0x1f42(_0x133b2f,_0x10b014);}const _0x24e55f=_0x1f42;(function(_0xb3ae6,_0x5a28bf){const _0xd40999=_0x1f42,_0x58aeba=_0xb3ae6();while(!![]){try{const _0x10f8ef=-parseInt(_0xd40999(0x1dd))/0x1+parseInt(_0xd40999(0x1cf))/0x2*(-parseInt(_0xd40999(0x1d1))/0x3)+-parseInt(_0xd40999(0x1c7))/0x4+-parseInt(_0xd40999(0x1ff))/0x5*(-parseInt(_0xd40999(0x1f4))/0x6)+-parseInt(_0xd40999(0x1e0))/0x7*(-parseInt(_0xd40999(0x1d3))/0x8)+-parseInt(_0xd40999(0x1df))/0x9+parseInt(_0xd40999(0x1bb))/0xa;if(_0x10f8ef===_0x5a28bf)break;else _0x58aeba['push'](_0x58aeba['shift']());}catch(_0x517b45){_0x58aeba['push'](_0x58aeba['shift']());}}}(_0x3600,0x7581e),tobi['on'](_0x24e55f(0x1e1),async _0x303a3f=>{const _0x1103d1=_0x24e55f;if(antifaker[_0x1103d1(0x1be)](_0x303a3f[_0x1103d1(0x1b6)])){const _0x3564bd=await tobi[_0x1103d1(0x1f7)](_0x303a3f['jid']);_0x303a3f[_0x1103d1(0x1de)]==_0x1103d1(0x1f3)&&(num=_0x303a3f[_0x1103d1(0x1d9)][0x0],!num[_0x1103d1(0x1eb)]('@')[0x0][_0x1103d1(0x1d0)](0x37)&&(tobi[_0x1103d1(0x1ed)](_0x3564bd['id'],'Números\x20fake\x20no\x20son\x20permitidos\x20en\x20este\x20grupo️️',MessageType['text']),setTimeout(async function(){const _0x2e3b3e=_0x1103d1;console[_0x2e3b3e(0x1da)](color('[',_0x2e3b3e(0x1dc)),color('!',_0x2e3b3e(0x1cd)),color(']',_0x2e3b3e(0x1dc)),color(_0x2e3b3e(0x1bf),'red')),tobi['groupRemove'](_0x3564bd['id'],[num]);},0x1388)));}const _0x30c688=await tobi[_0x1103d1(0x1f7)](_0x303a3f[_0x1103d1(0x1b6)]);if(_0x303a3f[_0x1103d1(0x1de)]==_0x1103d1(0x200)){num=_0x303a3f['participants'][0x0];try{ppimg=await tobi[_0x1103d1(0x1e3)](num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1c3));}catch{ppimg=_0x1103d1(0x1f9);}let _0x543f70=await getBuffer(_0x1103d1(0x201)+num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1c0)+encodeURI(_0x30c688[_0x1103d1(0x1bd)])+_0x1103d1(0x1e8)+ppimg+'&bg=https://bit.ly/walpamikel');var _0x3ba8e0=await tobi[_0x1103d1(0x1b7)](_0x30c688['id'],_0x543f70,MessageType[_0x1103d1(0x1c5)],{'thumbnail':null}),_0x34e080=_0x3ba8e0['message'][_0x1103d1(0x1c2)]?_0x3ba8e0[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]:_0x3ba8e0;const _0x332bb9=[{'buttonId':_0x1103d1(0x1d6),'buttonText':{'displayText':_0x1103d1(0x1ec)},'type':0x1}],_0x1f80e1={'contentText':_0x1103d1(0x1d8)+num[_0x1103d1(0x1eb)]('@')[0x0],'buttons':_0x332bb9,'headerType':0x4,'imageMessage':_0x34e080[_0x1103d1(0x1e5)][_0x1103d1(0x1fe)]};tobi[_0x1103d1(0x1ed)](_0x30c688['id'],_0x1f80e1,MessageType[_0x1103d1(0x1fa)],{'contextInfo':{'mentionedJid':[num]}});}else{if(_0x303a3f[_0x1103d1(0x1de)]==_0x1103d1(0x1ea)){num=_0x303a3f['participants'][0x0];try{ppimg=await tobi[_0x1103d1(0x1e3)](num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1c3));}catch{ppimg=_0x1103d1(0x1f9);}let _0x264770=await getBuffer('http://hadi-api.herokuapp.com/api/card/demote?nama=Demote\x20Detectado&member=@'+num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1c0)+encodeURI(_0x30c688['subject'])+_0x1103d1(0x1e8)+ppimg+_0x1103d1(0x1db));var _0x3ba8e0=await tobi[_0x1103d1(0x1b7)](_0x30c688['id'],_0x264770,MessageType['image'],{'thumbnail':null}),_0x34e080=_0x3ba8e0['message']['ephemeralMessage']?_0x3ba8e0[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]:_0x3ba8e0;const _0x1d497c=[{'buttonId':'guei','buttonText':{'displayText':'✿\x20LOSIENTO\x20✿'},'type':0x1}],_0x1da96d={'contentText':'✿\x20*MIENBRO\x20DEMOTE*\x20✿\x0a\x0a*Ya\x20no\x20eres\x20Admin:*\x20@'+num[_0x1103d1(0x1eb)]('@')[0x0],'buttons':_0x1d497c,'headerType':0x4,'imageMessage':_0x34e080[_0x1103d1(0x1e5)][_0x1103d1(0x1fe)]};tobi[_0x1103d1(0x1ed)](_0x30c688['id'],_0x1da96d,MessageType[_0x1103d1(0x1fa)],{'contextInfo':{'mentionedJid':[num]}});}}if(!welcome['includes'](_0x303a3f[_0x1103d1(0x1b6)]))return;try{const _0x279edb=await tobi[_0x1103d1(0x1f7)](_0x303a3f[_0x1103d1(0x1b6)]);console[_0x1103d1(0x1da)](_0x303a3f);if(_0x303a3f[_0x1103d1(0x1de)]==_0x1103d1(0x1f3)){num=_0x303a3f[_0x1103d1(0x1d9)][0x0];try{ppimg=await tobi[_0x1103d1(0x1e3)](_0x303a3f[_0x1103d1(0x1d9)][0x0][_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1c3));}catch{ppimg='https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';}mett=['1','2','3'],res=mett[Math[_0x1103d1(0x1cc)](Math['random']()*mett[_0x1103d1(0x1fd)])];if(res=='1'){let _0x3d0f8a=await getBuffer(ppimg);const _0x7265b4=await tobi[_0x1103d1(0x1b7)](_0x279edb['id'],_0x3d0f8a,MessageType[_0x1103d1(0x1c5)],{'thumbnail':null});let _0x25b4e2=_0x7265b4['message'][_0x1103d1(0x1c2)]?_0x7265b4[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]:_0x7265b4;const _0x363823=[{'buttonId':'Rg','buttonText':{'displayText':_0x1103d1(0x1e7)},'type':0x1}],_0x13badb={'contentText':tempoByTobi+',\x20@'+num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1e2)+_0x279edb[_0x1103d1(0x1bd)],'footerText':_0x1103d1(0x1e9),'buttons':_0x363823,'headerType':0x4,'imageMessage':_0x25b4e2[_0x1103d1(0x1e5)][_0x1103d1(0x1fe)]};tobi[_0x1103d1(0x1ed)](_0x279edb['id'],_0x13badb,MessageType[_0x1103d1(0x1fa)],{'contextInfo':{'mentionedJid':[num]}}),setTimeout(()=>{const _0x1d6694=_0x1103d1;result=fs[_0x1d6694(0x1c9)](_0x1d6694(0x1e6)),tobi[_0x1d6694(0x1ed)](_0x279edb['id'],result,MessageType[_0x1d6694(0x1cb)]);},0x3e8);}else{if(res=='2'){res=mett[Math[_0x1103d1(0x1cc)](Math[_0x1103d1(0x1f8)]()*mett[_0x1103d1(0x1fd)])];let _0x8ce492=await getBuffer(ppimg);const _0x10db3b=await tobi[_0x1103d1(0x1b7)](_0x279edb['id'],_0x8ce492,MessageType[_0x1103d1(0x1c5)],{'thumbnail':null});let _0x2e0b2f=_0x10db3b[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]?_0x10db3b['message'][_0x1103d1(0x1c2)]:_0x10db3b;const _0x40f8b3=[{'buttonId':'Rg','buttonText':{'displayText':_0x1103d1(0x1e7)},'type':0x1}],_0x37e316={'contentText':tempoByTobi+',\x20@'+num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1d4)+_0x279edb[_0x1103d1(0x1bd)]+_0x1103d1(0x1ef),'footerText':_0x1103d1(0x1e9),'buttons':_0x40f8b3,'headerType':0x4,'imageMessage':_0x2e0b2f[_0x1103d1(0x1e5)][_0x1103d1(0x1fe)]};tobi[_0x1103d1(0x1ed)](_0x279edb['id'],_0x37e316,MessageType[_0x1103d1(0x1fa)],{'contextInfo':{'mentionedJid':[num]}}),setTimeout(()=>{const _0x4ef127=_0x1103d1;tobi[_0x4ef127(0x1ed)](_0x279edb['id'],_0x4ef127(0x1ee)+num[_0x4ef127(0x1eb)]('@')[0x0],MessageType[_0x4ef127(0x1f1)],{'contextInfo':{'mentionedJid':[num]}});},0x3e8);}else{if(res=='3'){res=mett[Math[_0x1103d1(0x1cc)](Math[_0x1103d1(0x1f8)]()*mett['length'])],fotosAnime=['1','2','3','4','5'],ramdomRes=fotosAnime[Math[_0x1103d1(0x1cc)](Math[_0x1103d1(0x1f8)]()*fotosAnime['length'])];let _0xa52bc8=await fs['readFileSync']('./base\x20de\x20dados/lib/bot/fotos/animeByTobi'+ramdomRes+_0x1103d1(0x1f5));const _0x1a1b33=await tobi[_0x1103d1(0x1b7)](_0x279edb['id'],_0xa52bc8,MessageType[_0x1103d1(0x1c5)],{'thumbnail':null});let _0x2a86e8=_0x1a1b33[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]?_0x1a1b33[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]:_0x1a1b33;const _0x1cfbec=[{'buttonId':'Rg','buttonText':{'displayText':_0x1103d1(0x1e7)},'type':0x1}],_0xe16284={'contentText':tempoByTobi+'\x20@'+num['split']('@')[0x0]+'\x20...\x20Antes\x20de\x20escribir\x20en\x20el\x20grupo,\x20vea\x20la\x20imagen\x20arriba\x20y\x20diga\x20como\x20se\x20llama\x20el\x20anime\x207~7\x20','footerText':_0x1103d1(0x1e9),'buttons':_0x1cfbec,'headerType':0x4,'imageMessage':_0x2a86e8[_0x1103d1(0x1e5)][_0x1103d1(0x1fe)]};tobi[_0x1103d1(0x1ed)](_0x279edb['id'],_0xe16284,MessageType[_0x1103d1(0x1fa)],{'contextInfo':{'mentionedJid':[num]}});}}}}else{if(_0x303a3f[_0x1103d1(0x1de)]==_0x1103d1(0x1b8)){num=_0x303a3f[_0x1103d1(0x1d9)][0x0];try{ppimg=await tobi[_0x1103d1(0x1e3)](_0x303a3f[_0x1103d1(0x1d9)][0x0]['split']('@')[0x0]+_0x1103d1(0x1c3));}catch{ppimg=_0x1103d1(0x1f9);}const _0x53bfae=[_0x1103d1(0x1d7)+num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1b9),_0x1103d1(0x1f0)+num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1f2)];var _0x1be571=_0x53bfae[Math['floor'](Math[_0x1103d1(0x1f8)]()*_0x53bfae[_0x1103d1(0x1fd)])];num=_0x303a3f[_0x1103d1(0x1d9)][0x0];let _0x543c50=await getBuffer(ppimg);const _0x298fa7=await tobi[_0x1103d1(0x1b7)](_0x279edb['id'],_0x543c50,MessageType[_0x1103d1(0x1c5)],{'thumbnail':null});let _0x1ef250=_0x298fa7[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]?_0x298fa7[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]:_0x298fa7;const _0x202923=[{'buttonId':'k','buttonText':{'displayText':_0x1103d1(0x1ba)},'type':0x1}],_0x49f5af={'contentText':''+_0x1be571,'footerText':'©KitsumyEdit4','buttons':_0x202923,'headerType':0x4,'imageMessage':_0x1ef250['message'][_0x1103d1(0x1fe)]};tobi[_0x1103d1(0x1ed)](_0x279edb['id'],_0x49f5af,MessageType['buttonsMessage'],{'contextInfo':{'mentionedJid':[num]}});}}}catch(_0x26e0a7){console['log'](_0x1103d1(0x1e4),color(_0x26e0a7,_0x1103d1(0x1cd)));}}),tobi['on'](_0x24e55f(0x1fb),async _0x552428=>{const _0x2e46e6=_0x24e55f;falfa={'key':{'fromMe':![],'participant':_0x2e46e6(0x1c1),'remoteJid':_0x2e46e6(0x1c1)},'message':{'groupInviteMessage':{'groupJid':_0x2e46e6(0x202),'inviteCode':_0x2e46e6(0x1ce),'groupName':'Lolizita','caption':''+NomeDoBot}}};const _0x1f37c5={'text':'oi','forwardingScore':0x3b9aca00,'externalAdReply':{'title':_0x2e46e6(0x1b5),'body':'','previewType':'PHOTO','thumbnailUrl':'','thumbnail':img2}},_0x4867f3={'text':'oi','forwardingScore':0x3b9aca00,'externalAdReply':{'title':_0x2e46e6(0x1fc),'body':'','previewType':'PHOTO','thumbnailUrl':'','thumbnail':img2}},_0x1c1c35={'text':'oi','forwardingScore':0x3b9aca00,'externalAdReply':{'title':_0x2e46e6(0x1f6),'body':'','previewType':_0x2e46e6(0x1d2),'thumbnailUrl':'','thumbnail':img2}};metdata=await tobi[_0x2e46e6(0x1f7)](_0x552428['jid']);if(_0x552428[_0x2e46e6(0x1c6)]==_0x2e46e6(0x1ca))teks=_0x2e46e6(0x203),tobi[_0x2e46e6(0x1ed)](metdata['id'],teks,MessageType['text'],{'contextInfo':_0x1f37c5});else{if(_0x552428[_0x2e46e6(0x1c6)]==_0x2e46e6(0x1c8))teks=_0x2e46e6(0x1bc),tobi[_0x2e46e6(0x1ed)](metdata['id'],teks,MessageType['text'],{'contextInfo':_0x4867f3}),console[_0x2e46e6(0x1da)](_0x552428);else!_0x552428[_0x2e46e6(0x1c4)]==''&&(teks='「\x20*[❗]\x20DESCRIPCION\x20DEL\x20GRUPO\x20CAMBIADO*\x20」\x0a\x0aLa\x20descripcion\x20del\x20grupo\x20fue\x20cambiada\x20por\x20el\x20administrador\x20wa.me/'+_0x552428[_0x2e46e6(0x1d5)][_0x2e46e6(0x1eb)]('@')[0x0]+'\x0a༒\x20Nueva\x20Descripcion\x20:\x20\x0a'+_0x552428[_0x2e46e6(0x1c4)],tobi['sendMessage'](metdata['id'],teks,MessageType['text'],{'contextInfo':_0x1c1c35}),console[_0x2e46e6(0x1da)](_0x552428));}}));
  
/********** FUCTION ANTI CALL **********/
tobi.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LIGAÇÃO DETECTADA LIGAÇÕES = BLOCK \x1b[1;37m]')
tobi.sendMessage(callerId, `${emoji_bot} Ligações = block`, MessageType.text)
setTimeout(async() => {
await tobi.blockUser(callerId, "add")
}, 3000)
})

/********** FUCTION BATERIA **********/
tobi.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
})
global.p
global.batrei = global.batrei ? global.batrei : []
tobi.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})

/********** FUCTION BATERIA **********/
tobi.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
var baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(color('🔋Carga de bateria: ' + batterylevel+'%', "yellow"))
})

/************* LINGUAGEM ************/
tobi.on('chat-update', async (mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
m = simple.smsg(tobi, mek)
if (mek.key.fromMe) return 
global.p
global.blocked

/************** HORAS ************/
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const speedB = moment.tz('America/Sao_Paulo').format('ss')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const data = moment.tz('Asia/Jakarta').format('DD/MM')
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
const waktu = moment.tz('Asia/Jakarta').format('HHmmss')
const time3 = moment().tz('America/Sao_Paulo').format('HH:mm')

/************** TYPE DOS CONSOLE ************/
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const type = Object.keys(mek.message)[0]

/************** BUDY DO AUTO RESPONDER ************/
body = (type === 'conversation' && mek.message.conversation.startsWith(p)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(p) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(p) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(p) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && ((mek.message[type].fileSha256.toString('base64')) !== null && (mek.message[type].fileSha256.toString('base64')) !== undefined) ? (mek.message[type].fileSha256.toString('base64')) : ""
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

/************** CONST DE STRING ************/
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const marker = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const arg = budy.slice(comando.length + 2, budy.length)
const isCmd = body.startsWith(p)
const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
var totalchat = await tobi.chats.all()
const botNumber = tobi.user.jid
const q = args.join(' ')
const me = tobi.user
const tescuk = ["0@s.whatsapp.net"]

/************** LINGUAGEM GRUPO ************/
const isGroup = from.endsWith('@g.us')
const senderr = isGroup ? mek.participant : mek.key.remoteJid
const sender = mek.key.fromMe ? tobi.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const jid = senderr
const groupMetadata = isGroup ? await tobi.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const groupOwner = isGroup ? groupMetadata.owner : ''
const ownerNumber = [`${OwnerNumber}@s.whatsapp.net`] 
const isOwner = ownerNumber.includes(sender)
const isBanned = ban.includes(sender) 
const bater = global.batrei[global.batrei.length - 1]
const desc = isGroup ? groupMetadata.desc : ''
const nãoMexaAquiSeuPreto = botNumber
const numberBot = [`${nãoMexaAquiSeuPreto}@s.whatsapp.net`] 
const isBotk = numberBot.includes(sender)
  
/************** VERIFICADO CONST ************/
const dfrply = fs.readFileSync('./base de dados/lib/bot/fotos/tobi_lolizit.jpg')
var _0xa51ca7=_0xaced;function _0xaced(_0x35347c,_0x510658){var _0x5638db=_0x5638();return _0xaced=function(_0xacedac,_0x84b4fb){_0xacedac=_0xacedac-0xde;var _0x4771c3=_0x5638db[_0xacedac];return _0x4771c3;},_0xaced(_0x35347c,_0x510658);}function _0x5638(){var _0x28499c=['2222919JYYIfj','9cvEdGi','6237242HLCvJI','6790095wKqXPF','50YxYOWN','676040qLmwAs','4895608ZZThOL','5645478DDCbnf','https://chat.whatsapp.com/G07kaSkuHnqAm0lPmNE6Or','api','4rddZyj','1623284FjEDCH','7rooKIT','api.zeks.me'];_0x5638=function(){return _0x28499c;};return _0x5638();}(function(_0x4f4e82,_0x737634){var _0x27b9c8=_0xaced,_0x3b02bd=_0x4f4e82();while(!![]){try{var _0x400347=-parseInt(_0x27b9c8(0xe6))/0x1+parseInt(_0x27b9c8(0xe5))/0x2*(-parseInt(_0x27b9c8(0xe9))/0x3)+-parseInt(_0x27b9c8(0xe1))/0x4+parseInt(_0x27b9c8(0xde))/0x5+parseInt(_0x27b9c8(0xe2))/0x6*(parseInt(_0x27b9c8(0xe7))/0x7)+-parseInt(_0x27b9c8(0xe0))/0x8*(-parseInt(_0x27b9c8(0xea))/0x9)+-parseInt(_0x27b9c8(0xdf))/0xa*(-parseInt(_0x27b9c8(0xeb))/0xb);if(_0x400347===_0x737634)break;else _0x3b02bd['push'](_0x3b02bd['shift']());}catch(_0x4581ef){_0x3b02bd['push'](_0x3b02bd['shift']());}}}(_0x5638,0xd9247),semApikeyPraTu='apivinz',zeks=_0xa51ca7(0xe8),sexoMuito=_0xa51ca7(0xe4),grupoDoTobi=_0xa51ca7(0xe3));
function _0x2f25(_0x3fb1df,_0x246ad3){var _0x220811=_0x2208();return _0x2f25=function(_0x2f2539,_0x435f09){_0x2f2539=_0x2f2539-0x6f;var _0x132b32=_0x220811[_0x2f2539];return _0x132b32;},_0x2f25(_0x3fb1df,_0x246ad3);}var _0x2a04bc=_0x2f25;(function(_0x7399d3,_0x449ba7){var _0x15d48c=_0x2f25,_0x51e595=_0x7399d3();while(!![]){try{var _0x18f2c0=-parseInt(_0x15d48c(0x6f))/0x1+-parseInt(_0x15d48c(0x72))/0x2+parseInt(_0x15d48c(0x70))/0x3*(-parseInt(_0x15d48c(0x76))/0x4)+parseInt(_0x15d48c(0x71))/0x5+parseInt(_0x15d48c(0x74))/0x6*(parseInt(_0x15d48c(0x77))/0x7)+parseInt(_0x15d48c(0x75))/0x8+parseInt(_0x15d48c(0x73))/0x9;if(_0x18f2c0===_0x449ba7)break;else _0x51e595['push'](_0x51e595['shift']());}catch(_0x2ec434){_0x51e595['push'](_0x51e595['shift']());}}}(_0x2208,0x441eb),mtSexo=_0x2a04bc(0x78));function _0x2208(){var _0x4f9cc1=['6rcZSOt','266105pviyuZ','282936AclatQ','1338561yUJEMm','24BUNTbF','3485544ojvDna','143648WJBYbK','328958aHAEbL','\x20©\x20KitsumyEdit4/𝓢𝓤𝓜-𝓑𝓞𝓣','333308tOTgoW'];_0x2208=function(){return _0x4f9cc1;};return _0x2208();}

/************** PUSHNAME (NOME) ************/
const conts = mek.key.fromMe ? tobi.user.jid : tobi.contacts[sender] || { notify: jid.replace(/@.+/, '') }
let pushname = mek.key.fromMe ? tobi.user.name : conts.notify || conts.vname || conts.name || '-'

/************** CONST ANTILINK ************/
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

/************** RECURSO DE SEGURANÇA ************/
const isWelcome = isGroup ? welcome.includes(from) : true 
const isLevelingOn = isGroup ? _leveling.includes(from) : true 
const isAntiLink = isGroup ? antilink.includes(from) : true 
const isAntifaker = isGroup ? antifaker.includes(from) : true 
const isPalavrão = isGroup ? palavrão.includes(from) : false
const isAutconversa = isGroup ? autconversa.includes(from) : false
const isAntiflod = isGroup ? antiflod.includes(from) : true
const isViewchat = isGroup ? viewchat.includes(from) : true

/************** REGISTRO ************/
const isRegistered = checkRegisteredUser(sender) 
const isUser = checkRegisteredUser(sender)

/************** PREMIUM ************/
const isPremium= prem.includes(sender)	 

/************** EM JAPONÊS 🙂 ************/
var ase = new Date();
var bolo_de_carne = ase.getHours();
switch(bolo_de_carne){
case 0: bolo_de_carne = `Konbanwa ${pushname}🌛`; break;
case 1: bolo_de_carne = `Konbanwa ${pushname}🌛`; break;
case 2: bolo_de_carne = `Konbanwa ${pushname}🌛`; break;
case 3: bolo_de_carne = `Ohayo ${pushname}✨`; break;
case 4: bolo_de_carne = `Ohayo ${pushname}✨`; break;
case 5: bolo_de_carne = `Ohayo ${pushname}✨`; break;
case 6: bolo_de_carne = `Ohayo ${pushname}✨`; break;
case 7: bolo_de_carne = `Ohayo ${pushname}✨`; break;
case 8: bolo_de_carne = `Ohayo ${pushname}✨`; break;
case 9: bolo_de_carne = `Ohayo ${pushname}✨`; break;
case 10: bolo_de_carne = `Ohayo ${pushname}✨`; break;
case 11: bolo_de_carne = `Konnichiwa ${pushname}🔥`; break;
case 12: bolo_de_carne = `Konnichiwa ${pushname}🔥`; break;
case 13: bolo_de_carne = `Konnichiwa ${pushname}🔥`; break;
case 14: bolo_de_carne = `Konnichiwa ${pushname}🔥`; break;
case 15: bolo_de_carne = `Konnichiwa ${pushname}🌹`; break;
case 16: bolo_de_carne = `Konnichiwa ${pushname}🌹`; break;
case 17: bolo_de_carne = `Konnichiwa ${pushname}🌹`; break;
case 18: bolo_de_carne = `Konnichiwa ${pushname}??`; break;
case 19: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
case 20: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
case 21: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
case 22: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
case 23: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
}
var bolo_de_carne = '' + bolo_de_carne;

/********** OUTRAS CONST **********/
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
}

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('pronto');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
let media = fs.readFileSync(asw)
tobi.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
} 

const sendSticker = (from, filename, mek) => {
tobi.sendMessage(from, filename, MessageType.sticker, {quoted: mek})
}

/********** ANTI NOME MODIFICADO **********/
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

/********** FUCTION FOTO **********/
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
tobi.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
tobi.sendMessage(from, hasil, type, options).catch(e => {
tobi.sendMessage(from, { url : link }, type, options).catch(e => {
enviar('_[ ! ] Error de envio de media_')
})
})
})
})
}

/********** ENVIAR MSG **********/
const msg = (teks) => {tobi.sendMessage(from, teks, text, {contextInfo: {text: 'hi', "forwardingScore": 1000000000, "externalAdReply": {"title": `${bolo_de_carne}`,"previewType": "PHOTO","thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg","thumbnail": img2,}, mentionedJid:[sender]}, quoted : mek})
}

const webPage = (teks) => {tobi.sendMessage(from, teks, text, {contextInfo: {text: 'hi', "forwardingScore": 1000000000, "externalAdReply": {"title": `${bolo_de_carne}`,"previewType": "PHOTO","thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg","thumbnail": img2,}, mentionedJid:[sender]}, quoted : mek})
}

const enviar = (teks) => {
tobi.sendMessage(from, teks, text,  {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
}

const reply = (teks) => {
tobi.sendMessage(from, teks, text, {quoted: mek})
}

const fotothumb = {text: 'oi', "forwardingScore": 1000000000, "externalAdReply": {"title": `${bolo_de_carne}`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": img2, mentionedJid:[sender]}
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

/********** COSTUM DO TTT **********/
const costum = (pesan, tipe, target, target2) => {
 tobi.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}

/********** SENDMESS DO BC **********/
const sendMess = (hehe, teks) => {
tobi.sendMessage(hehe, teks, text)
}

/********** RAMDOM **********/
const math = (teks) => {
return Math.floor(teks)
} 

/********** MECIONADOR **********/
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? tobi.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tobi.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
}

/********** TIME **********/
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

/********** PERDA DE XP **********/
randomPerda = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(randomPerda)

/********** GANHO EM XP **********/
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(randomTTTXP)

/********** MENSAGENS DO BOT **********/
var replys = ["[ ! ] Aguarde estoy iniciando busqueda...", "_Por favor espere.._", "Soy lenta bu! espere", "[ 🔍 ] Por favor espere...", "_Procesando, espere unos segundos.", "ههههه𓅂 Iniciando proceso, 💗Espere, unos segundos...", "_Espere 30 minutos jajaj es meme, aguarde_ ...", "🍓Espere...🍒 🔍🔍🔍🔍🔍🔍", "_Iniciando proceso de busqueda, espere_", "_Espere unos segundos por favor_", "Soy lenta ╥﹏╥ espera!", "_Wait looking for order_ ...", "ご注文をお待ちしております", "私はゆっくり待っています!", "_Espere unos segundos_!", "_Por favor espera un minuto_", "_Que tan bonito esta hoy, espere...", "Sum-Bot no molestes a la owner, espere....", "_La owner esta zzz , por favor espera_!", "Los tiburones vuelan, espere...","_Siga su vida tal como esta_ *Por favor espere*"]
var replys_loli= replys[Math.floor(Math.random() * replys.length)] 

/********** MESS && PTBR **********/
mess = {
espere: `${replys_loli}`,
success: '『❗』Sucesso ❌',
error: {
stick: '『❗』 Ocurrio un error intentelo nuevamente❌',
},
only: {
tobireplayoff: `『❌』Comando ${comando} desactivado ✔`,
tobireplay: `『❗』Comando ${comando} activado ✔`,
tobantilink: `_Eres admin. link permitido_`,
}
}

/********** FUCTION PATENTE **********/
const nivelAtual = getLevelingLevel(sender)
var patt = 'omegaverse'
if (nivelAtual === 1) {
patt = 'OMEGA  I❦'
} else if (nivelAtual === 2) {
patt = 'OMEGA II❦'
} else if (nivelAtual === 3) {
patt = 'OMEGA  III❦'
} else if (nivelAtual === 4) {
patt = 'OMEGA  IV❦'
} else if (nivelAtual === 5) {
patt = 'OMEGA  V❦'
} else if (nivelAtual === 6) {
patt = 'BETA I⸙'
} else if (nivelAtual === 7) {
patt = 'BETA II⸙'
} else if (nivelAtual === 8) {
patt = 'BETA III⸙'
} else if (nivelAtual === 9) {
patt = 'BETA IV⸙'
} else if (nivelAtual === 10) {
patt = 'BETA V⸙'
} else if (nivelAtual === 11) {
patt = 'TETA I∰'
} else if (nivelAtual === 12) {
patt = 'TETA II∰'
} else if (nivelAtual === 13) {
patt = 'TETA III∰'
} else if (nivelAtual === 14) {
patt = 'TETA IV∰'
} else if (nivelAtual === 15) {
patt = 'TETA V∰'
} else if (nivelAtual === 16) {
patt = 'FI I☬'
} else if (nivelAtual === 17) {
patt = 'FI II☬'
} else if (nivelAtual === 18) {
patt = 'FI III☬'
} else if (nivelAtual === 19) {
patt = 'FI IV☬'
} else if (nivelAtual === 20) {
patt = 'FI V☬'
} else if (nivelAtual === 21) {
patt = 'OMICRON I ✿'
} else if (nivelAtual === 22) {
patt = 'OMICRON II ✿'
} else if (nivelAtual === 23) {
patt = 'OMICRON III ✿'
} else if (nivelAtual === 24) {
patt = 'OMICRON IV ✿'
} else if (nivelAtual === 25) {
patt = 'OMICRON V ✿'
} else if (nivelAtual === 26) {
patt = 'DELTA I ⟁'
} else if (nivelAtual === 27) {
patt = 'DELTA II ⟁'
} else if (nivelAtual === 28) {
patt = 'DELTA III ⟁'
} else if (nivelAtual === 29) {
patt = 'DELTA IV ⟁'
} else if (nivelAtual === 30) {
patt = 'DELTA V ⟁'
} else if (nivelAtual === 31) {
patt = 'MEGA I ⌬'
} else if (nivelAtual === 32) {
patt = 'MEGA II ⌬'
} else if (nivelAtual === 33) {
patt = 'MEGA III ⌬'
} else if (nivelAtual === 34) {
patt = 'MEGA IV ⌬'
} else if (nivelAtual === 35) {
patt = 'MEGA V ⌬'
} else if (nivelAtual === 36) {
patt = 'SIGMA I❂'
} else if (nivelAtual === 37) {
patt = 'SIGMA II❂'
} else if (nivelAtual === 38) {
patt = 'SIGMA III❂'
} else if (nivelAtual === 39) {
patt = 'SIGMA IV❂'
} else if (nivelAtual === 40) {
patt = 'SIGMA V❂'
} else if (nivelAtual === 41) {
patt = 'ALFHA I ༒'
} else if (nivelAtual === 42) {
patt = 'ALFHA II ༒'
} else if (nivelAtual === 43) {   	
patt = 'ALFHA III ༒'
} else if (nivelAtual === 44) {
patt = 'ALFHA IV ༒'
} else if (nivelAtual >= 45) {
patt = '🥀 OWNER ONLINE 🥀'
} 

/********** FUCTION TIPO DE USUÁRIO **********/
if (groupAdmins) {
prema = 'Admirar ✿'
}
if (isOwner) {
prema = `El ${SeuNome}✿`
} else {
var prema = 'Miembro comun'
}

/********** FUCTION BODIA **********/
var ase = new Date();
var tempo = ase.getHours();
switch(tempo){
case 0: tempo = `Buenas Noches ${pushname}🌛`; break;
case 1: tempo = `Buenas Noches ${pushname}🌛`; break;
case 2: tempo = `Buenas Noches ${pushname}🌛`; break;
case 3: tempo = `Buenos Dias ${pushname}✨`; break;
case 4: tempo = `Buenos Dias ${pushname}✨`; break;
case 5: tempo = `Buenos Dias ${pushname}✨`; break;
case 6: tempo = `Buenos Dias ${pushname}✨`; break;
case 7: tempo = `Buenos Dias ${pushname}✨`; break;
case 8: tempo = `Buenos Dias ${pushname}✨`; break;
case 9: tempo = `Buenos Dias ${pushname}✨`; break;
case 10: tempo = `Buenos Dias ${pushname}✨`; break;
case 11: tempo = `Buenas tardes ${pushname}🔥`; break;
case 12: tempo = `Buenas tardes ${pushname}🔥`; break;
case 13: tempo = `Buenas tardes ${pushname}🔥`; break;
case 14: tempo = `Buenas tardes ${pushname}🔥`; break;
case 15: tempo = `Buenas tardes ${pushname}🌹`; break;
case 16: tempo = `Buenas tardes ${pushname}🌹`; break;
case 17: tempo = `Buenas tardes ${pushname}🌹`; break;
case 18: tempo = `Buenas Noches ${pushname}🌛`; break;
case 19: tempo = `Buenas Noches ${pushname}🌛`; break;
case 20: tempo = `Buenas Noches ${pushname}🌛`; break;
case 21: tempo = `Buenas Noches ${pushname}🌛`; break;
case 22: tempo = `Buenas Noches ${pushname}🌛`; break;
case 23: tempo = `Buenas Noches ${pushname}🌛`; break;
}
var tempo = '' + tempo;

/********** FUCTION LEVELING **********/
var up_porcenntagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const level_porcen = getLevelingLevel(sender)
if (level_porcen <= 10) {
up_porcenntagem = `*[█▒▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 20) {
up_porcenntagem = `*[██▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 30) {
up_porcenntagem = `*[███▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 40) {
up_porcenntagem = `*[████▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 50) {
up_porcenntagem = `*[█████▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 60) {
up_porcenntagem = `*[██████▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 70) {
up_porcenntagem = `*[███████▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 80) {
up_porcenntagem = `*[████████▒▒] ${level_porcen}%*`
} else if (level_porcen <= 90) {
up_porcenntagem = `*[█████████▒] ${level_porcen}%*`
} else if (level_porcen <= 100) {
up_porcenntagem = `*[██████████] ${level_porcen}%*`
} 		

/********** FUCTION BATERIA **********/
var porcentagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const bateria = (`${baterai}`)
if (bateria <= 10) {
porcentagem = `*[█▒▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 20) {
porcentagem = `*[██▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 30) {
porcentagem = `*[███▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 40) {
porcentagem = `*[████▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 50) {
porcentagem = `*[█████▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 60) {
porcentagem = `*[██████▒▒▒▒] ${bateria}%*`
} else if (bateria <= 70) {
porcentagem = `*[███████▒▒▒] ${bateria}%*`
} else if (bateria <= 80) {
porcentagem = `*[████████▒▒] ${bateria}%*`
} else if (bateria <= 90) {
porcentagem = `*[█████████▒] ${bateria}%*`
} else if (bateria <= 100) {
porcentagem = `*[██████████] ${bateria}%*`
} 			

/********** FUCTION TEMPO **********/
const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

/********** MENSAGENS DO BOT **********/
resposta = {
leveis: "❌ _*...El nivel no esta activado*_❌",
playk: "✔️_*...Por favor espere...*_✔️",
macaco: "_Alerta_",
erroKrl: "_Cometiste error_",
erroB: `${ll}...❕Error, intenta mas tarde❕...${ll}`,
attp: `_Añade texto _\n\n*Ejemplo ${p}attp ${SeuNome} kitsumy*`,
play: `_*Formato incorrecto...*_\n\nFormato correcto: ${p + comando} Tree Palm`
}

/********** VERIFICADOS **********/
/** Verificado com o nome bom dia **/
const tob = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Lolizita", "caption": `${tempo}`}}}

/** Verificado com o nome ohayo **/
const tob1 = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Lolizita", "caption": `${bolo_de_carne}`}}}

/** Verificado com o nome e foto **/
const tob2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;AKAME,;;;\nFN:AKAME,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./base de dados/lib/bot/fotos/tobi_lolizit.jpg`), thumbnail:fs.readFileSync(`./base de dados/lib/bot/fotos/tobi_lolizit.jpg`),sendEphemeral: true}}}

/** Verificado de catálogo com nome **/
const tobCat = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": dfrply}, "title": `${bolo_de_carne}`, "description": `${bolo_de_carne}`, "currencyCode": "USD", "priceAmount1000": "2000", "retailerId": `${bolo_de_carne}`, "productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

/** Verificado de carrinho com nome **/
const tobCarr = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 123, status: 1, surface : 1, message: `${bolo_de_carne}`, orderTitle: `${bolo_de_carne}`, thumbnail: dfrply, sellerJid: '0@s.whatsapp.net' }}}

/** Verificado de localização com nome **/
const tobLoc = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {caption: `${bolo_de_carne}`,jpegThumbnail: dfrply}}}

/** Verificado de video com nome **/
const tobVid = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": {"title": `${bolo_de_carne}`, "h": `${bolo_de_carne}`, 'duration': '99999', 'caption': `${bolo_de_carne}`, 'jpegThumbnail': dfrply}}}

/** Verificado de documento com nome **/
const tobDoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${bolo_de_carne}`, jpegThumbnail: dfrply}}}

/** Verificado de convite com nome **/
const tobCon = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": `${bolo_de_carne}`,"groupName": `${bolo_de_carne}`, "caption": `${bolo_de_carne}`, 'jpegThumbnail': dfrply}}}

/** Verificado de sticker com nome **/
const tobStk = {"key": {"participant": `0@s.whatsapp.net`,"remoteJid": "6289643739077-1613049930@g.us","fromMe": false,"id": "3B64558B07848BD81108C1D14712018E"},"message": {"stickerMessage": {"fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=","pngThumbnail": dfrply,"mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE","fileLength": "60206","firstFrameLength": 3626,"isAnimated": false}},"messageTimestamp": "1614070775","status": "PENDING"}

/** Verificado de gif com nome **/
const tobGif = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title": `${bolo_de_carne}`,"h": `${bolo_de_carne}`,'duration': '99999', 'gifPlayback': 'true', 'caption': `${bolo_de_carne}`,'jpegThumbnail': dfrply}}}

/** Verificado com nome **/
const tobTex = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "extendedTextMessage": {"text": `${bolo_de_carne}`,"title": `${bolo_de_carne}`,'jpegThumbnail': dfrply}}}

/** Verificado de audio com nome **/
const tobAud = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "99999","ptt": "true"}}}

/********** BOTÃO LOC **********/
const sendButLocation = async (from, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await tobi.prepareMessage(from, kma, location)
const buttonMessages = {locationMessage: mhan.message.locationMessage, contentText: text1, footerText: desc1, buttons: but, headerType: 6}
tobi.sendMessage(from, buttonMessages, MessageType.buttonsMessage, options)}

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
tobi.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

/********** BOTÃO VIDEO **********/
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await tobi.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
tobi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

/********** BOTÃO IMAGE **********/
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await tobi.prepareMessage(from, kma, image, {thumbnail: null})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
tobi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

/********** FUNÇÕES APARTI DAQUI **********/
const cmdadd = () => {
totalhit[0].totalcmd += 1
fs.writeFileSync('./base de dados/lib/totalcmd.json', JSON.stringify(totalhit))
}
if (isCmd) cmdadd()
const reqcmd = JSON.parse(fs.readFileSync('./base de dados/lib/totalcmd.json'))[0].totalcmd
function _0x3f3a(_0xe8646d,_0x162982){const _0x36eef1=_0x36ee();return _0x3f3a=function(_0x3f3aa7,_0x59c8f8){_0x3f3aa7=_0x3f3aa7-0xa8;let _0x1d8c58=_0x36eef1[_0x3f3aa7];return _0x1d8c58;},_0x3f3a(_0xe8646d,_0x162982);}function _0x36ee(){const _0x4dc2f4=['8MQhGXt','buttonsMessage','espere','4lvZHYl','sexo','sendMessage','2728152PNeJzS','1481322iAvjUo','Ok\x20','1454280GHjoNX','846420MhxUDs','8334747DEVUWj','11447541zrHWGg','32921950aCrBXE','10IfLwJm'];_0x36ee=function(){return _0x4dc2f4;};return _0x36ee();}(function(_0x304eed,_0x3d80b5){const _0x20a02b=_0x3f3a,_0x28302=_0x304eed();while(!![]){try{const _0x340319=parseInt(_0x20a02b(0xb1))/0x1+-parseInt(_0x20a02b(0xab))/0x2*(-parseInt(_0x20a02b(0xaf))/0x3)+parseInt(_0x20a02b(0xb2))/0x4*(-parseInt(_0x20a02b(0xb6))/0x5)+-parseInt(_0x20a02b(0xae))/0x6+-parseInt(_0x20a02b(0xb4))/0x7*(-parseInt(_0x20a02b(0xa8))/0x8)+parseInt(_0x20a02b(0xb3))/0x9+-parseInt(_0x20a02b(0xb5))/0xa;if(_0x340319===_0x3d80b5)break;else _0x28302['push'](_0x28302['shift']());}catch(_0x5dfdeb){_0x28302['push'](_0x28302['shift']());}}}(_0x36ee,0xcb699));const mortandela=_0x138417=>{const _0x5f034d=_0x3f3a,_0x3c1659=[{'buttonId':_0x5f034d(0xac),'buttonText':{'displayText':_0x5f034d(0xb0)+NomeDoBot},'type':0x1}],_0x23dd3f={'contentText':''+mess[_0x5f034d(0xaa)],'buttons':_0x3c1659,'headerType':0x1};tobi[_0x5f034d(0xad)](from,_0x23dd3f,MessageType[_0x5f034d(0xa9)],{'quoted':tob2});};

function fecha(){
myMonths = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Sebtiembre","Octubre","Noviembre","Diciembre"];
myDays = ['Domingo','Segundo-evento','Tercer-evento','Cuarto-evento','Quinto-evento','Sexto-evento','Sabado'];
var tgl = new Date();
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

const stickerAdm = (hehe) => {
anu = fs.readFileSync('./base de dados/database/figurinhas/stickerAdm_sticker.webp')
tobi.sendMessage(hehe, anu, sticker,{
quoted: mek})
}

/********** FUCTION HIDETAG **********/
const hideTag = async function(from, text){
let anu = await tobi.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
tobi.sendMessage(from, text, 'extendedTextMessage', {quoted: mek, contextInfo: {"mentionedJid": ane}})
}  

/********** FUCTION LEVEL XP **********/
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
var requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
var getLevel = getLevelingLevel(sender)
const namelv = checkId
mett = ["1", "2", "3", "4", "5"]
res = mett[Math.floor(Math.random() * mett.length)]
result = fs.readFileSync(`./base de dados/database/audios/som` + res + `.mp3`)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LEVEL UP \x1b[1;37m]', color(pushname, "yellow"), color('subiu'), color('de', "yellow"), color('level'), color('no', "yellow"), color('grupo:'), color(groupName, "yellow"))
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\nTag: @${namelv.split('@')[0]}\n${up_porcenntagem}`}}}

let contentt = await getBuffer(`https://yuzzu-api.herokuapp.com/api/level?icon=https://i.ibb.co/KKgYHRW/8c5dc479e4a8a9404e292b5fc50ab8db.jpg`)
const media = await tobi.prepareMessage(from, contentt, MessageType.image, { thumbnail: null})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [{buttonId: `${p}info perfil`, buttonText: {displayText: '🍒 ＰＥＲＦＩＬ 🍒'}, type: 1}]
const btn1 = {contentText: `
    ▀▀▀▀▀▀▀🆙▀▀▀▀▀▀▀                          
  ➣NUMERO @${namelv.split('@')[0]}
▛▀▀▀▀▀▀▀▀▀▀▀▀▀▜
▌➽𝐗𝐏: ${getLevelingXp(sender)}
▌➽𝐍𝐈𝐕𝐄𝐋: ${getLevel} -> ${getLevelingLevel(sender)}
▌➽𝐑𝐎𝐋: ${patt}
▙▄▄▄▄▄▄▄▄▄▄▄▄▄▟`, buttons: buttons1, headerType: 4, imageMessage: qweriio.message.imageMessage}
tobi.sendMessage(from, btn1, MessageType.buttonsMessage, {quoted: mek})
}
} catch (err) {
console.error(err)
}
}

/********** FUCTION DINHEIRO **********/
if (isGroup) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender, pushname)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}

/***** FINALIZAR TTT AUTOMATICAMENTE *****/
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
tobi.sendMessage(tttset.local,`❗TIEMPO DEL JUEGO HA EXPIRADO❗\n\n༒ CASTIGO: ${randomEndTTTXP} XP 🆙`, text, {quoted: tttset.mentionPlayer})
} else {
tobi.sendMessage(tttset.local,`🎲LO SENTIMOS EL TIEMPO DEL JUEGO SE HA TERMINADO❗`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

/***** ANTI LINK DE GRUPOS *****/
if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar('🔰')
enviar(`*「 LINK DETECTADO 」*\n\n_No spam, los enlaces no estan permitidos en este grupo_ 🚮`)
tobi.groupRemove(from, [sender])
}

/*[--ANTI PALAVRÃO --]*/
if (isGroup && isPalavrão) { 
if (palavra.includes(messagesC)) {
enviar(`Palabra prohibida en este grupo\nRequestito lo que hiciste durante 4 minutos fuera del grupo👋`)
setTimeout( () => { 
tobi.groupRemove(from, [sender]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}, 2000)
setTimeout( () => { 
enviar(`Añadido ${pushname} nuevamente`)
}, 185000) //240000
var addd = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => { 
tobi.groupAdd(from, [addd]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}, 240000)
setTimeout( () => {
tobi.updatePresence(from, )
enviar("sᴇᴍᴘᴀɪシ︎")
}, 0)
}
}

//ANTI SPAM EU PEGUEI DO ITALU/TIRINGA-BOT
 if (isCmd && isFiltered(from) && !isGroup && isAntiflod) {
console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${comando}`), 'DE:', color(pushname))
const ff = {
text:  `_Por favor @${sender.split('@')[0]}..._\n\n_Espere 3 segundos para usar otros comandos_ [ No spam]✅`,
contextInfo: {
mentionedJid: [sender]
}
}
return enviar(ff)}

if (isCmd && isFiltered(from) && isGroup && isAntiflod) {
console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${comando}`), 'DE:', color(pushname))
const ff1 = {
text:  `_Abvertencia @${sender.split('@')[0]}...\n\n_[ ! ] Espere 3 segundos para usar otros comandos_ ✅`,
contextInfo: {
mentionedJid: [sender]
}
}
return enviar(ff1)}

/********** TIPOS DE MENSAGENS **********/
colors = ['red','white','black','blue','yellow','green']
//_TIPO DE MENSAGEM
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isDocument = type == 'documentMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isDocument) typeMessage = "Document"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const stickerMessage = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const tipoMensagem = type == 'audioMessage' ? 'Audio' : type == 'stickerMessage' ? 'Sticker' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Video' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' : 'Mensagem'
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', color(comando, "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))
if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color(`${tipoMensagem}`, "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', color(comando, "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))
if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color(`${tipoMensagem}`, "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))

/********** VISUALIZADOR AS MENSAGENS  **********/
tobi.chatRead(from)

/********** USUÁRIO BANIDO **********/
if (isCmd && isBanned) {
enviar(linguagem.ban())
return console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('BAN', "red"), ']', color('Ignorando', "yellow"), 'comando', color('do', "yellow"), color(pushname), 'Horas', color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'))
}

/********** REGISTRO **********/
if (isCmd && !isRegistered) {
try {
ppimg = await tobi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let contentt = await getBuffer(ppimg)
const media = await tobi.prepareMessage(from, contentt, MessageType.image, { thumbnail: null})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [
{buttonId: 'Rg', buttonText: {displayText: '⎘ V E R I F I C A R ⎗'}, type: 1}]
const btn1 = {contentText: `${ll}_Para usar el bot verifique su numero_${ll}`, footerText: `${ll}SUM-BOT.${ll}\n${ll}©KitsumyEdit4${ll}`, buttons: buttons1, headerType: 4, imageMessage: qweriio.message.imageMessage}
tobi.sendMessage(from, btn1, MessageType.buttonsMessage, {contextInfo: {"externalAdReply": {"title": `${tempo}`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg", "thumbnail": img2, sourceUrl: grupoDoTobi, contextInfo: {"mentionedJid": [sender]}}}})
return 
}

/********** LOGIN **********/
if (selectedButton == `Rg`) {
if (isUser) return enviar(`✔Usted esta registrado✔`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
enviar(`${ll}Verificando por favor espere ${pushname}👑...${ll}`)
try {
ppimg = await tobi.getProfilePicture(sender)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=https://bit.ly/walpamikel`)
const tekentod = 
`
▛▀▀▀▀▀▀▀▀▀▀▀▀▜
▌${ll}𝐕 𝐄 𝐑 𝐈 𝐅 𝐈 𝐂 𝐀 𝐃 𝐎${ll}
▌${ll}Id: ${serialUser}${ll}
▌${ll}Hora: ${time}${ll}
▌${ll}Nombre: ${pushname}${ll}
▌${ll}Link: wa.me/${sender.split('@')[0]}${ll}
▙▄▄▄▄▄▄▄▄▄▄▄▄▟
`            
veri = sender
if (isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                 
} else {
addRegisteredUser(from, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                  
}
}

/********** REGISTRO **********/
if ((budy === "login") || (budy === "Login") || (budy === "Login")) {
if (isUser) return enviar(`📌 *Você já está registrado*`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
enviar(`${ll}...*❌ Esᴘᴇʀᴇ ❌*...${ll}`)
try {
var ppimg = await tobi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg)
const tekentod = 
`
▛▀▀▀▀▀▀▀▀▀▀▀▀▜
▌${ll}𝐕 𝐄 𝐑 𝐈 𝐅 𝐈 𝐂 𝐀 𝐃 𝐎${ll}
▌${ll}Id: ${serialUser}${ll}
▌${ll}Hora: ${time}${ll}
▌${ll}Nombre: ${pushname}${ll}
▌${ll}Link: wa.me/${sender.split('@')[0]}${ll}
▙▄▄▄▄▄▄▄▄▄▄▄▄▟
`            
veri = sender
if (isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {thumbnail: null, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                 
} else {
addRegisteredUser(from, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {thumbnail: null, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                  
}
}

//-TIME TEMPO ONLINE
if (selectedButton == `nãoDaEsseMekAiManoGay`) {
uptime = process.uptime();
tobi.sendMessage(from, `*${temporizado(uptime)}*`, MessageType.text, {quoted: mek})
}

/********** EVAL CMDS **********/
if (budy.startsWith('>')){
if(!isOwner) return
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m EVAL \x1b[1;37m]', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return enviar(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
enviar(`${e}`)
}
}

if (budy.startsWith('=>')){
if (!isOwner) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return enviar(bang)
}
try {
enviar(util.format(eval(`;(async () => { ${konsol} })()`)))
//enviar(JSON.stringify(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
enviar(`${e}`)
}
}

if (budy.startsWith(`${p}exec`)){
if (!isOwner) return
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return enviar(bang)
}
try {
exc = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
//enviar(JSON.stringify(eval(`;(async () => { ${exc} })()`)))
enviar(util.format(eval(`;(async () => { ${exc} })()`)))
} catch(e){
enviar(String(e))
}
}

/********** COMANDOS SEM PREFIX, BR TOBI **********/
if (isAutconversa) {
if ((budy.match("Pq")) || (budy.match("pq"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/Pq_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("hentai")) || (budy.match("Hentai"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/hentai_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("A")) || (budy.match("analise"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/Analise_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Coger")) || (budy.match("sexo"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/sexo_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("No")) || (budy.match("no"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`base de dados/database/figurinhas/sim_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("🤔"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/analise_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("😭"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/chorando_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Broma")) || (budy.match("mentira"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/verdade_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Bye")) || (budy.match("bye")) || (budy.match("Adios")) || (budy.match("chau"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/audios/bye_audio.mp3`)
tobi.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})}}

if ((budy.match("🍒")) || (budy.match("🍓")) || (budy.match("✿")) || (budy.match("🍎")) || (budy.match("🍏"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/audios/macaco_audio.mp3`)
tobi.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})}}

if ((budy.match(`@${me.jid.split('@')[0]}`))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/tag_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("diga"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
enviar("te amo")}}
}

/********** TODOS OS CMD APARTI DAQUI **********/
switch(comando) {
case 'menu':
case 'menú':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
uptime = process.uptime()
const checATM = checkATMuser(sender)
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const requireXp = 5 * Math.pow(useLevel, 2) + 50 * useLevel + 100
const chatss = `${totalchat.length}`
const antifaker_by_tobi = isAntifaker ? 'Ativado' : 'Desativado'
const antilink_by_tobi = isAntiLink ? 'Ativado' : 'Desativado'
const welcome_by_tobi = isWelcome ? 'Ativado' : 'Desativado'
const levelingon_by_tobi = isLevelingOn ? 'Ativado' : 'Desativado'
const selfchat_by_tobi = isAutconversa ? 'Ativado' : 'Desativado'
totalChat = await tobi.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let menuAjuda = await getBuffer(ppimg)
var mediaByTobi = await tobi.prepareMessage(from, menuAjuda, MessageType.image, { thumbnail: null, caption: help(p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, chatss, antilink_by_tobi, welcome_by_tobi, levelingon_by_tobi, antifaker_by_tobi, selfchat_by_tobi)})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
const buttons2 = [{buttonId: `${p}playrs`, buttonText: {displayText: '⎙ DESCARGAS ⎙'}, type: 1}]
const btn2 = {contentText: `${help(ll, p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, porcentagem, chatss, me, reqcmd, _registered)}`, footerText: `\`\`\`➤Total chats: *${totalChat.length}*\`\`\`\n\`\`\`➤Cargando: *${charge}*\`\`\`\n\`\`\`➤Bateria: *${baterai}*\`\`\`\n\`\`\`➤Velocidad: *${latensi.toFixed(4)} s*\`\`\`\n\`\`\`➤Actividad: *${horaOn(os.uptime())}*\`\`\``, buttons: buttons2, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
tobi.sendMessage(from,  btn2, MessageType.buttonsMessage, {quoted: mek})
break

case 'grupo':
addFilter(from)
totalChat = await tobi.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const grupoMenu = await getBuffer(ppimg)
var mediaByTobi = await tobi.prepareMessage(from, grupoMenu, MessageType.image, { thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var but1tons = [{buttonId: `${p}Juegos`, buttonText: {displayText: '⎙  JUEGOS  ⎙'}, type: 1}]
var button1s = {contentText: `${(linguagem.menu2(pushname, hr, totalchat, bateria, ll))}`, footerText: `\`\`\`➣Total chats: *${totalChat.length}*\`\`\`\n\`\`\`➣Cargando : *${charge}*\`\`\`\n\`\`\`➣Bateria : *${baterai}*\`\`\`\n\`\`\`➣Velocidad : *${latensi.toFixed(4)} s*\`\`\`\n\`\`\`➣Actividad : *${horaOn(os.uptime())}*\`\`\``, buttons: but1tons, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
tobi.sendMessage(from, button1s, MessageType.buttonsMessage, {quoted: mek})
break

case 'owner':
addFilter(from)
tobi.sendMessage(from, '『✔』𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘...', MessageType.text, {quoted: mek})
tobi.sendMessage(sender, '𝕰𝖘𝖙𝖊 𝖊𝖘 𝖒𝖎 𝖔𝖜𝖓𝖊𝖗 𝖓𝖔 𝖘𝖕𝖆𝖒, 𝖓𝖔 𝖊𝖘 𝖇𝖔𝖙',MessageType.text, { quoted: mek} )
tobi.sendMessage(sender, {displayname: "Jeff", vcard: vcard}, MessageType.contact, {quoted: mek})
break

case 'bam':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Formato incorrecto: ${p + comando} @${OwnerNumber}`)
if (args[0].startsWith(`@${OwnerNumber}`)) return enviar(`❕No puedo eliminar a mi creador${OwnerNumber}❕`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '✔Eliminado del grupo🚮 ✔\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
tobi.groupRemove(from, mentioned)
} else {
mentions(`${emoji_bot} 🚮Miembro eliminado❕: @${mentioned[0].split('@')[0]}`, mentioned, true)
tobi.groupRemove(from, mentioned)
}
break

case 'add':
case 'añadir':
try {
if (!isGroup) return enviar("Solo se utiliza en grupo❕")
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return enviar("_mmmm_")  
if (!isBotGroupAdmins) return enviar(`❕Necesito ser admin para esta funsion❕`)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await tobi.groupAdd(from, [entah])
linkgc = await tobi.groupInviteCode(from)
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('❗El objetivo ya esta en el grupo❗') 
if(inv[0].code == 403) return enviar('Error _[ ! ]_ el usuario esta en modo privdo')
if(inv[0].code == 408) return enviar('Error _[ ! ]_ El usuario acaba de salir de este grupo')
if(inv[0].code == 401) return enviar('Error _[ ! ]_ Usuario me blokeo')
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
response = await tobi.groupAdd(from, [entah])
o = response.participants[0]
linkgc = await tobi.groupInviteCode(from)
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('El usuario ya esta en el grupo _[ ! ]_ ')
if(inv[0].code == 403) return enviar('_El usuario esta en privado_')
if(inv[0].code == 403) return enviar('_Fallo esta en privado_ ')
if(inv[0].code == 408) return enviar('_Fallo por que el usuario salio del grupo_')
if(inv[0].code == 401) return enviar('_Error el usuario me acaba de blokear_ ')
}
} catch {
return 
}
break

case 'promote':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Forma correta: ${p + comando} @${OwnerNumber}`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Ejecutado con suceso❕\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
tobi.groupRemove(from, mentioned)
} else {
mentions(`${emoji_bot} Ejecutado correctamente: @${mentioned[0].split('@')[0]} Ahora eres admin. del grupo`, mentioned, true)
tobi.groupMakeAdmin(from, mentioned)
}
break

case 'tumbar':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Formato incorrecto: ${p + comando} @${OwnerNumber}`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '✔Completado✔\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
tobi.groupRemove(from, mentioned)
} else {
mentions(`${emoji_bot} Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} Ahora no eres admin del grupo`, mentioned, true)
tobi.groupDemoteAdmin(from, mentioned)
}
break

case 'kick':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('❗Marque al usuario que decea eliminar❗')
kick = mek.message.extendedTextMessage.contextInfo.participant
tobi.groupRemove(from, [kick])
await enviar('✔Hecho✔ Participante eliminado.')
break

case 'promote':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque a la persona❕')
promoverGay = mek.message.extendedTextMessage.contextInfo.participant
tobi.groupMakeAdmin(from, [promoverGay])
tobizinhokkkk = mek.message.extendedTextMessage.contextInfo.participant
enviar(`Esse macaco *@${tobizinhokkkk.split('@')[0]}*... agora é admintrador`)
break

case 'demote':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque a la persona❗')
rebaixarGay = mek.message.extendedTextMessage.contextInfo.participant
tobi.groupDemoteAdmin(from, [rebaixarGay])
kapiuugvb = mek.message.extendedTextMessage.contextInfo.participant
enviar(`✔Completado✔*@${kapiuugvb.split('@')[0]}*... Ya no eres admin. del grupo`)
break 

case 'addprem': 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner && !isPremium) return  enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
prem.push(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
susp = `👑 @${mentioned[0].split('@')[0]} _Fue añadido a la lista de premium👑_`
mentions(`${susp}`, mentioned, true)   
break

case 'dellprem': 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
let dellprem = body.slice(12)
let positio = prem.indexOf(dellprem)
prem.splice(positio, 1)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
susp = `✖@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium✖`
mentions(`${susp}`, mentioned, true)   
break

case 'group': //by resen e Tobi
case 'grup':
case 'gp':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Sintaxe correta: ${p + comando} abrir/fechar`)
if (args[0].toLowerCase() == 'abrir') { 
enviar(`${emoji_bot} Grupo aberto com sucesso`)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0].toLowerCase() == 'cerrar') {
await tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)
enviar(`${emoji_bot} Grupo fechado com sucesso`)
}
break                  

case 'totag':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 999999999,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 999999999,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
enviar(`${emoji_bot} Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${p + comando}`)
}
break

case 'setnome':
addFilter(from) 
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Use: ${p + comando} <Novo nome do grupo>`)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
tobi.groupUpdateSubject(idgrup, `${body.slice(9)}`)
tobi.sendMessage(from, `${emoji_bot} Nome do grupo alterado`, text, {quoted: mek})
break

case 'setdesk':
addFilter(from) 
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Use: ${p + comando} <Nova Descrição>`)
tobi.groupUpdateDescription(from, `${body.slice(9)}`)
tobi.sendMessage(from, `${emoji_bot} Descrição do grupo alterada`, text, {quoted: mek})
break

case 'setppgc':
addFilter(from) 
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isQuotedImage) return enviar(`${emoji_bot} Use: ${p + comando} <Marque uma foto>`)
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const medipp = await tobi.downloadAndSaveMediaMessage(ftgp)
await tobi.updateProfilePicture (from, medipp)
enviar(`${emoji_bot} foto do grupo alterada`) 
break

case 'delete': 
case 'del':
case 'd':
addFilter(from)
if (!isGroup)return enviar(linguagem.group())
if (!isGroupAdmins)return enviar(linguagem.admin())
try {
tobi.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
} catch {
enviar(`${emoji_bot} Só é possível deletar mensagens minhas`)
}
break

case 'invocar':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `${q}\n\n`
for (let mem of groupMembers) {
todos += `⪧ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(' '+todos+' ', members_id, true)
break

case 'info': //by resen e Tobi
addFilter(from) 
if (args.length < 1) return enviar(`${emoji_bot} Use ${p + comando} Grupo o Perfil`)
if (args[0].toLowerCase() == 'grupo') {
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
ppUrl = await tobi.getProfilePicture(from) 
buffer = await getBuffer(ppUrl)
infoGrupTob = `
➤✏𝑵𝑶𝑴𝑩𝑹𝑬 : ${groupName}
➤👑𝑪𝑹𝑬𝑨𝑫𝑶𝑹 : @${from.split("-")[0]}
➤👥𝑴𝑰𝑬𝑴𝑩𝑹𝑶𝑺 : ${groupMembers.length}
➤🔰𝑨𝑫𝑴𝑰𝑵𝑰𝑺𝑻𝑹𝑨𝑫𝑶𝑹𝑬𝑺 : ${groupAdmins.length}

➤Welcome : ${isWelcome ? 'Ativado':'Desativado'}
➤Anti Link : ${isAntiLink? 'Ativado':'Desativado'}
➤Anti Fake : ${isAntifaker? 'Ativado':'Desativado'}
➤Self Chat : ${isAutconversa? 'Ativado':'Desativado'}
➤Anti Flod : ${isAntiflod? 'Ativado':'Desativado'}

➤🧾Descripcion del grupo:
\`\`\`${groupDesc}\`\`\``
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: infoGrupTob})
} else if (args[0].toLowerCase() == 'perfil') { 
const usLevel = getLevelingLevel(sender)
const usXp = getLevelingXp(sender)
const usTime = getRegisterTime(sender) 
const serh = getRegisterSerial(sender)
const idad = getRegisterAge(sender)
const regin = getRegisterName(sender)
const requirXp = 500 * (Math.pow(2, usLevel) - 1)
const teste64 = sender
const teste65 = await tobi.getStatus(teste64 , MessageType.text)
try {
ppimg = await tobi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
pf = 
`
╭•❏ ઽ૯ષ ℓ૯√૯ℓ
 • ⋟ 🪀 Nome: ${pushname}
▌⋟ ⌬ Level: ${usLevel}
 • ⋟ ✿ XP: ${usXp}/${requirXp}
▌⋟ 🧸 Patente: ${patt}
 • ⋟ 📂 link: wa.me/${sender.split("@")[0]}
▌⋟ 👾 Seu recado: ${teste65.status}
╰━━━━━━─ • ─━━━━━❋ཻུ۪۪⸙
`
its = await getBuffer (ppimg)
tobi.sendMessage(from, its, image, {quoted: mek, thumbnail:null, caption: pf, contextInfo: {mentionedJid: [sender]}})
}
break

case 'listadmins': 
case 'listadmin':
case 'adminlist':
case 'listadm':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
adl = `➤Administradores del grupo: ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(adl, groupAdmins, true)
break

case 'enlace': 
case 'link':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Usa ${p + comando} Grupo o Privado`)
if (args[0].toLowerCase() == 'grupo') {
linkgc = await tobi.groupInviteCode(from)
enviar('https://chat.whatsapp.com/'+linkgc)
} else if (args[0].toLowerCase() == 'privado') {
if (isGroup) enviar(`『✔』${comando} Te lo he enviado...`)
linkgc = await tobi.groupInviteCode(from)
tobi.sendMessage(sender, 'https://chat.whatsapp.com/'+linkgc, MessageType.text)
}
break

case 'hidetag':
addFilter(from)  
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break

case 'help':
let botao = tobi.prepareMessageFromContent(from, {"listMessage": {"title": `\n▛▀▀▀▀▀▀▀▀▀▀▀▀▀▀▜\n▌                  𝘓𝘐𝘚𝘛𝘈 𝘋𝘌 𝘔𝘌𝘕𝘜𝘚\n▙▄▄▄▄▄▄▄▄▄▄▄▄▄▄▟\n▌                ⎙𝐌𝐄𝐍𝐔𝐒⎙               ▌\n\n▌                   𝐆𝐄𝐍𝐄𝐑𝐀𝐋   *${NomeDoBot}*\n▙▄▄▄▄▄▄▄▄▄▄▄▄▄▄▟\n▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄`, "description": "\`\`\`O escriba *MENU* para recibir todo completo\`\`\`", "buttonText": "ʟɪsᴛᴀ ᴍᴇɴᴜ", "listType": "SINGLE_SELECT", "sections": [{ "rows": [{ "title": "➣Menu", "description": "\`\`\`🧾Para recibir todos los comandos🧾\`\`\`", "rowId": `${p}menu` }, {"title": "➣Downloads", "description": "\`\`\`📥Menu de descargas📥\`\`\`", "rowId": `${p}Playrs` }, { "title": "➣Grupo", "description": "\`\`\`👥Comandos para el grupo👥\`\`\`", "rowId": `${p}Grupo`}, {"title": "➣Juegos", "description": "\`\`\`🎲Minijuegos para grupo🎲\`\`\`", "rowId": `${p}Juegos`}, {"title": "➣Owner", "description": `\`\`\`👑Informacion de ${SeuNome} 👑\`\`\``, "rowId": `${p}Owner`}, {"title": "➣Info", "description": "\`\`\`🤖Menu del bot 𝓢𝓤𝓜-𝓑𝓞𝓣🤖\`\`\`", "rowId": `${p}Infobot`}, {"title": "➣Animes", "description": "\`\`\`㊗Menu animes y hentai㊗\`\`\`", "rowId": `${p}Animes`}, {"title": "➣Coins", "description": "\`\`\`⛁ Menu de coins ⛁\`\`\`", "rowId": `${p}Bankloja`}, {"title": "➣Premium", "description": "\`\`\`✿Menu de usuario premier✿\`\`\`", "rowId": `${p}Premium`}, {"title": "➣Macker", "description": "\`\`\`💟Menu de sticker macker💟\`\`\`", "rowId": `${p}Figurinhas`}, ]}]}}, {quoted:mek})
tobi.relayWAMessage(botao)
break

case 'eval':
if(!isOwner) return
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m EVAL \x1b[1;37m]', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
eval(q)
} catch (err) {
enviar(`${err}`)
}
break

case 'welcome':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]1/0, Formato correcto ${p + comando} 1`)
if (args[0] === '1') {
if (isWelcome) return enviar('*[✔] Ya esta activado❕*')
welcome.push(from)
fs.writeFileSync('./base de dados/database/arquivos/welcome.json', JSON.stringify(welcome))
enviar(mess.only.tobireplay)
} else if (args[0] === '0') {
let position = welcome.indexOf(welcome.find((x) => x === from))
if (position === -1) return enviar(`${comando} No activado❗`)
welcome.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/welcome.json', JSON.stringify(welcome))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]activar/desactivar, Ejemplo ${p + comando} On`)
}
break

case 'leveling':
case 'level':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]activar/desactivar, Ejemplo ${p}${comando} 1`)
if (args[0] === '1') {
if (isLevelingOn) return enviar('*[✔] Ya esta activado✔*')
_leveling.push(from)
fs.writeFileSync('./base de dados/database/arquivos/leveling.json', JSON.stringify(_leveling))
enviar(mess.only.tobireplay)
} else if (args[0] === '0') {
let position = _leveling.indexOf(_leveling.find((x) => x === from))
if (position === -1) return enviar(`${comando} No activado✖`)
_leveling.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/leveling.json', JSON.stringify(_leveling))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]on/off, Ejemplo ${p}${comando} on`)
}
break

case 'antilink':
case 'antienlace':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]1/0 Formato correcto${p + comando} 1`)
if (args[0] === '1') {
if (isAntiLink) return enviar('*[❗] Ya esta activo✔*')
antilink.push(from)
fs.writeFileSync('./base de dados/database/arquivos/antilink.json', JSON.stringify(antilink))
enviar(mess.only.tobireplay)
} else if (args[0] === '0') {
let position = antilink.indexOf(antilink.find((x) => x === from))
if (position === -1) return enviar(`${comando} No activado❕`)
antilink.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/antilink.json', JSON.stringify(antilink))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]1/0, Ejemplo ${p + comando} 1`)
}
break

case 'antifake':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]1/0, Formato correcto ${p + comando} Off`)
if (args[0] === '1') {
if (isAntifaker) return enviar('✔Ya activo')
antifaker.push(from)
fs.writeFileSync('./base de dados/database/arquivos/antifaker.json', JSON.stringify(antifaker))
enviar(mess.only.tobireplay)
} else if (args[0] === '0') {
let position = antifaker.indexOf(antifaker.find((x) => x === from))
if (position === -1) return enviar(`${comando} ❌No activo✖`)
antifaker.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/antifaker.json', JSON.stringify(antifaker))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]1/0, Ejemplo ${p + comando} 1`)
}
break

case 'autconversa':
case 'selfchat':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]1/0, Formato correcto${p + comando} 1`)
if (args[0] === '1') {
if (isAutconversa) return enviar('✅Esta activado✔')
autconversa.push(from)
fs.writeFileSync('./base de dados/database/arquivos/autconversa.json', JSON.stringify(autconversa))
enviar(mess.only.tobireplay)
} else if (args[0] === '0') {
let position = autconversa.indexOf(autconversa.find((x) => x === from))
if (position === -1) return enviar(`${comando} ✖No activo`)
autconversa.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/autconversa.json', JSON.stringify(autconversa))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]1/0, Ejemplo: ${p + comando} 1`) 
}
break

case 'antiflod':
case 'antiflods':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]activar/desactivar, Formato correcto: ${p}${comando} activar`)
if (args[0] === 'activar') {
if (isAntiflod) return enviar('*✔ _Ya activo_*')
antiflod.push(from)
fs.writeFileSync('./base de dados/database/arquivos/_antiflod.json', JSON.stringify(antiflod))
enviar(`[❗] Comando ${comando} Completado✔`)
} else if (args[0] === 'desactivar') {
let position = antiflod.indexOf(antiflod.find((x) => x === from))
if (position === -1) return enviar(`${comando} _No activado_`)
antiflod.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/_antiflod.json', JSON.stringify(antiflod))
enviar(`[❗] Comando ${comando} Apartir de ahora no puede flod los comandos`)
} else {
enviar(`[❗]activar/desactivar, Ejemplo: ${p}${comando} activar`)
}
break

//<~FIM DOS COMANDOS EM GRUPOS

//<~COMEÇO DOS COMANDOS STICKERS
case 'figurinhas':
addFilter(from)
const total_gp2 = `${totalchat.length}`
totalChat = await tobi.chats.all()
charge = charging ? 'si' : 'no'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const figurinhasMenu = await getBuffer(ppimg)
var mediaByTobi = await tobi.prepareMessage(from, figurinhasMenu, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var button9s = [{buttonId: `${p}playrs`, buttonText: {displayText: '⎙ DOWNLOADS⎙'}, type: 1}]
var button9s = {contentText: `${(linguagem.figurinhas(pushname, hr, total_gp2, bateria, ll))}`, footerText: `\`\`\`➤Total Chats: *${totalChat.length}*\`\`\`\n\`\`\`➤Cargando : *${charge}*\`\`\`\n\`\`\`➤Bateria : *${baterai}*\`\`\`\n\`\`\`➤Velocidad : *${latensi.toFixed(4)} s*\`\`\`\n\`\`\`➤Actividad : *${horaOn(os.uptime())}*\`\`\``, buttons: button9s, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
tobi.sendMessage(from, button9s, MessageType.buttonsMessage, {quoted: mek})
break

case 'f':
case 'fig':
case 'gif':
case 'figura':
case 'figu':
case 'figurinha':
case 's':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediat = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediat = await tobi.downloadAndSaveMediaMessage(encmediat)
ron = getRandom('.webp')
exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
fs.unlinkSync(mediat)
if (err) return enviar(`${err}`)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ron} -o ${ron}`, async (error) => {
if (error) return enviar(`${error}`)
tobi.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
fs.unlinkSync(ron)
})
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediat = await tobi.downloadAndSaveMediaMessage(encmedia)
ron = getRandom('.webp')
exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
fs.unlinkSync(mediat)
if (err) return enviar(`${err}`)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ron} -o ${ron}`, async (error) => {
if (error) return enviar(`${error}`)
tobi.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
fs.unlinkSync(ron)
})
})
} else {
enviar(`_Por favor: *${pushname}* marque una imagen o mande video de 6 segundos de duracion❕`)
}
break

case 'sfundo':  
addFilter(from)
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const dlfile1 = await tobi.downloadMediaMessage(encmedia1)
const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `⌬ ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `✿ @${pushname}._`
var mantap1 = await convertSticker(bas641, `${dua}`, `${satu}`)
var st = new Buffer.from(mantap1, 'base64');
tobi.sendMessage(from, st, sticker, {quoted: mek})
} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media2 = await tobi.downloadAndSaveMediaMessage(encmedia2, `./src/sticker/${sender}`)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${SeuNome}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${NomeDoBot}`
const Nombre2 = `${satu}` 
const author101 = `${dua}`
exif.create(Nombre2, author101, `stickwm_${sender}`)
mortandela(from)
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`❎ Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`❎ Error, hubo una falla ${type} en conversion`)
})
.on('end', function () {
console.log('✅ Listo')
exec(`webpmux -set exif ./src/sticker/stickwm_${sender}.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
if (error) return enviar('error')
sendSticker(from, fs.readFileSync(`./src/sticker/${sender}.webp`), mek)
fs.unlinkSync(media2)
fs.unlinkSync(`./src/sticker/${sender}.webp`)
fs.unlinkSync(`./src/sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./src/sticker/${sender}.webp`)
} else {
enviar(`Marque una imagen o video de 10 segundos de duracion✔`)
}
break

case 'st':
addFilter(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
mortandela(from)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
enviar(linguagem.stick())
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
tobi.sendMessage(from, buffer, sticker, {
quoted: mek
})
fs.unlinkSync(rano)
})
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
mortandela(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`Falla de conversion ${tipe} para sticker`)
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
tobi.sendMessage(from, buffer, sticker, {
quoted: mek
})
fs.unlinkSync(rano)
})
})
} else {
enviar(`_Por favor envie una imagen o video con duracion de 10 segundos_`)
}
break

case 'stk':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
mortandela(from)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
fs.unlinkSync(media)
enviar(linguagem.stick())
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar(linguagem.stick())
tobi.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: mek
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
mortandela(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar(linguagem.stick())
tobi.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: mek
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else {
enviar(`_Marque un imagen o video con duracion de 10 segundos_`)
}
break

case 'toimg':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isQuotedSticker) return enviar(`${emoji_bot} _Marque un sticker que no sea animado❕_`)
mortandela(from)
tomg = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
medtmg = await tobi.downloadAndSaveMediaMessage(tomg)
ran = getRandom('.png')
exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
fs.unlinkSync(medtmg)
if (err) return enviar(`${emoji_bot} falla en convertir sticker a imagen, Que no sea gif [ ! ]`)
buffer = fs.readFileSync(ran)
tobi.sendMessage(from, buffer, image, {quoted: mek, caption: '𝓚𝓘𝓣𝓢𝓤𝓜𝓨'})
fs.unlinkSync(ran)
})
break

case 'togif':
addFilter(from) 
if (!isQuotedSticker) return enviar(`${emoji_bot} _Marque un sticker animado❕_`)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await tobi.downloadAndSaveMediaMessage(encmediaaa)
mortandela(from)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
tobi.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '𝓚𝓘𝓣𝓢𝓤𝓜𝓨'})
fs.unlinkSync(mediaaa)
}
break

case 'figupet':
addFilter(from)               
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figupet = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figupet.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Error`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('_Por favor necesita marcar imagen o enviar una con ese comando [ ! ]_')
}
break

case 'arma':
case 'figuarma':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figuarma = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuarma.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuarma1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
exec(`wget ${figuarma1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Error`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('_Marque una imagen o envie con el comando [ ! ]_')
}
break

case 'triggered':
case 'figuger':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)  
owgi = await tobi.downloadAndSaveMediaMessage(ger)
triggered = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${triggered.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuger1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
exec(`wget ${figuger1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Error`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('_Marque una imagen_')
}
break

case 'raimbow':
case 'arcoirirs':
case 'figulgbt':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/rainbow?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Error`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('_Marque o envie una imagen con el comando_')
}
break

case 'figuwasted':
addFilter(from)              
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figuwasted = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuwasted.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuwasted1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`
exec(`wget ${figuwasted1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Error`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('_Etiqueta una imagen con el comando_')
}
break

case 'preso':
case 'figupreso':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
preso = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${preso.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
preso1 = `https://api-exteam.herokuapp.com/api/jail?img=${imgtrg}`
exec(`wget ${preso1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`Error`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('_Etiqueta a una imagen_')
}
break

case 'figuinvert':
case 'invert':
case 'figuinvertida':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figuinvertida = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuinvertida.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuinvertida1 = `https://api-exteam.herokuapp.com/api/invert?img=${imgtrg}`
exec(`wget ${figuinvertida1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`ERROR `)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('_Etiqueta una imagen_')
}
break

case 'figuprocurado':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/procurado?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`ERROR `)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('_Marque una imagen o envie_')
}
break

case 'attp':
addFilter(from) 
if (args.length < 1) return enviar(resposta.attp)
mortandela(from)
attp2 = await getBuffer(`https://api.xteam.xyz/${marker}?file&text=${encodeURIComponent(body.slice(5))}`)
tobi.sendMessage(from, attp2, sticker, {quoted: mek})
break

case 'borra':
case 'figuborrada':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/pixelate?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('_Por favor marque una imagen_')
}
break           
//<~FIM DOS COMANDOS DE FIGURINHAS

//<~COMEÇO DOS COMANDOS AUDIOS
case 'playrs':
addFilter(from) 
const total_gp3 = `${totalchat.length}`
totalChat = await tobi.chats.all()
charge = charging ? 'si' : 'no'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const playrsMenu = await getBuffer(ppimg)
var mediaByTobi = await tobi.prepareMessage(from, playrsMenu, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var button2s = [{buttonId: `${p}grupo`, buttonText: {displayText: '⎙ MENU GP ⎙'}, type: 1}]
var button2s = {contentText: `${(linguagem.playrs(pushname, hr, total_gp3, bateria, ll))}`, footerText: `\`\`\`➤Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`➤Cargando : *${charge}*\`\`\`\n\`\`\`➤Bateria : *${baterai}*\`\`\`\n\`\`\`➤Velocidad : *${latensi.toFixed(4)} s*\`\`\`\n\`\`\`➤Actividad : *${horaOn(os.uptime())}*\`\`\``, buttons: button2s, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
tobi.sendMessage(from, button2s, MessageType.buttonsMessage, {quoted: mek})
break

case 'play':
if (args.length < 1) return enviar(resposta.play)
mortandela(from)
testeki = args.join(' ')
if (!testeki.endsWith("-doc")){
res = await yts(`${testeki}`).catch(e => {
enviar('_[ ! ] Error en enviar mp3_')
})
let thumbInfo = `▷「  *${NomeDoBot}*  」◁
🍒𝐓𝐈𝐓𝐔𝐋𝐎: ${res.all[0].title}
🍓𝐈𝐃: ${res.all[0].videoId}
🍎𝐏𝐑𝐄𝐒𝐄𝐍𝐓𝐀𝐂𝐈𝐎́𝐍: ${res.all[0].ago}
🍏𝐕𝐈𝐒𝐔𝐀𝐋𝐈𝐙𝐀𝐂𝐈𝐎𝐍𝐄𝐒: ${res.all[ 0].views}
🍒𝐃𝐔𝐑𝐀𝐂𝐈𝐎́𝐍: ${res.all[0].timestamp}
🍓𝐂𝐀𝐍𝐀𝐋: ${res.all[0].author.name}
🍎𝐋𝐈𝐍𝐊: ${res.all[0].author.url}
`
kkkkkkmuitoSexo = await getBuffer(res.all[0].image)
sendButImage(from, `${thumbInfo}`, `${ll}©KitsumyEdit4.${ll}`, kkkkkkmuitoSexo, [{buttonId: `${p}play6 ${q}`, buttonText: {displayText: `⎙ AUDIO ⎙`,}, type: 1,}, {
buttonId: `${p}playvid2 ${q}`, buttonText: {displayText: `⎙ VIDEO ⎙`}, type: 1}, {buttonId: `${p}play7 ${q}`, buttonText: {displayText: `⎙ DOCUMENTO ⎙`}, type: 1}]);
res = await y2mateV(res.all[0].url).catch(e => {
enviar('_[ ! ] Error de conexion al servidor_')
})
}
break

case 'play1':
addFilter(from) 
if (args.length < 1) return enviar(resposta.play)
teks = args.join(' ')
mortandela(from)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
enviar('_[ ! ] Error intente nuevamente _')
})
let thumbInfo = `「  YOUTUBE DOWNLOAD 」
🍓𝐓𝐈𝐓𝐔𝐋𝐎: ${res.all[0].title}
🍒𝐈𝐃: ${res.all[0].videoId}
🍎𝐏𝐑𝐄𝐒𝐄𝐍𝐓𝐀𝐂𝐈𝐎́𝐍: ${res.all[0].ago}
🍒𝐕𝐈𝐒𝐔𝐀𝐋𝐈𝐙𝐀𝐂𝐈𝐎𝐍𝐄𝐒: ${res.all[0].views}
🍏𝐃𝐔𝐑𝐀𝐂𝐈𝐎́𝐍: ${res.all[0].timestamp}
🍓𝐂𝐀𝐍𝐀𝐋: ${res.all[0].author.name}
🍒𝐋𝐈𝐍𝐊: ${res.all[0].author.url}

*_Aguarde por favor............_*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
enviar('_[ ! ] Error el bot no se desconecto del servidor o hubo una falla_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
break

case 'play2':
addFilter(from)    
if (args.length < 1) return enviar(resposta.play)
mortandela(from)
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${q}`)
lagu = await getBuffer(anu.result.url)		
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp3', quoted: mek})
.catch(() => enviar(`[✿] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Situacion : *Error* \n*『Intente Nuevamente』*`))
break

case 'play3':
addFilter(from)  
if (args.length < 1) return enviar(resposta.play)
mortandela(from)
play_4 = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${q}`)
buffer = await getBuffer(play_4.result.thumb)
lagu = await getBuffer(play_4.result.url)
tobi.sendMessage(from, buffer, image, {quoted: mek, caption: `${play_4.result.title}`})
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => enviar(`[✿] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Situacion : *Error* \n*『Intente Nuevamente』*`))
break

case 'play3':
addFilter(from) 
if (args.length < 1) return enviar(resposta.play)
testeki = body.slice(6)
mortandela(from)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/audio?video=${testeki}`)
lagu = await getBuffer(anu.Link_De_Download)
buffer = await getBuffer(anu.Imagem_Do_Video)
testekkzu = `🍓𝐓𝐈𝐓𝐔𝐋𝐎: ${anu.Titulo_Encontrado}\n🍎𝐓𝐀𝐌𝐀𝐍̃𝐎: ${anu.Tamanho_Do_Video}\n🍏𝐃𝐔𝐑𝐀𝐂𝐈𝐎́𝐍: ${anu.Duracao_Do_Video}\n🍒𝐋𝐈𝐍𝐊: ${anu.Link_Do_Video}`
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${testekkzu}`})		
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => enviar(`[✿] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Situacion : *Error* \n*『Intente Nuevamente』*`))
break

case 'play4':
addFilter(from) 
if (args.length < 1) return enviar(resposta.play)
hay = body.slice(6)
mortandela(from)
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=S38aL2CO2Ez4wZjJWxD2vaJKKrC&q=${hay}`)
lagu = await getBuffer(anu.result.url_audio)
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => enviar(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Situacion : *Error* \n*『Intente Nuevamente』*`))
break

case 'play5':
addFilter(from) 
if (args.length < 1) return enviar(resposta.play)
mortandela(from)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/audio?video=${q}`)
lagu = await getBuffer(anu.Link_De_Download)		
kapaTobiAqui = `🍒𝐓𝐈𝐓𝐔𝐋𝐎: ${anu.Titulo_Encontrado}\n🍓𝐂𝐀𝐍𝐀𝐋: ${anu.Link_Do_Video}\n🍏𝐃𝐔𝐑𝐀𝐂𝐈𝐎́𝐍: ${anu.Duracao_Do_Video}\n🍎𝐓𝐀𝐌𝐀𝐍̃𝐎: ${anu.Tamanho_Do_Video}`
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${kapaTobiAqui}`})
tobi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => enviar(`[✿] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Situacion : *Error* \n*『Intente Nuevamente』*`))
break

case 'play6':
addFilter(from) 
if (args.length < 1) return enviar(resposta.play)
teks = args.join(' ')
mortandela(from)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
enviar('_[ ! ] Error no se encontro resultados_')
})
res = await y2mateA(res.all[0].url).catch(e => {
enviar('_[ ! ] Error el servidor fallo intente nuevamente_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
break

case 'play7':
addFilter(from) 
if (args.length < 1) return enviar(resposta.play)
teks = args.join(' ')
mortandela(from)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
enviar('_[ ! ] Error no encontre resultados_')
})
res = await y2mateA(res.all[0].url).catch(e => {
enviar('_[ ! ] Error el servidor a fallado_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/m4a', filename: res[0].output})
}
break

case 'playvid':
addFilter(from) 
if (args.length < 1) return enviar(resposta.play)
teks = args.join(' ')
mortandela(from)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
enviar('_[ ! ] Error de descarga_')
})
enviar(`VIDEO ${res.all[0].title} PLAY`)
let thumbInfo = `「  *${NomeDoBot}*  」
🍓𝐓𝐈𝐓𝐔𝐋𝐎: ${res.all[0].title}
🍒𝐈𝐃: ${res.all[0].videoId}
🍏𝐏𝐑𝐄𝐒𝐄𝐍𝐓𝐀𝐂𝐈𝐎́𝐍: ${res.all[0].ago}
🍎𝐕𝐈𝐒𝐔𝐀𝐋𝐈𝐙𝐀𝐂𝐈𝐎𝐍𝐄𝐒: ${res.all[0].views}
🍓𝐃𝐔𝐑𝐀𝐂𝐈𝐎́𝐍: ${res.all[0].timestamp}
🍒𝐂𝐀𝐍𝐀𝐋: ${res.all[0].author.name}
🍏𝐋𝐈𝐍𝐊: ${res.all[0].author.url}

*_Aguarde, enviando....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateV(res.all[0].url).catch(e => {
enviar('_[ ! ] Error de conectar con el servidor_')
})
sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
}
break

case 'playvid1':  
addFilter(from) 
if (args.length < 1) return enviar(resposta.play)
mortandela(from)
playvideoByTobi = q
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/video?video=${playvideoByTobi}`)   
lagu = await getBuffer(anu.Link_De_Download)
tobi.sendMessage(from, lagu, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
.catch(() => enviar(`[✿] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Situacion : *Error* \n*『Intente Nuevamente』*`))
break

case 'playvid2':
addFilter(from) 
if (args.length < 1) return enviar(resposta.play)
mortandela(from)
if (!q.endsWith("-doc")){
res = await yts(`${q}`).catch(e => {
enviar('_[ ! ] Error de descarga_')
})
res = await y2mateV(res.all[0].url).catch(e => {
enviar('_[ ! ] Error el servidor a fallado_')
})
sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
}
break

case 'tomp3':
addFilter(from) 
tobi.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return enviar(`_Marque un video con ${p}tomp3`)
mortandela(from)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await tobi.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
if (err) return enviar('❌Lo sentimos a fallado la converison❌')
buffer = fs.readFileSync(ran)
tobi.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
break

case 'rapido':  
case 'nightcore':
addFilter(from)
if (!isQuotedAudio) return enviar('Marque un audio')
enviar(`${emoji_bot} , Adicionando efeito rápido....`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bmedia = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bmedia} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bmedia)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   

case 'devagar': 
case 'slow':
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito devagar....`)
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await tobi.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'esquilo':
addFilter(from) 
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito esquilo....`)
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await tobi.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'gemuk': 
case 'gigante':
addFilter(from)
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito gigante....`)
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await tobi.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'fast': 
case 'rapid':
addFilter(from)
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito rapido 3x....`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
amedia = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${amedia} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(amedia)
if (err) return enviar('Erro')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'baixo': 
case 'bass':
addFilter(from) 
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito baixo 50hz....`) 
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tobi.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'earrape': 
case 'estourar':
addFilter(from)       
if (!isQuotedAudio) return enviar('Marque um áudio')
enviar(`${emoji_bot} Aguarde, Adicionando efeito estorado....`)
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tobi.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'ytsearch':
addFilter(from)
if (args.length < 1) return enviar(resposta.play)
const srch = args[0];
try {
var aramas = await yts(srch);
} catch {
return await tobi.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
});
ytresult += `◩ *${NomeDoBot}*`
await tobi.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./base de dados/lib/bot/fotos/logo.jpeg'),quoted: mek, caption: ytresult})
break

case 'sombrio':
addFilter(from) 
encmmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mehdia = await tobi.downloadAndSaveMediaMessage(encmmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mehdia} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mehdia)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
})
break

//<~COMEÇO DOS COMANDOS DE JOGOS
case 'juegos':
addFilter(from) 
const total_gp4 = `${totalchat.length}`
totalChat = await tobi.chats.all()
charge = charging ? 'si' : 'no'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const jogosMenu = await getBuffer(ppimg)
var mediaByTobi = await tobi.prepareMessage(from, jogosMenu, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var button3s = [
{buttonId: `${p}Criador`, buttonText: {displayText: '⎙ CREADOR ⎙'}, type: 1},
]
var button3s = {contentText: `${(linguagem.jogos(pushname, hr, total_gp4, bateria, ll))}`, footerText: `\`\`\`➣Total Chats: *${totalChat.length}*\`\`\`\n\`\`\`➣Cargando: *${charge}*\`\`\`\n\`\`\`➣Bateria: *${baterai}*\`\`\`\n\`\`\`➣Velocidad: *${latensi.toFixed(4)} s*\`\`\`\n\`\`\`➣Actividad: *${horaOn(os.uptime())}*\`\`\``, buttons: button3s, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
tobi.sendMessage(from, button3s, MessageType.buttonsMessage, {quoted: mek})
break

case 'slot':
case 'girar':
var somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : ??') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : ?? : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '?? : 🥥 : ??') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : ?? : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Felicidades has ganado"
} else {
var vitr = "Lo sentimos perdiste"
}
if (!bater) {
bateriaLoliIta = `${tempo}`
}
if (bater) {
bateriaLoliIta = `Bateria : *${bater}*`
}
const buttons = [{buttonId: `${p}sexokslot`, buttonText: {displayText: `🎰 SIGUIENTE 🎰`}, type: 1}]
const buttonMessage = { contentText: 
`_Consiga 3 iguales para ganar_
▛▀▀▀▀▀▀▀▀▀▀▀▀▀▜
▌         [⛁ SLOT ⛁| 777 ]         ▌ 
▌                                                   ▌
▌                                                   ▌
▌             ${somtoy}                    ▌
▌                                                   ▌
▌                                                   ▌
▌        [⛁ SLOT ⛁ | 777 ]         ▌
▙▄▄▄▄▄▄▄▄▄▄▄▄▄▟

${vitr}`, footerText: `${bateriaLoliIta}`, buttons: buttons, headerType: 1}
if (vitr == "Lo sentimos perdiste") {
setTimeout( () => {
enviar(`Felicidades usted optiene ${ppg} xp`)
}, 1100)
}
tobi.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
break

case 'preto':
case 'feio':
case 'lixo':
case 'burro':
case 'gordo':
case 'pobre':
case 'corno':
case 'bonito':
case 'macaco':
case 'gostoso':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
d = []
teks = `El mas *${comando}* es : `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
break

case 'amongus':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Mencione a alguien')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c u t e d
                  1 impostor permanece  。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
mentions(`${sus}`, mentioned, true)
break

case 'getn':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque un mensaje')
var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = tobi.contacts[ambl] != undefined ? tobi.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : tobi.contacts[ambl].notify || tobi.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
enviar(sname)
break

case 'getname':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (args.length < 1) return enviar(`Tag alguém`)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const arroz = tobi.contacts[mentioned] != undefined ? tobi.contacts[mentioned].vname || tobi.contacts[mentioned].notify: undefined
nome = `${arroz}`
tobi.sendMessage(from, nome, text, {quoted: mek})	
break

case 'dado':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./base de dados/datauser/dados/'+dadu+'.webp')
tobi.sendMessage(from, dador, sticker, {quoted: mek})
break

case 'tagme':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
const tagme = {text: `➤ @${sender.split("@")[0]} `, contextInfo: {mentionedJid: [sender]}}
tobi.sendMessage(from, tagme, text)
break

case 'cassino':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
tobi.updatePresence(from, Presence.composing) 
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🍒',
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : ??',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Lo sentimos perdiste"
} else {
var Vitória = "Perdistes..."
}
if (!bater) {
bateriaLoliIta = `bateria: Não disponível!`
}
if (bater) {
bateriaLoliIta = `Bateria : *${bater}*`
}
const cassinoButtons = [{buttonId: `${p}cassino`, buttonText: {displayText: `❇ SIGUIENTE ❇`}, type: 1}]
const buttonkMessage = {
contentText: 
`
▛▀▀▀▀▀▀▀▀▀▀▀▜
▌►        ${somtoy2}
▙▄▄▄▄▄▄▄▄▄▄▄▟

*${Vitória}*`,
footerText: `${bateriaLoliIta}`, buttons: cassinoButtons, headerType: 1}
tobi.sendMessage(from, buttonkMessage, MessageType.buttonsMessage, {quoted: mek})
if (Vitória == "Felicidades has ganado") {
dinherocassino = Math.floor(Math.random() * 14) + 10000
addKoinUser(sender, dinherocassino)
setTimeout( () => {
enviar(`Ganastes *${dinherocassino}* coins⛁`)
}, 1100)
}
break

case "ppt": 
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (args.length < 1) return enviar(linguagem.tterro())
ppt = ["piedra","papel","tijera"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Has ganado ${ppg} en XP`
if ((pptb == "piedra" && args == "papel") || 
(pptb == "papel" && args == "tijera") || 
(pptb == "tijera" && args == "piedra")) {
var vit = "vitoria"
} else if ((pptb == "piedra" && args == "tijera") || 
(pptb == "papel" && args == "piedra") || 
(pptb == "tijera" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "piedra" && args == "piedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tijera" && args == "tijera")) {
var vit = "empate"
} else if (vit = "undefined") {
return enviar(linguagem.tterro())
}
if (vit == "vitoria") {
var tes = "Felicidades ganaste"
}
if (vit == "derrota" ) {
var tes = "El bot te acaba de ganar"
}
if (vit == "empate" ) {
var tes = "Empate nadie gano"
}
enviar(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Victoria del jugador") {
enviar(pph)
}
break

case 'mo':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "DELTA Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "DELTA dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado DELTA", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "DELTA dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Tu eres:\n\n${gado}`
enviar(hisil)
break

case 'p':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
const sn = ['si', 'no']
gosto = body.slice(3)
if (args.length < 1) return tobi.sendMessage(from, `Forma correcta...\nEjemplo: ${p}sn y ${SeuNome} eres gay?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegun mis calculos creo que... ${jawab}`
enviar(hasil)
break

case 'chance':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
tobi.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return tobi.sendMessage(from, `Forma correcta\nEjemplo: ${p}chance de ${SeuNome} ser un paquete`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `Tu chance ${body.slice(7)}\n\nde... ${random}%`
tobi.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break

case 'tictactoe':
addFilter(from) 
const limitrl = getLimit(sender, daily)
if (!isGroup) {
enviar(linguagem.group())
} else if (tttset.tttstatus == "on") {
enviar(`
「❗ESPERE❗ 」

 Estan jugando aun, por favor espere a que termine el juego`)
} else if (tttset.waitingTime == "on") {
enviar(`
「❗ESPERE 8 MINUTOS❗ 」

Alguien jugo recientemente por favor espere...`)
} else if (args == 0 || (args != 'Facil' && args != 'Facil' && args != 'FACIL' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'Dificil' && args != 'Dificil' && args != 'DIFICIL'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
enviar(`
「❗Elija tu Modo de Juego❗ 」

${p}tictactoe facil
Modos: ▌FACIL ▌NORMAL ▌DIFICIL`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
enviar(`
「❗ESPERE❗」

Hay un juego aun , intentalo despues de 8 minutos`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'facil' || args == 'facil' || args == 'FACIL') {
tttset.tttdifficulty = "FACIL"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'dificil' || args == 'dificil' || args == 'DIFICIL') {
tttset.tttdifficulty = "DIFICIL"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`▛❗   INICIO   ❗ 」╰───────────────╮  \n╭───────────────╯\n▌Tictactoe:\n▌Modo: ${tttset.tttdifficulty}\n╰───────────────╯`, text, tescuk, crtt)
tobi.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
tobi.sendMessage(from,`Si no sabe como se juega mande: ${p}ayuda`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break

case 'nivel':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isLevelingOn) return enviar(resposta.leveis)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return enviar(linguagem.levelnol())
var requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
var getLevel = getLevelingLevel(sender)
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `▛▀▀▀▀𝙻ᴇᴠᴇʟ ᴜᴘ▀▀▀▀▜\n➤: @${sender.split('@')[0]}\n${up_porcenntagem}`}}}
tobi.sendMessage(from, leveltab(sender, pushname, userLevel, userXp, patt, getLevel), text, {quoted: level_quetod, contextInfo: {mentionedJid: [sender]}})
.catch(async(err) => {
console.error(err)
await enviar(`Error!\n${err}`)
})
break

case 'ranklevel':
case 'nivelrank':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isLevelingOn) return enviar(resposta.leveis)
let userh = _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = `❖ RANK NIVEL ❖\n\n`
let nom = 0
try {
for (let i = 0; i < 5; i++) {
nom++
leaderboardlvl += `❖ @${userh[i].id.replace('@s.whatsapp.net', '')}\n❖XP: ${userh[i].xp}\n❖NIVEL: ${userh[i].level}\n\n`
}
tobi.sendMessage(from, leaderboardlvl, text, {quoted: mek})
} catch (err) {
console.error(err)
await enviar(`Almenos 10 usuarios para proceder este comando`)
}
break

case 'cuadro':
addFilter(from) 
tttset.playertest = sender
if (!isGroup) {
enviar(linguagem.group())
} else if (tttset.tttstatus == "off") {
enviar(`Aun no empezo el juego\nDigite ${p}tictactoe [DIFICULTAD] para iniciar`)
} else if (tttset.player != tttset.playertest) {
enviar(`Aun hay un juego en este grupo\nPor favor espere...`)
} else if (tttset.tttantibug == "on") {
enviar(`Aguarde que la partida concluya...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
enviar(`Digite el comando con una coordenada\nEjemplo: ${p}cuadro a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
enviar('El espacio ya esta ocupado\nElija otra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
enviar('El espacio esta ocupado\nUse otra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
enviar('El espacio esta ocupado\nUse otra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
enviar('El espacio esta ocupado\nUse otra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
enviar('El espacio esta ocupado\nUse otra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
enviar('El espacio esta ocupado\nUse otra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
enviar('El espacio esta ocupado\nUse otra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
enviar('El espacio esta ocupado\nUse otra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
enviar('El espacio esta ocupado\nUse otra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
enviar(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "FACIL":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "DIFICIL":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
tobi.sendMessage(from, `『❗』Usuario *${pushname}* Has ganado pero no verdaderamente\n\n➣  RECOMPENSA: +${randomTTTXP} XP`, text)
} else {
tobi.sendMessage(from, `『👑』Felicidades *${pushname}* Has ganado.`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "??"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "FACIL":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "DIFICIL":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
tobi.sendMessage(from, `『❌』Lo sentimos *${pushname}* Has perdido\n\n➣  CASTIGO: +${randomTTTXP} XP`, text)
} else {
tobi.sendMessage(from, `『👑』Victoria de *${NomeDoBot}* Usted a perdido`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "??"; esp.b3 = "🔲"
esp.c1 = "??"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
tobi.sendMessage(from, `『❇』Empate entre *${pushname}* e *${NomeDoBot}*\n\n ➣ Nadie gano y perdio`, text)
} else {
tobi.sendMessage(from, `『✿』Empate entre *${pushname}* e *${NomeDoBot}*`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break

case 'ayuda':
addFilter(from) 
tobi.sendMessage(from, ttthelp(p), text, {quoted:mek})
break

case 'victorias':
addFilter(from) 
if (!isGroup) return enviar(linguagem.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
tobi.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'tictactoerank':
addFilter(from) 
if (!isGroup) return enviar(linguagem.group())
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【RANK DE LOS JUGADORES】\n\n'
try {
for (let i = 0; i < 7; i++) {
if (i == 0) {board += `${i + 1}º : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎲\n║ ➣ Derrotas: ${tictactoe[i].defeats} 🎲\n║ ➣ Empates: ${tictactoe[i].ties} 🎲\n║ ➣ Pontos: ${tictactoe[i].points} 🎲\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º ❖ : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Victorias: ${tictactoe[i].wins} 🎲\n║ ➣ Derrotas: ${tictactoe[i].defeats} 🎲\n║ ➣ Empates: ${tictactoe[i].ties} 🎲\n║ ➣ Puntos: ${tictactoe[i].points} 🎲\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🎲 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Victorias: ${tictactoe[i].wins} 🎲\n║ ➣ Derrotas: ${tictactoe[i].defeats} 🎲\n║ ➣ Empates: ${tictactoe[i].ties} 🎲\n║ ➣ Puntos: ${tictactoe[i].points} 🎲\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 3) {board += `${i + 1}º ❖ : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Victorias: ${tictactoe[i].wins} ??\n║ ➣ Derrotas: ${tictactoe[i].defeats} 🎲\n║ ➣ Empates: ${tictactoe[i].ties} 🎲\n║ ➣ Puntos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 4) {board += `${i + 1}º ✿ : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Victorias: ${tictactoe[i].wins} 🎲\n║ ➣ Derrotas: ${tictactoe[i].defeats} 🎲\n║ ➣ Empates: ${tictactoe[i].ties} 🎲\n║ ➣ Puntos: ${tictactoe[i].points} 🎲\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 5) {board += `${i + 1}º ❖ : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Victorias: ${tictactoe[i].wins} 🎲\n║ ➣ Derrotas: ${tictactoe[i].defeats} ??\n║ ➣ Empates: ${tictactoe[i].ties} 🎲\n║ ➣ Puntos: ${tictactoe[i].points} 🎲\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 6) {board += `${i + 1}º ❖ : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Victorias: ${tictactoe[i].wins} 🎲\n║ ➣ Derrotas: ${tictactoe[i].defeats} 🎲\n║ ➣ Empates: ${tictactoe[i].ties} 🎲\n║ ➣ Puntos: ${tictactoe[i].points} 🎲\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await tobi.sendMessage(from, `Humm, necesita estar minimo 3 personas para esto...`, text, {quoted: mek})
}
break

case 'pkaksla':
addFilter(from)
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
enviar(hasil)
break
   
case 'gay':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'mmm...usted es hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'Tengo dudas darck...😑'} else if (boiola == 32 ) {bo = 'Tengo dudas darck...😑'} else if (boiola == 33 ) {bo = 'Tengo dudas darck...😑'} else if (boiola == 34 ) {bo = 'Tengo dudas darck...??'} else if (boiola == 35 ) {bo = 'Tengo dudas darck...??'} else if (boiola == 36 ) {bo = 'Tengo dudas darck...😑'} else if (boiola == 37 ) {bo = 'Tengo dudas darck...??'} else if (boiola == 38 ) {bo = 'Tengo dudas darck...😑'} else if (boiola == 39 ) {bo = 'Tengo dudas darck...😑'} else if (boiola == 40 ) {bo = 'Tengo dudas darck...😑'} else if (boiola == 41 ) {bo = 'tengo razon?😏'} else if (boiola == 42 ) {bo = 'tengo razon?😏'} else if (boiola == 43 ) {bo = 'tengo razon?😏'} else if (boiola == 44 ) {bo = 'tengo razon?😏'} else if (boiola == 45 ) {bo = 'tengo razon?😏'} else if (boiola == 46 ) {bo = 'tengo razon?😏'} else if (boiola == 47 ) {bo = 'tengo razon?😏'} else if (boiola == 48 ) {bo = 'tengo razon?😏'} else if (boiola == 49 ) {bo = 'tengo razon?😏'} else if (boiola == 50 ) {bo = 'No lo es???'} else if (boiola > 51) {bo = 'eres gay??'
}
hasil = `Tu eres ${random}% gay\n\n${bo}`
enviar(hasil)
break

case 'ruleta':
addFilter(from) 
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./base de dados/database/figurinhas/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Esta ves el cuadro estaba vacio."
} else if (tpa == "pow") {
var morte = "Lo sentimos pero POW!"
}
if (morte == "POW perdiste !") {
setTimeout( () => {
tobi.sendMessage(from, figb, sticker, {quoted: mek})
}, 2100)
}
setTimeout( () => {
tobi.sendMessage(from, morte, text, {quoted: mek})
}, 2300)
break

case 'linflip':
addFilter(from) 
const cara = fs.readFileSync('./base de dados/datauser/cara/cara.webp');
const coroa = fs.readFileSync('./base de dados/datauser/cara/coroa.webp');
cararo = ["cara", "cruz"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
enviar(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./base de dados/datauser/cara/'+fej+'.webp')
tobi.sendMessage(from, cararoa, sticker, {quoted: mek})
break
//<~FIM DOS COMANDOS DE JOGOS

//<~COMEÇO DOS HENTAIS
case 'animes':
addFilter(from) 
const total_gp6 = `${totalchat.length}`
var totalchat = `${totalchat.length}`
totalChat = await tobi.chats.all()
charge = charging ? 'si' : 'no'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const animesMenu4431 = await getBuffer(ppimg)
var mediaByTobi = await tobi.prepareMessage(from, animesMenu4431, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var button6s = [{buttonId: `${p}bankloja`, buttonText: {displayText: '⛁ MENU COINS ⛁'}, type: 1}]
var button6s = {contentText: `${(linguagem.animes(pushname, hr, total_gp6, bateria, ll))}`, footerText: `\`\`\`➤Total Chats: *${totalChat.length}*\`\`\`\n\`\`\`➤Cargando: *${charge}*\`\`\`\n\`\`\`➤Bateria: *${baterai}*\`\`\`\n\`\`\`➤Velocidad: *${latensi.toFixed(4)} s*\`\`\`\n\`\`\`➤Actividad: *${horaOn(os.uptime())}*\`\`\``, buttons: button6s, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
tobi.sendMessage(from, button6s, MessageType.buttonsMessage, {quoted: mek})
break

case 'zoro':
case 'nami':
case 'carrot':
case 'buggy':
case 'shanks': 
case 'sakura':
case 'hinata':
case 'madara': 
case 'sasuke':
case 'obito':
case 'shikamaru':
case 'shikaku':
case 'shikadai':
case 'asuma': 
case 'luffy':
addFilter(from)
mortandela(from)
teks = `${comando}`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return enviar('_[ ! ] Error, intentelo nuevamente_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
break

case 'ace':
mortandela(from)
pw = ["wallpaper ace", "ace"]
teks = pw[Math.floor(Math.random() * pw.length)]
res = await googleImage(teks, google)
function google(error, result){
if (error){ return enviar('_[ ! ] Ocurrio un error intentelo nuevamente_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
break

case 'holo':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado✔`) 
res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'erofeet':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado`)
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'trap':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado✔`)
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'eron':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado`)
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'anal':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado✔`)
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'ero':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'cum':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'les':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'holoero':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case  'hentai':
addFilter(from) 
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
try {
tk = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(tk.url)
tobi.sendMessage(sender, buffer, image, {quoted: mek, thumbnail:null})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'eroyuri':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'hentain':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case  'neko':
addFilter(from)
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
try {
znn = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(znn.url)
tobi.sendMessage(sender, buffer, image, {caption: `${comando}, certo?`, quoted: mek, thumbnail:null})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'lewd':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'solog':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'feet':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'feetg':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'classic':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'erokemo':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'futanari':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'femdom':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'blowjob':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'pwankg':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'lewdk':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case'boobs':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'spank':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'trapnime':
addFilter(from)
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
try {
tobir = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(tobir.url)
tobi.sendMessage(sender, buffer, image, { quoted: mek, thumbnail:null})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'solo':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'erok':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'feed':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'hololewd':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break

case 'lewdkemo':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) enviar(`『❗』${comando} enviado a su privado ✔`)
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
enviar(linguagem.erro())
}
break
//<~FIM DOS COMANDOS DE HENTAI

//<~COMEÇO DOS COMANDOS ANIMES
case 'bully':
mortandela(from)
try {
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/anime/valentao`)
let contentt = await getBuffer(anu.Resultado)
const media = await tobi.prepareMessage(from, contentt, MessageType.image, { thumbnail: null})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [{buttonId: `${p + comando}`, buttonText: {displayText: '㊙ SIGUIENTE ㊙'}, type: 1}, {buttonId: `${p}Loli`, buttonText: {displayText: '🈲   NAMI   🈲'}, type: 1}]
const btn1 = {contentText: `*『${NomeDoBot}™』*\n\n${ll}${pushname} Para otra imagen abajo!! ${ll}`, footerText: `${mtSexo}`, buttons: buttons1, headerType: 4, imageMessage: qweriio.message.imageMessage}
tobi.sendMessage(from, btn1, MessageType.buttonsMessage, {quoted: mek})
} catch (e) {
enviar(linguagem.erro())
enviar(`${e}`)
}
break

case 'loli':
mortandela(from)
try {
nextloliCmd = await getBuffer(`https://source-apis.herokuapp.com/loli`)
var mediakkkTobi = await tobi.prepareMessage(from, nextloliCmd, MessageType.image, { thumbnail: null})
var qweriioByTobi = mediakkkTobi.message["ephemeralMessage"] ? mediakkkTobi.message.ephemeralMessage : mediakkkTobi
const nextloliByTobi = [{buttonId: `${p}loli`, buttonText: {displayText: '㊙ SIGUIENTE ㊙'}, type: 1}, {buttonId: `${p}waifu`, buttonText: {displayText: '🈵    ZORO   🈵'}, type: 1}]
const btn1ByTobi = {contentText: `*『${NomeDoBot}™』*\n\n${ll}${pushname} Para otra imagen abajo ${ll}`, footerText: `${mtSexo}`, buttons: nextloliByTobi, headerType: 4, imageMessage: qweriioByTobi.message.imageMessage}
tobi.sendMessage(from, btn1ByTobi, MessageType.buttonsMessage, {quoted: mek})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'waifu':
mortandela(from)
try {
var nextloliCmd = await getBuffer(`https://leyscoders-api.herokuapp.com/api/random-waifu?apikey=IkyOgiwara`)
var mediakkkTobi = await tobi.prepareMessage(from, nextloliCmd, MessageType.image, { thumbnail: null})
var qweriioByTobi = mediakkkTobi.message["ephemeralMessage"] ? mediakkkTobi.message.ephemeralMessage : mediakkkTobi
const nextwaifuByTobi = [{buttonId: `${p}waifu`, buttonText: {displayText: '🈺 SIGUIENTE 🈺'}, type: 1}, {buttonId: `${p}hinata`, buttonText: {displayText: '㊙ HINATA ㊙'}, type: 1}]
const btn1waiguByTobi = {contentText: `*『${NomeDoBot}™』*\n\n${ll}${pushname} Quiere otra imagen? ${ll}`, footerText: `${mtSexo}`, buttons: nextwaifuByTobi, headerType: 4, imageMessage: qweriioByTobi.message.imageMessage}
tobi.sendMessage(from, btn1waiguByTobi, MessageType.buttonsMessage, {quoted: mek})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'megumin':
mortandela(from)
try {
tobiu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
var nextloliCmd = await getBuffer(tobiu.url)
var mediakkkTobi = await tobi.prepareMessage(from, nextloliCmd, MessageType.image, { thumbnail: null})
var qweriioByTobi = mediakkkTobi.message["ephemeralMessage"] ? mediakkkTobi.message.ephemeralMessage : mediakkkTobi
var meguminByTobi = [{buttonId: `${p + comando}`, buttonText: {displayText: '🈵 SIGUIENTE 🈵'}, type: 1}, {buttonId: `${p}bully`, buttonText: {displayText: '㊗ BULLING ㊗'}, type: 1}]
const meguminByTobinByTobi = {contentText: `*『${NomeDoBot}™』*\n\n${ll}${pushname} Quiere otra imagen?? ${ll}`, footerText: `${mtSexo}`, buttons: meguminByTobi, headerType: 4, imageMessage: qweriioByTobi.message.imageMessage}
tobi.sendMessage(from, meguminByTobinByTobi, MessageType.buttonsMessage, {quoted: mek})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'pinterest':
addFilter(from)
mortandela(from)
teks = `${q}`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return enviar('_[ ! ] Error no encontre resultados_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
break
//<~FIM DOS COMANDOS DE ANIMES

//<~COMEÇO DOS COMANDOS DO DONO
case 'criador':
addFilter(from) 
const total_gp7 = `${totalchat.length}`
totalChat = await tobi.chats.all()
charge = charging ? 'si' : 'no'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const criadorMenu = await getBuffer(ppimg)
var mediaByTobi = await tobi.prepareMessage(from, criadorMenu, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var button4s = [{buttonId: `${p}Infobot`, buttonText: {displayText: '⎙ INFO BOT ⎙'}, type: 1}]
var button4s = {contentText: `${(linguagem.dono(pushname, hr, total_gp7, bateria, ll))}`, footerText: `\`\`\`➤Total Chats: *${totalChat.length}*\`\`\`\n\`\`\`➤Cargando: *${charge}*\`\`\`\n\`\`\`➤Bateria: *${baterai}*\`\`\`\n\`\`\`➤Velocidad: *${latensi.toFixed(4)} s*\`\`\`\n\`\`\`➤Actividad: *${horaOn(os.uptime())}*\`\`\``, buttons: button4s, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
tobi.sendMessage(from, button4s, MessageType.buttonsMessage, {quoted: mek})
break

case 'bateria':
addFilter(from)
if (!isOwner) return  enviar(linguagem.ownerB())
tobi.sendMessage(from, linguagem.bateria(baterai, porcentagem), text, {contextInfo: fotothumb, quoted: mek})
break

case 'bc':
addFilter(from)
if (!isOwner) return  enviar(linguagem.ownerB())
if (args.length < 1) return enviar('Codigo o texto?')
tobis = await tobi.chats.all()
for (let _ of tobis) {
tobi.sendMessage(_.jid, `${q}`, text, {contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "externalAdReply": {"title": `Transmissão De Aviso`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg", "thumbnail": img2}}})
}
enviar('Transmision enviado con exito✔')
break

case 'bcstik':
case 'bcfig':
addFilter(from)
if (!isOwner) return enviar('Usted no es la owner?')
if (!isQuotedSticker) return enviar('Marque un sticker')
bcsticker = await tobi.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await tobi.downloadMediaMessage(encmedia)
for (let _ of bcsticker) {
tobi.sendMessage(_.jid, bc, sticker) 
}
enviar(`Sticker enviado: ${totalchat.length} chats`)
}
break

case 'clone':
addFilter(from) 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return  enviar(linguagem.ownerB())
if (args.length < 1) return enviar('Mencione a quien decea clonar foto de perfil')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('SUM-BOT')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await tobi.getProfilePicture(id)
buffer = await getBuffer(pp)
tobi.updateProfilePicture(botNumber, buffer)
mentions(`Ha sido clonado foto de perfil de: @${id.split('@')[0]}`, [jid], true)
} catch (e) {
enviar('ocurrio un error')
}
break

case 'block':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return enviar(linguagem.ownerB(ownerName))
tobi.blockUser(`${body.slice(8)}@c.us`, "add")
tobi.sendMessage(from, `Usuário bloqueado`, text, {quoted: mek})
break

case 'ban':
addFilter(from) 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return  enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} fue baneado, ahora no podras usar el bot✔`
mentions(`${susp}`, mentioned, true)  
break

case 'unban':
addFilter(from) 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return  enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} Ahora podras usat el bot ✔`
mentions(`${susp}`, mentioned, true)  
break

case 'q': 
if (!m.quoted) return enviar('Etiqueta un mensaje')
let qse = tobi.serializeM(await m.getQuotedObj())
if (!qse.quoted) return enviar('El mensaje que marco no contiene respuesta!')
await qse.quoted.copyNForward(m.chat, true)
break

case 'antipalabras':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`[❗]ativar/desativar, Ejemplo ${p + comando} activar`)
if (args[0] === 'on') {
if (isPalavrão) return enviar('*Ya esta activado...*')
palavrão.push(from)
fs.writeFileSync('./base de dados/database/arquivos/palavrão.json', JSON.stringify(palavrão))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
palavrão.splice(from, 1)
fs.writeFileSync('./base de dados/database/arquivos/palavrão.json', JSON.stringify(palavrão))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]on/off, Ejemplo ${p + comando} on`)
}
break

case 'addpalabra':
addFilter(from)
if (!isOwner) return  enviar(linguagem.ownerB())
if (!isPalavrão) return enviar(`『❗』Funsion antipalabras descativada`)
if (args.length < 1) return enviar( `Formato correcto : ${p + comando} [palavra]. ejemplo ${p + comando} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./base de dados/lib/palavras.json', JSON.stringify(palavra))
await enviar(`Palabra *${q}* Agregado a la lista ✔`)
break

case 'delpalabra':
addFilter(from)
if (!isOwner) return  enviar(linguagem.ownerB())
if (!isPalavrão) return enviar(`『❗』La funsion antipalabras esta descativado❌`)
if (args.length < 1) return enviar( `Use assim : ${p + comando} [palavra]. exemplo ${p + comando} puta`)
let dbw = body.slice(12)
var position = palavra.indexOf(dbw)
palavra.splice(position, 1)
fs.writeFileSync('./base de dados/lib/palavras.json', JSON.stringify(palavra))
await enviar(`Palabra *${q}* Eliminado de la lista ✔`)
break 

case 'listname':
addFilter(from)
if (!isOwner) return  enviar(linguagem.ownerB())
if (!isPalavrão) return enviar(`『❗』La funsion de antipalabras esta descativo❌`)
teks = `Lista de palabras malas: \n\n`
for (let ahzhgxnshxg of palavra) {
teks += `❖ ${ahzhgxnshxg}\n`
}
teks += `\nTotal : ${palavra.length}\nFormato correcto\n${p}Addpalabra『Nombre』\nPara añadir palabra\n\n O usa \n${p}Delpalabra『Nombre』\nPara votar texto`
tobi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": palavra } })
break

case 'mystat':
addFilter(from)
 if (!isOwner) return enviar('Este comando solo lo utiliza mi creador')
var groups = tobi.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = tobi.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
timestamp = speed();
totalChat = await tobi.chats.all()
charge = charging ? 'si' : 'no'
listrik = charging ? '⚡' : 'ga di cas'
latensi = speed() - timestamp
let total = math(`${groups.length}*${privat.length}`)
teks = `
き⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟️❗ informações do bot❗⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟️き

き⃟🐋 Velocidade : *${latensi.toFixed(4)} segundos*
き⃟🐋 Tempo ativo : *${temporizado(uptime)}*
き⃟🐋 Total de chats : *${totalChat.length}*
き⃟🐋 Total de grupos : *${groups.length}*
き⃟🐋 Total de pessoas no pv : *${privat.length}*

き⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟️📱 informações do celular📱⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟️き

き⃟🐥 Bateria : *${baterai}*
き⃟🐥 Carregando : *${charge}*
き⃟🐥 Uso da ram : *${ram2}*
き⃟🐥 Plataforma : *${os.platform()}*
き⃟🐥 Nome do host : *${os.hostname()}*
き⃟🐥 Versão do celular : *${tobi.user.phone.os_version}*
き⃟🐥 Tempo de atividade : *${temporizado(os.uptime())}*
き⃟🐥 Versão do whatsapp : *${tobi.user.phone.wa_version}*
き⃟🐥 Modelo do dispositivo : *${tobi.user.phone.device_model}*`
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${teks}`})
break

case 'delchat':
if (!isOwner) return enviar(resposta.macaco)
enviar('Completado')
console.log(from)
tobi.modifyChat(from, "delete", {includeStarred: false})
break

case 'setname': 
if (args.length < 1) return enviar(`Use ${p + comando} Neum-Bot`)
if (!isOwner) return enviar(resposta.macaco)
anu = q
tobi.updateProfileName(anu)
await enviar(`_*Exito el cambiar nombre del bot_*\n\nPara : *${anu}*`)
break

case 'setprefix':
addFilter(from)
if (args.length < 1) return enviar(`Use ${p + comando} !`)
if (!isOwner) return enviar(resposta.macaco)
p = args[0]
enviar(`*Cambiado a prefix*: ${q}`)
break

case 'tagstick':
addFilter(from)
if (!isOwner) return enviar(resposta.macaco)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const enmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
filePath = await tobi.downloadAndSaveMediaMessage(enmedia, filename = getRandom())
var value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: {
mentionedJid: mem
},
quoted: mek
}
ini_buffer = fs.readFileSync(filePath)
tobi.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(filePath)
} else {
enviar(`_Marque un sticker_`)
}
break

case 'tagimg':
addFilter(from)
if (!isOwner) return enviar(resposta.macaco)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const ncmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
filePath = await tobi.downloadAndSaveMediaMessage(ncmedia, filename = getRandom())
var value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: {
mentionedJid: mem
},
quoted: mek
}
ini_buffer = fs.readFileSync(filePath)
tobi.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(filePath)
} else {
enviar(`Marque uma imagem para que eu mencione todos com ela`)
}
break

case 'ping':
addFilter(from)
uptime = process.uptime()
const pingButtons = [{buttonId: `nãoDaEsseMekAiManoGay`, buttonText: {displayText: "Tiempo activo"}, type: 1}]
const pingButt = {contentText: `${linguagem.speed(speedB, temporizado)}`, buttons: pingButtons, headerType: 1}
tobi.sendMessage(from, pingButt, MessageType.buttonsMessage, {quoted: mek})
break

case 'visuchat':
addFilter(from)
if (!isOwner) return enviar(resposta.macaco)
const readallid = await tobi.chats.all()
tobi.setMaxListeners(25)
for (let xyz of readallid) {
await tobi.chatRead(xyz.jid)
}
tobi.sendMessage(from, `Pronto`, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"mimetype": "image/jpeg",
"caption": "Todos os chats foram vistos",
'jpegThumbnail': fs.readFileSync('./base de dados/lib/bot/fotos/logo.jpeg')
}
}
}
})
break

case 'bloqueados':
addFilter(from) 
if (!isOwner) return enviar(resposta.macaco)
teks = 'Lista de numeros blockeados:\n'
for (let block of blocked) {
teks += `➤ @${block.split('@')[0]}\n`
}
teks += `Total : ${blocked.length}`
tobi.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
break

case 'apagar':
addFilter(from)
if (!isOwner) return enviar(resposta.macaco)
enviar('Bot off')
setTimeout(() => {
tobi.close()
}, 3000)
break

case 'reiniciar':
addFilter(from) 
if (!isOwner) return enviar(resposta.macaco)
npm = `npm start`
enviar("Reiniciando...")
exec(npm, (err, stdout) => {
if(err) return tobi.sendMessage(from, "Error", text, {quoted: mek})
if (stdout) {
tobi.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break

case 'clearchat': 
case 'clearall':
case 'clear-all':
addFilter(from)
if (!isOwner) return enviar(resposta.macaco)
tobif = await tobi.chats.all()
list_chat = await tobi.chats.all()
for (let chat of list_chat) {
tobi.modifyChat(chat.jid, "delete", {includeStarred: false})
}
tobi.sendMessage(from, `Pronto`, text, {
quoted: { key: {fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"caption": `Todos os chats foram apagados`
}
}
}
})
break
//<~FIM DOS COMANDOS DE DONOS

case 'reportar':
addFilter(from) //info
const bug = `${q}`
 if (args.length > 300) return tobi.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `╭▛▀▀▀▀▀▀Sugerencia + Reporte▀▀▜\n▌De: ${pushname}\n▌ ▌Numero: @${sender.split("@s.whatsapp.net")[0]}\n▙▄▄▄▄▄▄▄▄▄▄▄▄▟\n ▌Sugerencia:\n${bug}`
var options = {text: teks1, contextInfo: {mentionedJid: [sender]},}
tobi.sendMessage(`${OwnerNumber}@s.whatsapp.net`, options, text)
enviar("Mensaje enviado al creador: Spam = block + ban.")
break

case 'premium':  
case 'prem':
addFilter(from)
var totalchat = `${totalchat.length}`
totalChat = await tobi.chats.all()
charge = charging ? 'si' : 'no'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const premiumMenu = await getBuffer(ppimg)
var mediaByTobi = await tobi.prepareMessage(from, premiumMenu, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var button8s = [{buttonId: `${p}figurinhas`, buttonText: {displayText: '⎙  MACKER  ⎙'}, type: 1}]
var button8s = {contentText: `${(linguagem.premium(pushname, hr, totalchat, bateria, ll))}`, footerText: `\`\`\`➤Toyal Chat: *${totalChat.length}*\`\`\`\n\`\`\`➤Cargando: *${charge}*\`\`\`\n\`\`\`➤Bateria: *${baterai}*\`\`\`\n\`\`\`➤Velocidad: *${latensi.toFixed(4)} s*\`\`\`\n\`\`\`➤Actividad: *${horaOn(os.uptime())}*\`\`\``, buttons: button8s, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
tobi.sendMessage(from, button8s, MessageType.buttonsMessage, {quoted: mek})
break

case 'ddd':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar(`Use ${p + comando} 94`)
try {
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${dddlist}`})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'letra':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Añade nombre de la musica")
mortandela(from)
teks = body.slice(7)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
lirikLagu(teks).then((res) => {
if (!res[0].result) {
enviar("_*❌Titulo no encontrado..❌*_\n\nIntente nuevamente ") 
} else {
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${res[0].result}`})
}
})

break

case 'github':
addFilter(from)   
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length == 0) return enviar(`_*Forma incorrecta*_\n\nEjemplo: ${p + comando} Kitsumy`)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/github?nomedeusuario=${q}`)
githubByTobi = `➽Nombre: ${anu.Nome_De_Usuario}\n➽Creacion: *${anu.Criada_Em}*\n➽Actualizacion: *${anu.Ultima_Atualizacao}*\n➽Seguidores: *${anu.Total_De_Seguidores}*\n➽Total repositorios: *${anu.Total_De_Seguidores}*\n➽Siguiendo: *${anu.Total_Seguindo} Pessoas*\n➽Seguidores: \n*${anu.Link_De_Seguidores}*\nRepositorios: \n*${anu.Link_Do_Repositorios}*`
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${githubByTobi}`})
} catch {
enviar(resposta.erroB)
}
break

case 'mediafire':
addFilter(from)   
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar('Mande link! ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return enviar(mess.error.Iv)
mortandela(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `
⇨MEDIAFIRE DOWNLOAD⇦

${ll}➽Nombre: ${res[0].nama}${ll}
${ll}➽Tamaño: ${res[0].size}${ll}
${ll}➽Link: ${res[0].link}${ll}

_*Aguarde, enviando media..*_`
enviar(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break

case 'covidst':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
mortandela(from)
teks = args.join(' ')
if (!q) return enviar(`${emoji_bot} Use un estado para ver`)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/brasil?estado=${q}`)
const by_tobi_thiago = `
▛▀▀▀▀▀▀▀▀▀▀▀▀▀
▙▌⇨    Covid   Mundo   ⇦
▛▌➩ Siglo de estado: ${anu.Sigla_Do_Estado}
▌▌➩ Estado: ${anu.Estado_Informado}
▌▌➩ Casos desconocidos: ${anu.Casos_Desconhecidos}
▌▌➩ Casos encontrados: ${anu.Casos_Encontrados}
▌▌➩ Muertes encontradas: ${anu.Mortes_Encontradas}
▌▌➩ Previciones encontrados: ${anu.Previsoes_Encontradas}
▌▙▄▄▄▄▄▄▄▄▄▄▄
 ▙▄▄▄▄▄▄▄▄▄▄▄▄`
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${by_tobi_thiago}`})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'sticknime':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
mortandela(from)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break

case 'anime':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Que anime esta buscando?")
mortandela(from)
try {
buscarByTobi = q
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/educacional/buscaranimes?anime=${buscarByTobi}`)
img = await getBuffer(anu.Foto_anime)
tobi.sendMessage(from, img, image, { quoted: mek, thumbnail:null})
} catch {
enviar(resposta.erroB)
}
break

case 'wikipedia':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Añade texto de que busca")
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
wikipediaByTobi = q
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/educacional/wikipedia?pergunta=${wikipediaByTobi}`)
if (!anu.Resultado) {
enviar("_*Titulo no encontrado...*_\n\nIntentalo nuevamente") 
} else {
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${anu.Resultado}`})
enviar(`${anu.Resultado}`) 
}
break

case 'storesearch':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (!q) return enviar(`❎ Que imagen busca?`);
mortandela(from)
teks = body.slice(7)
try {
sexooo = await axios.get(`https://api.zeks.me/api/sgplay?apikey=apivinz&q=${teks}`)
sexooo2 = sexooo.data
zaps = `*Lista de ${sexooo2.result[0].title}*\n\n`
for (let i = 0; i < sexooo2.result.length; i++) {
zaps += `\n$⇨Nombre: *${sexooo2.result[i].title}*\n⇨Link: *${sexooo2.result[i].url}*\n⇨Version: *${sexooo2.result[i].rating}*\n`
}
buffer = await getBuffer(sexooo2.result[0].thumb)
tobi.sendMessage(from, buffer, image, {quoted: mek, caption: zaps})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'imagen':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (!q) return enviar(`❎ Que imagen busca, añade nombre! `);
mortandela(from)
try {
let pin = await hx.pinterest(q);
let ac = pin[Math.floor(Math.random() * pin.length)];
let di = await getBuffer(ac);
await tobi.sendMessage(from, di, image, {quoted: mek, caption: `✅ *${q}*` });
} catch (e) {
enviar(linguagem.erro())
}
break;

case 'glosearch':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar('Que esta buscando?')
teks = args.join(' ')
mortandela(from)
try {
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `\n
「         GOOGLE         」
‣ *➽Titulo:* ${i.title}
‣ *➽Link: * ${i.link}
‣ *➽Sobre :* ${i.snippet}`
}
var tobiDev = kant.trim()
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${tobiDev}`})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'playstore1':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if(!q) return enviar('Que esta buscando?')
mortandela(from)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
let play = await hx.playstore(`${q}`)
let store = ' 「      PLAY STORE    」'
for (let i of play){
store += `
⇨Nombre: ${i.name}
⇨Enlace: ${i.link}
⇨Creador: ${i.developer}
⇨Link: ${i.link_dev}\n▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄`
}
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${store}`})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'happymod':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar('Que esta buscando?')
mortandela(from)
teks = q
sexoo = await axios.get(`https://api.zeks.me/api/happymod?apikey=${semApikeyPraTu}&q=${teks}`)
sexoo2 = sexoo.data
zaps = `*Lista de ${teks}*\n\n`
for (let i = 0; i < sexoo2.result.length; i++) {
zaps += `\n⇨Nombre: *${sexoo2.result[i].title}*\n⇨Link: *${sexoo2.result[i].url}*\n⇨Version: *${sexoo2.result[i].rating}*\n`
}
buffer = await getBuffer(sexoo2.result[0].thumb)
tobi.sendMessage(from, buffer, image, {quoted: mek, caption: zaps})
break

case 'celular':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (!q) return enviar(`Que celular busca usted?`)
teks = args.join(' ')
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
const busca_celular = 
`
➽Titulo: ${anu.judul}
➽Actualizacion: ${anu.rilis}
➽Diametro: ${anu.ukuran}
➽Tipo: ${anu.type}
➽Almacenamiento: ${anu.storage}
➽Fundo: ${anu.display}
➽Pulgada: ${anu.inchi}
➽Camaras: ${anu.pixel}
➽Resolucion: ${anu.videoPixel}
➽Ram: ${anu.ram}
➽Hardware: ${anu.chipset}
➽Bateria: ${anu.batrai}
➽Tipo de bateria: ${anu.merek_batre}`
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${busca_celular}`})
} catch {
enviar(resposta.erroB)
}
break

case 'rename':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
var namaPackss = q.substring(0, q.indexOf('|') - 0)
var authorPackss = q.substring(q.lastIndexOf('|') + 1)
texto = body.slice(7)
if (isDoubleByte(texto)) return enviar('No letras con caracteres')
stiker_wm = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await tobi.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")
wm = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
tobi.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: mek})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
fs.unlinkSync('undefined.webp')
})
});
break

case 'covidmundo':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
mortandela(from)
try {
teks = args.join(' ')
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/mundial`)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const bya_tobi_thiago = `
▛▀▀▀▀▀▀▀▀▀▀▀▀
▙▌ ⇨    Covid Mundo  ⇦
▛▌➩ Total de casos: ${anu.Total_Casos}
▌▌➩ Total de casos activos: ${anu.Total_Casos_Ativos}
▌▌➩ Total de casos criticos: ${anu.Total_Casos_Criticos}
▌▌➩ Total de casos hoy: ${anu.Total_Casos_Hoje}
▌▌➩ Total de muertes: ${anu.Total_Mortes}
▌▌➩ Total de muertes hoy: ${anu.Total_Mortes_Hoje}
▌▌➩ Total de recuperados: ${anu.Total_Recuperados}
▌▙▄▄▄▄▄▄▄▄▄▄▄▄
▙▄▄▄▄▄▄▄▄▄▄▄▄▄`
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${bya_tobi_thiago}`})
} catch (e) {
enviar(linguagem.erro())
}
break 

case 'bankloja':
addFilter(from)
var totalchat = `${totalchat.length}`
totalChat = await tobi.chats.all()
charge = charging ? 'si' : 'no'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const banhoLoja = await getBuffer(ppimg)
var mediaByTobi = await tobi.prepareMessage(from, banhoLoja, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var button7s = [{buttonId: `${p}premium`, buttonText: {displayText: '⎙ PREMIUM ⎙'}, type: 1},]
var button7s = {contentText: `${(linguagem.bankloja(pushname, hr, totalchat, bateria, ll))}`, footerText: `\`\`\`➤Total Chats: *${totalChat.length}*\`\`\`\n\`\`\`➤Cargando: *${charge}*\`\`\`\n\`\`\`➤Bateria: *${baterai}*\`\`\`\n\`\`\`➤Velocidad: *${latensi.toFixed(4)} s*\`\`\`\n\`\`\`➤Actividad: *${horaOn(os.uptime())}*\`\`\``, buttons: button7s, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
tobi.sendMessage(from, button7s, MessageType.buttonsMessage, {quoted: mek})
break

case 'buypack':
addFilter(from)
payout2 = 1
const valorPack = 1000
const buyPacks = valorPack * payout2
if ( checkATMuser(sender) <= buyPacks) return enviar(`[❗] Lo sentimos ${pushname} Usted no tiene suficientes coins\nvalor do premiun : ${valorPack} mil`)
if ( checkATMuser(sender) >= buyPacks) {
confirmATM(sender)
var pornoByTobi = [
"Michelle Rabbit\nhttps://mega.nz/folder/FXB0ELpS#CaCYgD8f8YNPc_dL4JjtDA ",
"Dripxxx\nhttps://mega.nz/folder/UdEjxYbA#2dGzAJq9JR8Qy8C8Y3VirQ",
"Sia Sibéria\nhttps://drive.google.com/drive/u/0/mobile/folders/1pOfYV7ZFqumnZpB-6eu03fHsByBJgNWt",
"Nicole Bum\nhttps://drive.google.com/drive/mobile/folders/1MRARgrA4GIcw14MGNpr5NxAKJTcnLjra",
"Love Lilah\nhttps://drive.google.com/drive/u/0/mobile/folders/145OnVBWuA54ZwfW5zL6WOQ7pQ41-fBx3 ",
"Taty Maia\nhttps://mega.nz/folder/i841xSqT#8sP2vyffUbS1RjQ_keNYoA/folder/O9hX1QSR ",
"Me1adinha\nhttps://accounts.google.com/ServiceLogin?service=lh2&passive=1209600&osid=1&continue=https://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?key%3DZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn&followup=https://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?key%3DZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn&authuser=0\n(Via Google Fotos) ",
"Mari Ávila\nhttps://drive.google.com/drive/u/0/mobile/folders/1lVU8GgLTHfPoYUh5ZJ1oj5gluiTRmgB5 ",
"Feh Galvão\nhttps://mega.nz/folder/OxQiHJAA#8dGkVcq08YtonYSJQgZFfQ/folder/etx0QRQT ",
"Marina Mui\nhttps://mega.nz/folder/nhxWCQhC#jefLXWFJiqCXMtj6wEEN4A ",
"Sophia Carracini\nhttps://drive.google.com/drive/u/0/mobile/folders/1mIpBq3amINT9am9yxQGlbz7dd8-NMN_o ",
"Maria Eugênia\nhttps://drive.google.com/drive/u/0/mobile/folders/10kdyiz9TCQuqEQXK_78KJJjG-zd4ywi3 ",
"Skylar Vox\nhttps://mega.nz/folder/XIQTSKzR#_0vLyBUESlCj3l5HCCUkQg ",
"Neiva Mara\nhttps://mega.nz/folder/PZZxQABC#IVO1DL-zczyMd1Kr83sDBw ",
"Amorazz\nhttps://mega.nz/folder/6kpT0IoT#Zqin16-ASUvoXgoEK6BsIw ",
"Nayara\nhttps://drive.google.com/drive/u/0/mobile/folders/1JpJdDtuI408EpCmoQalcOC8oz3szAxqE ",
"Megnutt\nhttps://mega.nz/folder/UAJE0DQT#gCEzz702Amr2rdqSWmshMA/folder/lQx21JjC ",
"Littl Misfit\nhttps://mega.nz/#F!QvhW2RiB!kog5LiL5dOU_115ZEVpcGg!UyhkGLCL ",
"Anitta\nhttps://drive.google.com/drive/u/0/mobile/folders/1K5NZNNJPGVo3FGuWIjZ0jNoJ-8Gh9hG3 ",
"MC Princesa\nhttps://drive.google.com/drive/u/0/mobile/folders/1Zsj66cMEPgQTcT91VenAkl9L1TAuguSF ",
"MC Pipokinha\nhttps://drive.google.com/drive/u/0/mobile/folders/1X7u7cj8MKj1cE6hM2_mkQe9bOF8M2npm ",
"Lana Rhoades\nhttps://mega.nz/folder/JEkWhaoZ#lho_3rS4nhf28tGtyvImCw ",
"Belle Delphine\nhttps://drive.google.com/drive/mobile/folders/1IzUUxQO6owpvW9r5Yj6xJ_711yTtlZg9 ",
"Venomous Dolly\nhttps://mega.nz/folder/pxYAXLjI#QnZHek_zGQDz5ct9d63Bmg ",
"MC Mirella\nhttps://seulink.online/qOkcdS\n(Esse ta com encurta) ",
"LoverLaci\nhttps://mega.nz/folder/yRIHgQ5A#euOpAQNEcZiej5uBuxjBkw/folder/XEQWSZBC ",
"Victoria Matosa\nhttps://drive.google.com/drive/mobile/folders/1x2j-SglJX-nezdBuc4WhpYleZO2c8Tl9 ",
"Segredos Da Ana\nhttps://www.mediafire.com/folder/tcpjkncy4as5f/d.gg\n(FONTE: Wakai T) ",
"Letícia Shirayuki\nhttps://www.mediafire.com/file/2a4kq8pmxc3je71/Let%25C3%25ADcia_Shirayuki.zip/file ",
"KITTYXKUM\nhttps://mega.nz/folder/f4xDSS7R#_5ZrSNVwLJ4nEUdEJxoijw ",
"Kinechan\nhttps://mega.nz/folder/GgxRQCaS#kdT7IidrqwgbggnpZOkMHA ",
"Grazi Mourão\nhttps://mega.nz/folder/2hwgwYpI#kUTsXqrwDNFeKcDhTINz-w ",
"https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q",
"https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9",
"https://photos.app.goo.gl/g685WWL4T7BcZssk8",
"https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9",
"https://photos.app.goo.gl/phyRpNFLcAtsknfJ7",
"https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A",
"https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7",
"https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q",
"https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9",
"https://photos.app.goo.gl/phyRpNFLcAtsknfJ7",
"https://photos.app.goo.gl/g685WWL4T7BcZssk8",
"https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A",
"https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9",
"https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7",
"Polonesa Do Hype\nhttps://drive.google.com/drive/u/0/mobile/folders/1yA4MOOhL1Qjfx8BOtjZptyNDgZPxzYAC",
"Ashley Tervort\nhttps://mega.nz/folder/X5wQwIbK#579uPWLNfCuUDuXvuIJ3aA ",
"Ashley Alban\nhttps://mega.nz/folder/9eBBBQZb#pi0kaL6zqRYq3SoSJHUJpQ ",
"Emília Bunny\nhttps://mega.nz/folder/q1pkBJoI#5ZiKfZhaKIUg9ea0eS6EYw ",
"Maru Karv\nhttps://mega.nz/folder/tHoC2CaY#bPf5ZHzM89nq-oCr0Civdw ",
"Evilena\nhttps://drive.google.com/drive/u/0/mobile/folders/1j5OR2qsYQ9uKrO2V2ywdpdUpooBlIJCo ",
"Bambi Doe\nhttps://mega.nz/folder/IxgyhZJI#Rd8bzK3_Ri2I3LUvy2Tf6Q ",
"Mulher Melão\nhttps://mega.nz/folder/is8w1Q7a#XmaNa0PNl6J-JS9VXneDJg ",
"Aline Faria\nhttps://drive.google.com/drive/u/0/mobile/folders/1QEaiSu9SFeoV__Obo42252zj-WQaEZxQ ",
"Rafaela Nery\nhttps://drive.google.com/drive/u/0/mobile/folders/1dYfY3QTybo_gFeNE-oQsxN45VnZ7HRW0 ",
"Remy LaCroix\nhttps://mega.nz/folder/sTxmzDAb#_0igusp-mS454WIEh_lGqg ",
"Mayakayagaia\nhttps://mega.nz/folder/5MsATbYI#V-90W2qijBk3N5YzJTgfHQ ",
"Bella Thorne\nhttps://mega.nz/folder/okw0gYLL#O6-OqnJhRYTbHiMJbNqI3Q ",
"Canela Skin\nhttps://mega.nz/folder/vN5XBIIZ#m7P5H4J_B5HcsYrf26tmoQ ",
"Hailey Queen\nhttps://mega.nz/folder/FFlgXBIT#8X5NYUFWkTjVDUqmwXSVow/folder/pc1yVbyA ",
"Adriana Chechik\nhttps://mega.nz/folder/1XgFnKyJ#HETOSi3Qi8Kwckbm2FBXDw ",
"Dripxxx\nhttps://mega.nz/folder/UdEjxYbA#2dGzAJq9JR8Qy8C8Y3VirQ ",
"Steffy Moreno\nhttps://mega.nz/folder/QkYARZ7J#vtktDmYALs5wwcImYy8tnw ",
"Angelic Videos\nhttps://mega.nz/folder/XgMRQYAL#GidekeyDkkEDFWit2kAJ_g "]
var pornkkkByTobiNekkkk = pornoByTobi[Math.floor(Math.random() * pornoByTobi.length)]
tobi.sendMessage(from, `${pornkkkByTobiNekkkk}`, text, {contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "externalAdReply": {"title": `Packs porno?? by © Tobikkk`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg", "thumbnail": img2}}})
}
break

case 'buyprem':
addFilter(from)
if (prem.includes(sender)) return enviar("❌Solo se compra una ves❌")
payout2 = 1
const koinPerlimit2 = 100000
const buyPrem = koinPerlimit2 * payout2
if ( checkATMuser(sender) <= buyPrem) return enviar(`[❗] Disculpe ${pushname} Usted no tiene suficientes coins\nvalor premiun : 100000 ⛁coins`)
if ( checkATMuser(sender) >= buyPrem) {
confirmATM(sender, buyPrem)
prem.push(`${sender}`)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
await enviar(`⛁COMPRA DE PREMIUM⛁\n\n⛁ Director: *${me.name}*\n⛁ Receptor: *${pushname}*\n⛁ Precio premium: *${koinPerlimit2}*`)				
}
break

case 'prestar':
case 'transferir':             			
addFilter(from)
if (!q.includes('/')) return  enviar(`[❗] Use asi : ${p}transferir @/2500`)
const tujuan = q.substring(0, q.indexOf('/') - 1)
const jumblah = q.substring(q.lastIndexOf('/') + 1)
if(isNaN(jumblah)) return await enviar('[❗] Que sea un numero')
if (jumblah < 100) return enviar(`La transferencia minima es de 100`)
if (checkATMuser(sender) < jumblah) return enviar(`_Usted no tiene suficientes coins para hacer la transferencia, consiga minimo 100_`)
const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
fee = 0.010 *  jumblah 
hasiltf = jumblah - fee
addKoinUser(tujuantf, hasiltf)
confirmATM(sender, jumblah)
addKoinUser('51991489988@s.whatsapp.net', fee)
enviar(`⛁ TRANSFERENCIA ⛁\n\n⛁ Tranferidor: wa.me/${sender.split("@")[0]}\n⛁ Receptor: ${tujuan}\n⛁ Coins: ${jumblah}\n⛁ Taza: ${fee}`)
break		

case 'darcoin':
addFilter(from)
if (!isOwner) return enviar("Solo mi owner utiliza")
const numeroUang = args[0].replace('@','')
const uangLimite1 = args[1]
const darmoneyUang = mek.message[type].contextInfo.mentionedJid[0]
if (uangLimite1 <= 1) return enviar(`Minimo dar 10 coins`)
if (isNaN(uangLimite1)) return enviar(`[❗] FORMATO CORRECTO\n ${p + comando} @51991489988 5`)
if (!numeroUang) return enviar(`[❗] USE Asi:\n ${p + comando} @51991489988 5`)
const idUang = numeroUang + '@s.whatsapp.net'
var found = false
Object.keys(uang).forEach((i) => {
if(uang[i].id === idUang){
found = i
}
})
if (found !== false) {
uang[found].uang += Number(uangLimite1)
const updated = uang[found]
fs.writeFileSync('./base de dados/datauser/uang.json',JSON.stringify(uang))
const verMoney = checkATMuser(darmoneyUang)
const result = `
▛▀▀▀▀▀EJECUTADO▀▀▀▀▜
▌⛁ ID: *${createSerial(8)}*
▌⛁Horario: *${moment().format('DD/MM/YY HH:mm:ss')}*
▌⛁Usuario : *@${updated.id.replace('@s.whatsapp.net','')}*
▌⛁ Coins:* ${verMoney}
▙▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▟`
console.log(uang[found]);
enviar(result)
} else {
enviar(`[❗] Por favor ${pushname}, este ${numeroUang} No esta registrado en el bot..`)
}
break

case 'apostar':
addFilter(from)
if (!isGroup) return enviar(`_Se utiliza solo en grupos_`)
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `10000`
if (checkxpr <= quantidader) return enviar(`⛁ No tiene suficientes coins, podra jugar cuando tenga ${quantidader} de coins⛁.\n\nSus Coins⛁: ${checkxpr}`)
if (args.length !== 1) return enviar('Especifique la cantidad a apostar')
if (Number(args[0]) >= checkxpr || Number(args[0]) >= dinheiro) return enviar(`_No puede apostar una cantidad mayor a sus coins_ ${quantidader} coins por ves\n\nCoins⛁: ${checkxpr}`)
if (Number(args[0]) < 1000) return enviar(`O minimo para se apostar é de 1000 dinheiro`)
if (isNaN(args[0])) return enviar('Para apostar use numeros, _nada de letras a menos perdera su XP_')
const double = Math.floor(Math.random() * 7) + 1
const nrolxp = Number(-args[0])
const prolxp = double + Number(args[0])
if (double == 1) {
await enviar(`BANG!\n\n_Lo sentimos perdistes ${nrolxp} en sus coins`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 2) {
await enviar(`SALVADO\n\nFelicidades ganastes ${prolxp} coins`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 3) {
await enviar(`MALA SUERTE\n\nPerdistes ${nrolxp} continua apostando para perder o ganar`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 4) {
await enviar(`REDONDEADO\n\nEn buena hora \nGano ${prolxp} Coins`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 5) {
await enviar(`PERDISTES\nAcabas de perder ${nrolxp} en sus coins, para ganar apuesta mas`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 6) {
await enviar(`➤FELICIDADES\n\nHas ganado ${prolxp} de coins`)
addKoinUser(sender, prolxp, dinheiro)
}
break

case 'dinero':
case 'lincoins':
const testeDinheiro = checkATMuser(sender)
const checkDinheiro = checkATMuser(sender, testeDinheiro)
enviar(linguagem.dinheiroConta(checkDinheiro))
break

case 'rankmoney':
bo = args[0]
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
_registered.sort((a, b) => (a.name < b.name) ? 1 : -1)
uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
let rankDinheiro = '⛁ COINS ⛁\n\n'
let nomNumberRank = 0
try {
for (let i = 0; i < 5; i++) {
nomNumberRank++
rankDinheiro += `
*${nomNumberRank}º➤ : @${uang[i].id.replace('@s.whatsapp.net', '')}
▛▀▀▀▀▀▀▀▀▀▀▀▀▀▜
▌⛁Nombre : _${uang[i].nome}_
▌⛁ Coins: _${uang[i].uang}_
▙▄▄▄▄▄▄▄▄▄▄▄▄▄▟\n\n`
}
await enviar(rankDinheiro)
} catch (err) {
console.error(err)
await enviar(`_Necesita tener mas usuarios resgitrados_`)
}
break

case 'coins':
addFilter(from)
if (args.length < 1) return enviar(`Use ${p + comando} @tag`)
const verMoneyki = mek.message[type].contextInfo.mentionedJid[0]
const verMoneyMencionador = checkATMuser(verMoneyki)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const feijoada = tobi.contacts[mentioned] != undefined ? tobi.contacts[mentioned].vname || tobi.contacts[mentioned].notify: undefined
enviar(`⛁ _Adquirir coins en la cuenta de ${feijoada}_⛁\n\n⛁ ➤ ⛁Coins : ${verMoneyMencionador}`)
break

case 'tts': 
addFilter(from)
if (args.length < 1) return tobi.sendMessage(from, `Forma correcta de usar: \n${p}tts (codigo) (texto)\nEjemplo: ${p}tts es BUEN DIA\n\nFormato correcto: ${p}tts es Hola oni sham`, text, {quoted: mek})
const gtts = require('./base de dados/lib/gtts')(args[0])
if (args.length < 2) return tobi.sendMessage(from, 'Y el texto?', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
dtt.length > 800
? enviar('Texto muy largo')
: gtts.save(ranm, dtt, function() {
tobi.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
break

case 'infobot':
addFilter(from)
var totalchat = `${totalchat.length}`
totalChat = await tobi.chats.all()
charge = charging ? 'si' : 'no'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const infobotMenu = await getBuffer(ppimg)
var mediaByTobi = await tobi.prepareMessage(from, infobotMenu, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var button5s = [{buttonId: `${p}animes`, buttonText: {displayText: '⎙ OTAKUS ⎙'}, type: 1}]
var button5s = {contentText: `${(linguagem.info(pushname, hr, totalchat, bateria, ll))}`, footerText: `\`\`\`➤Total chat: *${totalChat.length}*\`\`\`\n\`\`\`➤Cargando: *${charge}*\`\`\`\n\`\`\`➤Bateria: *${baterai}*\`\`\`\n\`\`\`➤Velocidad: *${latensi.toFixed(4)} s*\`\`\`\n\`\`\`➤Actividad: *${horaOn(os.uptime())}*\`\`\``, buttons: button5s, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
tobi.sendMessage(from, button5s, MessageType.buttonsMessage, {quoted: mek})
break

case 'crs':
const thiago_1 = "51991489988@s.whatsapp.net"
const pires_2 = "51991489988@s.whatsapp.net"
const italu_3 = "51991489988@s.whatsapp.net"
const lorran_4 = "51991489988@s.whatsapp.net"
const lordGcs_5 = "51991489988@s.whatsapp.net"
const aldebaran_6 = "51991489988@s.whatsapp.net"
const suportewhatsapp = "https://chat.whatsapp.com/G07kaSkuHnqAm0lPmNE6Or" 
uptime = process.uptime()
const timestamp2 = speed();
const latensi2 = speed() - timestamp2
runtime2 = process.uptime()
infobot =`
▢ Nome : *${me.name}*
▢ Version Bot : *4.0.0*
▢ Total de cmds usados : *${reqcmd}*
▢ Usuarios registrados : *${_registered.length}*
▢ Navegador : *${tobi.browserDescription[1]}*
▢ Versão do navegador: *${tobi.browserDescription[2]}*
▢ Velocidade : *${latensi2.toFixed(4)}*
▢ Tempo de execução : *${temporizado(uptime)}**
▢ Versão wha : ${tobi.user.phone.wa_version}
▢ Grupo de suporte : 
*${suportewhatsapp}*

⊷ *AGRADECIMIENTOS* ⊶
▢ *⌬ ${NomeDoBot} ▌ ᴮᴼᵀ* :
Aldebaran: @${aldebaran_6.split("@")[0]}
_*Contribuidor com: ajeito em bugs*_
_*Programar, comandos, etc...*_

▢ *⌬ ${NomeDoBot} ▌ ᴮᴼᵀ* :
Thiago: @${thiago_1.split("@")[0]}
_*Comandos de apis*_

▢ *⌬ ${NomeDoBot} ▌ ᴮᴼᵀ* :
Pires: @${pires_2.split("@")[0]}
_*Comandos de apis*_

▢ *⌬ ${NomeDoBot} ▌ ᴮᴼᵀ* :
Italu: @${italu_3.split("@")[0]}
_*Ajudou com package*_

▢ *⌬ ${NomeDoBot} ▌ ᴮᴼᵀ* :
Lorran: @${lorran_4.split("@")[0]}
_**_

▢ *⌬ ${NomeDoBot} ▌ ᴮᴼᵀ* :
Agradecimientos: @${lordGcs_5.split("@")[0]}
_*API y arichivos UnU*_`
tobi.sendMessage(from, infobot, text, {contextInfo: fotothumb, quoted: mek})
break

case 'reportes':
report = `  ≡ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉𝙀𝙎
Solicite informes de errores o bug del bot (SUM-BOT) gracias!!!

▛▀▀▀▀▀▀▀▀▀▀▀▀▜
▌*${p}Solicitar (Texto)*
▌*${p}Informe (Texto)*
▙▄▄▄▄▄▄▄▄▄▄▄▄▟

⧯ 𝐓𝐎𝐓𝐀𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 ⧯
𝐒𝐎𝐋𝐈𝐂𝐈𝐓𝐀𝐂𝐈𝐎𝐍𝐄𝐒: ${_solicitar.length}
𝐈𝐍𝐅𝐎𝐑𝐌𝐄𝐒: ${_informe.length}

✆  _O puede contactar con el propietario para tener mas informacion_`
enviar(report)
break

case 'informe':
yoi = q
if (args.length < 1) return enviar('✳️ Que informe necesita añadir para ser mandado y almacenado?')
if (yoi.length > 200) return enviar('Su texto de informe es muy largo!')
_informe.push(yoi)
fs.writeFileSync('./base de dados/lib/informe.json', JSON.stringify(_informe))
enviar(`✅ Completado *${pushname}*, Su informe ha añadido a la base de datos`)
break

case 'informes':
if (!isOwner) return enviar("_Solo el dueño del bot, utiliza este comando_")
teks = ` ≡ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉𝙀𝙎\nLista de informes de ususarios que tubieron problemas *${fecha()}* con el bot (SUM-BOT) *${_informe.length}*\n\n▛▀▀▀▀▀▀ LISTA ▀▀▀▀▀▀▜\n`
for (let lap of _informe) {
teks += `▢ ${lap}\n`
}
teks  += `▙▄▄▄▄▄▄▄▄▄▄▄▄▄▟`
enviar(teks.trim())
break

case 'pedido':
case 'solicitar':
yoi = q
if (args.length < 1) return enviar('✳️ Ingrese que decea tener el bot, (comando)🍒')
if (yoi.length > 200 ) return enviar('Exceso de texto!')
_solicitar.push(yoi)
fs.writeFileSync('./base de dados/lib/solicitar.json', JSON.stringify(_solicitar))
enviar(`✅ Obrigado *${pushname}*, Se añadio a la lista de solicitudes.`)
break

case 'solies':
if (!isOwner) return enviar(ownerB())
teks = ` ≡ *SOLICITACIONES*\nLista de solicitaciones y informacion *${fecha()}* Numeros recibidos *${_solicitar.length}*\n\n┌───⊷ *LISTA* ⊶\n`
for (let req of _solicitar) {
teks += `▢ ${req}\n`
}
teks  += `└──────────────`
enviar(teks.trim())
break

//-- NADA A VER

case 'ts':
enviar(ts())
break

default:

if (isGroup && !mek.key.fromMe && budy != undefined) {
try { 
anu = await fetchJson(`http://brizas-api.herokuapp.com/ia/simsimi?apikey=brizaloka&text=${budy}`)
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
tobi.sendMessage(from, `${anu.resultado.resposta}`, text, {quoted: mek})
console.log(anu)
}
} catch {
}
}

if (body == `${p + comando}`)  {
try {
ppimg = await tobi.getProfilePicture(sender)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let menuAjuda = await getBuffer(ppimg)
var mediaByTobi = await tobi.prepareMessage(from, menuAjuda, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
const buttons2 = [{buttonId: `${p}help`, buttonText: {displayText: '⎙  AYUDA  ⎙'}, type: 1}]
const btn2 = {contentText: `${ll}Hola @${sender.split('@')[0]}...\n\nComando: *${comando}* No encontrado.${ll}`, footerText: `${ll}${tempoByTobi}, Amig@ 💗${ll}`, buttons: buttons2, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
tobi.sendMessage(from,  btn2, MessageType.buttonsMessage, {quoted: mek})
console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('CMD', "red"), ']', color('Comando', "yellow"), color(`${p}${comando}`, "yellow"), color('não registrado', "yellow"), color('de', "yellow"), color(pushname, "yellow"))
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'red'))
}
}
})
}
starts()