class Bot {
    makeMove(gamestate) {

        if (gamestate.rounds.length == 0){
            this.dynamite = 99
            return "D"
        }
        var move = gamestate.rounds[gamestate.rounds.length-1].p2
        if (move == "D"){
            if (this.dynamite != 0){
                this.dynamite -= 1
            }
            else {
                move = "R"
            }
        }
        return move
        
    }
}

module.exports = new Bot();
