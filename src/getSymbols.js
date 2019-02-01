/** https://www.w3cschool.cn/javascript_guide/javascript_guide-8kfa268f.html */

function getSymbols(string) {
    var length = string.length ,
        index = -1 ,
        output = [] ,
        character ,
        charCode
    while ( ++index < length ) {
        character = string.charAt( index )
        charCode = character.charCodeAt( 0 )
        // 只要落在0xD800到0xDBFF的区间，就要连同后面2个字节一起读取。
        let ifMultiStartChar = charCode >= 0xD800 && charCode <= 0xDBFF
        if ( ifMultiStartChar ) {
            let nextChar = string.charAt( ++index ) ,
                fixedChar = character + nextChar
            output.push( fixedChar )
        } else {
            output.push( character )
        }
    }
    return output;
}

console.log( Array.from( '𝌇' ).length ) // 4



// 方法二 获取字符串长度

/* 
var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g; // 匹配UTF-16的代理对
 
function countSymbols(string) {
	return string
		// 把代理对改为一个BMP的字符.
		.replace(regexAstralSymbols, '_')
		// …这时候取长度就妥妥的啦.
		.length;
}
countSymbols('💩'); // 1 */