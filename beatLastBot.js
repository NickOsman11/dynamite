class Bot {

    makeMove(gamestate) {

        const weaknesses = {"R" : "P", "R" : "D",
                        "S" : "R", "S" : "D",
                        "P" : "S", "P" : "D",
                        "D" : "W",
                        "W" : "R", "W" : "P", "W" : "S"}

        var currentRound = gamestate.rounds.length

        if (currentRound == 0){
            this.myScore = 0
            this.opponentScore = 0
            this.dynamite = 99
            return "D"              ///start with a bang
        }
        
        // else {
        //     var opponentLastMove = gamestate.rounds[gamestate.rounds.length - 1].p2
        //     var myLastMove = gamestate.rounds[gamestate.rounds.length - 1].p1
        //     if 

        // }
        

        var beatLastMoveToMake = {"R" : "P",    ///if opp played R, gives P
                                "P" : "S",
                                "S" : "R",
                                "D" : "D",      ///fight fire with fire
                                "W" : "S"}


        var currentRound = gamestate.rounds.length
        
        // if (this.score > 900 && this.dynamite > 0){
        //     this.dynamite -= 1
        //     return "D"
        // }

        var opponentLastMove = gamestate.rounds[gamestate.rounds.length - 1].p2
        var move = beatLastMoveToMake[opponentLastMove]
        if (move == "D"){
            this.dynamite -= 1
        }
        return move

    }
}

module.exports = new Bot();
