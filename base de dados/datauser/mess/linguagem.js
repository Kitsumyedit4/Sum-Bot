const fs = require('fs');
emoji_bot = "ππ"

const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, SeuNome, OwnerNumber, NomeDoBot} = infos

exports.wait = () => {
return`β€Espere, cargando...β³\n\nSi no funsiona intente nuevamente`
}

exports.registroB = () => {
return`
βββββββββββββββ
β*γοΈπ²ππππππ π½πππππγ*
βββββββββββββββ
ββπ―πΊππΊ πΏπΊππΎπ π«ππππ:
ββπ΄ππΎ: π«ππππ
βββββββββββββββ
βββββββββββββββ`
}

exports.menu2 = (pushname, hr, totalchat, bateria, ll) => {
return `
Konichiwa ${pushname} π₯
ββββββββββββββββ
βββββββββββββββ
ββ${ll}β Prefix:γ${p}γ${ll}
ββ${ll}β Hora: ${hr}${ll}
ββ${ll}β Total chat: ${totalchat.length}${ll}
ββ${ll}β Bateria: ${bateria}${ll}
ββ${ll}β ${p}ReportγErrorγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ
βββ¬  ADMINISTRADORES  β¬
ββββββββββββββββ
βββ οΈ Renombra a alguien
ββββββββ β ββββββ
ββ β ${ll}${p}Banirγ@γ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}AddγNumeroγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Promoteγ@γ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Tumbarγ@γ${ll}
ββββββββ β ββββββ
ββββββββββββββββ
βββ¬     ADMINISTRADOR    β¬
ββββββββββββββββ
βββ οΈ Marque mensaje
ββββββββ β ββββββ
ββ β ${ll}${p}KickγMensajeγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}DemoteγNumeroγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}ReviverγMensajeγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}PromoteγMensajeγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ
βββ¬             GRUPO           β¬
ββββββββββββββββ
βββ οΈ Responda texto o foto
ββββββββ β ββββββ
ββ β ${ll}${p}SetppgcγFotoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}HidetagγTextoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}SetdeskγNombreγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}SetnomeγNombreγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}DelγMsg del botγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ
βββ¬           SEGURIDAD      β¬
ββββββββββββββββ
βββ οΈ Dijite on / off
ββββββββ β ββββββ
ββ β ${ll}${p}AntilinkγOn/Offγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}AntifakeγOn/Offγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}LevelingγOn/Offγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Welcome γOn/Offγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ
βββ¬   ADMINISTRADORES   β¬
ββββββββ β ββββββ
ββ β ${ll}${p}Listadmin${ll}
βββ οΈ Lista de administradores.
ββββββββ β ββββββ
ββ β ${ll}${p}TotagγImg/Gifγ ${ll}
βββ οΈ Mencione todos
ββββββββ β ββββββ
ββ β ${ll}${p}LinkγPrivado/Grupoγ${ll}
βββ οΈ Enlace del grupo
ββββββββ β ββββββ
ββ β ${ll}${p}InfoγGrupo/Perfilγ${ll}
βββ οΈ Reportar Grupo/Perfil
ββββββββ β ββββββ
ββ β ${ll}${p}GrupγAbrir/Cerrarγ${ll}
βββ οΈ Abrir/Cerrar
ββββββββ β ββββββ
ββββββββββββββββ`
}

