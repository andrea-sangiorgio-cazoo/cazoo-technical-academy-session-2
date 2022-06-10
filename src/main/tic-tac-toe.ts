export class TicTacToe {
    currentPlayer = "X"
    board = [['','',''],['','',''],['','','']]

    placeToken(player : "X"|"O", position : [0|1|2, 0|1|2]) {
        if (player !== this.currentPlayer) {
            throw new Error(`It is not ${player}'s turn`)
        }

        if (this.board[position[0]][position[1]].length) {
            throw new Error(`This position is already taken`)
        }

        this.board[position[0]][position[1]] = player

        this.switchPlayer()
    }

    getWinner() : 'X' | 'O' | ''
    {
        let winner : 'X' | 'O' | '' = ''

        this.board.forEach(row => {
            if(row[0].length) {
                if(
                    row[0] === row[1] &&
                    row[1] === row[2]
                ) {
                    //@ts-ignore
                    winner = row[0]
                }
            }
        })

        for(let i = 0; i < this.board.length; i++) {            
            if(this.board[0][i].length) {
                if(
                    this.board[0][i] === this.board[1][i] &&
                    this.board[1][i] === this.board[2][i]
                ) {                        
                    //@ts-ignore
                    winner = this.board[0][i]
                }   
            }
        }

        return winner
    }

    private switchPlayer() : void
    {
        if(this.currentPlayer === "O") {
            this.currentPlayer = "X"
        } else {
            this.currentPlayer = "O"
        }
    }
 }
