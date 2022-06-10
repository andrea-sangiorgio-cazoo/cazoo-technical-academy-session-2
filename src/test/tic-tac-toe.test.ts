import {TicTacToe} from "../main/tic-tac-toe";

describe('Tic Tac Toe', () => {
    it("A player can place a token on the board", () => {
        let ticTacToe = new TicTacToe()
        expect(ticTacToe.placeToken('X', [0,0]))
    })

    it("expects X to go first", () => {
        let ticTacToe = new TicTacToe()
        expect(() => ticTacToe.placeToken("O", [0,0])).toThrow()
    })

    //players alternate placing X and O
    it("the player X cannot place a token 2 times in a row", () => {
        let ticTacToe = new TicTacToe()
        ticTacToe.placeToken("X", [0,0])
        expect(() => ticTacToe.placeToken("X", [0,0])).toThrow()
    })

    //players alternate placing X and O
    it("the player O cannot place a token 2 times in a row", () => {
        let ticTacToe = new TicTacToe()
        ticTacToe.placeToken("X", [0,0])
        ticTacToe.placeToken("O", [1,0])
        expect(() => ticTacToe.placeToken("O", [2,0])).toThrow()
    })

    it("players cannot play on a played position", () => {
        let ticTacToe = new TicTacToe()
        ticTacToe.placeToken("X", [0,0])
        expect(() => ticTacToe.placeToken("O", [0,0])).toThrow()
    })

    it("a player wins when has placed its token on a the first row", () => {
        let ticTacToe = new TicTacToe()

        ticTacToe.placeToken("X", [0,0])
        ticTacToe.placeToken("O", [1,1])
        ticTacToe.placeToken("X", [0,1])
        ticTacToe.placeToken("O", [2,2])
        ticTacToe.placeToken("X", [0,2])

        expect(ticTacToe.getWinner()).toEqual("X")
    })

    it("a player wins when has placed its token on the second row", () => {
        let ticTacToe = new TicTacToe()

        ticTacToe.placeToken("X", [1,0])
        ticTacToe.placeToken("O", [0,1])
        ticTacToe.placeToken("X", [1,1])
        ticTacToe.placeToken("O", [2,2])
        ticTacToe.placeToken("X", [1,2])

        expect(ticTacToe.getWinner()).toEqual("X")
    })

    it("a player wins when has placed its token on the third row", () => {
        let ticTacToe = new TicTacToe()

        ticTacToe.placeToken("X", [2,0])
        ticTacToe.placeToken("O", [0,1])
        ticTacToe.placeToken("X", [2,1])
        ticTacToe.placeToken("O", [0,2])
        ticTacToe.placeToken("X", [2,2])

        expect(ticTacToe.getWinner()).toEqual("X")
    })

    it("a player wins when has placed its token on a the first column", () => {
        let ticTacToe = new TicTacToe()

        ticTacToe.placeToken("X", [0,0])
        ticTacToe.placeToken("O", [1,1])
        ticTacToe.placeToken("X", [1,0])
        ticTacToe.placeToken("O", [2,2])
        ticTacToe.placeToken("X", [2,0])

        expect(ticTacToe.getWinner()).toEqual("X")
    })

    it("a player wins when has placed its token on a the two column", () => {
        let ticTacToe = new TicTacToe()

        ticTacToe.placeToken("X", [0,1])
        ticTacToe.placeToken("O", [1,2])
        ticTacToe.placeToken("X", [1,1])
        ticTacToe.placeToken("O", [2,2])
        ticTacToe.placeToken("X", [2,1])

        expect(ticTacToe.getWinner()).toEqual("X")
    })

    it("a player wins when has placed its token on a the third column", () => {
        let ticTacToe = new TicTacToe()

        ticTacToe.placeToken("X", [0,2])
        ticTacToe.placeToken("O", [0,1])
        ticTacToe.placeToken("X", [1,2])
        ticTacToe.placeToken("O", [0,0])
        ticTacToe.placeToken("X", [2,2])

        expect(ticTacToe.getWinner()).toEqual("X")
    })

})
