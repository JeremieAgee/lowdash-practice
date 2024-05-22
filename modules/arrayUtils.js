const _ = require("lodash");
function chunkArray(arr, size){
    return _.chunk(arr, size);
}
function findUniqueElements(arr){
    return _.uniq(arr);
}
module.exports = {
    chunkArray,
    findUniqueElements
}