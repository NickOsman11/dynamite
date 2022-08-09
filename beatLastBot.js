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
                                "S" : "R",      //
                                "D" : "D",      ///fight fire with fire
                                "W" : "S"}      // "W" : "D"

        

        var currentRound = gamestate.rounds.length
        
        // if (this.score > 900 && this.dynamite > 0){
        //     this.dynamite -= 1
        //     return "D"
        // }
        if(currentRound > 2){ //for count two move
            let opponentLastMove = gamestate.rounds[gamestate.rounds.length - 1].p2
            let opponentLast2Move = gamestate.rounds[gamestate.rounds.length - 2].p2
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
            }
        }
        
        return move

    }
}

module.exports = new Bot();
