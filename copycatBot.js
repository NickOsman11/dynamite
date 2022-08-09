class Bot {
    makeMove(gamestate) {

        if (gamestate.rounds.length == 0){
            return "D"
        }
        return gamestate.rounds[gamestate.rounds.length-1].p2
    }
}

module.exports = new Bot();
