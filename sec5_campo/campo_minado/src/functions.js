const createBoard = (rows, columns) => {

    // Para cada Field, coloca o objeto (L9-15) usando a função map
    return Array(rows).fill(0).map( (_, row) => {

        return Array(columns).fill(0).map( (_, column) => {

            return {
                column,
                exploded: false,
                flagged: false,
                mined: false,
                nearMines: 0,
                opened: false,
                row,
            }

        } )

    } )

};

const spreadMines = (board, minesAmount) => {
    // Espalha as minas em posições aleatórias que não tenham minhas
    const rows = board.length;
    const columns = board[0].length;
    let minesPlanted = 0;

    // Loop
    while (minesPlanted < minesAmount) {

        const rowSelected = parseInt( Math.random() * rows );
        const columnSelected = parseInt( Math.random() * columns );

        if(!board[rowSelected][columnSelected].mined) {
            board[rowSelected][columnSelected].mined = true;
            minesPlanted++;
        }

    }
};

const createMineBoard = ( rows, columns, minesAmount ) => {
    // Chama as funções anteriores e retorna o board
    const board = createBoard( rows, columns );
    spreadMines( board, minesAmount );
    return board;
};

const cloneBoard = (board) => {
    // Gera um clone do board (em JS, não modificamos os objetos, mas os clones dos objetos)
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
};

const getNeighbors = (board, row, column) => {

    // Gera os vizinhos válidos, ou seja, os 8 Fields ao redor que estejam em posições válidas
    const neighbors = [];
    const rows = [row - 1, row, row + 1];
    const columns = [column - 1, column, column + 1];

    rows.forEach( r => {
        columns.forEach( c => {

            const different = r !== row || c !== column;
            const validRow = r>=0 && r<board.length;
            const  validColumn = c>=0 && c<board[0].length;
            if(different && validRow && validColumn)
                neighbors.push(board[r][c]);

        })
    } )

    return neighbors;

};

const safeNeighborhood = (board, row, column) => {

    // Checa se a vizinhança é segura para que seja aberta em openField
    const safes = (result, neighbor) => result && !neighbor.mined
    return getNeighbors(board, row, column).reduce(safes, true)
};

const openField = (board, row, column) => {

    const field = board[row][column]

    if (!field.opened) {
        field.opened = true
        if (field.mined) {
            field.exploded = true
        } else if (safeNeighborhood(board, row, column)) {
            getNeighbors(board, row, column)
                .forEach(n => openField(board, n.row, n.column))
        } else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }

}

const fields = (board) =>  [].concat(...board);

const hadExplosion = (board) =>  fields(board).filter( field => field.exploded ).length > 0;

const pending = (field) => (field.mined && !field.flagged) || (!field.mined && !field.opened)

const wonGame = (board) => fields(board).filter(pending).length === 0

const showMines = (board) => fields(board).filter( field => field.mined ).forEach( field => field.opened = true );

const invertFlag = (board, row, column) => {
    const field = board[row][column];
    field.flagged = !field.flagged;
};

const flagsUsed = (board) => {
    return fields(board).filter(field => field.flagged).length
};

export { 
    createMineBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed,
};
