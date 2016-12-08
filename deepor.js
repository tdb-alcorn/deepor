function get(obj, pathArray) {
    if (pathArray && pathArray.constructor === Array) {
        for (var i=0, len=pathArray.length, keys=Object.keys(obj); i<len; i++) {
            if (keys.indexOf(pathArray[i]) === -1) {
                break;
            }
            obj = obj[pathArray[i]];
            keys = Object.keys(obj);
        }

        return obj;
    }
    return undefined;
}

function set(obj, pathArray, value) {
    if (pathArray && pathArray.constructor === Array) {
        for (var i=0, len=pathArray.length, keys=Object.keys(obj); i<(len-1); i++) {
            if (keys.indexOf(pathArray[i] === -1)) {
                obj[pathArray[i]] = new Object();
            }
            obj = obj[pathArray[i]];
            keys=Object.keys(obj);
        }
        obj[pathArray[len-1]] = value;
    }
}

module.exports = {
    get: get,
    set: set,
};
