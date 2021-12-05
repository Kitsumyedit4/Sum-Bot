const fs = require('fs')
const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const CFonts  = require('cfonts')

const uang = JSON.parse(fs.readFileSync('./base de dados/datauser/uang.json'))
corzinhas = ["red","green","yellow","blue","magenta","cyan","white","gray","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"]
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		});
		return res.data;
	} catch (e) {
		console.log(`Error : ${e}`);
	}
};

const randomBytes = (length) => {
    return Crypto.randomBytes(length);
};

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase();
};

const getGroupAdmins = (participants) => {
	admins = [];
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : '';
	}
	return admins;
};

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const spinner = { 
"interval": 120,
"frames": [
"C",
"Co",
"Con",
"Cone",
"Conec",
"Conect", 
"Conecta",
"Conectan",
"Conectand", 
"Conectando",
"Conectando a",
"Conectando a L",
"Conectando a Lo",
"Conectando a Lol",
"Conectando a Loli",
"Conectando a Loliz",
"Conectando a Lolizi",
"Conectando a Lolizit",
"Conectando a Lolizita",
"Conectando a Lolizita-",
"Conectando a Lolizita-B",
"Conectando a Lolizita-Bo",
"Conectando a Lolizita-Bot",
  ]}

let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: `${cor1}`, succeedColor: `${cor1}`, spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
	spins.add(id, {text: text})
	}
	const log = (id, text) => {
	spins.add(id, {text: text})
	}
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

	}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

        
        var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Domigo'; break;
                case 1: hari = 'Segunda-feira'; break;
                case 2: hari = 'terça'; break;
                case 3: hari = 'quarta-feira'; break;
                case 4: hari = 'quinta-feira'; break;
                case 5: hari = 'sexta-feira'; break;
                case 6: hari = 'sábado'; break;
            }
            switch(bulan1) {
                case 0: bulan1 = 'Janeiro'; break;
                case 1: bulan1 = 'fevereiro'; break;
                case 2: bulan1 = 'Março'; break;
                case 3: bulan1 = 'abril'; break;
                case 4: bulan1 = 'Maio'; break;
                case 5: bulan1 = 'Junho'; break;
                case 6: bulan1 = 'julho'; break;
                case 7: bulan1 = 'agosto'; break;
                case 8: bulan1 = 'setembro'; break;
                case 9: bulan1 = 'Outubro'; break;
                case 10: bulan1 = 'novembro'; break;
                case 11: bulan1 = 'dezembro'; break;
            }
                 var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
                var tampilJam = '' + jam + ':' + menit + ':' + detik + '';
var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = 'Hora da meia-noite🌚'; break;
                case 1: waktoo = 'Hora da meia-noite🌚'; break;
                case 2: waktoo = 'De manhã cedo🌒'; break;
                case 3: waktoo = 'De manhã cedo🌓'; break;
                case 4: waktoo = 'Alvorecer🌔'; break;
                case 5: waktoo = 'Alvorecer🌔'; break;
                case 6: waktoo = 'bom\ndia 🌝'; break;
                case 7: waktoo = 'bom\ndia 🌝'; break;
                case 8: waktoo = 'bom\ndia 🌝'; break;
                case 9: waktoo = 'bom\ndia 🌝'; break;
                case 10: waktoo = 'bom \ndia 🌝'; break;
                case 11: waktoo = 'Boa\ntarde 🌞'; break;
                case 12: waktoo = 'Boa\ntarde 🌞'; break;
                case 13: waktoo = 'Boa\ntarde 🌞'; break;
                case 14: waktoo = 'Boa\ntarde 🌞'; break;
                case 15: waktoo = 'Boa\ntarde 🌝'; break;
                case 16: waktoo = 'Boa\ntarde 🌝'; break;
                case 17: waktoo = 'Boa\ntarde 🌖'; break;
                case 18: waktoo = 'Quase\na\nnoite 🌘'; break;
                case 19: waktoo = 'Quase\na\nnoite 🌚'; break;
                case 20: waktoo = 'Boa\nnoite 🌚'; break;
                case 21: waktoo = 'Boa\nnoite 🌚'; break;
                case 22: waktoo = 'Boa\nnoite 🌚'; break;
                case 23: waktoo = 'Boa\nnoite 🌚'; break;
            }
            var tampilUcapan = '' + waktoo;  
const _0x530b4e=_0x59f3;function _0x4885(){const _0x5298e1=['3qhUCDw','center','2748wfLTWA','block','red','console','7PEUMsw','179278EAcoYc','render','174601CPrTCn','177400bBaFOn','16544VUGJBG','1212402ELEpKd','593600FxwGVo','36mgkdEc','\x0aNome/Versao\x20:\x20LolizitaV5.0','magenta','Youtube\x20:\x20https://youtu.be/_UfZnr6jKvQ','4145hPtzVd','404gJzhDO','\x0aInstagram:\x20tobikkjjy'];_0x4885=function(){return _0x5298e1;};return _0x4885();}function _0x59f3(_0x17621f,_0x26c4a6){const _0x4885d0=_0x4885();return _0x59f3=function(_0x59f3a2,_0x352806){_0x59f3a2=_0x59f3a2-0x1e2;let _0x32dd69=_0x4885d0[_0x59f3a2];return _0x32dd69;},_0x59f3(_0x17621f,_0x26c4a6);}(function(_0x16c960,_0xcc4eaa){const _0x442566=_0x59f3,_0x4d5788=_0x16c960();while(!![]){try{const _0x3ffb21=-parseInt(_0x442566(0x1ed))/0x1+-parseInt(_0x442566(0x1eb))/0x2*(-parseInt(_0x442566(0x1e4))/0x3)+parseInt(_0x442566(0x1e2))/0x4*(-parseInt(_0x442566(0x1f6))/0x5)+-parseInt(_0x442566(0x1f0))/0x6*(parseInt(_0x442566(0x1ea))/0x7)+parseInt(_0x442566(0x1f1))/0x8+parseInt(_0x442566(0x1f2))/0x9*(parseInt(_0x442566(0x1ee))/0xa)+-parseInt(_0x442566(0x1ef))/0xb*(-parseInt(_0x442566(0x1e6))/0xc);if(_0x3ffb21===_0xcc4eaa)break;else _0x4d5788['push'](_0x4d5788['shift']());}catch(_0x376829){_0x4d5788['push'](_0x4d5788['shift']());}}}(_0x4885,0x1d022));const banner=cfonts[_0x530b4e(0x1ec)](''+waktoo,{'font':_0x530b4e(0x1e7),'align':_0x530b4e(0x1e5),'gradient':[_0x530b4e(0x1e8),_0x530b4e(0x1f4)]}),youtubeDoTobi=_0x530b4e(0x1f5),nomeDoBotEVersão=_0x530b4e(0x1f3),instagramDoTobi=_0x530b4e(0x1e3),criadorNomeTobi='\x0aCriador\x20:\x20Tobi',banner2=cfonts[_0x530b4e(0x1ec)](''+youtubeDoTobi+nomeDoBotEVersão+instagramDoTobi+criadorNomeTobi,{'font':_0x530b4e(0x1e9),'align':_0x530b4e(0x1e5),'gradient':[_0x530b4e(0x1e8),'magenta']});
             
module.exports = {
getBuffer,
h2k,
generateMessageID, 
getGroupAdmins, 
getRandom, 
start, 
info, 
success, 
banner, 
banner2,
close, 
log
}
