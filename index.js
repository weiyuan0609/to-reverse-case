/**
 * Convert a `string` to reverse case
 * 
 * @param {String} string
 * @return {String}
 */
function toReverseCase(string) {
    if (!isString(string)) {
        console.log('非法传参，请传String类型！');
    }
    return string.split("").reverse().join("");
}

function isString(obj) { // 判断对象是否是字符串  
    return Object.prototype.toString.call(obj) === "[object String]";  
}  

module.exports = toReverseCase;