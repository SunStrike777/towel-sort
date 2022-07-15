module.exports = function towelSort(matrix) {
    if (matrix == undefined) {return []}
    return (matrix = matrix.reduce((item1, item2, i) => {
        return item1.concat(!(i % 2) ? item2 : item2.reverse());
    }, []));
};