exports.figurinhas = (pushname, hr, total_gp2, bateria, ll) => {
return `
Holis ${pushname} π
ββββββββββββββββ
βββββββββββββββ
ββ${ll}β Prefix:γ${p}γ${ll}
ββ${ll}β Hora: ${hr}${ll}
ββ${ll}β Total chat: ${total_gp2}${ll}
ββ${ll}β Bateria: ${bateria}${ll}
ββ${ll}β ${p}ReportγErrorγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ
βββ¬             MACKER        β¬
ββββββββββββββββ
βββ οΈ Responda a foto o gif
ββββββββ β ββββββ
ββ β ${ll}${p}F γFoto/Gifγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}St γFoto/Gifγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}StkγFoto/Gifγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ
βββ¬   STICKER ANIMADO   β¬
ββββββββββββββββ
βββ οΈ conversion a sticker 
βββ οΈ sticker de color
ββββββββ β ββββββ
ββ β ${ll}${p}AttpγTextoγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ
βββ¬                MEDIA            β¬
ββββββββββββββββ
βββ οΈ media de conversion
ββββββββ β ββββββ
ββ β ${ll}${p}TogifγStickerγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}ToimgγStickerγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ
βββ¬             MACKER          β¬
ββββββββββββββββ
βββ οΈ Editor de foto
βββ οΈ Tudo con foto
ββββββββ β ββββββ
ββ β ${ll}${p}FigupetγFotoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}FigugerγFotoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}FigulgbtγFotoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}FiguarmaγFotoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}FiguinvertγFotoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}FigupresoγFotoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}FiguwastedγStickerγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}FiguborradaγStickerγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}FiguprocuradoγStickerγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ`
}

exports.playrs = (pushname, hr, total_gp4, bateria, ll) => {
return `
Holiwis ${pushname} π
ββββββββββββββββ
βββββββββββββββ
ββ${ll}β Prefix:γ${p}γ${ll}
ββ${ll}β Hora: ${hr}${ll}
ββ${ll}β Total chat: ${total_gp4}${ll}
ββ${ll}β Bateria: ${bateria}${ll}
ββ${ll}β ${p}ReportγErrorγ${ll}
ββββββββββββββββ
ββββββββββββββββ
βββ¬          DESCARGAS       β¬
ββββββββββββββββ
βββ οΈ Tipos de plays
ββββββββ β ββββββ
ββ β ${ll}${p}PlayγNombreγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Play1γNombreγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Play2γNombreγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Play3γNombreγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Play4γNombreγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Play5γNombreγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Play6γNombreγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ
βββ¬         DOWNLOADS       β¬
ββββββββββββββββ
βββ οΈ Downloads mp4 y mp3
ββββββββ β ββββββ
ββ β ${ll}${p}PlayvidγNombreγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Playvid1γNombreγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Playvid2γNombreγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ
βββ¬                 ZUERIA           β¬
ββββββββββββββββ
βββ οΈ Responda un audio ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}BaixoγAudioγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}RapidγAudioγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Tomp3γVideoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}RapidoγAudioγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}EsquiloγAudioγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}GiganteγAudioγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}DevagarγAudioγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}SombrioγVideoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}EstourarγAudioγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}YtsearchγNombreγ${ll}
ββββββββ β ββββββ
βββββββββββββββββ`
}

exports.jogos = (pushname, hr, total_gp4, bateria) => {
return `
Holaa ${pushname} π
ββββββββββββββββ
βββββββββββββββ
ββ${ll}β Prefix:γ${p}γ${ll}
ββ${ll}β Hora: ${hr}${ll}
ββ${ll}β Total chat: ${total_gp4}${ll}
ββ${ll}β Bateria: ${bateria}${ll}
ββ${ll}β ${p}ReportγErrorγ${ll}
ββββββββββββββββ
ββββββββββββββββ
βββ¬              JUEGOS            β¬
ββββββββββββββββ
βββ οΈ juegos y mas
ββββββββ β ββββββ
ββ β ${ll}${p}PγPreguntaγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}TictactoeγModoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}GetnγMensajeγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Getnameγ@γ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Amongusγ@γ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}PptγPiedra/Papelγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Gay${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Suerte ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Slot${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Feio${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Lixo${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Chance ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Dado${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Level${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Burro${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Gordo${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Pobre${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Ruleta${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Corno${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Bonito${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Tagme${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Cassino${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Tictactoe${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Bonito ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Ranklevel${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Linflip ${ll}
ββββββββ β ββββββ
ββββββββββββββββ`
}

