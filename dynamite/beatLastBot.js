class Bot {



    makeMove(gamestate) {

        var beatLastMoveToMake = {"R" : "P",   ///if opp played R, gives P
                                "P" : "S",
                                "S" : "R",
                                "D" : "D",
                                "W" : "S"}


        var currentRound = gamestate.rounds.length

        if (currentRound == 0){
            return "D"              ///start with a bang
        }

        var opponentLastMove = gamestate.rounds[gamestate.rounds.length - 1].p2
        return beatLastMoveToMake[opponentLastMove]
    }
}

module.exports = new Bot();
