/**
 * Created by Julia on 27/04/2018.
 */
function sum(x) {
    if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    } else {
        return function(y) {
            return x + y;
        };
    }
}
console.log(sum(2,3));
console.log(sum(2)(3));