exports.animes = (pushname, hr, total_gp6, bateria) => {
return `
 Hola ${pushname} π
ββββββββββββββββ
βββββββββββββββ
ββ${ll}β Prefix:γ${p}γ${ll}
ββ${ll}β Hora: ${hr}${ll}
ββ${ll}β Total chat: ${total_gp6}${ll}
ββ${ll}β Bateria: ${total_gp6}${ll}
ββ${ll}β ${p}ReportγErrorγ${ll}
ββββββββββββββββ
ββββββββββββββββ
βββ¬               HENTAI           β¬
ββββββββββββββββ
βββ οΈ Animes e Hentais
ββββββββ β ββββββ
ββ β ${ll}${p}Ero${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Les${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Solo${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Holo${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Feet${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Anal${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Eron${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Trap${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Erok${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Cum${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Feed${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Neko${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Lewd${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Solog${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Feetg${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Spank${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Lewdk${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Boobs${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Hentai${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Eroyuri${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Classic${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Erofeet${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Hentain${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Kitsune${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Holoero${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Blowjob${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Pwankg${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Futanari${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Femdom${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Erokemo${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Trapnime${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Hololewd${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Lewdkemo${ll}
ββββββββ β ββββββ
ββββββββββββββββ
βββ¬            ANIMES         β¬
ββββββββββββββββ
βββ οΈ animes y bulling
ββββββββ β ββββββ
ββ β ${ll}${p}Loli${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Bully${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Waifu${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Megumin${ll}
ββββββββ β ββββββ
ββββββββββββββββ
ββ β¬            ANIMES            β¬
ββββββββββββββββ
βββ οΈ Animes y hentai
ββββββββ β ββββββ
ββ β ${ll}${p}Ace${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Luffy${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Zoro${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Nami${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Obito${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Buggy${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Carrot${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Asuma${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Shanks${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Sakura${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Hinata${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Shikaku${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Madara${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Sasuke${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Ahegao${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Shikadai${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Shikamaru${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}PinterestγTextoγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ`
}

exports.dono = (pushname, hr, total_gp7, bateria, ll) => {
return `
 Hola  ${pushname} π
ββββββββββββββββ
βββββββββββββββ
ββ${ll}β Prefix:γ${p}γ${ll}
ββ${ll}β Hora: ${hr}${ll}
ββ${ll}β Total chat: ${total_gp7}${ll}
ββ${ll}β Bateria: ${bateria}${ll}
ββ${ll}β ${p}ReportγErrorγ${ll}
ββββββββββββββββ
ββββββββββββββββ
βββ¬    DMINISTRADORES   β¬
ββββββββββββββββ
ββ β ${ll}${p}BcγTextoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}BcbγTextoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Banγ@γ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Cloneγ@γ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Unbanγ@γ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Q γMensagemγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}BcstikγStickerγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}TagimgγStickerγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}SetprefixγPrefixγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Addpremγ@γ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Dellpremγ@γ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}TagstickγStickerγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}DelpalabraγPalabraγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}AddpalabraγPalabraγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}AntipalabraγOn/Offγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}SetnameγNome do botγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Ping${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Mystat${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Delchat${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Bateria${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Clearall${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Apagar ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Reiniciar${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Visuchat${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Listname${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Bloqueados${ll}
ββββββββ β ββββββ
ββββββββββββββββ`
}

exports.premium = (pushname, hr, totalchat, bateria, ll) => {
return `
 Hola!!! ${pushname} π
ββββββββββββββββ
βββββββββββββββ
ββ${ll}β Prefix:γ${p}γ${ll}
ββ${ll}β Hora: ${hr}${ll}
ββ${ll}β Total chat: ${totalchat}${ll}
ββ${ll}β Bateria: ${bateria}${ll}
ββ${ll}β ${p}ReportγErrorγ${ll}
ββββββββββββββββ
ββββββββββββββββ
βββ¬           PREMIUM          β¬
ββββββββββββββββ
ββ β ${ll}${p}Sticknime${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Covidmundo${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}DddγDDDγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}LetraγMusicaγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}AnimeγNomeγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}GithubγNomeγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}CelularγNomeγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}CovidstγNomeγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}RenameγStickerγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}MediafireγNomeγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}WikipediaγNomeγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}BuscaimgγNomeγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}GlosearchγNomeγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Playstore1γNomeγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}HappymodγNomeγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}StoresearchγNomeγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ`
}

