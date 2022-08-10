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


        



        
        if(currentRound > 1){ //for count two move 


            // P = 1, R = 2, S = 3, D = 0, W = 0
            // 1 2  total     3  
            // P P   2       R/S   
            // P R   3        S
            // P S   4  
            // P R   3
            // R R   4
            // R S   5
            // S S   6
            // D W   0
            // D D   0
            // W D   0
            // W W   0

            // count opponent dynamite and Water bombs used
        } else if(currentRound <= 2){
            var opponentLastMove = gamestate.rounds[gamestate.rounds.length - 1].p2
            var move = beatLastMoveToMake[opponentLastMove]
            if (move == "D"){
            this.dynamite -= 1

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
