function get(obj, pathArray) {
    if (pathArray && pathArray.constructor === Array) {
        for (var i=0, len=pathArray.length; i<len; i++) {
            try {
                obj = obj[pathArray[i]];
            } catch (err) {
                break;
            }
        }
        return obj;
    }
    return undefined;
}

function set(obj, pathArray, value) {
    if (pathArray && pathArray.constructor === Array) {
        for (var i=0, len=pathArray.length; i<(len-1); i++) {
            try {
                if (obj[pathArray[i]] === undefined) {
                    throw new Error();
                }
            } catch (err) {
                obj[pathArray[i]] = new Object();
            }
            obj = obj[pathArray[i]];
        }
        obj[pathArray[len-1]] = value;
    }
}

module.exports = {
    get: get,
    set: set,
};
