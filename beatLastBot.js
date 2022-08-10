class Bot {

    updateScore(opponentLastMove, myLastMove){

        if (this.getsKilledBy(myLastMove, opponentLastMove)){ ///does my last move get killed by oppoent's last move?
           this.opponentScore += 1
        }
        else if (this.getsKilledBy(opponentLastMove, myLastMove)){
           this.myScore += 1
        }
        else {
           this.drawCount += 1
        }
        this.oppnentsMoveHistory += opponentLastMove
    }
    
    getsKilledBy(move1, move2){ ///does move1 get killed by move2?

        const weaknessOf = {"R" : "P", "R" : "D",
                            "S" : "R", "S" : "D",
                            "P" : "S", "P" : "D",
                            "D" : "W",
                            "W" : "R", "W" : "P", "W" : "S"}
        
        return move2 == weaknessOf[move1]
    }


        


    makeMove(gamestate) {

        var currentRound = gamestate.rounds.length

        if (currentRound == 0){
            this.myScore = 0
            this.opponentScore = 0
            this.drawCount = 0
            this.dynamite = 99
            this.oppnentsMoveHistory = ""
            return "D"              ///start with a bang
        }
        
        else {
            var opponentLastMove = gamestate.rounds[gamestate.rounds.length - 1].p2
            var myLastMove = gamestate.rounds[gamestate.rounds.length - 1].p1
            this.updateScore(opponentLastMove, myLastMove)
        }
        

        var beatLastMove = {"R" : "P",    ///if opp played R, will play P
                            "P" : "S",
                            "S" : "R",
                            "D" : "D",      ///fight fire with fire
                            "W" : "S"}


        var move = beatLastMove[opponentLastMove]
        if (move == "D"){
            this.dynamite -= 1
            if (this.dynamite < 0){
                move = "R"
            }
        }
        return move
    }
}

module.exports = new Bot();
