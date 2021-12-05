const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
『🎲 𝗧𝗜𝗖 𝗧𝗔𝗖 𝗧𝗢𝗘 🎲 』

『❖ NOMBRE: ${pushname} 』

『  ➣ Victorias: ${userWins} 🎲』
『  ➣ Derrotas: ${userDefeats} 🎲』
『  ➣ Empates : ${userTies} 🎲』
『  ➣ Puntos  : ${userPoints} 🎲』
`
}

exports.tttme = tttme