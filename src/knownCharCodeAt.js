/** 
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
*/
function knownCharCodeAt (str, idx) {
    str += '';
    var code,
        end = str.length;

    var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    while ((surrogatePairs.exec(str)) != null) {
        var li = surrogatePairs.lastIndex;
        if (li - 2 < idx) {
            idx++;
        }
        else {
            break;
        }
    }

    if (idx >= end || idx < 0) {
        return NaN;
    }

    code = str.charCodeAt(idx);

    var hi, low;
    if (0xD800 <= code && code <= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx+1);
        // Go one further, since one of the "characters" is part of a surrogate pair
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    return code;
}

let a = knownCharCodeAt( 'a' , 0 )  // 97
console.log( a )

let b = knownCharCodeAt( '𝌇' , 0 ) // Number( 119559 ).toString( 16 )  = \u{1d307}
console.log( b )


console.log( '𝌇'.charCodeAt(0) )