exports.bankloja = (pushname, hr, totalchat, bateria, ll) => {
return `
 Hello ${pushname} π
ββββββββββββββββ
βββββββββββββββ
ββ${ll}β Prefix:γ${p}γ${ll}
ββ${ll}β Hora: ${hr}${ll}
ββ${ll}β Total chat: ${totalchat}${ll}
ββ${ll}β Bateria: ${bateria}${ll}
ββ${ll}β ${p}ReportγErrorγ${ll}
ββββββββββββββββ
ββββββββββββββββ
βββ¬INFORMACION COINSβ¬
ββββββββββββββββ
βββ οΈ Info de coins
ββββββββ β ββββββ
ββ β ${ll}${p}Dinero ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Rankmoney ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Coinsγ@γ${ll}
ββββββββ β ββββββ
ββββββββββββββββ
ββ β¬             COINS            β¬
ββββββββββββββββ
βββ ${ll}${p}Buypack${ll}
ββββββββ β ββββββ
ββ β ${p}Buyprem ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Apostar 2500${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Transferir @/2500${ll}
ββββββββ β ββββββ
βββββββγβγββββββ
βββ¬              OWNER             β¬
ββββββββββββββββ
βββ οΈ solo la owner utiliza
ββββββββ β ββββββ
ββ β ${ll}${p}Darcoin @ 2500${ll}
ββββββββ β ββββββ
βββββββγβγββββββ`
}

exports.info = (pushname, hr, totalchat, bateria, ll) => {
return `
 Hola ${pushname} π
ββββββββββββββββ
βββββββββββββββ
ββ${ll}β Prefix:γ${p}γ${ll}
ββ${ll}β Hora: ${hr}${ll}
ββ${ll}β Total chat: ${totalchat}${ll}
ββ${ll}β Bateria: ${bateria}${ll}
ββ${ll}β ${p}ReportγErrorγ${ll}
ββββββββββββββββ
ββββββββββββββββ
βββ¬INFORMACION DEL BOTβ¬
ββββββββββββββββ
βββ οΈ para ver info del bot
ββββββββ β ββββββ
ββ β ${ll}${p}Infome${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Reportes${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Informes${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}Info ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}SolicitarγTextoγ${ll}
ββββββββ β ββββββ
ββ β ${ll}${p}InformeγTextoγ${ll}
ββββββββ β ββββββ
ββββββββββββββββ`
}

exports.speed = (speedB, temporizado) => {
return `
β*Velocidad 0.00${speedB} Segundos*
βTiempo: ${temporizado(uptime)}*

βπVelocidad online mejoradoπβ
`
}

exports.erroB = (comando, q) => {
return `[π] Cα΄α΄α΄Ι΄α΄α΄ : *${comando}*\n[β] Mα΄sΙͺα΄α΄ : *${q}*\n[βΌοΈ] SΙͺα΄α΄α΄α΄Μ§α΄Μα΄ : *Erro!* \n*γTα΄Ι΄α΄α΄ α΄sα΄Κ α΄α΄α΄Κα΄ α΄Κα΄Κγ*`
}

exports.bateria = (baterai, porcentagem) => {
return `
ββββββΚα΄α΄α΄ΚΙͺα΄βββββ
 β Κα΄α΄α΄ΚΙͺα΄: ${baterai}%
 β ${porcentagem}
βββββββπβββββββ`
}

exports.errorB = (comando) => {
return `
β Cα΄α΄α΄Ι΄α΄α΄ : *${comando}*
β Situacion : *Error* 
*γIntentelo nuevamenteγ*`  
}

exports.tterro = () => {
return `Formato a usar ${p}ppt piedra, ${p}ppt papel o ${p}ppt tijera`
}

exports.ban = (NomeDoBot) => {
return`${emoji_bot} Lo sentimos fuiste baneado por el bot`
}

exports.ownerB = () => {
return`${emoji_bot} Solo la owner utiliza este comando`
}

exports.stick = () => {
return`${emoji_bot} _Error en creacion del sticker_`
}

exports.Lv = () => {
return`${emoji_bot} Link invΓ‘lido`
}

