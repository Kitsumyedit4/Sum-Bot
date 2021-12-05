const cheerio = require('cheerio')
const axios = require('axios')

function mundohentai(titulo) {
return new Promise(async(resolve, reject) => {
axios.get('https://www.muitohentai.com/buscar/' + titulo)
.then(html => {
const $ = cheerio.load(html.data)
let post = []
$(".tvshows").each(function(a, b) {

let titulo = $(b).find('.poster > img').attr('alt')
let capa = $(b).find('.poster > img').attr('src')
let link = 'muitohentai.com' + $(b).find('.poster > a').attr('href')

let dados = {
titulo: titulo,
capa: capa,
link: link
}
post.push(dados)
})
resolve({coded_by: 'Guiih-Exe', resultado: post})
})
})
}

module.exports = mundohentai