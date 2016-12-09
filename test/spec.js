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
        assert.deepEqual(obj, {a: {b: {c: 1, d: 2}}});
    });
    it("should set arrays", function() {
        var obj = {};
        set(obj, ["a", "b", "c"], [1,2,3]);
        assert.deepEqual(obj["a"]["b"]["c"], [1,2,3]);
    });
});

describe("#get", function() {
    it("should get values", function() {
        var obj = {x: {y: 1, z: {a: 2, b: 3}}};
        assert.equal(get(obj, ["x", "y"]), obj["x"]["y"]);
        assert.deepEqual(get(obj, ["x", "z"]),  obj["x"]["z"]);
    });
    it("should return undefined if the path doesn't exist", function() {
        var obj = {x: {y: 1}};
        assert.equal(get(obj, ["x", "z"]), undefined);
    });
    it("should handle arrays", function() {
        var obj = {x: [1,2,3]};
        assert.equal(get(obj, ["x"]), obj["x"]);
        assert.equal(get(obj, ["x", "y"]), undefined);
        assert.equal(get(obj, ["x", 0]), obj["x"][0]);
    });
    it("should handle strings", function() {
        var obj = {x: "foo"};
        assert.equal(get(obj, ["x"]), obj["x"]);
        assert.equal(get(obj, ["x", 0]), obj["x"][0]);
    });
});
