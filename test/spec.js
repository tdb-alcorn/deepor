var assert = require("assert");
var deepor = require("../deepor.js");
var get = deepor.get;
var set = deepor.set;

describe("#set", function() {
    it("should set values", function() {
        var obj = {};
        set(obj, ["a", "b", "c"], 1);
        assert.equal(obj["a"]["b"]["c"], 1);
    });
    it("should set functions", function() {
        var obj = {};
        set(obj, ["a", "b", "c"], function() { return 1; });
        assert.equal(obj["a"]["b"]["c"](), 1);
    });
    it("should overwrite stuff", function() {
        var obj = {a: {b: {c: function() { return 0; }}}};
        set(obj, ["a", "b", "c"], function() { return 1; });
        assert.equal(obj["a"]["b"]["c"](), 1);
    });
    it("should set siblings", function() {
        var obj = {};
        set(obj, ["a", "b", "c"], 1);
        set(obj, ["a", "b", "d"], 2);
        assert.equal(obj["a"]["b"]["c"], 1);
        assert.equal(obj["a"]["b"]["d"], 2);
    });
});
