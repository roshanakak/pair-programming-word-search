const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    let transposedLetters = letters[0].map((item, colIndex) => letters.map(row => row[colIndex]));
    const verticalJoin = transposedLetters.map(ls => ls.join(''))
    for (v of verticalJoin) {
        if (v.includes(word)) return true;
    }

return false;
}

module.exports = wordSearch