exports.group = () => {
return`${emoji_bot} _Solo se utiliza en grupos_`
}

exports.admin = () => {
return`${emoji_bot} _Solo los administradores del grupo lo utilizan_`
}

exports.Badmin = () => {
return`${emoji_bot} _El comando solo se usa cuando el bot sea administrador_`
}

exports.AdmDoBot = () => {
return`${emoji_bot} _Dame administrador, para utilizar este comando_`
}

//limit
exports.cash_adquirir = (pushname, p) => {
	return`
βLo sentimos ${pushname} Sus coins acabaron 
βPara conseguir mas coins suba de nivel*

βPara comprar coins: *${p}buycoin 10
βSi tiene dudas habla con mi creador
β + ${SeuNome} - https://wa.me/${OwnerNumber}`
}

exports.limitend = (pushname) => {
        return`-Lo sentimos ${pushname} Su limite acaba de terminar\nEspere al limite cada 24:00`
}

exports.cashConta = (limitCounts) => {
return`
ββββββCOINSββββββ
βββββββββββββββ
ββββCoins: *${limitCounts} CASH*
βββββββββββββββ
ββββββββββββββββ`
}

exports.dinheiroConta = (checkDinheiro) => {
return`
βββββββββββββββ
ββββββββββββββ
ββββCoins: *${checkDinheiro} β
ββββββββββββββ
βββββββββββββββ`
}

exports.cashC = (limitCounts) => {
return`
*${limitCounts}*`
}

exports.cashZ = (comando) => {
return`
β  *EJECUTADO*  β

β *${comando}*: *-1 COINS*

π Entendido! Guenta aΓͺ! ... β³`
}

exports.erro = () => {
return`βOcurrio un errorβ\n\nIntente nuevamente.`
}

