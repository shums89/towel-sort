
// You should implement your task here.

module.exports = function towelSort(matrix) {
    return arguments.length ?
        matrix.reduce((acc, cur, i) => {
            return acc.concat((!(i % 2) ? cur : cur.reverse()));
        }, []) :
        [];
}
