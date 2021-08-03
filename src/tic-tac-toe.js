class TicTacToe {
    constructor() {
        this.playground = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
        this.currentPlayer = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.playground[rowIndex][columnIndex] === null) {
            this.playground[rowIndex][columnIndex] = this.currentPlayer;
            if (this.currentPlayer === 'x')
                this.currentPlayer = 'o';
            else
                this.currentPlayer = 'x';
        }
    }

    isFinished() {
         return Boolean(this.getWinner()) || this.isDraw()
    }

    _checkWin(row) {
        if (row === 'xxx')
            return 'x'
        else if (row === 'ooo')
            return 'o'
        else
            return false
    }

    getWinner() {
        for (let row = 0; row < 3; row++) {
            let rowStr = this.playground[row].join('')
            if (this._checkWin(rowStr)) {
                return this._checkWin(rowStr)
            }
        }
        for (let col = 0; col < 3; col++) {
            let colStr = ''
            for (let row = 0; row < 3; row++) {
                colStr += this.playground[row][col];
            }
            if (this._checkWin(colStr)) {
                return this._checkWin(colStr)
            }
        }

        let diagStr = ''
        let revDiagStr = ''
        for (let i = 0; i < 3; i++) {
            diagStr += this.playground[i][i]
            revDiagStr += this.playground[i][2 - i]
        }

        if (this._checkWin(diagStr))
            return this._checkWin(diagStr)
        if (this._checkWin(revDiagStr))
            return this._checkWin(revDiagStr)

        return null
    }

    noMoreTurns() {
        for (let row of this.playground) {
            for (let el of row) {
                if (el === null)
                    return false
            }
        }
        return true;
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner())
    }


    getFieldValue(rowIndex, colIndex) {
        return this.playground[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;