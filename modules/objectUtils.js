const _ = require("lodash");
function deepCloneObject(obj){
    return _.defaultsDeep(obj);
}
function mergeObjects(obj1, obj2){
    return _.merge(obj1, obj2);
}

module.exports = {
    deepCloneObject,
    mergeObjects
}