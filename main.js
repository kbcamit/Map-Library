const _ = {
    map: function (obj, callback) {
        var output = [];
        var arr = Object.values(obj);
        for (var i = 0; i < arr.length; i++) {
            output.push(callback(arr[i], i));
        }
        return output;
    }
}

var result = _.map({
    'a': 4,
    'b': 8
}, function (value, index) {
    return value * value;
});

console.log(result);