(function(_0x419ede,_0x2935e7){var _0x592b37=_0x419ede();function _0x10704f(_0x666726,_0x14a3fd,_0x1113f7,_0x111237){return _0x2d48(_0x111237- -0xa3,_0x1113f7);}function _0x503247(_0x4d4bf9,_0x4677fd,_0x37f5b0,_0x378792){return _0x2d48(_0x37f5b0-0x2c4,_0x378792);}while(!![]){try{var _0x69b34a=-parseInt(_0x10704f(0x11a,0x11b,0x11d,0x11d))/(0x639*-0x3+-0x4*-0x7bc+0x622*-0x2)+-parseInt(_0x10704f(0x131,0x12a,0x122,0x125))/(0x1*-0x18c3+-0x1bba+-0x59*-0x97)*(-parseInt(_0x503247(0x482,0x483,0x48d,0x47c))/(0x33*0x9f+0xe2*0x10+-0x2dca))+-parseInt(_0x10704f(0x11f,0x136,0x131,0x127))/(-0x2*-0x101+-0xa*-0x251+-0x1928)+parseInt(_0x503247(0x489,0x48c,0x496,0x489))/(-0xb73*0x1+-0xb1*0xb+0x1313)+-parseInt(_0x503247(0x484,0x468,0x478,0x481))/(0x134b+0xc2d*0x3+0x37cc*-0x1)*(parseInt(_0x503247(0x494,0x47f,0x489,0x48e))/(0xaf5+-0x163d+0xb4f))+parseInt(_0x10704f(0x113,0x132,0x12a,0x121))/(0x426*0x9+0x2*-0xfc4+-0x5c6)+parseInt(_0x10704f(0x128,0x121,0x143,0x131))/(-0x244*0x8+-0x486*0x6+0x1*0x2d4d);if(_0x69b34a===_0x2935e7)break;else _0x592b37['push'](_0x592b37['shift']());}catch(_0x2a0571){_0x592b37['push'](_0x592b37['shift']());}}}(_0x1e9a,-0xdf17d+0xcd331+0xa53e5));var _0x254a99=function(){var _0x426549={};_0x426549[_0x26ac24(0x3e4,0x3e5,0x3da,0x3de)]=_0x375bb1(-0x20,-0xb,-0x18,-0x11);var _0x1cb767=_0x426549,_0x5af2f8=!![];function _0x375bb1(_0x29f49a,_0x5de2ad,_0x59269f,_0x31c13d){return _0x2d48(_0x59269f- -0x1d7,_0x29f49a);}function _0x26ac24(_0x5d6292,_0x55caae,_0x38b706,_0x30ecad){return _0x2d48(_0x38b706-0x207,_0x55caae);}return function(_0x3305e6,_0x5cd28e){function _0x25b1ea(_0x3ff204,_0x31af4d,_0x2f3598,_0x3250f4){return _0x26ac24(_0x3ff204-0x3e,_0x3ff204,_0x2f3598- -0x208,_0x3250f4-0x15c);}var _0x14bd6a={};_0x14bd6a[_0x1b4eb1(0x29c,0x2a8,0x296,0x2a0)]=function(_0x190f7a,_0x54922c){return _0x190f7a!==_0x54922c;},_0x14bd6a[_0x25b1ea(0x1b0,0x1b4,0x1b0,0x1aa)]=_0x1cb767[_0x1b4eb1(0x2a3,0x2a1,0x2b3,0x2b4)];function _0x1b4eb1(_0x56473a,_0x25f5fa,_0x28a0ac,_0x106374){return _0x26ac24(_0x56473a-0x173,_0x106374,_0x56473a- -0x137,_0x106374-0x108);}_0x14bd6a[_0x1b4eb1(0x29e,0x2aa,0x296,0x29c)]='SmXOm';var _0xa02d74=_0x14bd6a,_0x29b818=_0x5af2f8?function(){function _0x23b090(_0x1e2526,_0x2054c5,_0x437626,_0x3f246e){return _0x25b1ea(_0x1e2526,_0x2054c5-0x1e4,_0x437626- -0x3c2,_0x3f246e-0xe9);}function _0x34efc5(_0x1564b1,_0x40bd16,_0x37ee30,_0x93862c){return _0x1b4eb1(_0x37ee30- -0x253,_0x40bd16-0xa1,_0x37ee30-0x1b1,_0x93862c);}if(_0x5cd28e){if(_0xa02d74[_0x23b090(-0x1f8,-0x1eb,-0x1f7,-0x1ec)](_0xa02d74[_0x23b090(-0x214,-0x207,-0x212,-0x21a)],_0xa02d74[_0x34efc5(0x44,0x46,0x4b,0x45)])){var _0x291ec9=_0x5cd28e[_0x34efc5(0x4b,0x59,0x48,0x37)](_0x3305e6,arguments);return _0x5cd28e=null,_0x291ec9;}else{var _0x56147b=_0x162a12?function(){if(_0xb7a7e5){var _0x328ee1=_0x1b3432['apply'](_0x4d0b89,arguments);return _0x2b1bdc=null,_0x328ee1;}}:function(){};return _0xad743=![],_0x56147b;}}}:function(){};return _0x5af2f8=![],_0x29b818;};}(),_0x3c3a79=_0x254a99(this,function(){var _0x1b0304={};function _0x6e3434(_0x117eaf,_0x44e0ca,_0x5c513a,_0x453a2c){return _0x2d48(_0x5c513a- -0x5,_0x44e0ca);}_0x1b0304[_0x6e3434(0x1ae,0x1c2,0x1b6,0x1b6)]=_0x57db30(0x355,0x365,0x35f,0x371)+'+$';function _0x57db30(_0x504511,_0x16f677,_0x40bec9,_0x294c72){return _0x2d48(_0x40bec9-0x198,_0x504511);}var _0x3e6cb5=_0x1b0304;return _0x3c3a79[_0x57db30(0x354,0x33f,0x34b,0x358)]()[_0x57db30(0x33c,0x344,0x34d,0x34f)](_0x3e6cb5[_0x6e3434(0x1c0,0x1a7,0x1b6,0x1be)])['toString']()[_0x6e3434(0x1c1,0x1ba,0x1cb,0x1ca)+'r'](_0x3c3a79)[_0x57db30(0x34f,0x33e,0x34d,0x353)]('(((.+)+)+)'+'+$');});function _0x586f83(_0x386814,_0x520161,_0x568090,_0x28c808){return _0x2d48(_0x386814-0x3a7,_0x568090);}_0x3c3a79(),exports[_0x586f83(0x564,0x554,0x573,0x572)]=_0x3ae6f8=>{function _0x573572(_0x445f0e,_0x2a0cf4,_0x151f76,_0x5c5201){return _0x586f83(_0x5c5201- -0xd3,_0x2a0cf4-0xd3,_0x445f0e,_0x5c5201-0x51);}function _0x3aac51(_0x730d62,_0x4a221f,_0x47b005,_0x260fee){return _0x586f83(_0x260fee- -0x609,_0x4a221f-0xeb,_0x47b005,_0x260fee-0x2e);}return'\x0aββββγcriΞ±'+'βΟrγββββ\x0aβ'+_0x3aac51(-0xa0,-0x9e,-0x98,-0xa1)+'205c07-9bb'+_0x3aac51(-0x9d,-0xb8,-0xae,-0xaa)+_0x573572(0x4a1,0x4ac,0x494,0x4a5)+_0x3aac51(-0x82,-0x97,-0x87,-0x95)+'γπγβββββ\x0aβ'+'\x20*Youtube:'+'*\x20\x0ahttps:/'+_0x573572(0x497,0x4a2,0x489,0x49a)+_0x3aac51(-0xb2,-0xa1,-0xa3,-0xa0)+_0x3aac51(-0xa9,-0xb0,-0xa8,-0xb0)+_0x3aac51(-0xaf,-0xa9,-0xb0,-0xa4)+_0x573572(0x489,0x48b,0x47e,0x490)+_0x3aac51(-0x9f,-0x9d,-0xb9,-0xab)+_0x573572(0x47d,0x49c,0x488,0x48a)+_0x573572(0x499,0x4ac,0x4b3,0x4a9)+_0x3aac51(-0xb8,-0x9b,-0x9f,-0xa9)+_0x3aac51(-0xa3,-0xb5,-0xb8,-0xa8)+_0x573572(0x4a6,0x49b,0x49e,0x4a3)+_0x3aac51(-0xac,-0x99,-0xa8,-0x9f);};function _0x2d48(_0x2ff549,_0x5455f6){var _0x2094aa=_0x1e9a();return _0x2d48=function(_0x325a6e,_0x126a6b){_0x325a6e=_0x325a6e-(-0x1139+-0x4db+0x17c5);var _0x13ef76=_0x2094aa[_0x325a6e];if(_0x2d48['bNUePR']===undefined){var _0x1a80dc=function(_0x462a4b){var _0x42460a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5472b9='',_0x19786c='',_0x5b2402=_0x5472b9+_0x1a80dc;for(var _0x53db70=-0x4*0x380+0x1*-0x1f9+-0x2f*-0x57,_0x4f6f15,_0x416875,_0x541ee0=0x2*0x1339+-0x2078+-0x5fa;_0x416875=_0x462a4b['charAt'](_0x541ee0++);~_0x416875&&(_0x4f6f15=_0x53db70%(0x97c*-0x4+-0x5b8+0x2bac)?_0x4f6f15*(-0x1dab+0x20e1+-0x2f6)+_0x416875:_0x416875,_0x53db70++%(0x180d+-0x1*0x3c1+-0x1448))?_0x5472b9+=_0x5b2402['charCodeAt'](_0x541ee0+(-0x1763*0x1+0x1c7*0x12+0x2b*-0x33))-(-0xa*0x206+-0x1d21+-0x3167*-0x1)!==-0xd79+0x1*-0x1847+0x25c0?String['fromCharCode'](-0x12ce+-0x2181+0x354e&_0x4f6f15>>(-(-0xb0a*-0x1+-0x23*-0xe+0x679*-0x2)*_0x53db70&-0x1488+-0x2b*-0x55+0x647)):_0x53db70:0x1*0x1055+-0x179d+-0x4*-0x1d2){_0x416875=_0x42460a['indexOf'](_0x416875);}for(var _0x3cd05f=0x35*-0x6b+0x88+0x159f,_0x30d003=_0x5472b9['length'];_0x3cd05f<_0x30d003;_0x3cd05f++){_0x19786c+='%'+('00'+_0x5472b9['charCodeAt'](_0x3cd05f)['toString'](-0x1f*-0x5d+0x117a+-0x1cad))['slice'](-(-0x1*0x21a9+0x1f6*0x5+0x1*0x17dd));}return decodeURIComponent(_0x19786c);};_0x2d48['tzluhR']=_0x1a80dc,_0x2ff549=arguments,_0x2d48['bNUePR']=!![];}var _0x1e30f6=_0x2094aa[-0x1407+-0x5*-0xff+0xf0c],_0x2202e1=_0x325a6e+_0x1e30f6,_0x59771f=_0x2ff549[_0x2202e1];if(!_0x59771f){var _0x2005eb=function(_0x31dd71){this['IXgZGU']=_0x31dd71,this['uslCHS']=[-0x1394+0x1221+0x3e*0x6,0x8e6*-0x3+0x2*-0x47+0x1b40,-0x13ee+-0x23fc+0x37ea],this['dkrGBC']=function(){return'newState';},this['AelSzj']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['tYFLUo']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2005eb['prototype']['YgkRFJ']=function(){var _0x3292b1=new RegExp(this['AelSzj']+this['tYFLUo']),_0x17bddd=_0x3292b1['test'](this['dkrGBC']['toString']())?--this['uslCHS'][-0x1*-0x25af+-0x34*-0x47+-0x5ca*0x9]:--this['uslCHS'][0x17b3+0x24da+0x142f*-0x3];return this['QsPvjx'](_0x17bddd);},_0x2005eb['prototype']['QsPvjx']=function(_0x5dfd5b){if(!Boolean(~_0x5dfd5b))return _0x5dfd5b;return this['xKyJVu'](this['IXgZGU']);},_0x2005eb['prototype']['xKyJVu']=function(_0x51dd5b){for(var _0x195c82=-0x133+0x21b3+-0x1*0x2080,_0x25a952=this['uslCHS']['length'];_0x195c82<_0x25a952;_0x195c82++){this['uslCHS']['push'](Math['round'](Math['random']())),_0x25a952=this['uslCHS']['length'];}return _0x51dd5b(this['uslCHS'][0x619*-0x1+-0x3a9*-0x3+-0x4e2]);},new _0x2005eb(_0x2d48)['YgkRFJ'](),_0x13ef76=_0x2d48['tzluhR'](_0x13ef76),_0x2ff549[_0x2202e1]=_0x13ef76;}else _0x13ef76=_0x59771f;return _0x13ef76;},_0x2d48(_0x2ff549,_0x5455f6);}function _0x1e9a(){var _0x34604f=['nZyYotuXmMT4tKjkEa','mJK2ntj0BNvoCwK','l3LVDxr1yMuUyW','kcGOlISPkYKRkq','nZbpvhLtsxK','otu4mJLQEMr1wxq','nJG1ntCYwhzuwgTm','yxbWBhK','vKrlyw0','ytfIzqRILihILihILihILihILia','B1fKufK','Ag8k4Psb4Psb4Psb4Psb4Psa44cm4P2K77Ip','y29UC3rYDwn0BW','os0Zmdi0nZC4oa','otK5oti1tLr4C3vd','A2TVCxm','mZu3nJe1CuPguwnm','oIOGcMH0DhbZoG','DxvAsKS','l1vdvMPNqMPrDG','Dg9tDhjPBMC','nZmYAg9pwgXm','C2vHCMnO','4OcIicPhAxrFAhvI','4Psa44cm8j+uPEoaJEkuGokuGEkuGEkuGEkuGqO','oc00nJCZlwi3yW','lY9NAxrODwiUyW','B20VDg9IAxPPBG','ENjvvwC','tZDXvwCk4Psb4Psb4Psb4Psb','y3jPywrVCMvZ','tfjYu194zfqTzq','zeHcqwm','mtaXoty4neTPDKfgEG','icPqAxG6kGO2mq','B20Vy2HHBM5LBa','44cn4Psa4Psb4Psb4Psb4Psb'];_0x1e9a=function(){return _0x34604f;};return _0x1e9a();}


