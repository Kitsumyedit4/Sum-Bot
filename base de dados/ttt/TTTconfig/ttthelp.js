const ttthelp = (p) => {
    return `
『 \u{1F4AE} Tic Tac Toe \u{1F4AE}』 

❖ JUEGO TI TAC TOE ❖

❖ SOLO PARA GRUPOS ❖

 『❗』 INICIAR
  ◪
  ▛❖ ❏ Para iniciar digite:
  ▌     ▙「 ${p}ttt [ DIFICULDADE ] 」
  ▙❖ ❏ Solo una persona

『❗』 MODO
  ◪ 
  ▛❖Facil : totalmente aleatório
  ▌     (Juegue aprendiendo)
  ▛❖Normal : 66% de perder
  ▌     la partida
  ▛❖Dificil : 100% de perder
  ▌     la partida
  ▙❖Inposible : Supera la logica
           

『🕜』TEMPORIZADOR
◪ 
  ▛❖Una partida se cargara a partir 
  ▌     de los 4 minutos del anterior 
  ▌   juego
  ▌     
  ▌
  ▙❖La partida termina
           en 4 minutos

『❗』COMANDOS
  ◪ 
  ▛❖ ❏ Para marcar digite:
  ▌     ▙「 ${p}cuadro [ COORDENADA ] 」
  ▌
  ▙❖ ❏ Ejemplo:
	        ▙「   ${p}coord a1 
	               ----------------------
	               🌀1️⃣2️⃣3️⃣
	               🅰️❌🔲🔲
	               🅱️🔲🔲🔲
	               ©️🔲🔲🔲  」

『❗』STATUS USUARIO
  ◪ 
  ▙❖ ❏ Para ver sus estadisticas 
          ▙「 ${p}ayuda 」

『👑』ESTADISTICAS
◪ 
  ▛❖FACIL
  ▌     ▛ Victorias : +「 25 / 50 」
  ▌     ▙ Derrota : -「 200 / 200 」
  ▌
  ▛❖NORMAL
  ▌     ▛ Victorias : +「 75 / 150 」
  ▌     ▙ Derrota : -「 75 / 150 」
  ▌
  ▛❖DIFICIL
  ▌     ▛ Victorias : +「 200 / 400 」
  ▌     ▙ Derrota : -「 25 / 50 」
  ▌
  ▛❖DIFICIL
  ▌     ▛ Victorias : +「 1000 / 2000 」
  ▌     ▙ Derrota : -「 0 / 0 」
  ▌
  ▛❖ EMPATES
  ▌     ▙「 0 / 0 」
  ▌ 
  ▙❖PARTIDAS NO FINALIZADAS
          ▙ -「 75 / 150 」
`
}

exports.ttthelp = ttthelp