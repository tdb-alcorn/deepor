# deepor

Deep getter and setter.

## Example

```javascript
var deepor = require("deepor");
var get = deepor.get;
var set = deepor.set;

var obj = {};

set(obj, ["really", "far", "down"], 1234)
console.log(obj)
>> {really: {far: {down: 1234}}}

get(obj, ["really", "far", "down"])
>> 1234

set(obj, ["really", "shallow"], [5,6,7,8])
console.log(obj)
>> {really: {far: {down: 1234}, shallow: [5,6,7,8]}}

get(obj, ["really", "shallow", 1])
>> 6
```

## Methods

- `#get(obj, [path...]) -> Object`: Returns whatever is at the location given by the array
  representing the path, or undefined if nothing is found.
- `#set(obj, [path...], value)`: _in place_ sets value at the location given by the array
  representing the path. Returns nothing.
