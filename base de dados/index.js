console.log('Iniciando bot...')
const {WAConnection} = require('@adiwajshing/baileys');
const fs = require('fs');
let { spawn } = require('child_process')
let path = require('path')
let package = require('./package.json')
const CFonts  = require('cfonts')
const cfonts = require('cfonts')
const tobi = new WAConnection()
emoji_bot = "💎🍒"

const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, SeuNome, OwnerNumber, NomeDoBot} = infos

require('./lolizita.js')
nocache('./lolizita.js', module => console.log(`${module} oi`))

CFonts.say('By Tobi', {
font: 'block',
align: 'center',
gradient: ['red', 'magenta']
})

CFonts.say(`Lolizita-BOT|V 5`, {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
})

function start(file) {
let args = [path.join(file), ...process.argv.slice(2)]
CFonts.say([process.argv[0], ...args].join(' '), {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
})

let p = spawn(process.argv[0], args, {
stdio: ['inherit', 'inherit', 'inherit', 'ipc']
})

.on('message', data => {
console.log('[RECEBIDO]', data)

switch (data) {
case 'reset':
p.kill()
start.apply(this, arguments)
break

case 'uptime':
p.send(process.uptime())
break
}
})

.on('error', e => {
console.error(e)
fs.watchFile(args[0], () => {
start()
fs.unwatchFile(args[0])
})
})
}

function nocache(module, cb = () => { }) {
console.log('Module', `${module}`, 'agora sendo observado por mudanças')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

start('lolizita.js')